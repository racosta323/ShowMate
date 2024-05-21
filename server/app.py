#!/usr/bin/env python3

from datetime import datetime
from flask import request, make_response, session
from flask_restful import Resource
from config import app, db, api
from models import Artist, Review, User

@app.route('/')
def index():
    return '<h1>Project Server</h1>'

class Artists(Resource):
    def get(self):
        try:
            artists = Artist.query.all()
            artists_list = [artist.to_dict() for artist in artists]
            return make_response(artists_list)
        except:
            return make_response({'error': "something went wrong"}, 400)

    def post(self):
        request_body = request.json

        try:
            artist =  Artist(name=request_body["name"], genre=request_body["genre"], profile_image=request_body['image'])
            db.session.add(artist)
            db.session.commit()
        except:
            return make_response({'error': "couldn't create artist"}, 400)

        return make_response(artist.to_dict(), 201)

api.add_resource(Artists, '/api/artists')    

class ArtistById(Resource):
    def get(self, id):
        try:
            artist = Artist.query.get(id)
        except:
            return make_response({'error': "something went wrong"}, 400)

        return make_response(artist.to_dict())

api.add_resource(ArtistById, '/artists/<int:id>')

class Reviews(Resource):
    def get(self):
        reviews = Review.query.all()
        review = [review.to_dict() for review in reviews]
        return make_response(review)

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
                stars=request_body["stars"],
                user_id=request_body["userId"]
            )
            db.session.add(review)
            db.session.commit()
            return make_response(review.to_dict(), 201)
        except:
            return make_response({'error': "could not create review"}, 400)

api.add_resource(Reviews, '/reviews')   

class ReviewById(Resource):
    def get(self, id):
        
        try:
            review = Review.query.filter_by(id=id).first()
        except:
            return make_response({'error': "could not find review"}, 400)

        return make_response(review.to_dict())
    
    def patch(self, id):
        params = request.json

        try:
            review = Review.query.get(id)

            params = request.json
            
            for attr in params:
                if attr == "show_date":
                    date_object = datetime.strptime(request.get_json()["show_date"], '%Y-%m-%d').date()
                    setattr(review, attr, date_object)
                    db.session.commit()
                else:
                    setattr(review, attr, params[attr])
                    db.session.commit()
            
            return make_response(review.to_dict())
        except:
            return make_response({'error': "something went wrong"}, 400)

    def delete(self, id):
        try:
            review = Review.query.get(id)
            db.session.delete(review)
            db.session.commit()
            return make_response('', 204)
        except:
            return make_response({'error': "could not delete review"}, 400)

api.add_resource(ReviewById, '/reviews/<int:id>')

class Users(Resource):
    def post(self):
        data = request.json
        
        try:
            user = User(first_name=data['firstName'], last_name=data['lastName'], username=data['username'])
            user.password_hash = data['password']
      
            db.session.add(user)
            db.session.commit()

            session['user_id'] = user.id
            return make_response(user.to_dict(), 201)
        except:
            return make_response({'error': "could not create user"}, 400)

api.add_resource(Users, '/users')

class UserById(Resource):
    def get(self, id):
        try:
            user = User.query.get(id)
        except:
            pass

        return make_response(user.to_dict())

api.add_resource(UserById, '/users/<int:id>')

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    user = User.query.filter_by(username=data["username"]).first()

    if not user:
        return make_response({'error':'invalid username'}, 404)
    
    if user.authenticate(data['password']):
        session['user_id'] = user.id
        return make_response(user.to_dict(), 200)
    else:
        return make_response({"error": "invalid username or password"}, 404)

@app.route('/authorized')
def authorized():
    user_id = session.get('user_id')
    if user_id:
        user = User.query.filter_by(id=user_id).first()
        return make_response(user.to_dict())
    else:
        return make_response({'error': 'unauthorized'}, 401)
    
@app.route('/logout', methods=['DELETE'])
def logout():
    session['user_id'] = None
    return make_response({}, 204)    

@app.before_request
def check_authorized():
    if request.endpoint == 'users/:id' and not session.get('user_id'):
        return make_response({"error": "unauthorized"})

if __name__ == '__main__':
    app.run()

