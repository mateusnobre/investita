from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=100)
    cnpj = models.CharField(max_length=14, unique=True)
    initial_public_offer_date = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)