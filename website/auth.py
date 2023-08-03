from flask import Blueprint, render_template, request, flash, redirect, url_for
from .models import User, Historys
from werkzeug.security import generate_password_hash, check_password_hash
from . import db
from flask_login import login_user, login_required, logout_user, current_user

auth = Blueprint("auth", __name__)

@auth.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')

        user = User.query.filter_by(email = email).first()
        if user:
            if check_password_hash(user.password, password):
                flash("Logged In", category="success")
                login_user(user, remember=True)
                return redirect(url_for('auth.game'))
            else:
                flash("Incorrect password entered", category="error")
        else:
            flash("Email does not exist.", category="error")
    data = request.form
    print(data)
    return render_template("login.html", user = current_user)

@auth.route('/logout')
@login_required
def logout():
    logout_user()
    return redirect(url_for('auth.login'))
    

@auth.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        email = request.form.get('email')
        first_name = request.form.get('firstname')
        last_name = request.form.get('lastname')
        user_name = request.form.get('username')
        password = request.form.get('password')
        passwordConf = request.form.get('repassword')

        user = User.query.filter_by(email = email).first()
        if user:
            flash("Email already exists!", category="error")
        elif len(email) < 4:
            flash("Email must be grater than 3 characters", category='error')
        elif len(first_name) < 2:
            flash("Firstname must be grater than 1 characters", category='error')
        elif len(last_name) < 4:
            flash("Username must be grater than 3 characters", category='error')
        elif password != passwordConf:
            flash("Passwords do not match", category='error')
        elif len(password) < 8:
            flash("Password must be grater than 7 characters", category='error')
        else:
            new_user = User(email=email, first_name = first_name, last_name = last_name, user_name = user_name, password = generate_password_hash(password, method='sha256'))
            db.session.add(new_user)
            db.session.commit()
            # login_user(user, remember=True)
            flash("Account Created!", category='success')
            return redirect(url_for('views.home'))
            


    return render_template("signup.html", user = current_user)

@auth.route('/game') 
@login_required
def game():
    return render_template("game.html")

@auth.route('/divide', methods = ["GET", "POST"])
@login_required
def divide():
    if request.method == 'POST':
        gametype = request.form.get('gametype')
        fullendtime = request.form.get('fullendtime')
        endtime = request.form.get('endtime')

        new_history = Historys(gametype = gametype, fullendtime=fullendtime, endtime = endtime, user_id=current_user.id)
        db.session.add(new_history)
        db.session.commit()
    return render_template("divide.html")

@auth.route('/minus', methods = ["GET", "POST"])
@login_required
def minus():
    if request.method == 'POST':
        gametype = request.form.get('gametype')
        fullendtime = request.form.get('fullendtime')
        endtime = request.form.get('endtime')

        new_history = Historys(gametype = gametype, fullendtime=fullendtime, endtime = endtime, user_id=current_user.id)
        db.session.add(new_history)
        db.session.commit()
    return render_template("minus.html")

@auth.route('/plus', methods = ["GET", "POST"])
@login_required
def plus():
    if request.method == 'POST':
        gametype = request.form.get('gametype')
        fullendtime = request.form.get('fullendtime')
        endtime = request.form.get('endtime')

        new_history = Historys(gametype = gametype, fullendtime=fullendtime, endtime = endtime, user_id=current_user.id)
        db.session.add(new_history)
        db.session.commit()
    return render_template("plus.html")

@auth.route('/times', methods = ["GET", "POST"])
@login_required
def times():
    if request.method == 'POST':
        gametype = request.form.get('gametype')
        fullendtime = request.form.get('fullendtime')
        endtime = request.form.get('endtime')

        new_history = Historys(gametype = gametype, fullendtime=fullendtime, endtime = endtime, user_id=current_user.id)
        db.session.add(new_history)
        db.session.commit()
    return render_template("times.html")

@auth.route('/history') 
@login_required
def history():
    
    return render_template("history.html", user = current_user)