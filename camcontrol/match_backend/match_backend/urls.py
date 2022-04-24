from django.urls import path
from django.urls import re_path
from api.views import img


from core.views import index

urlpatterns = [
    path("img/", img, name = "img"),
    path("", index, name="index"),
    re_path(r'^(?:.*)/?$', index)
]