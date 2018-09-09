from website.settings import *

STATIC_ROOT = '/srv/website/'
DEBUG = False

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.locmem.LocMemCache',
    }
}
