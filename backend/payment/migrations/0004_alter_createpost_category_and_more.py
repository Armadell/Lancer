# Generated by Django 4.1.2 on 2023-01-14 14:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_freelancer_is_package_active"),
        ("payment", "0003_remove_freelancerpost_posts"),
    ]

    operations = [
        migrations.AlterField(
            model_name="createpost",
            name="category",
            field=models.ForeignKey(
                blank=True,
                default=None,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.category",
            ),
        ),
        migrations.AlterField(
            model_name="createpost",
            name="sub_category",
            field=models.ForeignKey(
                blank=True,
                default=None,
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                to="api.subcategory",
            ),
        ),
    ]