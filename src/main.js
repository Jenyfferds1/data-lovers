window.onload = function() {
    showCountryBra();
    showCountryChi();
    showCountryMex();
    showCountryPer();
};



function getCountrysBra() {
    return WORLDBANK.BRA["indicators"];
}


function showCountryBra() {
    let countryDiv = document.getElementById("conteudobrasil");
    countryDiv.innerHTML = `
    ${getCountrysBra().map((indicador)=>`
     <ul class="country-item">
      <li><a href="#" class="text-name">${indicador["indicatorName"]}</a></li>
     </ul>
    `).join("")}
    `
}

function getCountrysChi() {
    return WORLDBANK.CHL["indicators"];
}


function showCountryChi() {
    let countryDiv = document.getElementById("conteudochile");
    countryDiv.innerHTML = `
    ${getCountrysChi().map((indicador)=>`
     <ul class="country-item">
      <li class="text-name">${indicador["indicatorName"]}</li>
     </ul>
    `).join("")}
    `
}

function getCountrysMex() {
    return WORLDBANK.MEX["indicators"];
}


function showCountryMex() {
    let countryDiv = document.getElementById("conteudomexico");
    countryDiv.innerHTML = `
    ${getCountrysMex().map((indicador)=>`
     <ul class="country-item">
      <li class="text-name">${indicador["indicatorName"]}</li>
     </ul>
    `).join("")}
    `
}

function getCountrysPer() {
    return WORLDBANK.PER["indicators"];
}


function showCountryPer() {
    let countryDiv = document.getElementById("conteudoperu");
    countryDiv.innerHTML = `
    ${getCountrysPer().map((indicador)=>`
     <ul class="country-item">
      <li class="text-name">${indicador["indicatorName"]}</li>
     </ul>
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