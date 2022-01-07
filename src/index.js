//DOM Selectors
const quoteArry = [];
const mainQuote = document.getElementById("mainquote");
const list = document.querySelector("#list");
// list.innerHTML = "";

//Event listneres
document.querySelector("#btn-gn").addEventListener("click", getQuote);

//Fetch functions
function getQuote(quote) {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((r) => r.json())
    .then(renderQuote);
}

//Render Function
function renderQuote(quote) {
  console.log(quote);
  let currentQuote = quote;
  mainQuote.innerText = currentQuote;
  quoteArry.push(quote);
  document.getElementById("addFavorites").addEventListener("click", (e) => {
    const div = document.createElement("div");
    div.innerHTML = `<div id="quoteListOuter" class="row d-flex justify-content-center align-items-center gap-5">
    <div id="quoteListInner" class="col-10 row shadow p-3 mb-5 bg-body rounded d-flex justify-content-center align-items-center" style="height: 150px; margin-top: 50px"><p id="innerText">${quoteArry}</p></div>
    <button type="button" class="btn btn-warning col-1 d-flex justify-content-center align-items-center" style="height: 35px; width: 35px">X</button></div>`;
    list.append(div);
    div.addEventListener("click", () => {
      div.remove();
    });
  });
  console.log(quoteArry);
}

const quote = getQuote();
