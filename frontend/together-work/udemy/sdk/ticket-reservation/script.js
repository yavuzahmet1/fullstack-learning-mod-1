const container = document.querySelector('.container');
const count = document.querySelector(".count");
const amount = document.querySelector(".amount");
const select = document.querySelector("#movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

container.addEventListener("click", function (e) {
    if (e.target.classList.contains("seat")
        && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");
        calculate();

    }
});

select.addEventListener("change", function (e) {
    calculate();
})

function calculate() {
    const selectedSeats = container.querySelectorAll('.seat.selected');
    const selectedSeatArr = [];
    const seatArr = [];
    selectedSeats.forEach(seat => {
        selectedSeatArr.push(seat);
    });
    seats.forEach(seat => {
        seatArr.push(seat);
    });

    let selectedSeatIndex = selectedSeatArr.map(seat => {
        return seatArr.indexOf(seat)
    })
    console.log(selectedSeatIndex)
    let selectedSeatCount = selectedSeats.length
    count.textContent = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorge(selectedSeatIndex);
}

function saveToLocalStorge(index) {
    localStorage.setItem("selectedSeat", JSON.stringify(index));
    localStorage.setItem("selectedMovieIndex", JSON.stringify(select.selectedIndex)); // Burada selectedIndex kullanılmalı
}