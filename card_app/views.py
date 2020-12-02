from django.views import View
import json
from card_app.models import GreetingCardApp
from django.http import HttpResponse
from django.core import serializers
# Create your views here.

class GreetingView(View):
    def get(self, request):
        cards = GreetingCardApp.objects.all()
        data = serializers.serialize('json', cards)
        filtered_data = list(map(lambda element: element["fields"], json.loads(data)))
        return HttpResponse(json.dumps(filtered_data))