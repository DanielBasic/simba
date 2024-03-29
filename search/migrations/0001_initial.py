# Generated by Django 4.2.2 on 2023-08-03 00:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Product',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('thumbnail', models.URLField()),
                ('title', models.CharField(max_length=255)),
                ('original_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('condition', models.CharField(max_length=100)),
                ('free_shipping', models.BooleanField(default=False)),
                ('logistic_type', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
