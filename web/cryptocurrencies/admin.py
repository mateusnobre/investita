from django.contrib import admin

# Register your models here.
from cryptocurrencies.models import Coin

class Coins(admin.ModelAdmin):
    list_display = ('name',
         'asset_id',
         'is_crypto', 
         'volume_1hrs_usd', 
         'volume_1day_usd',
         'volume_1mth_usd',
         'price_usd', 'icon')
    list_display_links = ('name',)
    search_fields = ('name',)

admin.site.register(Coin, Coins)