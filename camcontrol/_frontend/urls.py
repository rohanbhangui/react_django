
from django.urls import path
from . import views
urlpatterns = [
    path('selfie', views.index),
    path('', views.instruct)
]