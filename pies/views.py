# Create your views here.
from django.shortcuts import render_to_response
from pies.models import PieData

def raphael(request):
    pies = PieData.objects.all()
    print pies
    return render_to_response("raph.html", {'pies': pies})
