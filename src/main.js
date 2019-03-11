window.onload = function() {
    showCountryBra();
    showCountryChi();
    showCountryMex();
    showCountryPer();
    indAmBra();
};

function indAmBra() {
    let countryDivBra = document.getElementById("conteudo-brasil-am");
    countryDivBra.innerHTML = `
    ${getCountrysBra().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}

function showCountryAm() {
    let countryDiv = document.getElementById("result-am-two");
    let w = document.getElementById("ind-total-countrys").selectedIndex;
    let z = document.getElementById("ind-total-countrys").options;
    let country = z[w].textContent;
    let x = document.getElementById("conteudo-brasil-am").selectedIndex;
    let y = document.getElementById("conteudo-brasil-am").options;
    let indicator = y[x].textContent;
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
    let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === indicator)
    let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === indicator)
    let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === indicator)
    
    let braOne = poblacionBra.data[2007]
    if(braOne === ""){
        braOne = "Índice não indicado"
    }
    let braTwo = poblacionBra.data[2008]
    if(braTwo === ""){
        braTwo = "Índice não indicado"
    }
    let braThree = poblacionBra.data[2009]
    if(braThree === ""){
        braThree = "Índice não indicado"
    }
    let braFour = poblacionBra.data[2010]
    if(braFour === ""){
        braFour = "Índice não indicado"
    }
    let braFive = poblacionBra.data[2011]
    if(braFive === ""){
        braFive = "Índice não indicado"
    }
    let braSix = poblacionBra.data[2012]
    if(braSix === ""){
        braSix = "Índice não indicado"
    }
    let braSeven = poblacionBra.data[2013]
    if(braSeven === ""){
        braSeven = "Índice não indicado"
    }
    let braEight = poblacionBra.data[2014]
    if(braEight === ""){
        braEight = "Índice não indicado"
    }
    let braNine = poblacionBra.data[2015]
    if(braNine === ""){
        braNine = "Índice não indicado"
    }
    let braTen = poblacionBra.data[2016]
    if(braTen === ""){
        braTen = "Índice não indicado"
    }
    let braEleven = poblacionBra.data[2017]
    if(braEleven === ""){
        braEleven = "Índice não indicado"
    }
    let chiOne = poblacionChi.data[2007]
    if(chiOne === ""){
        chiOne = "Índice não indicado"
    }
    let chiTwo = poblacionChi.data[2008]
    if(chiTwo === ""){
        chiTwo = "Índice não indicado"
    }
    let chiThree = poblacionChi.data[2009]
    if(chiThree === ""){
        chiThree = "Índice não indicado"
    }
    let chiFour = poblacionChi.data[2010]
    if(chiFour === ""){
        chiFour = "Índice não indicado"
    }
    let chiFive = poblacionChi.data[2011]
    if(chiFive === ""){
        chiFive = "Índice não indicado"
    }
    let chiSix = poblacionChi.data[2012]
    if(chiSix === ""){
        chiSix = "Índice não indicado"
    }
    let chiSeven = poblacionChi.data[2013]
    if(chiSeven === ""){
        chiSeven = "Índice não indicado"
    }
    let chiEight = poblacionChi.data[2014]
    if(chiEight === ""){
        chiEight = "Índice não indicado"
    }
    let chiNine = poblacionChi.data[2015]
    if(chiNine === ""){
        chiNine = "Índice não indicado"
    }
    let chiTen = poblacionChi.data[2016]
    if(chiTen === ""){
        chiTen = "Índice não indicado"
    }
    let chiEleven = poblacionChi.data[2017]
    if(chiEleven === ""){
        chiEleven = "Índice não indicado"
    }
    let mexOne = poblacionMex.data[2007]
    if(mexOne === ""){
        mexOne = "Índice não indicado"
    }
    let mexTwo = poblacionMex.data[2008]
    if(mexTwo === ""){
        mexTwo = "Índice não indicado"
    }
    let mexThree = poblacionMex.data[2009]
    if(mexThree === ""){
        mexThree = "Índice não indicado"
    }
    let mexFour = poblacionMex.data[2010]
    if(mexFour === ""){
        mexFour = "Índice não indicado"
    }
    let mexFive = poblacionMex.data[2011]
    if(mexFive === ""){
        mexFive = "Índice não indicado"
    }
    let mexSix = poblacionMex.data[2012]
    if(mexSix === ""){
        mexSix = "Índice não indicado"
    }
    let mexSeven = poblacionMex.data[2013]
    if(mexSeven === ""){
        mexSeven = "Índice não indicado"
    }
    let mexEight = poblacionMex.data[2014]
    if(mexEight === ""){
        mexEight = "Índice não indicado"
    }
    let mexNine = poblacionMex.data[2015]
    if(mexNine === ""){
        mexNine = "Índice não indicado"
    }
    let mexTen = poblacionMex.data[2016]
    if(mexTen === ""){
        mexTen = "Índice não indicado"
    }
    let mexEleven = poblacionMex.data[2017]
    if(mexEleven === ""){
        mexEleven = "Índice não indicado"
    }
    let perOne = poblacionPer.data[2007]
    if(perOne === ""){
        perOne = "Índice não indicado"
    }
    let perTwo = poblacionPer.data[2008]
    if(perTwo === ""){
        perTwo = "Índice não indicado"
    }
    let perThree = poblacionPer.data[2009]
    if(perThree === ""){
        perThree = "Índice não indicado"
    }
    let perFour = poblacionPer.data[2010]
    if(perFour === ""){
        perFour = "Índice não indicado"
    }
    let perFive = poblacionPer.data[2011]
    if(perFive === ""){
        perFive = "Índice não indicado"
    }
    let perSix = poblacionPer.data[2012]
    if(perSix === ""){
        perSix = "Índice não indicado"
    }
    let perSeven = poblacionPer.data[2013]
    if(perSeven === ""){
        perSeven = "Índice não indicado"
    }
    let perEight = poblacionPer.data[2014]
    if(perEight === ""){
        perEight = "Índice não indicado"
    }
    let perNine = poblacionPer.data[2015]
    if(perNine === ""){
        perNine = "Índice não indicado"
    }
    let perTen = poblacionPer.data[2016]
    if(perTen === ""){
        perTen = "Índice não indicado"
    }
    let perEleven = poblacionPer.data[2017]
    if(perEleven === ""){
        perEleven = "Índice não indicado"
    }
    if(country === "Brasil"){
    countryDiv.innerHTML = `
    <p>Valor do índice em 2007: ${braOne}</p>
    <p>Valor do índice em 2008: ${braTwo}</p>
    <p>Valor do índice em 2009: ${braThree}</p>
    <p>Valor do índice em 2010: ${braFour}</p>
    <p>Valor do índice em 2011: ${braFive}</p>
    <p>Valor do índice em 2012: ${braSix}</p>
    <p>Valor do índice em 2013: ${braSeven}</p>
    <p>Valor do índice em 2014: ${braEight}</p>
    <p>Valor do índice em 2015: ${braNine}</p>
    <p>Valor do índice em 2016: ${braTen}</p>
    <p>Valor do índice em 2017: ${braEleven}</p>
    `
    }if(country === "Chile"){
    countryDiv.innerHTML = `
    <p>Valor do índice em 2007: ${chiOne}</p>
    <p>Valor do índice em 2008: ${chiTwo}</p>
    <p>Valor do índice em 2009: ${chiThree}</p>
    <p>Valor do índice em 2010: ${chiFour}</p>
    <p>Valor do índice em 2011: ${chiFive}</p>
    <p>Valor do índice em 2012: ${chiSix}</p>
    <p>Valor do índice em 2013: ${chiSeven}</p>
    <p>Valor do índice em 2014: ${chiEight}</p>
    <p>Valor do índice em 2015: ${chiNine}</p>
    <p>Valor do índice em 2016: ${chiTen}</p>
    <p>Valor do índice em 2017: ${chiEleven}</p>
    `
    }if(country === "México"){
    countryDiv.innerHTML = `
    <p>Valor do índice em 2007: ${mexOne}</p>
    <p>Valor do índice em 2008: ${mexTwo}</p>
    <p>Valor do índice em 2009: ${mexThree}</p>
    <p>Valor do índice em 2010: ${mexFour}</p>
    <p>Valor do índice em 2011: ${mexFive}</p>
    <p>Valor do índice em 2012: ${mexSix}</p>
    <p>Valor do índice em 2013: ${mexSeven}</p>
    <p>Valor do índice em 2014: ${mexEight}</p>
    <p>Valor do índice em 2015: ${mexNine}</p>
    <p>Valor do índice em 2016: ${mexTen}</p>
    <p>Valor do índice em 2017: ${mexEleven}</p>
    `
    }if(country === "Peru"){
    countryDiv.innerHTML = `
    <p>Valor do índice em 2007: ${perOne}</p>
    <p>Valor do índice em 2008: ${perTwo}</p>
    <p>Valor do índice em 2009: ${perThree}</p>
    <p>Valor do índice em 2010: ${perFour}</p>
    <p>Valor do índice em 2011: ${perFive}</p>
    <p>Valor do índice em 2012: ${perSix}</p>
    <p>Valor do índice em 2013: ${perSeven}</p>
    <p>Valor do índice em 2014: ${perEight}</p>
    <p>Valor do índice em 2015: ${perNine}</p>
    <p>Valor do índice em 2016: ${perTen}</p>
    <p>Valor do índice em 2017: ${perEleven}</p>
    `
    }
}
 
let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === "Población, mujeres")
let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === "Población, mujeres")
let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === "Población, mujeres")
let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === "Población, mujeres")
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
        x: -40,
        y: 80,
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
    },{
        name: 'Ano 2008',
        data: [poblacionBra.data[2008], poblacionChi.data[2008], poblacionMex.data[2008], poblacionPer.data[2008]],
      },{
        name: 'Ano 2009',
        data: [poblacionBra.data[2009], poblacionChi.data[2009], poblacionMex.data[2009], poblacionPer.data[2009]],
      },{
        name: 'Ano 2010',
        data: [poblacionBra.data[2010], poblacionChi.data[2010], poblacionMex.data[2010], poblacionPer.data[2010]],
      },{
        name: 'Ano 2011',
        data: [poblacionBra.data[2011], poblacionChi.data[2011], poblacionMex.data[2011], poblacionPer.data[2011]],
      },{
        name: 'Ano 2012',
        data: [poblacionBra.data[2012], poblacionChi.data[2012], poblacionMex.data[2012], poblacionPer.data[2012]],
      },{
        name: 'Ano 2013',
        data: [poblacionBra.data[2013], poblacionChi.data[2013], poblacionMex.data[2013], poblacionPer.data[2013]],
      },{
        name: 'Ano 2014',
        data: [poblacionBra.data[2014], poblacionChi.data[2014], poblacionMex.data[2014], poblacionPer.data[2014]],
      },{
        name: 'Ano 2015',
        data: [poblacionBra.data[2015], poblacionChi.data[2015], poblacionMex.data[2015], poblacionPer.data[2015]],
      },{
        name: 'Ano 2016',
        data: [poblacionBra.data[2016], poblacionChi.data[2016], poblacionMex.data[2016], poblacionPer.data[2016]],
      },{
        name: 'Ano 2017',
        color: '#18bc9c',
        data: [poblacionBra.data[2017], poblacionChi.data[2017], poblacionMex.data[2017], poblacionPer.data[2017]],
    }]
});


function ordemAm() {
    let x = document.getElementById("year-am").selectedIndex;
    let y = document.getElementById("year-am").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudoam-ordem").selectedIndex;
    let z = document.getElementById("conteudoam-ordem").options;
    let indicator = z[w].textContent;
    let resultTotalAm = document.getElementById("result-am");
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
    let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === indicator)
    let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === indicator)
    let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === indicator)
    let yearsAm = [{
            "country": "Brasil",
            "2007": poblacionBra.data[2007],
            "2008": poblacionBra.data[2008],
            "2009": poblacionBra.data[2009],
            "2010": poblacionBra.data[2010],
            "2011": poblacionBra.data[2011],
            "2012": poblacionBra.data[2012],
            "2013": poblacionBra.data[2013],
            "2014": poblacionBra.data[2014],
            "2015": poblacionBra.data[2015],
            "2015": poblacionBra.data[2016],
            "2017": poblacionBra.data[2017],
        },
        {
            "country": "Chile",
            "2007": poblacionChi.data[2007],
            "2008": poblacionChi.data[2008],
            "2009": poblacionChi.data[2009],
            "2010": poblacionChi.data[2010],
            "2011": poblacionChi.data[2011],
            "2012": poblacionChi.data[2012],
            "2013": poblacionChi.data[2013],
            "2014": poblacionChi.data[2014],
            "2015": poblacionChi.data[2015],
            "2015": poblacionChi.data[2016],
            "2017": poblacionChi.data[2017],
        },
        {
            "country": "México",
            "2007": poblacionMex.data[2007],
            "2008": poblacionMex.data[2008],
            "2009": poblacionMex.data[2009],
            "2010": poblacionMex.data[2010],
            "2011": poblacionMex.data[2011],
            "2012": poblacionMex.data[2012],
            "2013": poblacionMex.data[2013],
            "2014": poblacionMex.data[2014],
            "2015": poblacionMex.data[2015],
            "2015": poblacionMex.data[2016],
            "2017": poblacionMex.data[2017],
        },
        {
            "country": "Peru",
            "2007": poblacionPer.data[2007],
            "2008": poblacionPer.data[2008],
            "2009": poblacionPer.data[2009],
            "2010": poblacionPer.data[2010],
            "2011": poblacionPer.data[2011],
            "2012": poblacionPer.data[2012],
            "2013": poblacionPer.data[2013],
            "2014": poblacionPer.data[2014],
            "2015": poblacionPer.data[2015],
            "2015": poblacionPer.data[2016],
            "2017": poblacionPer.data[2017],
        },
    ];
function filterMinMax(){
let years=[]
for(let i of yearsAm) {
    if(i[ano] !== ""){
       years.push(i)
    }
}
return years
}

let ordenado = filterMinMax().sort((a, b) => {
        if (a[ano] > b[ano]) {
            return 1;
        }
        return -1;
    })

let max = ordenado[ordenado.length-1]

if(ordenado[ano] === undefined){
    resultTotalAm.innerHTML = `
    <p>Não há índices disponíveis para comparação</p>
    `  
}
if(ordenado[0][ano] === undefined && max[ano] === undefined){
    resultTotalAm.innerHTML = `
    <p>Não há índices disponíveis para comparação</p>
    ` 
}else{
    resultTotalAm.innerHTML = `
    <p>País com índice máximo: ${max.country}</p>
    <p>Índice: ${max[ano]}</p>
    <p>País com índice mínimo: ${ordenado[0].country}</p>
    <p>Índice: ${ordenado[0][ano]}</p>
    `
}
}  


function filterBra() {
    let x = document.getElementById("year-bra").selectedIndex;
    let y = document.getElementById("year-bra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-brasil").selectedIndex;
    let z = document.getElementById("conteudo-brasil").options;
    let indicator = z[w].textContent;
    let resultTotalBra = document.getElementById("result-bra");
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
    let indicatorBra = getCountrysBra().map(indic => indic["indicatorName"])
    for (indice in indicatorBra) {
        let indicatorBraTotal = indicatorBra[indice]
        let dataBra = getCountrysBra().map(indic => indic.data)
        for (datas of dataBra) {
            for (dataTotal in datas) {
                let dataTotalBra = dataTotal
                if (ano === dataTotalBra && indicator === indicatorBraTotal) {
                    resultTotalBra.innerHTML = "Valor do índice: " + poblacionBra.data[ano]
                    if (poblacionBra.data[ano] === "") {
                        resultTotalBra.innerHTML = "Índice não indicado"
                    }
                }
            }
        }

    }

}

function compararChiBra() {
    let x = document.getElementById("year-bra").selectedIndex;
    let y = document.getElementById("year-bra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-brasil").selectedIndex;
    let z = document.getElementById("conteudo-brasil").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararChiBra");
    let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === indicator)
    let indicatorChi = getCountrysChi().map(indic => indic["indicatorName"])
    for (indice in indicatorChi) {
        let indicatorChiTotal = indicatorChi[indice]
        let dataChi = getCountrysChi().map(indic => indic.data)
        for (datas of dataChi) {
            for (dataTotal in datas) {
                let dataTotalChi = dataTotal
                if (ano === dataTotalChi && indicator === indicatorChiTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Chile: " + poblacionChi.data[ano]
                    if (poblacionChi.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Chile: Índice não indicado"
                    }
                }
            }

        }

    }
}

function compararMexBra() {
    let x = document.getElementById("year-bra").selectedIndex;
    let y = document.getElementById("year-bra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-brasil").selectedIndex;
    let z = document.getElementById("conteudo-brasil").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararMexBra");
    let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === indicator)
    let indicatroMex = getCountrysMex().map(indic => indic["indicatorName"])
    for (indice in indicatroMex) {
        let indicatorMexTotal = indicatroMex[indice]
        let dataMex = getCountrysMex().map(indic => indic.data)
        for (datas of dataMex) {
            for (dataTotal in datas) {
                let dataTotalMex = dataTotal
                if (ano === dataTotalMex && indicator === indicatorMexTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no México: " + poblacionMex.data[ano]
                    if (poblacionMex.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no México: Índice não indicado"
                    }
                }
            }

        }

    }
}

function compararPerBra() {
    let x = document.getElementById("year-bra").selectedIndex;
    let y = document.getElementById("year-bra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-brasil").selectedIndex;
    let z = document.getElementById("conteudo-brasil").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararPerBra");
    let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === indicator)
    let indicatorPer = getCountrysPer().map(indic => indic["indicatorName"])
    for (indice in indicatorPer) {
        let indicatorPerTotal = indicatorPer[indice]
        let dataPer = getCountrysPer().map(indic => indic.data)
        for (datas of dataPer) {
            for (dataTotal in datas) {
                let dataTotalPer = dataTotal
                if (ano === dataTotalPer && indicator === indicatorPerTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Peru: " + poblacionPer.data[ano]
                    if (poblacionPer.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Peru: Índice não indicado"
                    }
                }
            }

        }

    }
}




function getCountrysBra() {
    return WORLDBANK.BRA["indicators"];
}

function showCountryBra() {
    let countryDiv = document.getElementById("conteudo-brasil");
    countryDiv.innerHTML = `
    ${getCountrysBra().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}

function filterChi() {
    let x = document.getElementById("year-chi").selectedIndex;
    let y = document.getElementById("year-chi").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-chile").selectedIndex;
    let z = document.getElementById("conteudo-chile").options;
    let indicator = z[w].textContent;
    let resultTotalChi = document.getElementById("result-chi");
    let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === indicator)
    let indicatorChi = getCountrysChi().map(indic => indic["indicatorName"])
    for (indice in indicatorChi) {
        let indicatorChiTotal = indicatorChi[indice]
        let dataChi = getCountrysChi().map(indic => indic.data)
        for (datas of dataChi) {
            for (dataTotal in datas) {
                let dataTotalChi = dataTotal
                if (ano === dataTotalChi && indicator === indicatorChiTotal) {
                    resultTotalChi.innerHTML = "Valor do índice: " + poblacionChi.data[ano]
                    if (poblacionChi.data[ano] === "") {
                        resultTotalChi.innerHTML = "Índice não indicado"
                    }
                }
            }

        }

    }
}

