# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-18 10:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myprojectApp', '0003_shop_shopdetail'),
    ]

    operations = [
        migrations.AddField(
            model_name='shopdetail',
            name='money',
            field=models.CharField(default=10, max_length=10),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='user',
            name='img',
            field=models.CharField(max_length=20),
        ),
    ]
