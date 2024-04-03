import requests
import json
import ipdb

url = 'https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&dmaId=200&apikey=fOUwYet5E4mUic5tG4q5w3lY1ZMjyi8k'

response = requests.get(url)
json_content = json.loads(response.content)

ipdb.set_trace()

