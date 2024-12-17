const asideExit = document.querySelector(".fa-xmark ");
const aside = document.querySelector(".aside-container");
const basketBtn = document.querySelector(".basket-btn");
const cards = document.querySelector(".cards")
const elecronicsBtn = document.querySelector(".elecronics-btn")

const url = "https://anthonyfs.pythonanywhere.com/api/products/";

window.addEventListener("load", hide(true));

const getData = async (url) => {
    console.log("first")
    try {
        const res = await fetch(url);

        if (!res.ok) {

            throw new Error();
        }
        const data = await res.json()
        console.log(data)
        // console.log(data[0].image)
        showToScreen(data)
    } catch (error) {
        console.log("Somethin went wrong")
    };
}
getData()

function showToScreen(getData) {
    getData.map(element => {
        const { image, description, price, title, category } = element;
        if (category) {
            cards.innerHTML += `
          <div class="card" style="width: 18rem;">
        <img class="card-img-top w-75" src="${image}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class="card-text">${description}</p>
          <div class="card-end mt-auto text-center">
          <div class="price-info d-flex justify-content-between">
            <p class="price-text">Price:</p>
            <p class="price">${price}</p>
          </div>
          <div class="cart-btn d-flex justify-content-around p-2">
            <a href="#" class="btn btn-danger">Add To Cart</a>
            <a href="#" class="btn btn-primary">See Details</a>
          </div>
        </div>

        `
        }
    });

}

function hide(x) {
    if (x) {
        aside.style.display = "none"

    } else {
        aside.style.display = "block"

        console.log("hiden")
    }
}

