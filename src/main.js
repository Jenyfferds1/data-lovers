window.onload = function() {
    showCountryBra();
    showCountryChi();
    showCountryMex();
    showCountryPer();
    // showCountryAm();
    // indAmBra();
};

// function showCountryAm() {
//     let countryDiv = document.getElementById("conteudo-am");
//     let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === "Población, mujeres")
//     let poblacionDataBra = poblacionBra.data["2017"]
//     let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === "Población, mujeres")
//     let poblacionDataChi = poblacionChi.data["2017"]
//     let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === "Población, mujeres")
//     let poblacionDataMex = poblacionMex.data["2017"]
//     let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === "Población, mujeres")
//     let poblacionDataPer = poblacionPer.data["2017"]
//     countryDiv.innerHTML = `
//     <p>População de mulheres na América Latina em 2017</p>
//     <p>População de mulheres no Brasil<p/>
//     <p>${poblacionDataBra}</p>
//     <p>População de mulheres no Chile<p/>
//     <p>${poblacionDataChi}</p>
//     <p>População de mulheres no México<p/>
//     <p>${poblacionDataMex}</p>
//     <p>População de mulheres no Peru<p/>
//     <p>${poblacionDataPer}</p>
//     `
// }


google.charts.load('current', { packages: ['corechart', 'bar'] });
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === "Población, mujeres")
    let poblacionDataBra = poblacionBra.data["2017"]
    let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === "Población, mujeres")
    let poblacionDataChi = poblacionChi.data["2017"]
    let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === "Población, mujeres")
    let poblacionDataMex = poblacionMex.data["2017"]
    let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === "Población, mujeres")
    let poblacionDataPer = poblacionPer.data["2017"]
    let data = google.visualization.arrayToDataTable([
        ['Países', 'População de 2017', { role: 'style' }, { role: 'annotation' }],
        ['Brasil', poblacionDataBra, 'pink', poblacionDataBra],
        ['Chile', poblacionDataChi, 'pink', poblacionDataChi],
        ['México', poblacionDataMex, 'pink', poblacionDataMex],
        ['Peru', poblacionDataPer, 'pink', poblacionDataPer]
    ]);

    let materialOptions = {
        chart: {
            title: 'População de mulheres em 2017'
        },
        hAxis: {
            title: 'Total População de Mulheres',
            minValue: 0,
        },
        vAxis: {
            title: 'População de mulheres em 2017'
        },
        bars: 'horizontal'
    };
    let materialChart = new google.charts.Bar(document.getElementById('chart_div'));
    materialChart.draw(data, materialOptions);
}



// function indAmBra() {
//     let countryDivBra = document.getElementById("conteudoam-ordem");
//     countryDivBra.innerHTML = `
//     ${getCountrysBra().map((indicador)=>`
//     <option>${indicador["indicatorName"]}</option>
//     `).join("")}
//     `
// }

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

    let ordenado = yearsAm.sort((a, b) => {
        if (a[ano] > b[ano]) {
            return 1;
        }
        return -1;
    });
    //  if(ordenado[ano] === ""){
    //     resultTotalAm.innerHTML =`
    //    <p>Índice não definido</p> 
    //    `
    //  }else{
    resultTotalAm.innerHTML = `
<p>País com índice máximo: ${ordenado[3].country}</p>
<p>Índice: ${ordenado[3][ano]}</p>
<p>País com índice mínimo: ${ordenado[0].country}</p>
<p>Índice: ${ordenado[0][ano]}</p>
`
        // }
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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
                        resultTotalComp.innerHTML = "Índice não indicado"
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

    if (tabSeleccionado === "tab-am") {
        am.style.display = 'block';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        brasil.style.display = 'none';


    }
    if (tabSeleccionado === "tab-brasil") {
        am.style.display = 'none';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        brasil.style.display = 'block';

    }
    if (tabSeleccionado === "tab-chile") {
        am.style.display = 'none';
        brasil.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        chile.style.display = 'block';


    }
    if (tabSeleccionado === "tab-mexico") {
        am.style.display = 'none';
        chile.style.display = 'none';
        brasil.style.display = 'none';
        peru.style.display = 'none';
        mexico.style.display = 'block';

    }
    if (tabSeleccionado === "tab-peru") {
        am.style.display = 'none';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        brasil.style.display = 'none';
        peru.style.display = 'block';
    }
};


function carregarPag() {
    let brasil = document.getElementById("brasil");
    let chile = document.getElementById("chile");
    let mexico = document.getElementById("mexico");
    let peru = document.getElementById("peru");
    let am = document.getElementById("am");
    chile.style.display = 'none';
    mexico.style.display = 'none';
    brasil.style.display = 'none';
    peru.style.display = 'none';
    am.style.display = 'block';
    let elementosTab = document.getElementsByClassName("tab");
    for (let elementos of elementosTab) {
        elementos.addEventListener('click', mostraOcultar)
    }
}
carregarPag();