function compararBraChi(){
    let x = document.getElementById("year-chi").selectedIndex;
    let y = document.getElementById("year-chi").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-chile").selectedIndex;
    let z = document.getElementById("conteudo-chile").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararBraChi"); 
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
    let indicatorBra = getCountrysBra().map(indic => indic["indicatorName"])
    for (indice in indicatorBra) {
        let indicatorBraTotal = indicatorBra[indice]
        let dataBra = getCountrysBra().map(indic => indic.data)
        for (datas of dataBra) {
            for (dataTotal in datas) {
                let dataTotalBra = dataTotal
                if (ano === dataTotalBra && indicator === indicatorBraTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Brasil: " + poblacionBra.data[ano]
                    if (poblacionBra.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Brasil: Índice não indicado"
                    }
                }
            }
        }

    }
}

function compararMexChi(){
    let x = document.getElementById("year-chi").selectedIndex;
    let y = document.getElementById("year-chi").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-chile").selectedIndex;
    let z = document.getElementById("conteudo-chile").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararMexChi");
    let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === indicator)
    let indicatroMex = getCountrysMex().map(indic => indic["indicatorName"])
    for (indice in indicatroMex) {
        let indicatorMexTotal = indicatroMex[indice]
        let dataMex = getCountrysMex().map(indic => indic.data)
        for (datas of dataMex) {
            for (dataTotal in datas) {
                let dataTotalMex = dataTotal
                if (ano === dataTotalMex && indicator === indicatorMexTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no México: " + poblacionMex.data[ano]
                    if (poblacionMex.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no México: Índice não indicado"
                    }
                }
            }

        }

    }
}

