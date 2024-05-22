const cont=document.querySelector('.cont');

cont.addEventListener('click',e=>{
  // console.log(e.target.textContent);

  if(e.target.textContent === "Increase"){
   let counter=e.target.parentNode.parentNode.children[1];
   counter.textContent++;
  }
  if(e.target.textContent === "Decrease"){
    let counter=e.target.parentNode.parentNode.children[1];
    counter.textContent--;
  }
})