
const rotationPlate = document.querySelector('.rotation-plate');
const darkPlate = document.querySelector('.header');


const explore = document.getElementById('explore-button');
explore.addEventListener('click', function () {
    rotationPlate.classList.replace("rotation-plate", "rotation-after");
    darkPlate.classList.replace("header", "header-after");
})