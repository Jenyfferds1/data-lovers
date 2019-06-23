function getCountrys(country) {
  return WORLDBANK[country]["indicators"];
}

const populationBra = getCountrys("BRA").find(indic => indic.indicatorName === "Población, mujeres")
const populationChi = getCountrys("CHL").find(indic => indic.indicatorName === "Población, mujeres")
const populationMex = getCountrys("MEX").find(indic => indic.indicatorName === "Población, mujeres")
const populationPer = getCountrys("PER").find(indic => indic.indicatorName === "Población, mujeres")
Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'População de mulheres na América Latina entre 2007 e 2017'
  },
  xAxis: {
    categories: ['Brasil', 'Chile', 'México', 'Peru'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'População',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ' milhões'
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -20,
    y: 200,
    floating: true,
    borderWidth: 1,
    backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'Ano 2007',
    data: [populationBra.data[2007], populationChi.data[2007], populationMex.data[2007], populationPer.data[2007]],
    color: 'rgb(213, 73, 144)',
  }, {
    name: 'Ano 2008',
    data: [populationBra.data[2008], populationChi.data[2008], populationMex.data[2008], populationPer.data[2008]],
  }, {
    name: 'Ano 2009',
    data: [populationBra.data[2009], populationChi.data[2009], populationMex.data[2009], populationPer.data[2009]],
  }, {
    name: 'Ano 2010',
    data: [populationBra.data[2010], populationChi.data[2010], populationMex.data[2010], populationPer.data[2010]],
  }, {
    name: 'Ano 2011',
    data: [populationBra.data[2011], populationChi.data[2011], populationMex.data[2011], populationPer.data[2011]],
  }, {
    name: 'Ano 2012',
    data: [populationBra.data[2012], populationChi.data[2012], populationMex.data[2012], populationPer.data[2012]],
  }, {
    name: 'Ano 2013',
    data: [populationBra.data[2013], populationChi.data[2013], populationMex.data[2013], populationPer.data[2013]],
  }, {
    name: 'Ano 2014',
    data: [populationBra.data[2014], populationChi.data[2014], populationMex.data[2014], populationPer.data[2014]],
  }, {
    name: 'Ano 2015',
    data: [populationBra.data[2015], populationChi.data[2015], populationMex.data[2015], populationPer.data[2015]],
  }, {
    name: 'Ano 2016',
    data: [populationBra.data[2016], populationChi.data[2016], populationMex.data[2016], populationPer.data[2016]],
  }, {
    name: 'Ano 2017',
    color: '#18bc9c',
    data: [populationBra.data[2017], populationChi.data[2017], populationMex.data[2017], populationPer.data[2017]],
  }]
});