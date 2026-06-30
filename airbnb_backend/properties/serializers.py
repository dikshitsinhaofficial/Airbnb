from rest_framework import serializers

from .models import Properties, Reservation
from useraccount.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = (
            'id',
            'name',
            'avatar',
        )

class PropertiesListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Properties
        fields =  (
            'id',
            'title',
            'price_per_night',
            'image_url',
        )

class PropertiesDetailSerializer(serializers.ModelSerializer):
    landlord = UserSerializer(read_only=True)
    
    class Meta:
        model = Properties
        fields = (
            'id',
            'title',
            'description',
            'price_per_night',
            'bedrooms',
            'bathrooms',
            'guests',
            'landlord',
            'image_url',
        )
