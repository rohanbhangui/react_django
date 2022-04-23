from django.urls import path
from django.urls import re_path



from core.views import index

urlpatterns = [
   
    path("", index, name="index"),
    re_path(r'^(?:.*)/?$', index)
]