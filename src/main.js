window.onload = function () {
    showCountry("BRA", "content-brasil");
    showCountry("CHL", "content-chile");
    showCountry("MEX", "content-mexico");
    showCountry("PER", "content-peru");
    showCountry("BRA", "content-brasil-am");
    showCountry("BRA", "contentam-ordem");
};

function getCountrys(country) {
    return WORLDBANK[country]["indicators"];
}

function showCountry(country, id) {
    const countryDiv = document.getElementById(id);
    countryDiv.innerHTML = `
    ${getCountrys(country).map((indicador) => `
    <option>${indicador["indicatorName"]}</option>
    `).join("")}
    `
}

function filterCountry(idOne, idTwo, idResult, country, countryName) {
    const yearCountry = document.getElementById(idOne).selectedIndex;
    const yearCountryOptions = document.getElementById(idOne).options;
    const year = yearCountryOptions[yearCountry].textContent;
    const contentCountry = document.getElementById(idTwo).selectedIndex;
    const contentCountryOptions = document.getElementById(idTwo).options;
    const indicator = contentCountryOptions[contentCountry].textContent;
    const resultTotal = document.getElementById(idResult);
    const population = getCountrys(country).find(indic => indic.indicatorName === indicator)
    const indicatorCountry = getCountrys(country).map(indic => indic["indicatorName"])
    for (indice in indicatorCountry) {
        const indicatorCountryTotal = indicatorCountry[indice]
        const dataCountry = getCountrys(country).map(indic => indic.data)
        for (datas of dataCountry) {
            for (dataTotal in datas) {
                const dataTotalCountry = dataTotal
                if (year === dataTotalCountry && indicator === indicatorCountryTotal) {
                    resultTotal.innerHTML = "Valor do índice no " + countryName + ": " + population.data[year]
                    if (population.data[year] === "") {
                        resultTotal.innerHTML = "Valor do índice no " + countryName + ": Índice não indicado"
                    }
                }
            }
        }
    }
}

function showCountryAm() {
    const indTotalCountrys = document.getElementById("ind-total-countrys").selectedIndex;
    const indTotalCountrysOptions = document.getElementById("ind-total-countrys").options;
    const country = indTotalCountrysOptions[indTotalCountrys].textContent;
    const contentBraAm = document.getElementById("content-brasil-am").selectedIndex;
    const contentBraAmOptions = document.getElementById("content-brasil-am").options;
    const resultTotalAm = document.getElementById("result-am-two");
    const indicator = contentBraAmOptions[contentBraAm].textContent;
    const populationBra = getCountrys("BRA").find(indic => indic.indicatorName === indicator)
    const populationChi = getCountrys("CHL").find(indic => indic.indicatorName === indicator)
    const populationMex = getCountrys("MEX").find(indic => indic.indicatorName === indicator)
    const populationPer = getCountrys("PER").find(indic => indic.indicatorName === indicator)

    const key = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017]

    ind = (pob) => {
        const date = pob.data
        const indication = key.map((g) => {
            if (date[g] === "") {
                return `Valor do índice em ` + g + `: Índice não indicado`
            } else {
                return `Valor do índice em ` + g + `: ` + date[g]
            }
        })
        return indication
    }

    if (country === "Brasil") {
        resultTotalAm.innerHTML = `
        ${ind(populationBra).map((i) => `
        <p>${i}</p>
        `).join("")}
        `
    } if (country === "Chile") {
        resultTotalAm.innerHTML = `
        ${ind(populationChi).map((i) => `
        <p>${i}</p>
        `).join("")}
        `
    } if (country === "México") {
        resultTotalAm.innerHTML = `
        ${ind(populationMex).map((i) => `
        <p>${i}</p>
        `).join("")}
        `
    } if (country === "Peru") {
        resultTotalAm.innerHTML = `
        ${ind(populationPer).map((i) => `
        <p>${i}</p>
        `).join("")}
        `
    }
}

function ordemAm() {
    let yearAm = document.getElementById("year-am").selectedIndex;
    let yearAmOptions = document.getElementById("year-am").options;
    let year = yearAmOptions[yearAm].textContent;
    let contentAm = document.getElementById("contentam-ordem").selectedIndex;
    let contentAmOptions = document.getElementById("contentam-ordem").options;
    let indicator = contentAmOptions[contentAm].textContent;
    let resultTotalAm = document.getElementById("result-am");
    let populationBra = getCountrys("BRA").find(indic => indic.indicatorName === indicator)
    let populationChi = getCountrys("CHL").find(indic => indic.indicatorName === indicator)
    let populationMex = getCountrys("MEX").find(indic => indic.indicatorName === indicator)
    let populationPer = getCountrys("PER").find(indic => indic.indicatorName === indicator)

    let yearsAm = [{
        "country": "Brasil",
        "2007": populationBra.data[2007],
        "2008": populationBra.data[2008],
        "2009": populationBra.data[2009],
        "2010": populationBra.data[2010],
        "2011": populationBra.data[2011],
        "2012": populationBra.data[2012],
        "2013": populationBra.data[2013],
        "2014": populationBra.data[2014],
        "2015": populationBra.data[2015],
        "2015": populationBra.data[2016],
        "2017": populationBra.data[2017],
    },
    {
        "country": "Chile",
        "2007": populationChi.data[2007],
        "2008": populationChi.data[2008],
        "2009": populationChi.data[2009],
        "2010": populationChi.data[2010],
        "2011": populationChi.data[2011],
        "2012": populationChi.data[2012],
        "2013": populationChi.data[2013],
        "2014": populationChi.data[2014],
        "2015": populationChi.data[2015],
        "2015": populationChi.data[2016],
        "2017": populationChi.data[2017],
    },
    {
        "country": "México",
        "2007": populationMex.data[2007],
        "2008": populationMex.data[2008],
        "2009": populationMex.data[2009],
        "2010": populationMex.data[2010],
        "2011": populationMex.data[2011],
        "2012": populationMex.data[2012],
        "2013": populationMex.data[2013],
        "2014": populationMex.data[2014],
        "2015": populationMex.data[2015],
        "2015": populationMex.data[2016],
        "2017": populationMex.data[2017],
    },
    {
        "country": "Peru",
        "2007": populationPer.data[2007],
        "2008": populationPer.data[2008],
        "2009": populationPer.data[2009],
        "2010": populationPer.data[2010],
        "2011": populationPer.data[2011],
        "2012": populationPer.data[2012],
        "2013": populationPer.data[2013],
        "2014": populationPer.data[2014],
        "2015": populationPer.data[2015],
        "2015": populationPer.data[2016],
        "2017": populationPer.data[2017],
    },
    ];
    function filterMinMax() {
        let years = []
        for (let i of yearsAm) {
            if (i[year] !== "") {
                years.push(i)
            }
        }
        return years
    }

    let ordered = filterMinMax().sort((a, b) => {
        if (a[year] > b[year]) {
            return 1;
        }
        return -1;
    })

    let max = ordered[ordered.length - 1]

    if (ordered[year] === undefined) {
        resultTotalAm.innerHTML = `
            <p>Não há índices disponíveis para comparação</p>
            `
    }
    if (ordered[0][year] === undefined && max[year] === undefined) {
        resultTotalAm.innerHTML = `
            <p>Não há índices disponíveis para comparação</p>
            `
    } else {
        resultTotalAm.innerHTML = `
            <p>País com índice máximo: ${max.country}</p>
            <p>Índice: ${max[year]}</p>
            <p>País com índice mínimo: ${ordered[0].country}</p>
            <p>Índice: ${ordered[0][year]}</p>
    `
    }
}
