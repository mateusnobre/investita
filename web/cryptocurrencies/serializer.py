from rest_framework import serializers
from .models import Coin

class CoinSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Coin
        fields = ('name', 'today_rate_usd', 'icon')