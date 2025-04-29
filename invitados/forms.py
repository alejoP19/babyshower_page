
from .models import Guests
from django.forms import ModelForm,TextInput, NumberInput


class Assistance_Form(ModelForm):    
       class Meta:
             model = Guests
             fields = ['names', 'last_name','quantity',]
             widgets = {
                    'names': TextInput(attrs={'class': 'form-control'}),
                    'last_name': TextInput(attrs={'class': 'form-control'}),
                    'quantity': NumberInput(attrs={'class': 'form-control'}),
                }
           