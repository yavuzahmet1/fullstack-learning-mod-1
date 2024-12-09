const btnClick = document.getElementById("btnClick");
const btnMouseover = document.getElementById("btnMouseover");
const colorPicker = document.getElementById("colorPicker");
const showColorLbl = document.querySelector(".showColorLbl");


btnClick.addEventListener("click", () => {
    btnMouseover.textContent = colorPicker.value
    showColorLbl.textContent = colorPicker.value;
})

