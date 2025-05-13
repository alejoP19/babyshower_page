# paso 1  ---> para enlazar mi archivo urls de mi app al archivo urls de mi proyecto;
#  Importo el path de mi archivo urls de mi proyecto a este archivo e importo las vistas de mi nueva app.


from django.urls import path, include 
from  invitados import views 
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [

path('', views.home, name="Home"),
path('registry/', views.registry, name="Registry"),
path('rsvp/', views.rsvp, name="Rsvp"),
path('photos/', views.photos, name="Photos"),
path('assistance/', views.assistance, name="Assistance"),
path('base/', views.base, name="Base"),
]
if settings.DEBUG:
      
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

