#!/usr/bin/env python3

# Standard library imports

# Remote library imports
from flask import request
from flask_restful import Resource

# Local imports
from config import app, db, api
# Add your model imports


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'


class Search(Resource):
    def get(self, term):
        
        search_term = term

        # https://app.ticketmaster.com/discovery/v2/events.json?keyword=adele&apikey=fOUwYet5E4mUic5tG4q5w3lY1ZMjyi8k


api.add_resource(Search, '/search')


if __name__ == '__main__':
    app.run(port=5555, debug=True)

