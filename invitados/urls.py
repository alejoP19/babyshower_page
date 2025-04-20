# paso 1  ---> para enlazar mi archivo urls de mi app al archivo urls de mi proyecto;
#  Importo el path de mi archivo urls de mi proyecto a este archivo e importo las vistas de mi nueva app.


from django.urls import path, include 
from  invitados import views  
 

urlpatterns = [

path('home', views.home, name="Home"),
# path('menu_principal/', views.menu_principal, name="MenuPrincipal"),
path('base/', views.base, name="Base"),

# path('', include('usuarios.urls')),




]

