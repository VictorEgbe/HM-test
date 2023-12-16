from rest_framework import serializers
from .models import Sector


class CreateSectorSerializer(serializers.Serializer):
    agree = serializers.BooleanField()
    user_name = serializers.CharField()
    sectors = serializers.ListField(
        child=serializers.CharField(),
        allow_empty=False
    )


class GetUserSerializer(serializers.ModelSerializer):
    heading = serializers.SerializerMethodField('get_heading')

    class Meta:
        model = Sector
        fields = (
            'pk',
            'heading',
            'name'
        )

    def get_heading(self, sector):
        return sector.heading.name
