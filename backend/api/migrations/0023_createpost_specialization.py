# Generated by Django 4.1.2 on 2023-01-09 04:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0022_alter_createpost_description"),
    ]

    operations = [
        migrations.AddField(
            model_name="createpost",
            name="specialization",
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
