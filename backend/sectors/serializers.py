from rest_framework import serializers


class CreateSectorSerializer(serializers.Serializer):
    agree = serializers.BooleanField()
    user_name = serializers.CharField()
    sectors = serializers.ListField(
        child=serializers.CharField(),
        allow_empty=False
    )
