# Generated by Django 3.2.6 on 2021-11-25 02:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tags', '0002_auto_20211026_0004'),
    ]

    operations = [
        migrations.AddField(
            model_name='tag',
            name='type',
            field=models.CharField(db_index=True, max_length=50, null=True, verbose_name='Type'),
        ),
    ]