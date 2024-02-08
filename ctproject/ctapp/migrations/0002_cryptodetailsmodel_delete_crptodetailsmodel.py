# Generated by Django 5.0.2 on 2024-02-07 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ctapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='CryptoDetailsModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('cr_id', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=50)),
                ('symbol', models.CharField(max_length=10)),
                ('price', models.IntegerField()),
                ('the24h', models.IntegerField()),
                ('market_cap', models.BigIntegerField()),
                ('circulating_supply', models.IntegerField()),
                ('image', models.CharField(max_length=100)),
                ('volume_24h', models.BigIntegerField()),
                ('the7d', models.IntegerField()),
            ],
        ),
        migrations.DeleteModel(
            name='CrptoDetailsModel',
        ),
    ]
