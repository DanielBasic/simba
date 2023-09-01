from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.contrib.auth import views
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", include("accounts.urls")),
    path("search/", include("search.urls")),
    path("groupings/", include("groupings.urls")),
    path("accounts/", include("django.contrib.auth.urls")), #esse para teste
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
<<<<<<< HEAD
=======

>>>>>>> 0756234d2b9661617960bf49e3dea4f4f70531cb
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)