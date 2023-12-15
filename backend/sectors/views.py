from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Sector, SectorHeading, User


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
        return Response("POST", status=status.HTTP_200_OK)
