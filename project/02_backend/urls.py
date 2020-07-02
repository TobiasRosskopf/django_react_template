"""
Definition of URLs.
"""

# Django imports
from django.urls import path
from django.urls import re_path
from django.conf.urls import url
from rest_framework_jwt.views import obtain_jwt_token

# Import views
from .views import user_list
from .views import user_detail


# Configurate URL patterns
urlpatterns = [
    path('token-auth/', obtain_jwt_token),
    re_path(r'^api/users/$', user_list),
    re_path(r'^api/users/(?P<pk>[0-9]+)$', user_detail),
]
