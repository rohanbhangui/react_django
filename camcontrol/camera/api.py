from camera.models import Camer
from rest_framework import viewsets, permissions
from .serializers import LeadSerializer

# Lead Viewset
class CamerViewSet(viewsets.ModelViewSet):
    queryset = Camer.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LeadSerializer
