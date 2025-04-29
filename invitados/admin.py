from django.contrib import admin
from django.db import models
from .models import Guests
# Register your models here.




class GuestsAdmin(admin.ModelAdmin):
   list_display=('names', 'last_name','quantity')
   search_fields=('names', 'last_name','quantity')
   readonly_fields=('created',) 


admin.site.register(Guests,GuestsAdmin)