from django.http import JsonResponse

from rest_framework.decorators import api_view, authentication_classes, permission_classes

from .models import Properties
from .serializers import PropertiesListSerializer, PropertiesDetailSerializer

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_list(request):
    properties = Properties.objects.all()
    serializer =  PropertiesListSerializer(properties, many=True)

    return JsonResponse({
        'data': serializer.data
    })

@api_view(['GET'])
@authentication_classes([])
@permission_classes([])
def properties_detail(request, pk):
    try:
        property_obj = Properties.objects.get(pk=pk)
        serializer = PropertiesDetailSerializer(property_obj)
        return JsonResponse(serializer.data)
    except Properties.DoesNotExist:
        return JsonResponse({'error': 'Property not found'}, status=404)
