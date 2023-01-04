from django.urls import path
from . import views
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("register/", views.RegisterView.as_view(), name="register"),
    path("logout/", views.LogOut, name="logout"),
    path("login/", views.LoginView.as_view(), name="login"),
    path("block/", views.BlockUnblockView.as_view(), name="block"),
    path("skills/",views.SkillsView.as_view(),name='skills'),
    path("cprofileData/", views.ClientDetailsView.as_view(), name="client_update_view"),
    path("eupdate/", views.ExperienceView.as_view(), name="experience_update_view"),
    path("fupdate/", views.FreelancerUpdateView.as_view(), name="freelancer_update_view"),
    path("cupdate/", views.ClientUpdateView.as_view(), name="client_update_view"),
    path("users/profile/", views.getUserPrfile, name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
]
