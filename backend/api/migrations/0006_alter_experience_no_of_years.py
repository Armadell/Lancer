# Generated by Django 4.1.2 on 2023-01-02 07:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0005_alter_skills_skills"),
    ]

    operations = [
        migrations.AlterField(
            model_name="experience",
            name="no_of_years",
            field=models.IntegerField(blank=True, null=True),
        ),
    ]
