from django.conf.urls import url
from card_app.views import GreetingView

urlpatterns = [
    url(r'^$', GreetingView.as_view()),
]