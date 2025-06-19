//Current year
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy;<span class="highlight">${today.getFullYear()}</span>`;

//Last modification
let lastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<strong>Last Modification: </strong>: ${lastModif}`;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

const list = document.querySelector("#product");
products.forEach(function (product) {
    let productName = document.createElement("option");
    productName.setAttribute("value", product.id);
    productName.textContent = product.name;
    list.appendChild(productName);
});