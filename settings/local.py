import json

from .base import *

WSGI_APPLICATION = 'wsgi.local.application'

DEBUG = True
LOCAL = True

ALLOWED_HOSTS = ['*']

SETTINGS_JSON = json.loads(open(SECRET_SETTINGS_DIR / 'local.json').read())
SECRET_KEY = SETTINGS_JSON['DJANGO']['SECRET_KEY']
DATABASES = SETTINGS_JSON['DJANGO']['DATABASES']

SITE_URL = 'http://localhost:8000'

CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True

INSTALLED_APPS += [
    'debug_toolbar',
]

MIDDLEWARE += [
    'debug_toolbar.middleware.DebugToolbarMiddleware',
]

INTERNAL_IPS = ['182.208.21.43', '127.0.0.1', 'localhost']
