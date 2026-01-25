"""Minimal Cloudflare Workers AI test client.

Security note:
  - Do NOT hard-code tokens in source files.
  - Set credentials via environment variables (recommended) or a local .env file.

Env vars:
  - CF_ACCOUNT_ID
  - CF_AI_TOKEN
  - CF_MODEL (optional)
"""

from __future__ import annotations

import os
from pathlib import Path

import requests


def _load_dotenv_if_present() -> None:
    """Lightweight .env loader; ignores missing/invalid lines."""
    env_path = Path(__file__).resolve().parent / '.env'
    if not env_path.exists():
        return
    try:
        for line in env_path.read_text(encoding='utf-8').splitlines():
            line = line.strip()
            if not line or line.startswith('#') or '=' not in line:
                continue
            key, value = line.split('=', 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if key and value and key not in os.environ:
                os.environ[key] = value
    except Exception:
        return


def run(model: str, inputs: list[dict[str, str]]) -> dict:
    account_id = os.getenv('CF_ACCOUNT_ID')
    token = os.getenv('CF_AI_TOKEN')
    if not account_id or not token:
        raise RuntimeError('Missing CF_ACCOUNT_ID/CF_AI_TOKEN. Set env vars (or create a local .env).')

    api_base_url = f"https://api.cloudflare.com/client/v4/accounts/{account_id}/ai/run/"
    headers = {"Authorization": f"Bearer {token}"}
    payload = {"messages": inputs}
    response = requests.post(f"{api_base_url}{model}", headers=headers, json=payload, timeout=60)
    return response.json()


if __name__ == '__main__':
    _load_dotenv_if_present()
    model = os.getenv('CF_MODEL') or '@cf/meta/llama-3.1-8b-instruct-fast'
    inputs = [
        {"role": "system", "content": "You are a friendly assistant that helps write stories."},
        {"role": "user", "content": "Write a short story about a llama that goes on a journey to find an orange cloud."},
    ]
    output = run(model, inputs)
    print(output)