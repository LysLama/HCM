import requests


API_BASE_URL = "https://api.cloudflare.com/client/v4/accounts/8dea872c8467436ab7f772f9412cd52f/ai/run/"
headers = {"Authorization": "Bearer UtOoHHviKXLmctTx-sfzsk20P0tyfGgvrEcbQkAe"}


def run(model, inputs):
    input = { "messages": inputs }
    response = requests.post(f"{API_BASE_URL}{model}", headers=headers, json=input)
    return response.json()


inputs = [
    { "role": "system", "content": "You are a friendly assistan that helps write stories" },
    { "role": "user", "content": "Write a short story about a llama that goes on a journey to find an orange cloud "}
]
output = run("@cf/meta/llama-3.1-8b-instruct-fast", inputs)
print(output)