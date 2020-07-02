"""
Definition of views.
"""

# Django imports
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# Import models
from .models import CustomUser
from .models import CustomGroup

# Import serializers
from .serializers import CustomUserSerializer


# View for user list
@api_view(['GET', 'POST'])
def user_list(request):
    if request.method == 'GET':
        data = CustomUser.objects.all()
        serializer = CustomUserSerializer(data, context={'request': request}, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CustomUserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)
            
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# View for user detail
@api_view(['GET', 'PUT', 'DELETE'])
def user_detail(request, pk):
    try:
        user = CustomUser.objects.get(pk=pk)
    except CustomUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CustomUserSerializer(user, context={'request': request}, many=False)

        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = CustomUserSerializer(user, data=request.data, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
