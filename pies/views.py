# Create your views here.
from django.shortcuts import render_to_response, get_object_or_404
from pies.models import PieData
import json

def home(request):
    return render_to_response("index.html")

def raphael(request):
    pies = PieData.objects.all()
    return render_to_response("raph.html", {'pies': pies})

def detail(request, chart_id):
    piedata = get_object_or_404(PieData, pk=chart_id)
    return render_to_response("detail.html", {'pie': piedata })
