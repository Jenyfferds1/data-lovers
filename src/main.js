window.onload = function() {
    showCountryBra();
    showCountryChi();
    showCountryMex();
    showCountryPer();
    showCountryAm();
    indAmBra();
    indAmChi();
    indAmMex();
    indAmPer();
};

function showCountryAm() {
    let countryDiv = document.getElementById("conteudoam");
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === "Población, mujeres")
    let poblacionDataBra = poblacionBra.data["2017"]
    let poblacionChi = getCountrysChi().find(indic => indic.indicatorName === "Población, mujeres")
    let poblacionDataChi = poblacionChi.data["2017"]
    let poblacionMex = getCountrysMex().find(indic => indic.indicatorName === "Población, mujeres")
    let poblacionDataMex = poblacionMex.data["2017"]
    let poblacionPer = getCountrysPer().find(indic => indic.indicatorName === "Población, mujeres")
    let poblacionDataPer = poblacionPer.data["2017"]
    countryDiv.innerHTML = `
    <p>Población, mujeres na América Latina em 2017</p>
    <p>Población, mujeres Brasil<p/>
    <p>${poblacionDataBra}</p>
    <p>Población, mujeres Chile<p/>
    <p>${poblacionDataChi}</p>
    <p>Población, mujeres Mexico<p/>
    <p>${poblacionDataMex}</p>
    <p>Población, mujeres Peru<p/>
    <p>${poblacionDataPer}</p>
    `
}

