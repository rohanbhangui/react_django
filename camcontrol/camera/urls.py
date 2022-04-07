from rest_framework import routers
from .api import CamerViewSet

router = routers.DefaultRouter()
router.register('api/camera', CamerViewSet, 'camera')

urlpatterns = router.urls