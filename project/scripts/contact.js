const myForm = document.querySelector('.form');

myForm.addEventListener('submit', function () {
    let name = document.getElementById("name").value;
    localStorage.setItem('data', name);
    let p = document.createElement('p');
    let data = localStorage.getItem('data');
    p.innerHTML = `Thank you for your message Mr/Mrs/Ms ${data}.`;
    let div = document.querySelector(".question");
    div.innerHTML = ``;
    div.appendChild(p);
});