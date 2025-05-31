//Current year
const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = `&copy;<span class="highlight">${today.getFullYear()}</span>`;

//Last modification
let lastModif = new Date(document.lastModified);
const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `<strong>Last Modification: </strong>: ${lastModif}`;

const temperature = 7; // in °C
const wind = 15; // km/h

//Calculate wind chill
function calculateWindChill(temperature, wind) {
    return 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temperature * Math.pow(wind, 0.16);
}

//Determine if wind whill calculation applicable
function windChillApplicable(temperature, wind) {
    return temperature <= 10 && wind > 4.8;
}

//Display wind chill
const windChill = document.querySelector("#chill");
if (windChillApplicable(temperature, wind)) {
    windChillValue = calculateWindChill(temperature, wind).toFixed(1);
    windChill.textContent = `${windChillValue}°C`;
}
else {
    windChill.textContent = 'N/A';
}