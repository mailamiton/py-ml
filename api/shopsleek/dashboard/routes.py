from flask import Blueprint, render_template


dashboard = Blueprint('dashboard', __name__)

@dashboard.route("/")
def defaultRoute():
    return render_template('index.html')