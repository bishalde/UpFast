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

def fcfs(request):
    return render(request,"fcfs.html")

def rr(request):
    return render(request,"rr.html")

def dup(request):
    return render(request,"dup.html")

def mq(request):
    return render(request,"mq.html")

def sm(request):
    return render(request,"sm.html")

def o(request):
    return render(request,"o.html")