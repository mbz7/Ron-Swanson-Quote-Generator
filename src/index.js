function getQuote(quote) {
  fetch("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
    .then((r) => r.json())
    .then((quote) => {
      console.log(quote);
      let currentQuote = quote;
      document.getElementById("mainquote").textContent = quote;
    });
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

document.querySelector("#btn-gn").addEventListener("click", getQuote);

document.getElementById("addFavorites").addEventListener("click", (e) => {
  e.preventDefault();
  //   addToFavorites(document.getElementById("mainquote").value);
  console.log(e);
  const newQuote = document.createElement("p");
  const newQ = newQuote.append(quote);
  const list = document.getElementById("newDivInner");
  list.append(newQ);
  console.log(newQuote);
  //   e.target.reset();
  //   console.log("Add to favorites button");
});

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
