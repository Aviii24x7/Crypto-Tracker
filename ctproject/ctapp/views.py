from django.shortcuts import render
import requests
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import CryptoModel

# Create your views here.

    
def request_api(request):
    
    show_rows = int(request.GET.get('show_rows', 100))
    
    
    # url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&sparkline=false&price_change_percentage=24h%2C7d"
    
    # json_response = requests.get(url).json() 
    # list_response = list(response)
    
    db_details = CryptoModel.objects.all()
    
    crypto_details_list= []
    
    for item in db_details:
        crypto_details_list.append({
            'id' : item.id, 
            'name': item.name,
            'symbol': item.symbol.upper(),
            'price': item.price,
            '24h': item.the24h,
            'market_cap': item.market_cap,
            'circulating_supply': item.circulating_supply,
            'image': item.image,
            'volume_24h': item.volume_24h,
            '7d': item.the7d,        
            })
        
        
    crypto_details_list = crypto_details_list[:show_rows]
    page = int(request.GET.get("page", 1))
    
    paginator =Paginator(crypto_details_list, 10)
    try: 
        crypto_details_list = paginator.page(page)
    except PageNotAnInteger:
        crypto_details_list = paginator.page(1)
    except EmptyPage:
        crypto_details_list = paginator.page(paginator.num_pages)
        
        
    
    context = {
        "crypto_details": crypto_details_list.object_list,
        "last_page": paginator.num_pages,
        "page_no_list" : [n+1 for n in range(paginator.num_pages)],
        "has_next": crypto_details_list.has_next(),
        "has_prev": crypto_details_list.has_previous()
    }
    
    '''
        1. HttpResponse => string return (non json)
        2. JsonResponse => json (api usage) Javascript Object Notation
        Page object is not json serializable (it cannot be converted into a valid json object automatically)
        Page.object_list => it is json serializable (since it is a list of dicts)
        json array
        [
            {
                'a': 1,
                'b': 2
            },
            {
                'a': 5,
                'b': 10
            }
        ]
        
        json object
        {
            'a': [1,2,3],
            'message': 'hello'
        }
        
    '''
    return JsonResponse(context)








# def load_into_model():
    
    url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&sparkline=false&price_change_percentage=24h%2C7d"
    json_response = requests.get(url).json()[:100]
    print(len(json_response))
    
    for item in json_response:
            CryptoModel.objects.create(
            my_id = item['id'], 
            name = item['name'],
            symbol =  item['symbol'],
            price = item['current_price'],
            the24h = item['market_cap_change_percentage_24h'],
            market_cap = item['market_cap'],
            circulating_supply = item['circulating_supply'],
            image = item['image'],
            volume_24h = item['total_volume'],
            the7d = item['price_change_percentage_7d_in_currency'],        
            )
    