from django.db import models
from django.template.defaultfilters import slugify
from ckeditor.fields import RichTextField

# Create your models here.
class Job(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(max_length=200, unique=True)
    object_order = models.PositiveIntegerField(default=0, blank=False, null=False)

    company_name = models.CharField(max_length=200)
    company_URL = models.URLField()

    start_date = models.CharField(max_length=200)
    finish_date = models.CharField(max_length=200)

    description = RichTextField()

    def __str__(self):
        return self.title


    def save(self, *args, **kwargs):
        if not self.id:
            self.slug = slugify(self.title)
        super (Job, self).save(*args, **kwargs)

    class Meta:
        verbose_name = "Job"
        verbose_name_plural = "Jobs"
        ordering = ['object_order']
