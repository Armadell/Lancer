# Generated by Django 4.1.2 on 2022-12-29 18:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0009_remove_freelancer_skills"),
    ]

    operations = [
        migrations.AlterField(
            model_name="freelancer",
            name="bio",
            field=models.CharField(blank=True, max_length=60, null=True),
        ),
    ]
