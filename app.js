// creating DOM elements using JavaScript
const body = document.querySelector("body");

// creating container
let container = document.createElement("div");
container.classList.add("container");
body.append(container);

// creating a paragraph to put quotes
let quoteLabel = document.createElement("p");
quoteLabel.innerText = "What would Kanye say?";
container.append(quoteLabel);

// creating button to change quotes
let newQuoteBtn = document.createElement("button");
newQuoteBtn.innerText = "Kanye Says";
container.append(newQuoteBtn);

let windowSpeaker = window.speechSynthesis;

newQuoteBtn.addEventListener("click", getKanyeQuote);

// quotte function
async function getKanyeQuote() {
  let data = await fetch("https://api.kanye.rest");
  data = await data.json();
  quoteLabel.innerText = data.quote;

  let sayThis = new SpeechSynthesisUtterance(data.quote);
  windowSpeaker.speak(sayThis);
}
