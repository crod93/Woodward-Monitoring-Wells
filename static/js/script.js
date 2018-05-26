$(document)
  .ready(function () {
    $('#well-select')
      .on('change', function () {
        console.log(this.value);

        //     let temp = ``;     {% for well in wells %}     <div>         <a href="{%
        // url 'well_detail' well.id %}">             <h3>Sample ID: {{ well.id}}</h3>
        //   </a>         <p>Location: {{ well.location }}</p>         <p>Well Name: {{
        // well.wellName }}</p>         <p>Total Hardness (mg/l): {{ well.totalHardness
        // }}</p>         <p>Date Taken: {{ well.dtTaken }}</p> </div>     {% endfor %}
      });

    const FORMULA_WEIGHTS = {
      potassium: 39.1,
      sodium: 23.0,
      calcium: 40.1,
      magnesium: 24.3,
      iron: 55.8,
      barium: 137.3,
      sulfate: 96.1,
      bicarbonate: 61.0,
      carbonate: 60.0,
      chloride: 35.4,
      nitrate: 62.0,
      fluoride: 19.0
    };

    const CHARGE = {
      potassium: 1,
      sodium: 1,
      calcium: 2,
      magnesium: 2,
      iron: 2,
      barium: 2,
      sulfate: 2,
      bicarbonate: 1,
      carbonate: 2,
      chloride: 1,
      nitrate: 1,
      fluoride: 1
    };

    const ACTIVITY_COE = {
      potassium: 1,
      sodium: 1,
      calcium: 0.99,
      magnesium: 0.99,
      iron: 0.99,
      barium: 0.99,
      sulfate: 0.99,
      bicarbonate: 1,
      carbonate: 0.99,
      chloride: 1,
      nitrate: 1,
      fluoride: 1
    };

    let wellLoc = $('#well-location').text();
    // console.log('wellLoc', wellLoc);

    let wellName = $('#well-name').text();
    // console.log('wellName', wellName);

    let dTW = $('#well-distance').text();
    // console.log('dTW', dTW);

    let elev = $('#elevation').text();
    // console.log('elev', elev);

    let coliAmount = $('#coliform').text();
    // console.log('coliAmount', coliAmount);

    let eColi = $('#eColi').text();
    // console.log('eColi', eColi);

    let nitrateAmount = $('#nitrate').text();
    // console.log('nitrateAmount', nitrateAmount);

    let bAlka = $('#bAlka').text();
    // console.log('bAlka', bAlka);

    let ph = $('#ph').text();
    // console.log('ph', ph);

    let electCharge = $('#electric-charge').text();
    // console.log('electCharge', electCharge);

    let tDS = $('#total-DS').text();
    // console.log('tDS', tDS);

    let sulfAmount = $('#sulfate-amount').text();
    // console.log('sulfAmount', sulfAmount);

    let chlorAmount = $('#chloride-amount').text();
    // console.log('chlorAmount', chlorAmount);

    let calcAmount = $('#calcium-amount').text();
    // console.log('calcAmount', calcAmount);

    let sodAmount = $('#sodium-amount').text();
    // console.log('sodAmount', sodAmount);

    let potassiumAmount = $('#potassium-amount').text();
    // console.log('potassium', potassiumAmount);

    let ironAmount = $('#iron-amount').text();
    // console.log('ironAmount', ironAmount);

    let magAmount = $('#magnesium-amount').text();
    // console.log('magAmount', magAmount);

    let barAmount = $('#barium-amount').text();
    // console.log('barAmount', barAmount);

    let bicarAmount = $('#bicarbonate-amount').text();
    // console.log('bicarAmount', bicarAmount);

    let carAmount = $('#carbonate-amount').text();
    // console.log('carAmount', carAmount);

    let fluorAmount = $('#fluoride-amount').text();
    // console.log('fluorAmount', fluorAmount);

    let totalHard = $('#total-hardness').text();
    // console.log('totalHard', totalHard);

    let dtTaken = $('#dt-taken').text();
    // console.log('dtTaken', dtTaken);

    let concentrationMol = {
      potassium: potassiumAmount / FORMULA_WEIGHTS.potassium / 1000,
      sodium: sodAmount / FORMULA_WEIGHTS.sodium / 1000,
      calcium: calcAmount / FORMULA_WEIGHTS.calcium / 1000,
      magnesium: magAmount / FORMULA_WEIGHTS.magnesium / 1000,
      iron: ironAmount / FORMULA_WEIGHTS.iron / 1000,
      barium: barAmount / FORMULA_WEIGHTS.barium / 1000,
      sulfate: sulfAmount / FORMULA_WEIGHTS.sulfate / 1000,
      bicarbonate: bicarAmount / FORMULA_WEIGHTS.bicarbonate / 1000,
      carbonate: carAmount / FORMULA_WEIGHTS.carbonate / 1000,
      chloride: chlorAmount / FORMULA_WEIGHTS.chloride / 1000,
      nitrate: nitrateAmount / FORMULA_WEIGHTS.nitrate / 1000,
      fluoride: fluorAmount / FORMULA_WEIGHTS.fluoride / 1000
    };

    let concentrationMeq = {
      potassium: concentrationMol.potassium * CHARGE.potassium * 1000,
      sodium: concentrationMol.sodium * CHARGE.sodium * 1000,
      calcium: concentrationMol.calcium * CHARGE.calcium * 1000,
      magnesium: concentrationMol.magnesium * CHARGE.magnesium * 1000,
      iron: concentrationMol.iron * CHARGE.iron * 1000,
      barium: concentrationMol.barium * CHARGE.barium * 1000,
      sulfate: concentrationMol.sulfate * CHARGE.sulfate * 1000,
      bicarbonate: concentrationMol.bicarbonate * CHARGE.bicarbonate * 1000,
      carbonate: concentrationMol.carbonate * CHARGE.carbonate * 1000,
      chloride: concentrationMol.chloride * CHARGE.chloride * 1000,
      nitrate: concentrationMol.nitrate * CHARGE.nitrate * 1000,
      fluoride: concentrationMol.fluoride * CHARGE.fluoride * 1000
    };

    let kNaPercent = (concentrationMeq.potassium + concentrationMeq.sodium) / (concentrationMeq.potassium + concentrationMeq.sodium + concentrationMeq.calcium + concentrationMeq.magnesium) * 100;

    let caPercent = concentrationMeq.calcium / (concentrationMeq.potassium + concentrationMeq.sodium + concentrationMeq.calcium + concentrationMeq.magnesium) * 100;

    let mgPercent = concentrationMeq.magnesium / (concentrationMeq.potassium + concentrationMeq.sodium + concentrationMeq.calcium + concentrationMeq.magnesium) * 100;

    let so4Percent = concentrationMeq.sulfate / (concentrationMeq.sulfate + concentrationMeq.bicarbonate + concentrationMeq.carbonate + concentrationMeq.chloride) * 100;

    let hco3Co3Percent = (concentrationMeq.bicarbonate + concentrationMeq.carbonate) / (concentrationMeq.sulfate + concentrationMeq.bicarbonate + concentrationMeq.carbonate + concentrationMeq.chloride) * 100;

    let clPercent = concentrationMeq.chloride / (concentrationMeq.sulfate + concentrationMeq.bicarbonate + concentrationMeq.carbonate + concentrationMeq.chloride) * 100;
    //cations
    console.log('kNaPercent', kNaPercent);
    console.log('caPercent', caPercent);
    console.log('mgPercent', mgPercent);

    //anioins
    console.log('so4Percent', so4Percent);
    console.log('hco3Co3Percent', hco3Co3Percent);
    console.log('clPercent', clPercent);

    if (wellLoc) {
      //create plots for use
      var data = [{
        values: [
          kNaPercent, caPercent, mgPercent
        ],
        labels: [
          'K+Na', 'Ca', 'Mg'
        ],
        domain: {
          x: [0, 0.48]
        },
        name: 'CATIONS Levels',
        hoverinfo: 'label+percent+name',
        hole: 0.4,
        type: 'pie'
      }, {
        values: [
          so4Percent, hco3Co3Percent, clPercent
        ],
        labels: [
          'SO4', 'HCO3+CO3', 'Cl'
        ],
        text: 'ANIONS',
        textposition: 'inside',
        domain: {
          x: [0.52, 1]
        },
        name: 'ANIONS Levels',
        hoverinfo: 'label+percent+name',
        hole: 0.4,
        type: 'pie'
      }];

      var layout = {
        title: 'Cations and Anions Levels',
        annotations: [{
          font: {
            size: 20
          },
          showarrow: false,
          text: 'CAT',
          x: 0.17,
          y: 0.5
        }, {
          font: {
            size: 20
          },
          showarrow: false,
          text: 'ANI',
          x: 0.82,
          y: 0.5
        }],
        height: 600,
        width: 600
      };

      Plotly.newPlot('pie-div', data, layout);
    }
  });