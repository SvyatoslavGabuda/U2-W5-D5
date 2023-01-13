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
