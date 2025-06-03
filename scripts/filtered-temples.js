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

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
    },
    {
        templeName: "Montreal Quebec",
        location: "Montreal, Quebec",
        dedicated: "2000, June, 4",
        area: 11550,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montreal-quebec/400x250/montreal-quebec-temple-1169262-wallpaper.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy ",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg"
    }
];

createTempleCards(temples);

const oldLink = document.querySelector("#old");
oldLink.addEventListener("click", () => {
    createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
});
const newLink = document.querySelector("#new");
newLink.addEventListener("click", () => {
    createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener("click", () => {
    createTempleCards(temples.filter(temple => temple.area > 90000));
});
const smallLink = document.querySelector("#small");
smallLink.addEventListener("click", () => {
    createTempleCards(temples.filter(temple => temple.area < 10000));
});

const allLink = document.querySelector("#all");
allLink.addEventListener("click", () => {
    createTempleCards(temples);
});

function createTempleCards(filteredTemples) {
    let list = document.querySelector(".container");
    list.innerHTML = "";
    filteredTemples.forEach(function (temple) {
        let card = document.createElement("section");
        let nameTemple = document.createElement("h3");
        let loc = document.createElement("p");
        let dedication = document.createElement("p");
        let size = document.createElement("p");
        let img = document.createElement("img");
        nameTemple.textContent = temple.templeName;
        loc.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        size.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", temple.templeName + " Temple");
        img.setAttribute("loading", "lazy");
        card.appendChild(nameTemple);
        card.appendChild(loc);
        card.appendChild(dedication);
        card.appendChild(size);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    });
};