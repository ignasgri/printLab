from django.shortcuts import render, redirect, HttpResponseRedirect, HttpResponse, get_object_or_404
from django.urls import reverse
from django.contrib import messages, auth
from django.template.context_processors import csrf
from django.contrib.auth.decorators import login_required

# Create your views here.
# @login_required(login_url='/accounts/login')
# def dashboard_view(request):
#     # adults = UserProfile.objects.filter(user=request.user)
#     return render(request, 'dashboard.html')
@login_required(login_url='/accounts/login')
def main_dashboard(request):
    # adults = UserProfile.objects.filter(user=request.user)
    return render(request, 'dashboard.html')