from rest_framework import viewsets
from .serializer import CoinSerializer
from .models import Coin

class CoinsViewSet(viewsets.ModelViewSet):
    queryset = Coin.objects.all()
    serializer_class = CoinSerializer

# Create your views here.