function compararPerChi(){
    let x = document.getElementById("year-chi").selectedIndex;
    let y = document.getElementById("year-chi").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-chile").selectedIndex;
    let z = document.getElementById("conteudo-chile").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararPerChi");
    let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === indicator)
    let indicatorPer = getCountrysPer().map(indic => indic["indicatorName"])
    for (indice in indicatorPer) {
        let indicatorPerTotal = indicatorPer[indice]
        let dataPer = getCountrysPer().map(indic => indic.data)
        for (datas of dataPer) {
            for (dataTotal in datas) {
                let dataTotalPer = dataTotal
                if (ano === dataTotalPer && indicator === indicatorPerTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Peru: " + poblacionPer.data[ano]
                    if (poblacionPer.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Peru: Índice não indicado"
                    }
                }
            }

        }

    }
}

function getCountrysChi() {
    return WORLDBANK.CHL["indicators"];
}


function showCountryChi() {
    let countryDiv = document.getElementById("conteudo-chile");
    countryDiv.innerHTML = `
    ${getCountrysChi().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}


function filterMex() {
    let x = document.getElementById("year-mex").selectedIndex;
    let y = document.getElementById("year-mex").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-mexico").selectedIndex;
    let z = document.getElementById("conteudo-mexico").options;
    let indicator = z[w].textContent;
    let resultTotalMex = document.getElementById("result-mex");
    let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === indicator)
    let indicatroMex = getCountrysMex().map(indic => indic["indicatorName"])
    for (indice in indicatroMex) {
        let indicatorMexTotal = indicatroMex[indice]
        let dataMex = getCountrysMex().map(indic => indic.data)
        for (datas of dataMex) {
            for (dataTotal in datas) {
                let dataTotalMex = dataTotal
                if (ano === dataTotalMex && indicator === indicatorMexTotal) {
                    resultTotalMex.innerHTML = "Valor do índice: " + poblacionMex.data[ano]
                    if (poblacionMex.data[ano] === "") {
                        resultTotalMex.innerHTML = "Índice não indicado"
                    }
                }
            }

        }

    }
}

function compararBraMex(){
    let x = document.getElementById("year-mex").selectedIndex;
    let y = document.getElementById("year-mex").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-mexico").selectedIndex;
    let z = document.getElementById("conteudo-mexico").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararBraMex");
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
    let indicatorBra = getCountrysBra().map(indic => indic["indicatorName"])
    for (indice in indicatorBra) {
        let indicatorBraTotal = indicatorBra[indice]
        let dataBra = getCountrysBra().map(indic => indic.data)
        for (datas of dataBra) {
            for (dataTotal in datas) {
                let dataTotalBra = dataTotal
                if (ano === dataTotalBra && indicator === indicatorBraTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Brasil: " + poblacionBra.data[ano]
                    if (poblacionBra.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Brasil: Índice não indicado"
                    }
                }
            }
        }
    }
}

function compararChiMex(){
    let x = document.getElementById("year-mex").selectedIndex;
    let y = document.getElementById("year-mex").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-mexico").selectedIndex;
    let z = document.getElementById("conteudo-mexico").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararChiMex");
    let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === indicator)
    let indicatorChi = getCountrysChi().map(indic => indic["indicatorName"])
    for (indice in indicatorChi) {
        let indicatorChiTotal = indicatorChi[indice]
        let dataChi = getCountrysChi().map(indic => indic.data)
        for (datas of dataChi) {
            for (dataTotal in datas) {
                let dataTotalChi = dataTotal
                if (ano === dataTotalChi && indicator === indicatorChiTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Chile: " + poblacionChi.data[ano]
                    if (poblacionChi.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Chile: Índice não indicado"
                    }
                }
            }

        }

    }
}

function compararPerMex(){
    let x = document.getElementById("year-mex").selectedIndex;
    let y = document.getElementById("year-mex").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-mexico").selectedIndex;
    let z = document.getElementById("conteudo-mexico").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararPerMex");
    let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === indicator)
    let indicatorPer = getCountrysPer().map(indic => indic["indicatorName"])
    for (indice in indicatorPer) {
        let indicatorPerTotal = indicatorPer[indice]
        let dataPer = getCountrysPer().map(indic => indic.data)
        for (datas of dataPer) {
            for (dataTotal in datas) {
                let dataTotalPer = dataTotal
                if (ano === dataTotalPer && indicator === indicatorPerTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Peru: " + poblacionPer.data[ano]
                    if (poblacionPer.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Peru: Índice não indicado"
                    }
                }
            }

        }

    }
}

function getCountrysMex() {
    return WORLDBANK.MEX["indicators"];
}


function showCountryMex() {
    let countryDiv = document.getElementById("conteudo-mexico");
    countryDiv.innerHTML = `
    ${getCountrysMex().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}


function filterPer() {
    let x = document.getElementById("year-per").selectedIndex;
    let y = document.getElementById("year-per").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-peru").selectedIndex;
    let z = document.getElementById("conteudo-peru").options;
    let indicator = z[w].textContent;
    let resultTotalPer = document.getElementById("result-per");
    let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === indicator)
    let indicatorPer = getCountrysPer().map(indic => indic["indicatorName"])
    for (indice in indicatorPer) {
        let indicatorPerTotal = indicatorPer[indice]
        let dataPer = getCountrysPer().map(indic => indic.data)
        for (datas of dataPer) {
            for (dataTotal in datas) {
                let dataTotalPer = dataTotal
                if (ano === dataTotalPer && indicator === indicatorPerTotal) {
                    resultTotalPer.innerHTML = "Valor do índice: " + poblacionPer.data[ano]
                    if (poblacionPer.data[ano] === "") {
                        resultTotalPer.innerHTML = "Índice não indicado"
                    }
                }
            }

        }

    }
}

