# Generated by Django 4.2.2 on 2023-08-15 23:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groupings', '0002_auto_20230815_2016'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agrupamento',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]