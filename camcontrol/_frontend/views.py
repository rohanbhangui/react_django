from django.shortcuts import render

def index(request):
    return render(request, 'frontend/index.html')

def instruct(request):
    return render(request, 'frontend/instructions.html')
