const input = document.querySelector(".input-box");
const btn = document.querySelector(".btn");
const text = document.querySelector(".content");

btn.addEventListener('click', () => {
    text.textContent = "Clicked";
    console.log(this);
})