# Generated by Django 4.1.2 on 2023-01-08 07:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0014_remove_category_category_createpost_category_and_more"),
    ]

    operations = [
        migrations.RemoveField(
            model_name="createpost",
            name="sub_category",
        ),
    ]
