from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request,'index.html')


def detail(request):
    return render(request, 'detail.html')


def login(request):
    return render(request, 'login.html')


def mycat(request):
    return render(request, 'mycat.html')


def register(request):
    return render(request, 'register.html')