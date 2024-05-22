const cont = document.querySelector(".container");
const btn = document.querySelector("button");

const quotes = {
  "Oscar Wilde": "“Be yourself; everyone else is already taken.”",
  "Marilyn Monroe":
    "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  "Frank Zappa": "“So many books, so little time.”",
  "Albert Einstein":
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",

  "Marcus Tullius Cicero":
    "“A room without books is like a body without a soul.”",
  "Bernard M. Baruch":
    " “Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
};

cont.addEventListener("click", (e) => {
  const key = Object.keys(quotes);
  const val = Object.values(quotes);
  const rIndex = Math.floor(Math.random() * key.length);
  // console.log(rIndex);
  let quote = e.target.parentNode.children[0].children[0];
  let writer = e.target.parentNode.children[0].children[1];
  if (e.target.textContent === "QuotesGenrator") {
    writer.textContent = key[rIndex];
    quote.textContent = val[rIndex];
  }
});
