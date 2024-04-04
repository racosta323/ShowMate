import requests
import json
from bs4 import BeautifulSoup
import ipdb

url = "https://en.wikipedia.org/w/api.php"
params = {
    "action": "query",
    "format": "json",
    "prop": "extracts|pageimages",
    "titles": "Beyoncé",
    "piprop": "original"
}
response = requests.get(url, params=params)
data = response.json()

# Extract biographical information
pages = data["query"]["pages"]
page_id = list(pages.keys())[0]  # Get the page ID
bio_info = pages[page_id]["extract"]  # Extract the bio information

# Parse HTML content
soup = BeautifulSoup(bio_info, "html.parser")

# Get text within the first <p> element
first_p = soup.find_all("p")[1]
first_p_text = first_p.get_text()

# Print the text within the first <p> element
print(first_p_text)

# Extract image URL
image_info = pages[page_id].get("original", None)
if image_info:
    image_url = image_info["source"]
else:
    image_url = None

# Print the bio information and image URL
# print("Biographical Information:")
# print(bio_info)
print("\nImage URL:", image_url)

ipdb.set_trace()

