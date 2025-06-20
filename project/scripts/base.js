//Current year
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy;<span class="highlight">${today.getFullYear()}</span>`;

//Last modification
let lastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<strong>Last Modification: </strong>: ${lastModif}`;

//Hamburger menu
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});