window.onload = function() {
    showCountryBra();
    showCountryChi();
    showCountryMex();
    showCountryPer();
    showCountryAm();
};


// let menuBra = document.getElementById("anoBra")
// menuBra.addEventListener('change', showCountryBra)
let menuChi = document.getElementById("anoChi")
menuChi.addEventListener('change', showCountryChi)
let menuMex = document.getElementById("anoMex")
menuMex.addEventListener('change', showCountryMex)
let menuPer = document.getElementById("anoPer")
menuPer.addEventListener('change', showCountryPer)

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
showCountryAm()

function teste() {
    let x = document.getElementById("anoBra").selectedIndex;
    let y = document.getElementById("anoBra").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudobrasil").selectedIndex;
    //console.log(w)
    let z = document.getElementById("conteudobrasil").options;
    //console.log(z)
    let indicator = z[w].textContent;
    //console.log(indicator)
    let resultTotalBra = document.getElementById("result");
    let poblacionBra = getCountrysBra().find(indic => indic.indicatorName === indicator)
        //console.log(poblacionBra)
    let indicatorBra = getCountrysBra().map(indic => indic["indicatorName"])
    for (indice in indicatorBra) {
        let indicatorBraTotal = indicatorBra[indice]
        let dataBra = getCountrysBra().map(indic => indic.data)
        for (datas of dataBra) {
            //console.log(datas)
            for (dataTotal in datas) {
                let dataTotalBra = dataTotal
                if (ano === dataTotalBra && indicator === indicatorBraTotal) {
                    resultTotalBra.innerHTML = poblacionBra.data[ano]
                }
            }

        }

    }
}


function getCountrysBra() {
    return WORLDBANK.BRA["indicators"];
}


// function getCountrysBraThree() {
//     let aux = []
//     for (ind in WORLDBANK.BRA) {
//         for (i in WORLDBANK.BRA[ind]) {
//             aux.push(i.indicatorName)
//         }
//     }
//     return aux
// }
// console.log("TESTEEEEWFS", (getCountrysBraThree()))


// function showDateBra() {
//     let dateDiv = document.getElementById("anoBra");
//     console.log(dates)
//     dateDiv.innerHTML = `
//     ${getCountrysBra().map((indicador)=>`
//     <option>  
//     <input type="checkbox" class="text-name">
//       <label value="BRA">${indicador["data"]}</label>
//      </option>
//     `).join("")}
//     `
// }
function showCountryBra() {
    let countryDiv = document.getElementById("conteudobrasil");
    countryDiv.innerHTML = `
    ${getCountrysBra().map((indicador)=>`
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `

}

function maxBra() {
    let aux = []
    let indMaxBra = document.getElementById("ind-max-bra")
    let filtro = getCountrysBra().map(indic => indic.data)
    for (x in filtro) {
        aux.push(filtro[x])
    }
    let maxInd = Math.max(aux)
    console.log(maxInd)

}
//maxBra()

// function resultBra(){
//      let anoBra = menuBra.value;
//     let resultTotalBra = document.getElementById("result");
//     resultTotalBra.innerHTML = `
//     ${getCountrysBra().map((indicador)=>`
//     <p>${indicador["data"][anoBra]}</p>
//     `).join("")}
//     `
// }


function getCountrysChi() {
    return WORLDBANK.CHL["indicators"];
}


function showCountryChi() {
    let anoChi = menuChi.value;
    let countryDiv = document.getElementById("conteudochile");
    countryDiv.innerHTML = `
    ${getCountrysChi().map((indicador)=>`
    <ul class="country-item">
      <li class="text-name">${indicador["indicatorName"]}</li>
     </ul>
     <th>Índice</th>
     <table class="tabela">
     <tr class="linha">
     <td class="celula">${indicador["data"][anoChi]}</td>
     </tr>
     </table>
    `).join("")}
    `
}

function getCountrysMex() {
    return WORLDBANK.MEX["indicators"];
}


function showCountryMex() {
    let anoMex = menuMex.value;
    let countryDiv = document.getElementById("conteudomexico");
    countryDiv.innerHTML = `
    ${getCountrysMex().map((indicador)=>`
     <ul class="country-item">
      <li class="text-name">${indicador["indicatorName"]}</li>
     </ul>
     <th>Índice</th>
     <table class="tabela">
     <tr class="linha">
     <td class="celula">${indicador["data"][anoMex]}</td>
     </tr>
     </table>
    `).join("")}
    `
}

function getCountrysPer() {
    return WORLDBANK.PER["indicators"];
}


function showCountryPer() {
    let anoPer = menuPer.value;
    let countryDiv = document.getElementById("conteudoperu");
    countryDiv.innerHTML = `
    ${getCountrysPer().map((indicador)=>`
     <ul class="country-item">
      <li class="text-name">${indicador["indicatorName"]}</li>
     </ul>
     <th>Índice</th>
     <table class="tabela">
     <tr class="linha">
     <td class="celula">${indicador["data"][anoPer]}</td>
     </tr>
     </table>
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