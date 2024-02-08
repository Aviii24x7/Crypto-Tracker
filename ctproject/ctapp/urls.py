from django.urls import path
from .views import *

urlpatterns = [
    path("", request_api, name="api_request"),
]
