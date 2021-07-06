from rest_framework import serializers
from .models import Coin

class CoinSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Coin
        fields = ('name',
         'asset_id',
         'is_crypto', 
         'volume_1hrs_usd', 
         'volume_1day_usd',
         'volume_1mth_usd',
         'price_usd', 'icon')