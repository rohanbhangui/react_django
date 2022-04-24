from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from .serializers import ConditionsSerializer
from .conditions_checker import *


# This will return a list of books
# @api_view(["GET"])
# def book(request):
#     books = ["Pro Python", "Fluent Python", "Speaking javascript", "The Go programming language"]
#     return Response(status=status.HTTP_200_OK, data={"data": books})

# create view for ConditionsDataset
class ConditionsView(APIView):

    # serializer class for the conditions model
    serializer_class = ConditionsSerializer

    # post method
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            left_eye_arr = serializer.data.get('left_eye_arr')
            right_eye_arr = serializer.data.get('right_eye_arr')
            nose_arr = serializer.data.get('nose_arr')
            bbox_confidence = serializer.data.get('bbox_confidence')
            queryset = ConditionsView.objects.filter()
            if queryset.exists():
                selfie = queryset[0]
                selfie.obstruction_check = (bbox_confidence >= 0.9)
                selfie.slant_check = face_slant(left_eye_arr, right_eye_arr)
                selfie.exposure_check = False # integrate with Jin's code later
                selfie.face_turn = check_turn_face(left_eye_arr, nose_arr, right_eye_arr, threshold=0.7)
                selfie.save(update_fields=['left_eye_arr', 'right_eye_arr', 'nose_arr', 'bbox_confidence'])
                return Response(ConditionsSerializer(selfie).data, status=status.HTTP_200_OK)
            else:
                selfie = ConditionsSerializer(obstruction_check=False, slant_check=False,
                                              exposure_check=False, face_turn=False)
                selfie.save()
                return Response(ConditionsSerializer(selfie).data, status=status.HTTP_201_CREATED)

        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)


