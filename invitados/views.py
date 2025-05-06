from django.shortcuts import render,redirect,HttpResponse
from django.template import loader
from .forms import Assistance_Form


def  home(request):
  return render(request, 'home.html')

def  registry(request):
  return render(request, 'registry.html')
def  rsvp(request):
  return render(request, 'rsvp.html')
def  base(request):
   template = loader.get_template('paginas/base.html')
   return HttpResponse(template.render())

def assistance(request):

    if request.method =='POST':
     formulario = Assistance_Form(request.POST or None,request.FILES or None)
    if formulario.is_valid():
        formulario.save()
    return redirect('Home')  
      
    