function compararBraPer(){
    let x = document.getElementById("year-per").selectedIndex;
    let y = document.getElementById("year-per").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-peru").selectedIndex;
    let z = document.getElementById("conteudo-peru").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararBraPer");
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
    let indicatorBra = getCountrysBra().map(indic => indic["indicatorName"])
    for (indice in indicatorBra) {
        let indicatorBraTotal = indicatorBra[indice]
        let dataBra = getCountrysBra().map(indic => indic.data)
        for (datas of dataBra) {
            for (dataTotal in datas) {
                let dataTotalBra = dataTotal
                if (ano === dataTotalBra && indicator === indicatorBraTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Brasil: " + poblacionBra.data[ano]
                    if (poblacionBra.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Brasil: Índice não indicado"
                    }
                }
            }
        }
    }
}

function compararChiPer(){
    let x = document.getElementById("year-per").selectedIndex;
    let y = document.getElementById("year-per").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-peru").selectedIndex;
    let z = document.getElementById("conteudo-peru").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararChiPer");
    let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === indicator)
    let indicatorChi = getCountrysChi().map(indic => indic["indicatorName"])
    for (indice in indicatorChi) {
        let indicatorChiTotal = indicatorChi[indice]
        let dataChi = getCountrysChi().map(indic => indic.data)
        for (datas of dataChi) {
            for (dataTotal in datas) {
                let dataTotalChi = dataTotal
                if (ano === dataTotalChi && indicator === indicatorChiTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no Chile: " + poblacionChi.data[ano]
                    if (poblacionChi.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no Chile: Índice não indicado"
                    }
                }
            }
        }
    }
}

