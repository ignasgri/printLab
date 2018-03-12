from django.conf.urls import url, include
from django.contrib import admin
from django.urls import path
from home.views import get_index
from accounts import urls as accounts_urls
from accounts import reset_urls as reset_urls

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$', get_index, name='index'),
    url(r'accounts/', include(accounts_urls)),
    url(r'user/', include(reset_urls)),
    path('admin/', admin.site.urls),
    
    
]
