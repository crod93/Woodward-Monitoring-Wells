from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404

from .models import Well


def home(request):
    return render(request, 'home.html')


def well_detail(request, id):
    try:
        well = Well.objects.get(id=id)
        print (well)
    except Well.DoesNotExist:
        raise Http404('Well not found')
    return render(request, 'well_detail.html', {'well': well})


def well_data(request):
    wells = Well.objects.all()
    return render(request, 'well_data.html', {'wells': wells})
