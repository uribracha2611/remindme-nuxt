import os
from pathlib import Path

from flask_sqlalchemy import SQLAlchemy
from flask import Flask

#static_folder=str(Path().resolve()/ "dist"),static_url_path=""
app=Flask(__name__)


# app.config['SECRET_KEY'] = os.environ["FLASK_SECRET_KEY"]
app.config['SECRET_KEY'] = "VMnZ6jojC2idAT2OD3JEIAY7wg6dR2Fy1bHHfypk"

# app.config["JWT_SECRET_KEY"] = os.environ["SECRET_KEY"]
app.config["JWT_SECRET_KEY"] = "q02OcAlsFMxkdvrRhRSe1gcwctpA2P0IcDpNMOav"



# app.config["SQLALCHEMY_DATABASE_URI"] = os.environ["DATABASE_URL"].replace("://", "ql://", 1)
app.config["SQLALCHEMY_DATABASE_URI"] = "postgresql://postgres:Html@localhost:5432/Remindme"
db=SQLAlchemy(app)
class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True,autoincrement=True)
    username = db.Column(db.String(255), unique=True, nullable=False)
    password = db.Column(db.String,nullable=False)
    def __init__(self,username,password):
        self.username=username
        self.password=password

class Reminders(db.Model):
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    userid = db.Column(db.Integer, nullable=False)
    caseid = db.Column(db.Integer, nullable=False)
    task = db.Column(db.String, nullable=False)
    summery = db.Column(db.String, nullable=False)
    due_date=db.Column(db.Date)
    def __init__(self,userid,caseid,task,summery,due_date):
        self.userid=userid
        self.caseid=caseid
        self.task=task
        self.summery=summery
        self.due_date=due_date

with app.app_context():
    db.create_all()