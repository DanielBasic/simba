
from django.urls import path
from . import views
from django.views.decorators.csrf import csrf_exempt


urlpatterns = [
  path("login/", views.login, name="log_in"),
  path("signup/", views.signup, name="signup"),
  path("logout/", views.logout, name="logout"),
  path("sobre/", views.sobre, name="sobre"),
  path("usuario/", views.usuario, name="usuario"),
  path('register', views.register, name='register'),

  path('update_profile/<int:user_id>/', views.update_profile, name='update_profile'),
  path('alterar_senha/', views.alterar_senha, name='alterar_senha'),
  path('excluir_usuario/', views.excluir_usuario, name='excluir_usuario'),
  path('minha-view/', views.sua_view, name='sua_view'),
  
  path('validate_username/', csrf_exempt(views.UsernameValidationView.as_view()), name='validate_username'),
  path('validate_email/', csrf_exempt(views.EmailValidationView.as_view()), name='validate_email'),
  path('validate_password/', csrf_exempt(views.PasswordValidationView.as_view()), name='validate_password')
]