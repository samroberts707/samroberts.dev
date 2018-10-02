from website.settings import *

STATIC_ROOT = '/Applications/XAMPP/xamppfiles/htdocs/Personal-Website/'
DEBUG = True

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.dummy.DummyCache',
    }
}
