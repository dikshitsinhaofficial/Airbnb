import uuid

from django.conf import settings
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, UserManager
from django.db import models

# Override default `UserManager` with custom class to have email as default authentication field instead of username. 
class CustomUserManager(UserManager):
    # Internal helper method. Handles logic to create and save a new user.
    def _create_user(self, name, email, password, **extra_fields):
        if not email:
            # Enforce email requirement.
            raise ValueError("You have not specified a valid e-mail address")

        email = self.normalize_email(email) # ensures unique matching works correctly by changing domain to lowercase
        user = self.model(email=email, name=name, **extra_fields)
        user.set_password(password) # method from `AbstractBaseUser` that hashes raw password for storage
        user.save(using=self.db)

        return user # returns newly created user object

    # Standard method for creating a regular user.
    def create_user(self, name=None, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_superuser', False)
        return self._create_user(name, email, password, **extra_fields)


    # Defines method for creating a superuser (admin).rnal helper method.
    def create_superuser(self, name=None, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(name, email, password, **extra_fields)


# Defines actual database model
class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    email = models.EmailField(unique=True)
    name = models.CharField(max_length=255, blank=True, null=True)
    avatar = models.ImageField(upload_to='uploads/avatars')

    is_active = models.BooleanField(default=True)
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    date_joined = models.DateTimeField(auto_now_add=True)
    last_login = models.DateTimeField(blank=True, null=True)

    # use `CustomUserManager` for all database queries and user creation instead of the default manager.
    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD =  'email'
    REQUIRED_FIELDS = ['name']

