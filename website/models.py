from . import db
from flask_login import UserMixin
from sqlalchemy.sql import func 
class Historys(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    endtime = db.Column(db.Integer)
    fullendtime = db.Column(db.String(150))
    gametype = db.Column(db.String(150))
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    datatime = db.Column(db.DateTime(timezone=True), default=func.now())
    



class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(150), unique=True)
    password = db.Column(db.String(150))
    first_name = db.Column(db.String(150))
    last_name = db.Column(db.String(150))
    user_name = db.Column(db.String(150))
    history = db.relationship('Historys')