const rotationPlate = document.querySelector(".rotation-plate");
const darkPlate = document.querySelector(".header");
const myName = document.getElementById("name");
const header_after_h2 = document.querySelector(".header-after");

const explore = document.getElementById("explore-button");
explore.addEventListener("click", function () {
  rotationPlate.classList.replace("rotation-plate", "rotation-after");
  darkPlate.classList.replace("header", "header-after");
  myName;
});
