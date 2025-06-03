//Last modification
let lastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<strong>Last Modification: </strong>: ${lastModif}`;