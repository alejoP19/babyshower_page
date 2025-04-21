from django.shortcuts import render,redirect,HttpResponse
from django.template import loader


def  home(request):
  return render(request, 'home.html')
def  registry(request):
  return render(request, 'registry.html')

def  base(request):
   template = loader.get_template('paginas/base.html')
   return HttpResponse(template.render())


# Create your views here.
