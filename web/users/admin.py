from django.contrib import admin

# Register your models here.
from users.models import User

class Users(admin.ModelAdmin):
    list_display = ('name', 'password', 'portfolio')
    list_display_links = ('portfolio', 'name')
    search_fields = ('name',)

admin.site.register(User, Users)