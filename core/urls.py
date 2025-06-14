from django.urls import path
from .views import get_schemes, home
from . import views
from django.conf.urls.static import static
from django.conf import settings
from .views import chatbot_view




urlpatterns = [
    path('', home, name='home'),
    path('api/schemes/', get_schemes, name='get_schemes'),
    path('schemes/', views.scheme, name='schemes.html'),
    path('signup/', views.signup_view, name='signup.html'),
    path('login/', views.login_view, name='login.html'),
    path('logout/', views.logout_view, name='logout'),
    path('', views.home, name='home.html'),
    path('AboutUs/', views.AboutUs, name='AboutUs.html'),
    path("chatbot/", chatbot_view, name="chatbot.html"),
    path("financialSupp/", views.financialSupp, name="financialSupp.html"),
    path("Subscides/", views.Subscides, name="Subscides.html"),
   
]

