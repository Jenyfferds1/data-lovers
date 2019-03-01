window.onload = function() {
    showCountryBra();
    showCountryChi();
    showCountryMex();
    showCountryPer();
};


function teste() {
    let x = document.getElementById("anoBra").selectedIndex;
    let y = document.getElementById("anoBra").options;
    let ano = y[x].textContent;
    //console.log(ano)
    let w = document.getElementById("conteudobrasil").selectedIndex;
    let z = document.getElementById("conteudobrasil").options;
    let indicator = z[w].textContent;
    console.log(indicator)
    let resultTotalBra = document.getElementById("result");
    for (year in WORLDBANK.BRA) {
        for (indic of WORLDBANK.BRA[year]) {
            for (a in indic.data) {
                for (f of getCountrysBraThree()) {
                    console.log("ANO", ano, "A", a, "INDICADOR", indicator, "F", f)
                    if (ano === a && indicator === f) {

                        resultTotalBra.innerHTML = "tchau"
                    }
                }
            }
        }
    }
}

function getCountrysBra() {
    return WORLDBANK.BRA["indicators"];
}


function getCountrysBraThree() {
    let aux = []
    for (ind in WORLDBANK.BRA) {
        for (i of WORLDBANK.BRA[ind]) {
            aux.push(i.indicatorName)
        }
    }
    return aux
}
//console.log("TESTEEEEWFS", getCountrysBraThree())

function showCountryBra() {
    let countryDiv = document.getElementById("conteudobrasil");
    countryDiv.innerHTML = `
    ${getCountrysBra().map((indicador)=>`
    <option>  
    <input type="checkbox" class="text-name">
      <label value="BRA">${indicador["indicatorName"]}</label>
     </option>
    `).join("")}
    `
}

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

// function resultBra(){
//      let anoBra = menuBra.value;
//     let resultTotalBra = document.getElementById("result");
//     resultTotalBra.innerHTML = `
//     ${getCountrysBra().map((indicador)=>`
//     <p>${indicador["data"][anoBra]}</p>
//     `).join("")}
//     `
// }

let menuChi = document.getElementById("anoChi")
menuChi.addEventListener('change', showCountryChi)
let menuMex = document.getElementById("anoMex")
menuMex.addEventListener('change', showCountryMex)
let menuPer = document.getElementById("anoPer")
menuPer.addEventListener('change', showCountryPer)
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
    brasil.style.display = 'block';
    peru.style.display = 'none';
    am.style.display = 'none';
    let elementosTab = document.getElementsByClassName("tab");
    for (let elementos of elementosTab) {
        elementos.addEventListener('click', mostraOcultar)
    }
}
carregarPag();