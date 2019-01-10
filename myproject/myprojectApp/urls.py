from django.conf.urls import url
from myprojectApp import views

urlpatterns = [
    url(r'^index/$',views.index,name='index'),
    url(r'^detail/$',views.detail,name='detail'),
    url(r'^login/$',views.login,name='login'),
    url(r'^mycat/$',views.mycat,name='mycat'),
    url(r'^register/$',views.register,name='register'),
]