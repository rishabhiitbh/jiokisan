from django import forms

class UserRequest(forms.Form):
    msg=forms.CharField(label='your message',max_length=200)