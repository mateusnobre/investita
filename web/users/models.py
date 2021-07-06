from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=60)
    password = models.CharField(max_length=60)
    wallet_id = models.IntegerField()

    def __str__(self):
        return self.name