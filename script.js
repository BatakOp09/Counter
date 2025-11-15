var h1 = document.querySelector('h1');
var inc = document.getElementById('inc')
var dec = document.getElementById('dec')
var res = document.getElementById('res')

let counter = 0;

inc.addEventListener('click', function () {
    counter++;
    h1.textContent = counter;
})

dec.addEventListener('click', function () {
    if (counter > 0) {
        counter--;
    }
    h1.innerHTML = counter;
})

res.addEventListener('click', () => {
    counter = 0;
    h1.textContent = counter;
})