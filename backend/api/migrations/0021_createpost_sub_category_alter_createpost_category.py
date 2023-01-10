# Generated by Django 4.1.2 on 2023-01-08 08:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0020_alter_createpost_category"),
    ]

    operations = [
        migrations.AddField(
            model_name="createpost",
            name="sub_category",
            field=models.ForeignKey(
                default=None,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.subcategory",
            ),
        ),
        migrations.AlterField(
            model_name="createpost",
            name="category",
            field=models.ForeignKey(
                default=None,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.category",
            ),
        ),
    ]