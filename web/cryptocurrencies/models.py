from django.db import models

# Create your models here.
class Coin(models.Model):
    name = models.CharField(max_length=60)
    today_rate_usd = models.FloatField()
    icon = models.CharField(max_length=500)

    def __str__(self):
        return self.name