from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib import messages
from django.http import JsonResponse
from .models import Scheme
import openai
from django.views.decorators.csrf import csrf_exempt
import json
import os




# Signup View
def signup_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        email = request.POST['email']
        password = request.POST['password']

        if User.objects.filter(username=username).exists():
            messages.error(request, "Username already taken!")
            return redirect('signup')

        user = User.objects.create_user(username=username, email=email, password=password)
        user.save()
        messages.success(request, "Account created successfully! Please log in.")
        return redirect('login')

    return render(request, 'signup.html')

# Login View
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            messages.success(request, "Login successful!")
            return redirect('home')
        else:
            messages.error(request, "Invalid credentials!")
            return redirect('login')

    return render(request, 'login.html')

# Logout View
def logout_view(request):
    logout(request)
    messages.success(request, "Logged out successfully!")
    return redirect('login')

    
def get_schemes(request):
    query = request.GET.get('q', '')  # Get search query from URL
    schemes = Scheme.objects.all()

    if query:
        schemes = schemes.filter(
            name__icontains=query
        ) | schemes.filter(
            state__icontains=query
        ) | schemes.filter(
            eligibility__icontains=query
        )

    return JsonResponse({'schemes': list(schemes.values())})

def home(request):
    return render(request, 'home.html')

def scheme(request):
    return render(request, 'schemes.html')

def AboutUs(request):
    return render(request, 'AboutUs.html')

def financialSupp(request):
    return render(request, 'financialSupp.html')

def Subscides(request):
    return render(request, 'Subscides.html')



@csrf_exempt  # Only for testing; use CSRF protection in production
def chatbot_view(request):
    if request.method == "POST":
        try:
            data = json.loads(request.body)  # ✅ Extract JSON data
            user_message = data.get('message')

           
            openai.api_key = os.getenv("OPENAI_API_KEY")


            # ✅ Correct API Call for GPT-3.5/4
            response = openai.ChatCompletion.create(
                model="gpt-3.5-turbo",  # ✅ Ensure model is correct
                messages=[{"role": "user", "content": user_message}]
            )

            return JsonResponse({"response": response["choices"][0]["message"]["content"]})
        
        except openai.error.OpenAIError as e:
            return JsonResponse({"error": str(e)}, status=500)

    return JsonResponse({"error": "Only POST requests are allowed."}, status=400)





