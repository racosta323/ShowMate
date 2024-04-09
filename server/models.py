from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy

from config import db, bcrypt

# Models go here!
class Artist(db.Model, SerializerMixin):
    __tablename__ = 'artists'

    serialize_rules = ('-reviews.artist', '-reviews.artist_id')

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, unique=True, nullable=False)
    genre = db.Column(db.String)
    tm_id = db.Column(db.Integer)
    mbid = db.Column(db.Integer)
    profile_image = db.Column(db.String)

    reviews = db.relationship('Review', back_populates='artist')

    def __repr__(self):
        return f'<Artist id={self.id}, name={self.name}, genre={self.genre}>'
    

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_rules = ('-artist.reviews', '-user.reviews', '-user_id', '-user.password', '-artist_id')

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
        return f'<Review id={self.id}, subject={self.subject}, review={self.review} stars={self.stars}, artist_id={self.artist_id}, date={self.show_date} user_id={self.user_id}>'
    

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules=('-reviews.user', '-reviews.artist_id', '-reviews.user_id', '-_password_hash')

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String, nullable=False)
    last_name = db.Column(db.String, nullable=False)
    username = db.Column(db.String)
    _password_hash = db.Column (db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())

    @property
    def password_hash(self):
        return self._password_hash
    
    @password_hash.setter
    def password_hash(self, password):
        byte_obj = password.encode('utf-8')
        bcrypt_hash = bcrypt.generate_password_hash(byte_obj)
        hash_obj = bcrypt_hash.decode('utf-8')
        self._password_hash = hash_obj
        
    def authenticate(self, password):
        return bcrypt.check_password_hash(self.password_hash, password.encode('utf-8'))

    reviews = db.relationship('Review', back_populates='user')

    def __repr__(self):
        return f'<User id={self.id}, first_name = {self.first_name}, last_name = {self.last_name}, username = {self.username}, password = {self.password}>'