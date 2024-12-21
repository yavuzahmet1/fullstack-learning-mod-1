const container = document.querySelector('.container');
const count = document.querySelector(".count");
const amount = document.querySelector(".amount");
const select = document.querySelector("#movie");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorge();
calculate();

container.addEventListener("click", function (e) {
    if (e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected");
        calculate();
    }
});

select.addEventListener("change", function (e) {
    calculate();
});

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
        return seatArr.indexOf(seat);
    });
    console.log(selectedSeatIndex);
    let selectedSeatCount = selectedSeats.length;
    count.textContent = selectedSeatCount;
    amount.innerText = selectedSeatCount * select.value;

    saveToLocalStorge(selectedSeatIndex);
}

function getFromLocalStorge() {
    const selectedSeat = JSON.parse(localStorage.getItem("selectedSeat"));

    if (selectedSeat && selectedSeat.length > 0) {
        seats.forEach((item, index) => {
            if (selectedSeat.indexOf(index) > -1) {
                item.classList.add("selected"); // Doğru sınıf adı
            }
        });
    }

    const selectedMovieIndex = JSON.parse(localStorage.getItem("selectedMovieIndex"));
    if (selectedMovieIndex != null) {
        select.selectedIndex = selectedMovieIndex; // Film seçimini geri yükle
    }
}

function saveToLocalStorge(index) {
    localStorage.setItem("selectedSeat", JSON.stringify(index));
    localStorage.setItem("selectedMovieIndex", JSON.stringify(select.selectedIndex));
}