function showHide(e) {
  const tabSelected = e.target.dataset.tabSelected;
  const bra = document.getElementById("bra");
  const chi = document.getElementById("chi");
  const mex = document.getElementById("mex");
  const per = document.getElementById("per");
  const am = document.getElementById("am");
  const home = document.getElementById("home");
  const graphic = document.getElementById("graphic");
  if (tabSelected === "tab-am") {
    chi.style.display = 'none';
    mex.style.display = 'none';
    per.style.display = 'none';
    bra.style.display = 'none';
    home.style.display = 'none';
    am.style.display = 'block';
    graphic.style.display = 'none';

  }
  if (tabSelected === "tab-bra") {
    am.style.display = 'none';
    chi.style.display = 'none';
    mex.style.display = 'none';
    per.style.display = 'none';
    home.style.display = 'none';
    bra.style.display = 'block';
    graphic.style.display = 'none';

  }
  if (tabSelected === "tab-chi") {
    am.style.display = 'none';
    bra.style.display = 'none';
    mex.style.display = 'none';
    per.style.display = 'none';
    chi.style.display = 'block';
    home.style.display = 'none';
    graphic.style.display = 'none';

  }
  if (tabSelected === "tab-mex") {
    am.style.display = 'none';
    chi.style.display = 'none';
    bra.style.display = 'none';
    per.style.display = 'none';
    home.style.display = 'none';
    mex.style.display = 'block';
    graphic.style.display = 'none';

  }
  if (tabSelected === "tab-per") {
    am.style.display = 'none';
    chi.style.display = 'none';
    mex.style.display = 'none';
    bra.style.display = 'none';
    home.style.display = 'none';
    per.style.display = 'block';
    graphic.style.display = 'none';
  }
  if (tabSelected === "tab-home") {
    am.style.display = 'none';
    chi.style.display = 'none';
    mex.style.display = 'none';
    bra.style.display = 'none';
    per.style.display = 'none';
    home.style.display = 'block';
    graphic.style.display = 'none';
  }
  if (tabSelected === "tab-graphic") {
    am.style.display = 'none';
    chi.style.display = 'none';
    mex.style.display = 'none';
    bra.style.display = 'none';
    per.style.display = 'none';
    home.style.display = 'none';
    graphic.style.display = 'block';
  }
};


function loadPage() {
  const home = document.getElementById("home");
  const bra = document.getElementById("bra");
  const chi = document.getElementById("chi");
  const mex = document.getElementById("mex");
  const per = document.getElementById("per");
  const am = document.getElementById("am");
  const graphic = document.getElementById("graphic");
  chi.style.display = 'none';
  mex.style.display = 'none';
  bra.style.display = 'none';
  per.style.display = 'none';
  am.style.display = 'none';
  home.style.display = 'block';
  graphic.style.display = 'none';
  const elementsTab = document.getElementsByClassName("tab");
  for (let elements of elementsTab) {
    elements.addEventListener('click', showHide)
  }
}
loadPage();