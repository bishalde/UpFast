from django.shortcuts import render
from django.http import HttpResponse

def homepage(request):
    return HttpResponse("<h1>homepage</h1>")

def dp(request):
    return render(request,"dp.html")

def pc(request):
    return render(request,"pc.html")

def rw(request):
    return render(request,"rw.html")

def sh(request):
    return render(request,"sh.html")