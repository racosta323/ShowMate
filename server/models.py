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
    # show = db.Column(db.String, nullable=False)

    reviews = db.relationship('Review', back_populates='artist')

    def __repr__(self):
        return f'<Artist id={self.id}, name={self.name}, genre={self.genre}>'

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_rules = ('-artist.reviews',)

    id = db.Column(db.Integer, primary_key=True)
    subject = db.Column(db.String, nullable=False)
    review = db.Column(db.String)
    stars = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, onupdate=db.func.now())

    artist_id = db.Column(db.Integer, db.ForeignKey('artists.id'))
    # user_id = db.Column(db.Integer, db.ForeignKey(''))

    artist = db.relationship('Artist', back_populates='reviews')

    def __repr__(self):
        return f'<Artist id={self.id}, subject={self.subject}, review={self.review} stars={self.stars}, artist_id={self.artist_id}>'