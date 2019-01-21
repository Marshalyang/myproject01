#coding=utf-8
import hashlib
import random
import re
import time
from django.shortcuts import render, redirect

# Create your views here.
from myprojectApp.models import User, ShopDetail, ShopCar


def index(request):
    token = request.session.get('token')
    user = None
    shopshows = ShopDetail.objects.all()

    if token:
        user = User.objects.get(token=token)
    return render(request,'index.html',context={'user': user,'shopshows':shopshows})



def detail(request,id):
    token = request.session.get('token')
    user = None
    if token:
        user = User.objects.get(token=token)
    goods = ShopDetail.objects.get(pk=id)
    return render(request, 'detail.html',context={'user': user,'goods':goods})





def generate_token():
    md5 = hashlib.md5()
    tempstr = str(time.time()) + str(random.random())
    md5.update(tempstr.encode('utf-8'))
    return md5.hexdigest()


def generate_password(param):
    md5 = hashlib.md5()
    md5.update(param.encode('utf-8'))
    return md5.hexdigest()

def login(request):

    if request.method == 'GET':
        return render(request,'login.html')
    elif request.method == 'POST':
        user = User()
        user.username = request.POST.get('username')
        user.password = generate_password(request.POST.get('password'))
        user.phone = request.POST.get('phone')


        user.token = generate_token()
        request.session['token'] = user.token


        user.save()
        return redirect('mt:index')




def mycat(request):
    token = request.session.get('token')
    user = None
    if token:
        # print(2)
        user = User.objects.get(token=token)
        # print(request.GET.get('goodsid'))
        if request.GET.get('goodsid'):
            # print(1)
            goodsid = request.GET.get('goodsid')
            goodsnumber = request.GET.get('goodsnum')
            print(goodsnumber)
            goods = ShopDetail.objects.get(pk=int(goodsid))
            shopcar =ShopCar.objects.filter(user=user).filter(goods=goods)
            if shopcar.count():
                shopcar= shopcar.first()
                shopcar.number += int(goodsnumber)
                shopcar.save()

            else:
                shopcar = ShopCar()
                shopcar.user= user
                shopcar.goods = goods
                shopcar.number = int(goodsnumber)
                shopcar.save()

    else:
        redirect('mt:register')
    shopcar = ShopCar.objects.filter(user=user)
    return render(request, 'mycat.html',context={'user':user,"shopcar":shopcar, })


def register(request):
    if request.method == 'GET':
        return render(request, 'register.html')
    elif request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')

        if re.match(r'^\w{3,15}$',username):
            try:
                user = User.objects.get(username=username)
                if user.password == generate_password(password):
                    user.token = generate_token()
                    user.save()
                    request.session['token'] = user.token
                    return redirect('mt:index')
                else:
                    return render(request, 'register.html', context={'erro': '您输入的密码错误，请重新输入'})
            except:
                return render(request, 'register.html', context={'erro':'您的用户名不存在，请重新输入'})

        else:
            try:
                user = User.objects.get(phone=username)
                if user.password == generate_password(password):
                    user.token = generate_token()
                    user.save()
                    request.session['token'] = user.token
                    return redirect('mt:index')
                else:
                    return render(request, 'register.html', context={'erro': '您输入的密码有误，请重新输入'})
            except:
                return render(request, 'register.html', context={'erro': '您的输入的手机号不存在，请重新输入'})



def logout(request):
    request.session.flush()
    return redirect('mt:index')


def addcart(request):

    gid=request.get('goodsid')
    goods= ShopDetail(pk=gid)


    return None