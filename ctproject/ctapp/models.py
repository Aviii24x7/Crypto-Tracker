from django.db import models

# Create your models here.
class CryptoModel(models.Model):
    my_id = models.CharField(max_length=50)
    name =models.CharField(max_length=50)
    symbol = models.CharField(max_length = 10)
    price = models.IntegerField()
    the24h = models.DecimalField(max_digits=10, decimal_places=2)
    market_cap = models.BigIntegerField()
    circulating_supply = models.IntegerField()
    image = models.CharField(max_length=100)
    volume_24h = models.BigIntegerField()
    the7d = models.DecimalField(null = True , max_digits=10, decimal_places=2)
    
    def __str__(self):
        return self.name
    
    
    