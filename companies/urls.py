from django.urls import path
from . import views

urlpatterns = [
    path('api/company/', views.CompanyListCreate.as_view() ),
]