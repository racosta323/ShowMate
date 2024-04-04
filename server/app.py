#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request, make_response
import requests
from flask_restful import Resource
from bs4 import BeautifulSoup

# Local imports
from config import app, db, api


import ipdb
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


class Search(Resource):
    def get(self, term):

        url= f"https://musicbrainz.org/ws/2/artist/?query={term}&fmt=json"
        response = requests.get(url)
        data = response.json()
        artist_info = data["artists"][0]
        artist_tag = artist_info["tags"][0]

        mbid = artist_info["id"]
        artist_name = artist_info["name"]
        genre = artist_tag["name"]

        response = {
            "mbid": mbid,
            "artist_name": artist_name,
            "genre": genre
        }


        return make_response(response, 200)



api.add_resource(Search, '/search/<string:term>')


class GetSearchById(Resource):
    def get(self, id):

        url = f"https://en.wikipedia.org/?curid={id}"
        response = requests.get(url)
        soup = BeautifulSoup(response.content, 'html.parser')
        # Find the element containing the biography
        biography_element = soup.find('div', {'class': 'mw-parser-output'})
        # Extract only the paragraphs within the biography element
        biography_paragraphs = biography_element.find_all('p')
        # Concatenate the text of all paragraphs to get the full biography
        biography_text = '\n'.join([p.get_text() for p in biography_paragraphs])


        ipdb.set_trace()

api.add_resource(GetSearchById, '/search/<int:id>')




if __name__ == '__main__':
    app.run(port=5555, debug=True)

