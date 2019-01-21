#coding=utf-8
from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=20, unique=True)
    password = models.CharField(max_length=256)
    phone = models.CharField(max_length=20,unique=True)
    img = models.CharField(max_length=20)
    token = models.CharField(max_length=256)

    class Meta:
        db_table = '7+2_user'


class Shop(models.Model):
    class Meata:
        db_table ='shop'

class ShopDetail(models.Model):
    name = models.CharField(max_length=100)
    img1 = models.CharField(max_length=256)
    img2 = models.CharField(max_length=256)
    img3 = models.CharField(max_length=256)
    img4 = models.CharField(max_length=256)
    img5 = models.CharField(max_length=256)
    img6 = models.CharField(max_length=256)
    img7 = models.CharField(max_length=256)
    money = models.CharField(max_length=10)

    class Meata:
        db_table ='shop_detail'


class ShopCar(models.Model):
    user = models.ForeignKey(User)
    goods = models.ForeignKey(ShopDetail)
    number = models.IntegerField()
    isselect = models.BooleanField(default=True)

    class Meta:
        db_table = 'ShopCar'