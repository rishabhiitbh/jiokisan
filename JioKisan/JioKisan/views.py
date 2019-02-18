from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, redirect
from django.http import HttpResponse
import json

from . forms import UserRequest
from . models import *





def speechtotext(request):
    if(request.method == 'POST'):
        if 'finalTranscripts' in request.POST:
            textMessage = request.POST['finalTranscripts']
            print(textMessage)


    return render(request, template_name='index.html')
@csrf_exempt
def ResponsePage(request):
    user_request=UserRequest(request.POST or None)
    server_response='Welcome to JioKisan'
    number=5674567311
    if user_request.is_valid():
        msg=user_request.cleaned_data.get('msg')
        if msg != '':
            server_response=GiveResponse(msg,number)
        some_data_to_dump = {'some_var_1': server_response
        }
        data = json.dumps(some_data_to_dump)
        print (data)
       # server_response='one,two,three'
        response=HttpResponse(server_response,content_type='text/plaintext')
        response.__setitem__(header="Access-Control-Allow-Origin",value='*')
        return response
        # return HttpResponse(data, content_type='application/json')
        # some_data_to_dump = {'some_var_1': msg
        # }
        # data = json.dumpscount(some_data_to_dump)
        # return HttpResponse(data, content_type='application/json')
    context={
            'msg_response': server_response,
            'form':user_request
        }
        

    return render(request,template_name='message.html',context=context)
    
