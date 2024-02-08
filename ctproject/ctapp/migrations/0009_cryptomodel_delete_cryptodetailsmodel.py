# Generated by Django 5.0.2 on 2024-02-07 11:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('ctapp', '0008_alter_cryptodetailsmodel_the7d'),
    ]

    operations = [
        migrations.CreateModel(
            name='CryptoModel',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('my_id', models.CharField(max_length=50)),
                ('name', models.CharField(max_length=50)),
                ('symbol', models.CharField(max_length=10)),
                ('price', models.IntegerField()),
                ('the24h', models.DecimalField(decimal_places=2, max_digits=10)),
                ('market_cap', models.BigIntegerField()),
                ('circulating_supply', models.IntegerField()),
                ('image', models.CharField(max_length=100)),
                ('volume_24h', models.BigIntegerField()),
                ('the7d', models.DecimalField(decimal_places=2, max_digits=10, null=True)),
            ],
        ),
        migrations.DeleteModel(
            name='CryptoDetailsModel',
        ),
    ]
