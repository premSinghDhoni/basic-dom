const cont = document.querySelector(".container");
const hexText = document.querySelector("span");
function color() {
  const hexCol = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"]

  cont.addEventListener("click", (e) => {
    if (e.target.textContent ==='Color generator') {
      let hexval = "";
      for (let i = 0; i < 6; i++) {
        const rindex = parseInt(Math.random() * hexCol.length);
        hexval += hexCol[rindex];
      }
      hexval = "#" + hexval;
      cont.style.backgroundColor = hexval;
      hexText.textContent = hexval;
    }
  });
}
color();
