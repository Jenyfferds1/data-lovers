window.onload = function () {
    showCountry("BRA", "conteudo-brasil");
    showCountry("CHL", "conteudo-chile");
    showCountry("MEX", "conteudo-mexico");
    showCountry("PER", "conteudo-peru");
    showCountry("BRA", "conteudo-brasil-am");
    showCountry("BRA", "conteudoam-ordem");
};

function getCountrys(country) {
    return WORLDBANK[country]["indicators"];
}

function showCountry(country, id) {
    let countryDiv = document.getElementById(id);
    countryDiv.innerHTML = `
    ${getCountrys(country).map((indicador) => `
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}

function filterCountry(idOne, idTwo, idResult, country) {
    let x = document.getElementById(idOne).selectedIndex;
    let y = document.getElementById(idOne).options;
    let ano = y[x].textContent;
    let w = document.getElementById(idTwo).selectedIndex;
    let z = document.getElementById(idTwo).options;
    let indicator = z[w].textContent;
    let resultTotal = document.getElementById(idResult);
    let poblacion = getCountrys(country).find(indic => indic.indicatorName === indicator)
    let indicatorCountry = getCountrys(country).map(indic => indic["indicatorName"])
    for (indice in indicator) {
        let indicatorTotal = indicatorCountry[indice]
        let dataCountry = getCountrys(country).map(indic => indic.data)
        for (datas of dataCountry) {
            for (dataTotal in datas) {
                let dataTotalCountry = dataTotal
                if (ano === dataTotalCountry && indicator === indicatorTotal) {
                    resultTotal.innerHTML = "Valor do índice: " + poblacion.data[ano]
                    if (poblacion.data[ano] === "") {
                        resultTotal.innerHTML = "Índice não indicado"
                    }
                }
            }
        }
    }
}

function showCountryAm() {
    let countryDiv = document.getElementById("result-am-two");
    let w = document.getElementById("ind-total-countrys").selectedIndex;
    let z = document.getElementById("ind-total-countrys").options;
    let country = z[w].textContent;
    let x = document.getElementById("conteudo-brasil-am").selectedIndex;
    let y = document.getElementById("conteudo-brasil-am").options;
    let indicator = y[x].textContent;
    let poblacionBra = getCountrys("BRA").find(indic => indic.indicatorName === indicator)
    let poblacionChi = getCountrys("CHL").find(indic => indic.indicatorName === indicator)
    let poblacionMex = getCountrys("MEX").find(indic => indic.indicatorName === indicator)
    let poblacionPer = getCountrys("PER").find(indic => indic.indicatorName === indicator)

    let key = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]
    // let date = poblacionBra.data
    // let ind = key.map((g) => {
    //     if (date[g] === "") {
    //         return "Índice não indicado"
    //     } else {
    //         return date[g]
    //     }
    // })

    function ind(pob) {
        let date = pob.data
        let ind = key.map((g) => {
            if (date[g] === "") {
                return "Índice não indicado"
            } else {
                return date[g]
            }
        })
        return ind
    }

    ind(poblacionBra).map((i) => console.log(i))
    if (country === "Brasil") {
        countryDiv.innerHTML = `
        ${key.map((year) => `Valor do índice em ${year}:`).join("")}
        ${ind(poblacionBra).map((i) => `${i}`).join("")}
        `
    } if (country === "Chile") {
        countryDiv.innerHTML = `
        ${ind(poblacionChi).map((i) => `
        ${key.map((year) => `
        <p>Valor do índice em ${year}: ${i} </p> 
        `).join("")} 
        `).join("")}
    `
    } if (country === "México") {
        countryDiv.innerHTML = `
        ${ind(poblacionMex).map((i) => `
        ${key.map((year) => `
        <p>Valor do índice em ${year}: ${i} </p> 
        `).join("")} 
        `).join("")}
    `
    } if (country === "Peru") {
        countryDiv.innerHTML = `
        ${ind(poblacionPer).map((i) => `
        ${key.map((year) => `
        <p>Valor do índice em ${year}: ${i} </p> 
        `).join("")} 
        `).join("")}
    `
    }
}




function ordemAm() {
    let x = document.getElementById("year-am").selectedIndex;
    let y = document.getElementById("year-am").options;
    let ano = y[x].textContent;
    let w = document.getElementById("conteudoam-ordem").selectedIndex;
    let z = document.getElementById("conteudoam-ordem").options;
    let indicator = z[w].textContent;
    let resultTotalAm = document.getElementById("result-am");
    let poblacionBra = getCountrys("BRA").find(indic => indic.indicatorName === indicator)
    let poblacionChi = getCountrys("CHL").find(indic => indic.indicatorName === indicator)
    let poblacionMex = getCountrys("MEX").find(indic => indic.indicatorName === indicator)
    let poblacionPer = getCountrys("PER").find(indic => indic.indicatorName === indicator)

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
    function filterMinMax() {
        let years = []
        for (let i of yearsAm) {
            if (i[ano] !== "") {
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

    let max = ordenado[ordenado.length - 1]

    if (ordenado[ano] === undefined) {
        resultTotalAm.innerHTML = `
    <p>Não há índices disponíveis para comparação</p>
    `
    }
    if (ordenado[0][ano] === undefined && max[ano] === undefined) {
        resultTotalAm.innerHTML = `
    <p>Não há índices disponíveis para comparação</p>
    `
    } else {
        resultTotalAm.innerHTML = `
    <p>País com índice máximo: ${max.country}</p>
    <p>Índice: ${max[ano]}</p>
    <p>País com índice mínimo: ${ordenado[0].country}</p>
    <p>Índice: ${ordenado[0][ano]}</p>
    `
    }
}



function mostraOcultar(e) {
    let tabSeleccionado = e.target.dataset.tabSeleccionado;
    let brasil = document.getElementById("brasil");
    let chile = document.getElementById("chile");
    let mexico = document.getElementById("mexico");
    let peru = document.getElementById("peru");
    let am = document.getElementById("am");
    let home = document.getElementById("home");
    let grafic = document.getElementById("grafic");
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
    if (tabSeleccionado === "tab-home") {
        am.style.display = 'none';
        chile.style.display = 'none';
        mexico.style.display = 'none';
        brasil.style.display = 'none';
        peru.style.display = 'none';
        home.style.display = 'block';
        grafic.style.display = 'none';
    }
    if (tabSeleccionado === "tab-grafic") {
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
    let grafic = document.getElementById("grafic")
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