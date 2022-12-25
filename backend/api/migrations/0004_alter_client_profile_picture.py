# Generated by Django 4.1.2 on 2022-12-24 15:14

import api.models
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0003_alter_client_profile_picture"),
    ]

    operations = [
        migrations.AlterField(
            model_name="client",
            name="profile_picture",
            field=models.ImageField(
                blank=True,
                null=True,
                upload_to=api.models.upload_to,
                verbose_name="image",
            ),
        ),
    ]