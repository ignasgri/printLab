from django.shortcuts import render, redirect, HttpResponseRedirect, HttpResponse, get_object_or_404
from accounts.forms import UserLoginForm
from django.urls import reverse
from django.contrib import messages, auth
from django.template.context_processors import csrf
from django.contrib.auth.decorators import login_required

@login_required(login_url='/accounts/login') #redirect when user is not logged in
def main_dashboard(request):
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
                    return redirect(reverse('main_dashboard'))
            else:
                form.add_error(None, "Your username/email or password was not recognised")
    else:
        form = UserLoginForm()

    args = {'form': form, 'next': request.GET['next'] if request.GET and 'next' in request.GET else ''}
    args.update(csrf(request))
    return render(request, 'dashboard.html', args)