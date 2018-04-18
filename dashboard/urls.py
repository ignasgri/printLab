from django.conf.urls import url
from .views import main_dashboard, a4

urlpatterns = [
    # url(r'^dashboard/$', dashboard_view),
    url(r'^main/$', main_dashboard, name='main_dashboard'),
    url(r'^main/a4$', a4, name='a4'),
]