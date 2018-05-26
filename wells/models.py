from django.db import models

# Create your models here.


class Well(models.Model):
    location = models.CharField(max_length=50)
    dtTaken = models.DateTimeField(null=False)
    wellName = models.CharField(max_length=50, blank=False)
    distanceToWell = models.FloatField(null=False)
    groundWaterElev = models.FloatField(null=False)
    coliform = models.CharField(max_length=3, blank=True)
    eColiPresent = models.NullBooleanField()
    nitrate = models.FloatField(null=True)
    bAlkalinity = models.FloatField(null=True)
    fieldPH = models.FloatField(null=True)
    electricCharge = models.IntegerField(null=True)
    totalDissolvedSolids = models.IntegerField(null=False)
    sulfate = models.FloatField(null=False)
    chloride = models.FloatField(null=False)
    calcium = models.FloatField(null=False)
    sodium = models.FloatField(null=False)
    potassium = models.FloatField(null=False)
    iron = models.FloatField(null=False)
    magnesium = models.FloatField(null=False)
    barium = models.FloatField(null=True)
    bicarbonate = models.FloatField(null=True)
    carbonate = models.FloatField(null=True)
    fluoride = models.FloatField(null=True)
    totalHardness = models.FloatField(null=False, default=0.0)
