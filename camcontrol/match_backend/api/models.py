from django.db import models

# Create your models here.
class ConditionsModel(models.Model):
    left_eye_arr = models.JSONField()
    right_eye_arr = models.JSONField()
    nose_arr = models.JSONField()
    bbox_confidence = models.FloatField(null=False, default=0)
    date = models.DateTimeField(auto_now=True)