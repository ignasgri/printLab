from django.conf.urls import url
from .views import main_dashboard

urlpatterns = [
    # url(r'^dashboard/$', dashboard_view),
    url(r'^main/$', main_dashboard, name='main_dashboard'),

]