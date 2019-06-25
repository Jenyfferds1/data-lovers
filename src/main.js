window.onload = function() {
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
    `;
}

function filterCountry(idOne, idTwo, idResult, country, countryName) {
  const yearCountry = document.getElementById(idOne).selectedIndex;
  const yearCountryOptions = document.getElementById(idOne).options;
  const year = yearCountryOptions[yearCountry].textContent;
  const contentCountry = document.getElementById(idTwo).selectedIndex;
  const contentCountryOptions = document.getElementById(idTwo).options;
  const indicator = contentCountryOptions[contentCountry].textContent;
  const resultTotal = document.getElementById(idResult);
  const population = getCountrys(country).find(indic => indic.indicatorName === indicator);
  const indicatorCountry = getCountrys(country).map(indic => indic["indicatorName"]);
  for (let indice in indicatorCountry) {
    const indicatorCountryTotal = indicatorCountry[indice];
    const dataCountry = getCountrys(country).map(indic => indic.data);
    for (let datas of dataCountry) {
      for (let dataTotal in datas) {
        const dataTotalCountry = dataTotal;
        if (year === dataTotalCountry && indicator === indicatorCountryTotal) {
          resultTotal.innerHTML = "Valor do índice no " + countryName + ": " + population.data[year];
          if (population.data[year] === "") {
            resultTotal.innerHTML = "Valor do índice no " + countryName + ": Índice não indicado";
          }
        }
      }
    }
  }
}

function showCountryAm() {
  const countryValue = document.getElementById("ind-total-countrys").value;
  const contentBraAm = document.getElementById("content-brasil-am").selectedIndex;
  const contentBraAmOptions = document.getElementById("content-brasil-am").options;
  const indicator = contentBraAmOptions[contentBraAm].textContent;
  const resultTotalAm = document.getElementById("result-am-two");
  const population = getCountrys(countryValue).find(indic => indic.indicatorName === indicator);

  const key = [2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017];

  ind = (pob) => {
    const date = pob.data;
    const indication = key.map((g) => {
      if (date[g] === "") {
        return "Valor do índice em " + g + ": Índice não indicado";
      } else {
        return "Valor do índice em " + g + ": " + date[g];
      }
    });
    return indication;
  };

  resultTotalAm.innerHTML = `
        ${ind(population).map((i) => `
        <p>${i}</p>
        `).join("")}
        `;
}

function ordemAm() {
  const yearAm = document.getElementById("year-am").selectedIndex;
  const yearAmOptions = document.getElementById("year-am").options;
  const year = yearAmOptions[yearAm].textContent;
  const contentAm = document.getElementById("contentam-ordem").selectedIndex;
  const contentAmOptions = document.getElementById("contentam-ordem").options;
  const indicator = contentAmOptions[contentAm].textContent;
  const resultTotalAm = document.getElementById("result-am");
  const populationBra = getCountrys("BRA").find(indic => indic.indicatorName === indicator);
  const populationChi = getCountrys("CHL").find(indic => indic.indicatorName === indicator);
  const populationMex = getCountrys("MEX").find(indic => indic.indicatorName === indicator);
  const populationPer = getCountrys("PER").find(indic => indic.indicatorName === indicator);

  const yearsAm = [{
    "country": "Brasil",
    "yearCountry": populationBra.data[year],
  },
  {
    "country": "Chile",
    "yearCountry": populationChi.data[year],

  },
  {
    "country": "México",
    "yearCountry": populationMex.data[year],
  },
  {
    "country": "Peru",
    "yearCountry": populationPer.data[year],
  },
  ];
  function filterMinMax() {
    const years = [];
    for (let i of yearsAm) {
      if (i["yearCountry"] !== "") {
        years.push(i);
      }
    }
    return years;
  }

  const ordered = filterMinMax().sort((a, b) => {
    if (a["yearCountry"] > b["yearCountry"]) {
      return 1;
    }
    return -1;
  });

  const max = ordered[ordered.length - 1];

  if (ordered[0] === undefined && max === undefined) {
    resultTotalAm.innerHTML = `
            <p>Não há índices disponíveis para comparação</p>
            `;
  } if (ordered[0].country === max.country) {
    resultTotalAm.innerHTML = `
            <p>Não há índices disponíveis para comparação</p>
            `;
  } if (ordered[0].country !== max.country) {
    resultTotalAm.innerHTML = `
                <p>País com índice máximo: ${max.country}</p>
                <p>Índice: ${max["yearCountry"]}</p>
                <p>País com índice mínimo: ${ordered[0].country}</p>
                <p>Índice: ${ordered[0]["yearCountry"]}</p>
        `;
  }
}
