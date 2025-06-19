//Current year
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy;<span class="highlight">${today.getFullYear()}</span>`;

//Last modification
let lastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<strong>Last Modification: </strong>: ${lastModif}`;


window.addEventListener('load', function () {
    let counter = parseInt(localStorage.getItem('count')) || 0;
    counter++;
    localStorage.setItem('count', counter);
    const count = document.getElementById('counter');
    count.textContent = counter;
});