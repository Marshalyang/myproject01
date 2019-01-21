# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-01-18 13:01
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('myprojectApp', '0004_auto_20190118_1054'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShopCar',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('number', models.IntegerField()),
                ('isselect', models.BooleanField(default=True)),
                ('goods', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myprojectApp.ShopDetail')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='myprojectApp.User')),
            ],
            options={
                'db_table': 'ShopCar',
            },
        ),
    ]
