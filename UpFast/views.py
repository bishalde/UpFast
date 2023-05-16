from django.shortcuts import render
from django.http import HttpResponse


def homepage(request):
    return render(request,"homepage.html")

def sym(request):
    return render(request,"sym.html")

def c(request):
    return render(request,"c.html")

def gui(request):
    return render(request,"gui.html")