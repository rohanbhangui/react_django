from django.db import models

class Camer(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100, unique= True)
