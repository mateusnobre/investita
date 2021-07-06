from django.db import models

# Create your models here.
class Coin(models.Model):
    name = models.CharField(max_length=60)
    asset_id = models.CharField(max_length=60)
    is_crypto = models.BooleanField()
    volume_1hrs_usd = models.FloatField()
    volume_1day_usd = models.FloatField()
    volume_1mth_usd = models.FloatField()
    price_usd = models.FloatField()
    icon = models.CharField(max_length=500)

    def __str__(self):
        return self.name