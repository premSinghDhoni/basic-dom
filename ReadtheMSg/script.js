const form = document.querySelector(".formText");
const msg = document.querySelector("#msg");
form.addEventListener("submit", (e) => {
  let message = "";
  e.preventDefault();
  message = msg.value;
  console.log(message);
  let p = e.target.parentNode.children[2];
p.textContent=` ${ message}`;
msg.value=''
});
