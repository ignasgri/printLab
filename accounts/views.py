from django.shortcuts import render, redirect, HttpResponseRedirect, HttpResponse, get_object_or_404
from accounts.forms import UserRegistrationForm, UserLoginForm, FullUserDetailsForm
from django.urls import reverse
from django.contrib import messages, auth
from django.template.context_processors import csrf
from django.contrib.auth.decorators import login_required
from .models import UserProfile

# from django.shortcuts import render, redirect, HttpResponseRedirect
# from django.contrib import messages, auth
# from .forms import UserRegistrationForm, UserLoginForm
# from django.template.context_processors import csrf
# from django.contrib.auth.decorators import login_required

# import json
# # from .models import UserProfile
# from django.contrib.auth.models import User
# from django.http import HttpResponse
# from django.views.decorators.csrf import csrf_exempt
# from django.conf import settings
# Create your views here.
@login_required(login_url='/accounts/login')
def profile(request):
    # adults = UserProfile.objects.filter(user=request.user)
    return render(request, 'profile.html')

def update_profile(request):
    form=FullUserDetailsForm(request.POST, request.FILES)
    if form.is_valid():
        request.user.first_name=form.cleaned_data['first_name']
        request.user.save()
        return redirect(reverse('profile'))
    else:
        return HttpResponse("Error")


def login(request):
    if request.method == 'POST':
        form = UserLoginForm(request.POST)
        if form.is_valid():
            user = auth.authenticate(username=request.POST.get('username_or_email'),
                                     password=request.POST.get('password'))

            if user is not None:
                auth.login(request, user)
                messages.error(request, "You have successfully logged in")

                if request.GET and request.GET['next'] !='':
                    next = request.GET['next']
                    return HttpResponseRedirect(next)
                else:
                    return redirect(reverse('profile'))
            else:
                form.add_error(None, "Your username/email or password was not recognised")
    else:
        form = UserLoginForm()

    args = {'form': form, 'next': request.GET['next'] if request.GET and 'next' in request.GET else ''}
    args.update(csrf(request))
    return render(request, 'login.html', args)

def logout(request):
    auth.logout(request)
    messages.success(request, 'You have successfully logged out')
    return redirect(reverse('index'))

# @login_required(login_url='/accounts/login')
# def profile(request):
#     return render(request, 'profile.html')

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()

            user = auth.authenticate(username=request.POST.get('username'),
                                     password=request.POST.get('password1'))

            if user:
                auth.login(request, user)
                messages.success(request, "You have successfully registered")
                return redirect(reverse('profile'))

            else:
                messages.error(request, "unable to log you in at this time!")

    else:
        form = UserRegistrationForm()

    args = {'form': form}
    args.update(csrf(request))

    return render(request, 'register.html', args)