from .models import ConditionsModel
from rest_framework import serializers

class ConditionsSerializer(serializers.Serializer):
    class Meta:
        model = ConditionsModel
        fields = ('left_eye_arr', 'right_eye_arr',
                  'nose_arr', 'bbox_confidence')