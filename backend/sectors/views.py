
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Sector, SectorHeading, User
from .serializers import CreateSectorSerializer


@api_view(http_method_names=('GET', 'POST'))
def index(request):

    if request.method == 'GET':
        sector_headings = SectorHeading.objects.all()
        data = []
        for heading in sector_headings:
            data.append(
                {
                    "id": heading.pk,
                    "name": heading.name,
                    "sectors": [{"id": s.pk, "name": s.name} for s in heading.sector_set.all()]
                }
            )

        return Response(data, status=status.HTTP_200_OK)

    if request.method == 'POST':
        serializer = CreateSectorSerializer(data=request.data)
        if serializer.is_valid():
            sector_list = serializer.data.get('sectors')
            agree = serializer.data.get('agree')
            user_name = serializer.data.get('user_name')
            user = User.objects.create(name=user_name, agreed=agree)
            for sector_name in sector_list:
                db_sector = Sector.objects.get(name=sector_name)
                user.sectors.add(db_sector)
            user.save()
            return Response("Done")
        else:
            print(serializer.errors)
        return Response("POST", status=status.HTTP_200_OK)
