const container = document.querySelector(".container");
const color = ["red", "blue", "pink", "grey", "black", "orange"];

container.addEventListener("click", (e) => {
  const rindex = parseInt(Math.random() * color.length);
  // console.log(rindex);
  if (e.target.textContent === "Click To Change Background Color") {
    container.style.backgroundColor = color[rindex];
  }
});
