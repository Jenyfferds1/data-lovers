function getCountrys(country) {
  return WORLDBANK[country]["indicators"];
}

let poblacionBra = getCountrys("BRA").find(indic => indic.indicatorName === "Población, mujeres")
let poblacionChi = getCountrys("CHL").find(indic => indic.indicatorName === "Población, mujeres")
let poblacionMex = getCountrys("MEX").find(indic => indic.indicatorName === "Población, mujeres")
let poblacionPer = getCountrys("PER").find(indic => indic.indicatorName === "Población, mujeres")
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
    data: [poblacionBra.data[2007], poblacionChi.data[2007], poblacionMex.data[2007], poblacionPer.data[2007]],
    color: 'rgb(213, 73, 144)',
  }, {
    name: 'Ano 2008',
    data: [poblacionBra.data[2008], poblacionChi.data[2008], poblacionMex.data[2008], poblacionPer.data[2008]],
  }, {
    name: 'Ano 2009',
    data: [poblacionBra.data[2009], poblacionChi.data[2009], poblacionMex.data[2009], poblacionPer.data[2009]],
  }, {
    name: 'Ano 2010',
    data: [poblacionBra.data[2010], poblacionChi.data[2010], poblacionMex.data[2010], poblacionPer.data[2010]],
  }, {
    name: 'Ano 2011',
    data: [poblacionBra.data[2011], poblacionChi.data[2011], poblacionMex.data[2011], poblacionPer.data[2011]],
  }, {
    name: 'Ano 2012',
    data: [poblacionBra.data[2012], poblacionChi.data[2012], poblacionMex.data[2012], poblacionPer.data[2012]],
  }, {
    name: 'Ano 2013',
    data: [poblacionBra.data[2013], poblacionChi.data[2013], poblacionMex.data[2013], poblacionPer.data[2013]],
  }, {
    name: 'Ano 2014',
    data: [poblacionBra.data[2014], poblacionChi.data[2014], poblacionMex.data[2014], poblacionPer.data[2014]],
  }, {
    name: 'Ano 2015',
    data: [poblacionBra.data[2015], poblacionChi.data[2015], poblacionMex.data[2015], poblacionPer.data[2015]],
  }, {
    name: 'Ano 2016',
    data: [poblacionBra.data[2016], poblacionChi.data[2016], poblacionMex.data[2016], poblacionPer.data[2016]],
  }, {
    name: 'Ano 2017',
    color: '#18bc9c',
    data: [poblacionBra.data[2017], poblacionChi.data[2017], poblacionMex.data[2017], poblacionPer.data[2017]],
  }]
});