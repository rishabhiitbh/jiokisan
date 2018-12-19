from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.

def BuyPage(request):
    return HttpResponse('This is Buy Page')

def SellPage(request):
    return HttpResponse('This is Sell Page')

def TradePage(request):
    return HttpResponse('This is trade Page')