from django.shortcuts import render,redirect,HttpResponse
from django.template import loader
from .forms import Assistance_Form
from django.contrib import messages
from django.http import JsonResponse


def  home(request):
  return render(request, 'home.html')

def  registry(request):
  return render(request, 'registry.html')
def  rsvp(request):
  return render(request, 'rsvp.html')
def  photos(request):
  return render(request, 'photos.html')
def  base(request):
   template = loader.get_template('paginas/base.html')
   return HttpResponse(template.render())

def assistance(request):

    if request.method =='POST':
     formulario = Assistance_Form(request.POST or None,request.FILES or None)
    if formulario.is_valid():
        formulario.save()
    return HttpResponse('invitados/home.html')
     
     
       
          
       
      
    


