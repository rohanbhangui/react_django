
from rest_framework.decorators import api_view
from django.http import FileResponse


# This will return a list of books





def img(response):

    img = open('django_frontend/static/good.jpeg', 'rb')

    response = FileResponse(img)
    

    return response