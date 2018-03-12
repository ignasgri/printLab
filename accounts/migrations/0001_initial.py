# Generated by Django 2.0.2 on 2018-03-12 09:18

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='UserProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('address1', models.CharField(blank=True, max_length=255)),
                ('address2', models.CharField(blank=True, max_length=255)),
                ('postcode', models.CharField(blank=True, max_length=7)),
                ('phone', models.CharField(blank=True, max_length=10)),
                ('dob', models.CharField(blank=True, max_length=10)),
                ('gender', models.CharField(blank=True, max_length=1)),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='profile', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
