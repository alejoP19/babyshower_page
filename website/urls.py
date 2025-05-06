# paso 1  ---> para enlazar mi archivo urls de mi app al archivo urls de mi proyecto;
#  Importo el path de mi archivo urls de mi proyecto a este archivo e importo las vistas de mi nueva app.


from django.urls import path, include 
from  invitados import views 
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [


]
if settings.DEBUG:
      
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

