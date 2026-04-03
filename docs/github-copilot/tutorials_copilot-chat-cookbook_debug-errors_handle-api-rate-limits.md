Handling API rate limits - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Handling API rate limits

Copilot Chat can help handle API rate limits by suggesting code that detects them and implements retry logic.

Copy as Markdown

## In this article

When making requests to APIs, it's common to encounter rate limits that restrict the number of calls you can make within a certain time frame. GitHub Copilot Chat can help you handle these limits by suggesting code to detect rate limit responses and automatically retry requests after a delay.

## [Example scenario](#example-scenario)

The following Python code fetches weather data from an external API. If the API has rate limits, requests may fail when limits are exceeded, and your app may need a way to handle these responses gracefully by implementing retry logic.

```python
from flask import Flask, request
import requests

app = Flask(__name__)

WEATHER_API_URL = "https://api.example.com/weather"

@app.route('/get_weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    # Simulate an API request to the external weather service
    response = requests.get(WEATHER_API_URL, params={"city": city})
    weather_data = response.json()

    return weather_data
```

## [Example prompt](#example-prompt)

Copilot prompt[](https://github.com/copilot?prompt=from%20flask%20import%20Flask%2C%20request%0Aimport%20requests%0A%0Aapp%20%3D%20Flask\(__name__\)%0A%0AWEATHER_API_URL%20%3D%20%22https%3A%2F%2Fapi.example.com%2Fweather%22%0A%0A%40app.route\('%2Fget_weather'%2C%20methods%3D%5B'GET'%5D\)%0Adef%20get_weather\(\)%3A%0A%20%20%20%20city%20%3D%20request.args.get\('city'\)%0A%20%20%20%20%23%20Simulate%20an%20API%20request%20to%20the%20external%20weather%20service%0A%20%20%20%20response%20%3D%20requests.get\(WEATHER_API_URL%2C%20params%3D%7B%22city%22%3A%20city%7D\)%0A%20%20%20%20weather_data%20%3D%20response.json\(\)%0A%0A%20%20%20%20return%20weather_data%0A%0AHow%20can%20I%20handle%20API%20rate%20limits%20within%20get_weather\(\).)

How can I handle API rate limits within get\_weather().

from flask import Flask, request
import requests

app = Flask(\_\_name\_\_)

WEATHER\_API\_URL = "https://api.example.com/weather"

@app.route('/get\_weather', methods=\['GET'\])
def get\_weather():
    city = request.args.get('city')
    # Simulate an API request to the external weather service
    response = requests.get(WEATHER\_API\_URL, params={"city": city})
    weather\_data = response.json()

    return weather\_data

How can I handle API rate limits within get\_weather().

```copilot
How can I handle API rate limits within get_weather().
```

## [Example response](#example-response)

Note

The following response is an example. Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

Copilot might suggest code that implements a retry mechanism with exponential backoff to limit the frequency of retry attempts.

For example:

```python
import requests
from flask import Flask, request
from requests.adapters import HTTPAdapter
from requests.packages.urllib3.util.retry import Retry

app = Flask(__name__)

WEATHER_API_URL = "https://api.example.com/weather"

def requests_retry_session(
    retries=3,
    backoff_factor=0.3,
    status_forcelist=(500, 502, 504),
    session=None,
):
    session = session or requests.Session()
    retry = Retry(
        total=retries,
        read=retries,
        connect=retries,
        backoff_factor=backoff_factor,
        status_forcelist=status_forcelist,
    )
    adapter = HTTPAdapter(max_retries=retry)
    session.mount("http://", adapter)
    session.mount("https://", adapter)
    return session

@app.route('/get_weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    try:
        response = requests_retry_session().get(WEATHER_API_URL, params={"city": city})
        response.raise_for_status()
        weather_data = response.json()
    except requests.exceptions.RequestException as e:
        return {"error": str(e)}, 500

    return weather_data
```

In this example, Copilot's suggestions include setting up a retry session that allows the code to automatically retry requests if they fail due to specific status codes (500, 502, 504). The `backoff_factor` gradually increases the delay between retries, helping avoid exceeding the API's rate limit further.

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)