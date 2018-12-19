from django.urls import path,include

from . import views

urlpatterns = [
    path('buy',views.BuyPage,name='BuyPage'),
    path('sell',views.SellPage,name='SellPage'),
    path('',views.TradePage,name='TradePage'),
]
