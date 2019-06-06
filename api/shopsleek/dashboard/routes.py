from flask import Blueprint, render_template
from .forms import LoginForm
from .user import User


dashboard = Blueprint('dashboard', __name__)

@dashboard.route('/')
def home():
    form = LoginForm()
    if request.method == 'POST' and form.validate_on_submit():
        '''user = app.config['USERS_COLLECTION'].find_one({"_id": form.username.data})'''
        if user and User.validate_login(user['password'], form.password.data):
            user_obj = User(user['_id'])
            '''login_user(user_obj)'''
            flash("Logged in successfully!", category='success')
            return redirect(request.args.get("next") or url_for("write"))
        flash("Wrong username or password!", category='error')
    return render_template('login.html', title='login', form=form)

    return render_template('index.html')
