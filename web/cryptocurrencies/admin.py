from django.contrib import admin

# Register your models here.
from cryptocurrencies.models import Coin

class Coins(admin.ModelAdmin):
    list_display = ('name', 'today_rate_usd', 'icon')
    list_display_links = ('name',)
    search_fields = ('name',)

admin.site.register(Coin, Coins)