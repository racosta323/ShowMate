import os

from dotenv import load_dotenv
load_dotenv()

from flask import Flask, render_template
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from flask_bcrypt import Bcrypt

import ipdb

app = Flask(
    __name__,
    static_url_path='',
    static_folder='../client/build/static',
    template_folder='../client/build'
)

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URI')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})
db = SQLAlchemy(metadata=metadata)
migrate = Migrate(app, db)
db.init_app(app)

api = Api(app)

@app.errorhandler(404)
def not_found(e):
    return render_template("index.html")

CORS(app)

bcrypt = Bcrypt(app)

app.secret_key = b'\x05\xa4\xb8\x0c\x8a\xaeB|\xebz\x02\x96\x17I\xa2\x94'
