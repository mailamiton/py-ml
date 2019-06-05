from flask import Flask
from shopsleek.config import Config


def create_app(config_class=Config):
    app = Flask(__name__)
    app.config.from_object(Config)

    from shopsleek.users.routes import users
    app.register_blueprint(users)
    from shopsleek.errors.handlers import errors
    app.register_blueprint(errors)
    from shopsleek.dashboard.routes import dashboard
    app.register_blueprint(dashboard)

    return app
