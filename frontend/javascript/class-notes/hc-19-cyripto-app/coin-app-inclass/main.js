import "./scss/style.scss";
import { getCoin } from "./src/getCoin";

const form = document.querySelector("header form");

console.log(form);

form.addEventListener("submit", (e) => {
    e.preventDefault()
    getInputVal()
    form.reset();

});

const getInputVal = () => {
    // const input = document.querySelector("header form input")
    // console.log(input);

    const inputVal = document.querySelector("header form input").value

    if (!inputVal.trim()) {
        console.log("input must not be empty")
    }
    else {
        // console.log("input is : ", inputVal)
        getCoin(inputVal)
    }
}