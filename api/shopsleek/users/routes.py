from flask import Blueprint, jsonify


users = Blueprint('users', __name__)

@users.route("/auth", methods=['GET', 'POST'])
def auth():
    return jsonify({'auth': 'Sucess!'});
