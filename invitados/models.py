from django.db import models


class Guests(models.Model):
    names = models.CharField(max_length=60)
    last_name = models.CharField(max_length=60)
    quantity=models.IntegerField()
    created=models.DateTimeField(auto_now_add=True)


    
    class Meta:
        verbose_name="guest"
        verbose_name_plural="guests"

    def __str__(self):
        return f"Name of the guest: {self.names}, \n 'last name: {self.last_name}, \n  and the number of companions are: {self.quantity}"