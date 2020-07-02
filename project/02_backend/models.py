"""
Definition of models.
"""

# Django imports
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import Group


# Model for custom user
class CustomUser(AbstractUser):

    class Meta:
        verbose_name = "Nutzer"
        verbose_name_plural = "Nutzer"
        ordering = ['username',]

    def __str__(self):
        return f"{self.username}"


# Model for custom group
class CustomGroup(Group):
    
    class Meta:
        verbose_name = "Gruppe"
        verbose_name_plural = "Gruppen"

    def __str__(self):
        return f"{self.name}"
