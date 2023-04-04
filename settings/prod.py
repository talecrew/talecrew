import json

from .base import *

WSGI_APPLICATION = 'wsgi.prod.application'
DEBUG = True

SETTINGS_JSON = json.loads(open(SECRET_SETTINGS_DIR / 'demo.json').read())
ALLOWED_HOSTS = SETTINGS_JSON['DJANGO']['ALLOWED_HOSTS']
SECRET_KEY = SETTINGS_JSON['DJANGO']['SECRET_KEY']
DATABASES = SETTINGS_JSON['DJANGO']['DATABASES']

SITE_URL = 'https://talecrew.com'

STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / '.static_root/'

STATICFILES_LOCATION = 'static'
MEDIAFILES_LOCATION = 'media'

MEDIA_URL = '/.media/'
MEIDA_ROOT = BASE_DIR / '.media/'

DEFAULT_FILE_STORAGE = 'settings.storages.MediaStorage'
STATICFILES_STORAGE = 'settings.storages.StaticStorage'

AWS_JSON = SETTINGS_JSON['AWS']
AWS_ACCESS_KEY_ID = AWS_JSON['ACCESS_KEY_ID']
AWS_SECRET_ACCESS_KEY = AWS_JSON['SECRET_ACCESS_KEY']
AWS_STORAGE_BUCKET_NAME = AWS_JSON['S3_BUCKET_NAME']
AWS_S3_REGION_NAME = AWS_JSON['S3_REGION']
AWS_S3_URL = AWS_JSON['S3_URL']
S3_USE_SIGV4 = True
AWS_S3_SECURE_URLS = False
AWS_QUERYSTRING_AUTH = False
AWS_S3_FILE_OVERWRITE = False
