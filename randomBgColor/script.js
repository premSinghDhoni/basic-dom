function bgChange() {
  const body = document.body;
  // console.log(body);
  const btn = document.querySelector("button");

  const interval = setInterval(() => {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const rgb = `rgb(${red},${green},${blue})`;
    body.style.backgroundColor = rgb;
  }, 2000);
  btn.addEventListener("click", () => {
    clearInterval(interval);
    btn.textContent=body.style.backgroundColor;
  });
}
bgChange();
