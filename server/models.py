from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db

# Models go here!
class Artist(db.Model, SerializerMixin):
    __tablename__ = 'artists'

    serialize_rules = ('-reviews.artist', '-reviews.artist_id')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    genre = db.Column(db.String)
    tm_id = db.Column(db.Integer)
    mbid = db.Column(db.Integer)

    reviews = db.relationship('Review', back_populates='artist')

    def __repr__(self):
        return f'<Artist id={self.id}, name={self.name}, genre={self.genre}>'
    

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_rules = ('-artist.reviews', '-user.reviews')

    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String, nullable=False)
    review = db.Column(db.String)
    stars = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())
    show = db.Column(db.String, nullable=False)
    location = db.Column(db.String, nullable=False)
    show_date = db.Column(db.DateTime)

    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    artist = db.relationship('Artist', back_populates='reviews')
    user = db.relationship('User', back_populates='reviews')

    def __repr__(self):
        return f'<Review id={self.id}, subject={self.subject}, review={self.review} stars={self.stars}, artist_id={self.artist_id}, date={self.show_date}>'
    

    class User(db.Model, SerializerMixin):
        __tablename__ = 'users'

        serialize_rules=('-reviews.user',)

        id = db.Column(db.Integer, primary_key=True)
        first_name = db.Column(db.String, nullable=False)
        last_name = db.Column(db.String, nullable=False)
        username = db.Column(db.String)
        password = db.Column (db.Column)
        created_at = db.Column(db.DateTime, server_default=db.func.now())

        reviews = db.relationship('Review', back_populates='user')

        def __repr__(self):
            return f'<User id={self.id}, first_name = {self.first_name}, last_name = {self.last_name}, username = {self.username}, password = {self.password}>'