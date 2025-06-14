from django.db import models


class Scheme(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    eligibility = models.TextField()
    state = models.CharField(max_length=100)
    link = models.URLField()

    def __str__(self):
        return self.name
    
  # Saves images in /media/profile_pics/
class Profile(models.Model):
    name = models.CharField(max_length=100)
    profile_picture = models.ImageField(upload_to='profile_pics/')  # Saves images in /media/profile_pics/

    def __str__(self):
        return self.name
