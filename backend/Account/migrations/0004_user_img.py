# Generated by Django 4.1.2 on 2022-12-25 10:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("Account", "0003_user_confirm_new_password_user_new_password_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="user",
            name="img",
            field=models.ImageField(blank=True, upload_to=""),
        ),
    ]
