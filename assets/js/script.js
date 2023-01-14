const header = document.querySelector("header");
const cambioColore = function () {
  let offset = window.pageYOffset;
  //   console.log(offset);

  if (offset > 300) {
    header.classList.add("newColor");
  } else {
    header.classList.remove("newColor");
  }
};
window.addEventListener("scroll", cambioColore);

const letteraM = document.querySelectorAll(`svg g[stroke-linecap="butt" ]`);
console.log("gruppo g", letteraM);
let numero = 0;

const tempo = setInterval(() => {
  const random = Math.floor(Math.random() * letteraM.length);
  const randomM = letteraM[random];
  const randomMAttribut = randomM.getAttribute("opacity");
  // console.log(random);
  // console.log(randomM);
  // console.log("opacity value: " + randomMAttribut);
  numero++;

  if (randomMAttribut == 0) {
    randomM.setAttribute("opacity", "1");
  } else {
    randomM.setAttribute("opacity", "0");
  }
  // if (numero === 1000) {
  //   clearInterval(tempo);
  // }
}, 100);
