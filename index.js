const dice = document.querySelector(".dice");
const content = document.querySelector(".content");
const number = document.getElementById("number");

let quotesData;
let numberQuotesData;

async function fetchQuotes() {
  await fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      quotesData = data.slip.advice;
      numberQuotesData = data.slip.id;
    });

  quotesDisplay();
}

function quotesDisplay() {
  number.textContent = numberQuotesData;
  content.textContent = '"' + quotesData + '"';
}

window.addEventListener("load", fetchQuotes);
dice.addEventListener("click", fetchQuotes);
