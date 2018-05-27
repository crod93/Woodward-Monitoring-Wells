# Woodward-Monitoring-Wells

Stanislaus County Geologist have been acquiring data from four wells in Woodward Regional Park every three months since 2016 to measure possible contamination of groundwater from the campsite wastewater. Two wells check the composition of incoming groundwater and two wells sample for groundwater on the other side of the evaporation pond. We will develop a program to preprocess the data to compare the chemical analyses of both inbound and outbound groundwater.
https://www.dropbox.com/s/4x0v0f63xg9nuj9/Screen%20Shot%202018-05-27%20at%2011.07.59%20AM.png?dl=0
https://www.dropbox.com/s/4x0v0f63xg9nuj9/Screen%20Shot%202018-05-27%20at%2011.07.59%20AM.png?dl=0


## Getting Started

python3 manage.py runserver

### Prerequisites

Might need to run pip3. The Mirgration uses a CSV file to import data to the database. Run 

```
python3 manage.py load_well_data
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Django](https://www.djangoproject.com/) - The web framework used
* [Plotly.js](https://github.com/plotly/plotly.js) - Data Visual Tool


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
