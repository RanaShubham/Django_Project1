from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index (request):
    my_dict = {"insert_me": "Welcome to recruitment center."}
    return render(request, 'first_app/GreetingApp.html', context=my_dict)