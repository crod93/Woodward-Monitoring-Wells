from csv import DictReader
from datetime import datetime

from django.core.management import BaseCommand

from wells.models import Well
from pytz import UTC


DATETIME_FORMAT = '%m/%d/%Y'


class Command(BaseCommand):
    # Show this when the user types help
    help = "Loads data from well_data.csv into our Well model"

    def handle(self, *args, **options):
        print("Loading well data for Monitoring Wells")
        for row in DictReader(open('./well_data.csv')):
            print('row', row)
            well = Well()
            well.location = row['Location']
            raw_submission_date = row['Date Taken']
            submission_date = UTC.localize(
                datetime.strptime(raw_submission_date, DATETIME_FORMAT))
            well.dtTaken = submission_date
            well.wellName = row['Well Name']
            well.distanceToWell = row['Distance To Well']
            well.groundWaterElev = row['Ground Water Elevation']
            well.coliform = row['Coliform Amount']
            well.eColiPresent = row['EColi Present']
            well.nitrate = row['Nitrate Amount']
            well.bAlkalinity = row['bAlkalinity']
            well.fieldPH = row['Field PH']
            well.electricCharge = row['Electric Charge']
            well.totalDissolvedSolids = row['Total Dissolved Solids']
            well.sulfate = row['Sulfate Amount']
            well.chloride = row['Chloride Amount']
            well.calcium = row['Calcium Amount']
            well.sodium = row['Sodium Amount']
            well.potassium = row['Potassium Amount']
            well.iron = row['Iron Amount']
            well.magnesium = row['Magnesium Amount']
            well.barium = row['Barium Amount']
            well.bicarbonate = row['Bicarbonate Amount']
            well.carbonate = row['Carbonate Amount']
            well.fluoride = row['Fluoride Amount']
            if row['Total Hardness'] == "":
                well.totalHardness = 2.5 * \
                    float(row['Calcium Amount']) + 4.1 * \
                    float(row['Magnesium Amount'])
            else:
                well.totalHardness = row['Total Hardness']
            well.save()
