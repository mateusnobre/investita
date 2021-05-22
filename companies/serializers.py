from rest_framework import serializers
from .models import Company
class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = ('name', 'cnpj', 'initial_public_offer_date', 'created_at')