function compararMexPer(){
    let x = document.getElementById("year-per").selectedIndex;
    let y = document.getElementById("year-per").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudo-peru").selectedIndex;
    let z = document.getElementById("conteudo-peru").options;
    let indicator = z[w].textContent;
    let resultTotalComp = document.getElementById("compararMexPer");
    let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === indicator)
    let indicatroMex = getCountrysMex().map(indic => indic["indicatorName"])
    for (indice in indicatroMex) {
        let indicatorMexTotal = indicatroMex[indice]
        let dataMex = getCountrysMex().map(indic => indic.data)
        for (datas of dataMex) {
            for (dataTotal in datas) {
                let dataTotalMex = dataTotal
                if (ano === dataTotalMex && indicator === indicatorMexTotal) {
                    resultTotalComp.innerHTML = "Valor do índice no México: " + poblacionMex.data[ano]
                    if (poblacionMex.data[ano] === "") {
                        resultTotalComp.innerHTML = "Valor do índice no México: Índice não indicado"
                    }
                }
            }
        }
    }
}

function getCountrysPer() {
    return WORLDBANK.PER["indicators"];
}

function showCountryPer() {
    let countryDiv = document.getElementById("conteudo-peru");
    countryDiv.innerHTML = `
    ${getCountrysPer().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}


function mostraOcultar(e) {
    let tabSeleccionado = e.target.dataset.tabSeleccionado;
    let brasil = document.getElementById("brasil");
    let chile = document.getElementById("chile");
    let mexico = document.getElementById("mexico");
    let peru = document.getElementById("peru");
    let am = document.getElementById("am");
    let home = document.getElementById("home");
    let grafic= document.getElementById("grafic");
    if (tabSeleccionado === "tab-am") {
        chile.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        brasil.style.display = 'none';
        home.style.display = 'none';
        am.style.display = 'block';
        grafic.style.display = 'none';

    }
    if (tabSeleccionado === "tab-brasil") {
        am.style.display = 'none';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        home.style.display = 'none';
        brasil.style.display = 'block';
        grafic.style.display = 'none';

    }
    if (tabSeleccionado === "tab-chile") {
        am.style.display = 'none';
        brasil.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        chile.style.display = 'block';
        home.style.display = 'none';
        grafic.style.display = 'none';

    }
    if (tabSeleccionado === "tab-mexico") {
        am.style.display = 'none';
        chile.style.display = 'none';
        brasil.style.display = 'none';
        peru.style.display = 'none';
        home.style.display = 'none';
        mexico.style.display = 'block';
        grafic.style.display = 'none';

    }
    if (tabSeleccionado === "tab-peru") {
        am.style.display = 'none';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        brasil.style.display = 'none';
        home.style.display = 'none';
        peru.style.display = 'block';
        grafic.style.display = 'none';
    }
    if (tabSeleccionado === "tab-home"){
        am.style.display = 'none';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        brasil.style.display = 'none';
        peru.style.display = 'none';
        home.style.display = 'block';
        grafic.style.display = 'none';
    }
    if (tabSeleccionado === "tab-grafic"){
        am.style.display = 'none';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        brasil.style.display = 'none';
        peru.style.display = 'none';
        home.style.display = 'none';
        grafic.style.display = 'block';
    }
};


function carregarPag() {
    let home = document.getElementById("home");
    let brasil = document.getElementById("brasil");
    let chile = document.getElementById("chile");
    let mexico = document.getElementById("mexico");
    let peru = document.getElementById("peru");
    let am = document.getElementById("am");
    let grafic= document.getElementById("grafic")
    chile.style.display = 'none';
    mexico.style.display = 'none';
    brasil.style.display = 'none';
    peru.style.display = 'none';
    am.style.display = 'none';
    home.style.display = 'block';
    grafic.style.display = 'none'
    let elementosTab = document.getElementsByClassName("tab");
    for (let elementos of elementosTab) {
        elementos.addEventListener('click', mostraOcultar)
    }
}
carregarPag();