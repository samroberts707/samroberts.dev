from django.db import models
from django.template.defaultfilters import slugify

# Create your models here.
class Jobs(models.Model):
    title = models.CharField(max_length=200)
    # slug = models.