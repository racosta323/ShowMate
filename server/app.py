#!/usr/bin/env python3

# Standard library imports
import ipdb
from datetime import datetime

# Remote library imports
from flask import request, make_response, session
import requests
from flask_restful import Resource
from bs4 import BeautifulSoup

# Local imports
from config import app, db, api

# Add your model imports
from models import Artist, Review, User


# Views go here!

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

#mbid
class Search(Resource):
    def get(self, term):

        url= f"https://musicbrainz.org/ws/2/artist/?query={term}&fmt=json"
        response = requests.get(url)
        data = response.json()
        artists = data["artists"]


        #how to get images
        #https://musicbrainz.org/ws/2/artist/859d0860-d480-4efd-970c-c05d5f1776b8?inc=url-rels&fmt=json
        # artist_tag = artist_info["tags"][0]

        # mbid = artist_info["id"]
        # artist_name = artist_info["name"]
        # genre = artist_tag["name"]

        # response = {
        #     "mbid": mbid,
        #     "artist_name": artist_name,
        #     "genre": genre
        # }


        return make_response(artists, 200)



api.add_resource(Search, '/search/<string:term>')

#wikipedia
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

class Artists(Resource):
    def post(self):
        request_body = request.json

        try:
            artist =  Artist(name=request_body["name"], genre=request_body["genre"], profile_image=request_body['image'])
            db.session.add(artist)
            db.session.commit()
        except:
            pass

        try:
            pass
        except:
            pass

        return make_response(artist.to_dict(), 201)

api.add_resource(Artists, '/artists')    

class ArtistById(Resource):
    def get(self, id):
        try:
            artist = Artist.query.get(id)
        except:
            pass

        return make_response(artist.to_dict())

api.add_resource(ArtistById, '/artists/<int:id>')

class Reviews(Resource):
    def post(self):
        request_body = request.json
        date_object = datetime.strptime(request.get_json()["date"], '%Y-%m-%d').date()

        try:
            review= Review(
                subject=request_body["subject"], 
                show=request_body["name"], 
                location=request_body["location"], 
                show_date=date_object, 
                review=request_body["review"], 
                artist_id=request_body["artistId"],
                stars=request_body["stars"]
            )
            db.session.add(review)
            db.session.commit()
            return make_response(review.to_dict(), 201)
        except:
            pass

        try:
            pass
        except:
            pass

api.add_resource(Reviews, '/reviews')   

class ReviewById(Resource):
    def get(self, id):
        try:
            review = Review.query.get(id)
        except:
            pass

        return make_response(review.to_dict())
    
    def patch(self, id):
        
        try:
            review = Review.query.get(id)

            params = request.json

            for attr in params:
                setattr(review, attr, params[attr])

            db.session.commit()
            
            return make_response(review.to_dict())
        except:
            pass

api.add_resource(ReviewById, '/reviews/<int:id>')


# class Users(Resource):
#     def post(self):
#         request_body = request.json
#         date_object = datetime.strptime(request.get_json()["date"], '%Y-%m-%d').date()

#         try:
#             review= Review(
#                 subject=request_body["subject"], 
#                 show=request_body["name"], 
#                 location=request_body["location"], 
#                 show_date=date_object, 
#                 review=request_body["review"], 
#                 artist_id=request_body["artistId"],
#                 stars=request_body["stars"]
#             )
#             db.session.add(review)
#             db.session.commit()
#             return make_response(review.to_dict(), 201)
#         except:
#             pass

#         try:
#             pass
#         except:
#             pass

# api.add_resource(Reviews, '/reviews')   

class Users(Resource):
    def post(self):
        data = request.json
        try:
            user = User(first_name=data['firstName'], last_name=data['lastName'], username=data['userName'])
            user.password_hash = data['password']

            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id
            return make_response(user.to_dict(), 201)
        except:
            return make_response({'error': "something went wrong"}, 400)

api.add_resource(Users, '/users')


class UserById(Resource):
    def get(self, id):
        try:
            user = User.query.get(id)
        except:
            pass

        return make_response(user.to_dict())

api.add_resource(UserById, '/users/<int:id>')

if __name__ == '__main__':
    app.run(port=5555, debug=True)

