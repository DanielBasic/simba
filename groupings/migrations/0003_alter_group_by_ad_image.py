# Generated by Django 4.2.2 on 2023-09-23 19:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groupings', '0002_alter_group_by_ad_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='group_by_ad',
            name='image',
            field=models.ImageField(default='group_by_ad_images/default.png', null=True, upload_to='group_by_ad_images/'),
        ),
    ]