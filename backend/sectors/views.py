from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view


@api_view(http_method_names=['GET', 'POST'])
def index(request):

    if request.method == 'GET':
        return Response("GET", status=status.HTTP_200_OK)

    if request.method == 'POST':
        return Response("POST", status=status.HTTP_200_OK)
