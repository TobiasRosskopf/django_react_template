"""
Definition of API serializers.
"""

# Django imports
from rest_framework import serializers

# Import models
from .models import CustomUser
from .models import CustomGroup


# Serializer for custom user
class CustomUserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser 
        fields = ('pk', 'username', 'first_name', 'last_name', 'email')
