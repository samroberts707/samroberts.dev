from website.settings import *

STATIC_ROOT = '/Applications/MAMP/htdocs/personal/Personal-Website/website/static/'
DEBUG = True

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.dummy.DummyCache',
    }
}