function indAmBra() {
    let countryDivBra = document.getElementById("conteudoamBra");
    countryDivBra.innerHTML = `
    ${getCountrysBra().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}

// function minMaxAmBra(){
//     let w = document.getElementById("conteudoamBra").selectedIndex;
//     let z = document.getElementById("conteudoamBra").options;
//     let indicator = z[w].textContent;
//     let resultTotalBraAm = document.getElementById("result-am-bra");
//     let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
//     let indicatorBra = getCountrysBra().map(indic => indic["indicatorName"])
//     for (indice in indicatorBra) {
//         let indicatorBraTotal = indicatorBra[indice]
//         let dataBra = getCountrysBra().map(indic => indic.data)
//         for (datas of dataBra) {
//             for (dataTotal in datas) {
//                 let dataTotalBra = dataTotal[datas]
//                 console.log(dataTotalBra)
//             if(indicator === indicatorBraTotal) {
//                 resultTotalBraAm.innerHTML = "Valor do índice: " + Math.max(poblacionBra.data)
//                 //console.log(poblacionBra.data)
//              }
//          }
//      }
//   }
// }

function minMaxAmBra(){
    let w = document.getElementById("conteudoamBra").selectedIndex;
    let z = document.getElementById("conteudoamBra").options;
    let indicator = z[w].textContent;
    let resultTotalBraAm = document.getElementById("result-am-bra");
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
    let anos = [poblacionBra.data[2007], poblacionBra.data[2008], poblacionBra.data[2009], poblacionBra.data[2010], poblacionBra.data[2011],poblacionBra.data[2012],poblacionBra.data[2013], poblacionBra.data[2014], poblacionBra.data[2015], poblacionBra.data[2016],poblacionBra.data[2017]]
    let max = anos.reduce(function(a,b){
      return Math.max(a,b)
    })
    let min = anos.reduce(function(a,b){
        return Math.min(a,b)
      })
      console.log(anos, min, max)

}

function indAmChi(){
    let countryDivChi = document.getElementById("conteudoamChi");
    countryDivChi.innerHTML = `
    ${getCountrysChi().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}
function indAmMex(){
    let countryDivMex = document.getElementById("conteudoamMex");
    countryDivMex.innerHTML = `
    ${getCountrysMex().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}
function indAmPer(){
    let countryDivPer = document.getElementById("conteudoamPer");
    countryDivPer.innerHTML = `
    ${getCountrysPer().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}

function filterBra() {
    let x = document.getElementById("anoBra").selectedIndex;
    let y = document.getElementById("anoBra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudobrasil").selectedIndex;
    let z = document.getElementById("conteudobrasil").options;
    let indicator = z[w].textContent;
    let resultTotalBra = document.getElementById("resultBra");
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
    let x = document.getElementById("anoBra").selectedIndex;
    let y = document.getElementById("anoBra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudobrasil").selectedIndex;
    let z = document.getElementById("conteudobrasil").options;
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
    let x = document.getElementById("anoBra").selectedIndex;
    let y = document.getElementById("anoBra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudobrasil").selectedIndex;
    let z = document.getElementById("conteudobrasil").options;
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
    let x = document.getElementById("anoBra").selectedIndex;
    let y = document.getElementById("anoBra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudobrasil").selectedIndex;
    let z = document.getElementById("conteudobrasil").options;
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
    let countryDiv = document.getElementById("conteudobrasil");
    countryDiv.innerHTML = `
    ${getCountrysBra().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}

// function maxBra() {
//     let aux = []
//     let indMaxBra = document.getElementById("ind-max-bra")
//     let filtro = getCountrysBra().map(indic => indic.data)
//     for (x in filtro) {
//         aux.push(filtro[x])
//     }
//     let maxInd = Math.max(aux)
//     console.log(maxInd)

// }

function filterChi() {
    let x = document.getElementById("anoChi").selectedIndex;
    let y = document.getElementById("anoChi").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudochile").selectedIndex;
    let z = document.getElementById("conteudochile").options;
    let indicator = z[w].textContent;
    let resultTotalChi = document.getElementById("resultChi");
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
    let x = document.getElementById("anoChi").selectedIndex;
    let y = document.getElementById("anoChi").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudochile").selectedIndex;
    let z = document.getElementById("conteudochile").options;
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
    let x = document.getElementById("anoChi").selectedIndex;
    let y = document.getElementById("anoChi").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudochile").selectedIndex;
    let z = document.getElementById("conteudochile").options;
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
    let x = document.getElementById("anoChi").selectedIndex;
    let y = document.getElementById("anoChi").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudochile").selectedIndex;
    let z = document.getElementById("conteudochile").options;
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
    let countryDiv = document.getElementById("conteudochile");
    countryDiv.innerHTML = `
    ${getCountrysChi().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}


function filterMex() {
    let x = document.getElementById("anoMex").selectedIndex;
    let y = document.getElementById("anoMex").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudomexico").selectedIndex;
    let z = document.getElementById("conteudomexico").options;
    let indicator = z[w].textContent;
    let resultTotalMex = document.getElementById("resultMex");
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
    let x = document.getElementById("anoMex").selectedIndex;
    let y = document.getElementById("anoMex").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudomexico").selectedIndex;
    let z = document.getElementById("conteudomexico").options;
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
    let x = document.getElementById("anoMex").selectedIndex;
    let y = document.getElementById("anoMex").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudomexico").selectedIndex;
    let z = document.getElementById("conteudomexico").options;
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
    let x = document.getElementById("anoMex").selectedIndex;
    let y = document.getElementById("anoMex").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudomexico").selectedIndex;
    let z = document.getElementById("conteudomexico").options;
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
    let countryDiv = document.getElementById("conteudomexico");
    countryDiv.innerHTML = `
    ${getCountrysMex().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}


function filterPer() {
    let x = document.getElementById("anoPer").selectedIndex;
    let y = document.getElementById("anoPer").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudoperu").selectedIndex;
    let z = document.getElementById("conteudoperu").options;
    let indicator = z[w].textContent;
    let resultTotalPer = document.getElementById("resultPer");
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
    let x = document.getElementById("anoPer").selectedIndex;
    let y = document.getElementById("anoPer").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudoperu").selectedIndex;
    let z = document.getElementById("conteudoperu").options;
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
    let x = document.getElementById("anoPer").selectedIndex;
    let y = document.getElementById("anoPer").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudoperu").selectedIndex;
    let z = document.getElementById("conteudoperu").options;
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
    let x = document.getElementById("anoPer").selectedIndex;
    let y = document.getElementById("anoPer").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudoperu").selectedIndex;
    let z = document.getElementById("conteudoperu").options;
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
    let countryDiv = document.getElementById("conteudoperu");
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

    if (tabSeleccionado === "tabAm") {
        am.style.display = 'block';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        brasil.style.display = 'none';


    }
    if (tabSeleccionado === "tabBrasil") {
        am.style.display = 'none';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        brasil.style.display = 'block';

    }
    if (tabSeleccionado === "tabChile") {
        am.style.display = 'none';
        brasil.style.display = 'none';
        mexico.style.display = 'none';
        peru.style.display = 'none';
        chile.style.display = 'block';


    }
    if (tabSeleccionado === "tabMexico") {
        am.style.display = 'none';
        chile.style.display = 'none';
        brasil.style.display = 'none';
        peru.style.display = 'none';
        mexico.style.display = 'block';

    }
    if (tabSeleccionado === "tabPeru") {
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