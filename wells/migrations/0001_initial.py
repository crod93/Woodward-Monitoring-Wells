# Generated by Django 2.0.3 on 2018-04-01 17:21

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Well',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('location', models.CharField(max_length=50)),
                ('dtTaken', models.DateTimeField()),
                ('wellName', models.CharField(max_length=50)),
                ('distanceToWell', models.FloatField()),
                ('groundWaterElev', models.FloatField()),
                ('coliform', models.CharField(blank=True, max_length=3)),
                ('eColiPresent', models.NullBooleanField()),
                ('nitrate', models.FloatField(null=True)),
                ('bAlkalinity', models.FloatField(null=True)),
                ('fieldPH', models.FloatField(null=True)),
                ('electricCharge', models.IntegerField(null=True)),
                ('totalDissolvedSolids', models.IntegerField()),
                ('sulfate', models.FloatField()),
                ('chloride', models.FloatField()),
                ('calcium', models.FloatField()),
                ('sodium', models.FloatField()),
                ('potassium', models.FloatField()),
                ('iron', models.FloatField()),
                ('magnesium', models.FloatField()),
                ('barium', models.FloatField(null=True)),
                ('bicarbonate', models.FloatField(null=True)),
                ('carbonate', models.FloatField(null=True)),
                ('fluoride', models.FloatField(null=True)),
            ],
        ),
    ]
