
from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('trade/',include('trade.urls')),
    path('',views.ResponsePage,name='Response Page'),
]
