//! EVENTS
// 4 farklı yöntem olarak kullanılır
let myh2 = document.querySelector("h2");
let body = document.querySelector("body");
let myInput = document.getElementById("input")
let btn = document.querySelector("button")
console.log(body);
console.log(myh2);
myh2.onmouseover = function () {

    myh2.classList.add("red")
}
console.log(myh2);
myh2.onmouseout = () => {
    myh2.classList.remove("red")
}
console.log(myh2);

// onload=>DOM içeriklerinin tamamı yüklendikten sonra tetiklenir.

body.onload = function () {
    myInput.textContent = "sdsdsadasdasd"
    myInput.onfocus
}

btn.addEventListener('click', () => {
    myInput.value = "Ahmet"
})

