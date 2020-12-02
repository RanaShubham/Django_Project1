from django.db import models

# Create your models here.
class GreetingCardApp(models.Model):
    name = models.CharField(max_length=128, unique=True)
    message = models.TextField(max_length=512)

    def __str__(self):
        return self.name