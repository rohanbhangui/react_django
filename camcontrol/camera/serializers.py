from rest_framework import serializers
from rest_framework import serializers
from camera.models import Camer

# Lead Serializer
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Camer
        fields = '__all__'