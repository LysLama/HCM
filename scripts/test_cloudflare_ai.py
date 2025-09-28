"""Simple tester for Cloudflare Workers AI (llama-3.1-8b-instruct-fast)

Usage (PowerShell):
  # 1. Set environment variables (DO NOT hard-code secrets!)
  $env:CF_ACCOUNT_ID="your_account_id"
  $env:CF_AI_TOKEN="your_api_token"  # Scoped token with Workers AI permissions
  # Optional custom model override:
  # $env:CF_MODEL="@cf/meta/llama-3.1-8b-instruct-fast"

  # 2. (A) Test DIRECT call to Cloudflare API
  python scripts/test_cloudflare_ai.py --question "Giải thích ngắn phép biện chứng?" --direct

  # 2. (B) Or test LOCAL proxy (when `npm run dev` or Vercel preview running)
  python scripts/test_cloudflare_ai.py --question "What is dialectical materialism?" --proxy

Notes:
  - --direct calls Cloudflare endpoint:
       https://api.cloudflare.com/client/v4/accounts/<ACCOUNT_ID>/ai/run/<MODEL>
  - --proxy calls your serverless route /api/ai/chat which should use env vars on the server side.
  - Response is printed (truncated optionally) plus timing info.
  - Add --raw to print full JSON.
"""

from __future__ import annotations
import os
import json
import time
import argparse
from textwrap import shorten

import urllib.request
import urllib.error
from pathlib import Path


def _load_dotenv_if_needed():
    """Lightweight .env loader (no external dependency).
    Only loads if CF_ACCOUNT_ID / CF_AI_TOKEN not already in environment.
    """
    if os.getenv('CF_ACCOUNT_ID') and os.getenv('CF_AI_TOKEN'):
        return
    root = Path(__file__).resolve().parent.parent / '.env'
    if not root.exists():
        return
    try:
        for line in root.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if not line or line.startswith('#'):
                continue
            if '=' not in line:
                continue
            k, v = line.split('=', 1)
            k = k.strip()
            v = v.strip().strip('"').strip("'")
            if k and v and k not in os.environ:
                os.environ[k] = v
    except Exception:
        pass

DEFAULT_MODEL = "@cf/meta/llama-3.1-8b-instruct-fast"


def call_direct(account_id: str, token: str, model: str, question: str) -> dict:
    url = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/{model}"
    # Cloudflare older text models may expect 'prompt'; newer may accept 'messages' or 'input'. Try prompt first.
    payload = {"prompt": f"USER: {question}\nASSISTANT:"}
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, method="POST")
    req.add_header("Content-Type", "application/json")
    req.add_header("Authorization", f"Bearer {token}")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            body = resp.read().decode("utf-8")
            return json.loads(body)
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", errors="replace")
        # On 400, attempt fallback with 'input'
        if e.code == 400:
            try:
                payload2 = {"input": f"USER: {question}\nASSISTANT:"}
                data2 = json.dumps(payload2).encode("utf-8")
                req2 = urllib.request.Request(url, data=data2, method="POST")
                req2.add_header("Content-Type", "application/json")
                req2.add_header("Authorization", f"Bearer {token}")
                with urllib.request.urlopen(req2, timeout=60) as resp2:
                    body2 = resp2.read().decode("utf-8")
                    return json.loads(body2)
            except Exception:
                pass
        return {"error": "HTTPError", "status": e.code, "body": detail}
    except Exception as e:
        return {"error": "RequestFailed", "detail": str(e)}


def call_proxy(question: str, base_url: str) -> dict:
    # base_url like http://localhost:5173 or deployed origin
    if base_url.endswith('/'):
        base_url = base_url[:-1]
    url = f"{base_url}/api/ai/chat"
    payload = {
        "messages": [
            {"role": "system", "content": "You are a test system."},
            {"role": "user", "content": question}
        ]
    }
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(url, data=data, method="POST")
    req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, timeout=60) as resp:
            body = resp.read().decode("utf-8")
            return json.loads(body)
    except urllib.error.HTTPError as e:
        detail = e.read().decode("utf-8", errors="replace")
        return {"error": "HTTPError", "status": e.code, "body": detail}
    except Exception as e:
        return {"error": "RequestFailed", "detail": str(e)}


def extract_text(result: dict) -> str:
    # Attempt multiple shapes
    return (
        result.get("result", {}).get("response")
        or result.get("result", {}).get("output")
        or result.get("response")
        or json.dumps(result)
    )


def main():
    _load_dotenv_if_needed()
    parser = argparse.ArgumentParser(description="Cloudflare Workers AI Tester")
    parser.add_argument("--question", required=True, help="Prompt or question to send")
    parser.add_argument("--direct", action="store_true", help="Call Cloudflare API directly")
    parser.add_argument("--proxy", action="store_true", help="Call local /api/ai/chat proxy")
    parser.add_argument("--base-url", default="http://localhost:5173", help="Base URL for proxy (dev server or deployed site)")
    parser.add_argument("--model", default=None, help="Override model id")
    parser.add_argument("--raw", action="store_true", help="Print full raw JSON response")
    parser.add_argument("--truncate", type=int, default=400, help="Truncate preview length (ignored if --raw)")
    args = parser.parse_args()

    if not args.direct and not args.proxy:
        parser.error("Must choose at least one of --direct or --proxy")

    account_id = os.getenv("CF_ACCOUNT_ID") or ""
    token = os.getenv("CF_AI_TOKEN") or ""
    model = args.model or os.getenv("CF_MODEL") or DEFAULT_MODEL

    if args.direct:
        if not account_id or not token:
            raise SystemExit("Missing CF_ACCOUNT_ID / CF_AI_TOKEN for --direct mode")

    if args.direct:
        print(f"[DIRECT] Model={model}")
        start = time.time()
        direct_result = call_direct(str(account_id), str(token), model, args.question)
        dt = time.time() - start
        text = extract_text(direct_result)
        print(f"Direct latency: {dt:.2f}s")
        if args.raw:
            print(json.dumps(direct_result, ensure_ascii=False, indent=2))
        else:
            print(shorten(text.replace("\n", " "), width=args.truncate, placeholder="..."))

    if args.proxy:
        print(f"\n[PROXY] {args.base_url}/api/ai/chat")
        start = time.time()
        proxy_result = call_proxy(args.question, args.base_url)
        dt = time.time() - start
        text2 = extract_text(proxy_result)
        print(f"Proxy latency: {dt:.2f}s")
        if args.raw:
            print(json.dumps(proxy_result, ensure_ascii=False, indent=2))
        else:
            print(shorten(text2.replace("\n", " "), width=args.truncate, placeholder="..."))


if __name__ == "__main__":
    main()
