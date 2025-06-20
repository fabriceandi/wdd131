const products = [
    {
        category: "Wall Decoration",
        name: "Wall Decoration 1",
        imageSrc:
            "images/decoration.webp"
    },
    {
        category: "Bag",
        name: "Bag 1",
        imageSrc:
            "images/product1.JPG"
    },
    {
        category: "Mirror",
        name: "Mirror 1",
        imageSrc:
            "images/product4.JPG"
    },
    {
        category: "Bag",
        name: "Bag 2",
        imageSrc:
            "images/product2.JPG"
    },
    {
        category: "Bag",
        name: "Bag 3",
        imageSrc:
            "images/product3.JPG"
    },
    {
        category: "Mirror",
        name: "Mirror 2",
        imageSrc:
            "images/product6.webp"
    },
    {
        category: "Wall Decoration",
        name: "Wall Decoration 2",
        imageSrc:
            "images/product5.jpg"
    },
    {
        category: "Bag",
        name: "Bag 4",
        imageSrc:
            "images/product9.webp"
    },
    {
        category: "Bag",
        name: "Bag 5",
        imageSrc:
            "images/product10.jpg"
    }
];

createProductGallery(products);

const allLink = document.querySelector("#all");
const bagLink = document.querySelector("#bag");
const mirrorLink = document.querySelector("#mirror");
const decorationLink = document.querySelector("#decoration");

const navLinks = document.querySelectorAll('.link a');

bagLink.addEventListener("click", () => {
    createProductGallery(products.filter(product => product.category === "Bag"));
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    bagLink.classList.add('active');
});


mirrorLink.addEventListener("click", () => {
    createProductGallery(products.filter(product => product.category === "Mirror"));
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    mirrorLink.classList.add('active');
});


decorationLink.addEventListener("click", () => {
    createProductGallery(products.filter(product => product.category === `Wall Decoration`));
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    decorationLink.classList.add('active');
});

allLink.addEventListener("click", () => {
    createProductGallery(products);
    navLinks.forEach(navLink => navLink.classList.remove('active'));
    allLink.classList.add('active');
});

function createProductGallery(filteredProducts) {
    let list = document.querySelector(".gallery");
    list.innerHTML = ``;
    filteredProducts.forEach(function (product) {
        let card = document.createElement("section");
        let productName = document.createElement("h3");
        let img = document.createElement("img");
        productName.textContent = product.name;
        img.setAttribute("src", product.imageSrc);
        img.setAttribute("alt", product.category);
        img.setAttribute("loading", "lazy");
        card.appendChild(img);
        card.appendChild(productName);

        document.querySelector(".gallery").appendChild(card);
    });
}