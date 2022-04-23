from django import views
from django.urls import path, include
from .views import main

urlpatterns = [
    path('results', main)
]
