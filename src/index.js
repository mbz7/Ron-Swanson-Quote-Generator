//DOM Selectors
const quoteArry = [];
const mainQuote = document.getElementById("mainquote");
const list = document.querySelector("#list");
// list.innerHTML = "";

document.querySelector("#btn-gn").addEventListener("click", getQuote);

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
    // const p = document.createElement("p");
    const div = document.createElement("div");
    // // const list = document.getElementById("quoteListOuter");
    // p.innerText = quoteArry;
    div.innerHTML = `<div id="quoteListOuter" class="row d-flex justify-content-center align-items-center gap-5">
    <div id="quoteListInner" class="col-10 row shadow p-3 mb-5 bg-body rounded d-flex justify-content-center align-items-center" style="height: 150px; margin-top: 50px"><p id="innerText">${quoteArry}</p></div>
    <button type="button" class="btn btn-warning col-1 d-flex justify-content-center align-items-center" style="height: 35px; width: 35px">X</button>
  </div>`;
    list.append(div);
    div.addEventListener("click", () => {
      div.remove();
    });
    // getQuote();
    // div.append(p);
    // list.append(div);
    // console.log(quoteArry);
  });

  console.log(quoteArry);
}

// function getQuote(quote) {
//   fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
//     .then((r) => r.json())
//     .then((quote) => {
//       console.log(quote);
//       let currentQuote = quote;
//       document.getElementById("innerText").textContent = quote;
//     });
// }

const quote = getQuote();

// function addFavorites(quoteArry) {
//   const p = document.createElement("p");
//   p.innerText = quoteArry;
//   const list = document.getElementById("newDivInner");
//   list.append(p);

// const newQ = newQuote.append(quote);
// const list = document.getElementById("newDivInner");
// list.append(newQ);
// console.log(newQuote);
//   e.target.reset();
//   console.log("Add to favorites button");
// }

// function addToFavorites(quotes) {
//   const newQuote = document.createElement("p");
//   const newDivOuter = document.createElement("div");
//   const newDivInner = document.createElement("div");
//   const mainDiv = newDivOuter.append(newDivInner);
//   const list = document.getElementById("list");
//   mainDiv.append(newQuote);
//   newQuote.innerText = quotes;
//   list.append(mainDiv);
// }
