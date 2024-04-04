import requests
from bs4 import BeautifulSoup
import ipdb

# Function to search for entertainers on Wikipedia
def search_entertainers(query):
    url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": f"{query} entertainers",
        "srlimit": 1,  # Limit the number of search results to 1
        "srprop": "snippet"  # Include snippets in the search results
    }
    response = requests.get(url, params=params)
    data = response.json()
    search_results = data["query"]["search"]
    if search_results:
        return search_results[0]["title"]  # Return the title of the first search result
    else:
        return None

# Function to get the biographical information and image URL of an entertainer
def get_entertainer_info(entertainer):
    url = "https://en.wikipedia.org/w/api.php"
    params = {
        "action": "query",
        "format": "json",
        "prop": "extracts|pageimages",
        "titles": entertainer,
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
    first_p = soup.find_all("p")[1]  # Assuming the second <p> contains the main bio
    first_p_text = first_p.get_text()

    # Extract image URL
    image_info = pages[page_id].get("original", None)
    if image_info:
        image_url = image_info["source"]
    else:
        image_url = None

    return first_p_text, image_url

# Example usage
query = input("Enter the name of an entertainer: ")
entertainer = search_entertainers(query)
if entertainer:
    bio_info, image_url = get_entertainer_info(entertainer)
    print("Biographical Information:")
    print(bio_info)
    print("\nImage URL:", image_url)
else:
    print("No entertainer found.")


ipdb.set_trace()