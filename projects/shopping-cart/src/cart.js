let label = document.getElementById("label");
let shoppingCart = document.getElementById("shopping-cart");


let basket = JSON.parse(localStorage.getItem("data")) || []

let calculation = () => {
    let cartIcon = document.getElementById("cart-amount");
    cartIcon.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0)

}
calculation()

let generateCartItems = () => {
    if (basket.length !== 0) {
        return (shoppingCart.innerHTML = basket.map((product) => {
            console.log(product);
            let { id, item } = product;
            let search = shopItemsData.find((product) => product.id === id) || [];
            console.log(search.id);
            return `
               <div class="cart-item">
        <img width="100" src=${search.img} alt="" />
        <div class="details">

          <div class="title-price-x">
              <h4 class="title-price">
                <p>${search.name}</p>
                <p class="cart-item-price">$ ${search.price}</p>
              </h4>
                        <i class="bi bi-x-circle"></i>
                        </div>
                        <div class="buttons-cart">
                                 <i onclick="decrement(${id})" class="bi bi-dash"></i>
                                  <div id=${id} class="quantity">${item}</div>
                                 <i onclick="increment(${id})" class="bi bi-plus"></i>
                           </div>
                        <h3></h3>
                 </div>
                </div>
`
        }).join(""))

    } else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `<h2>Cart is empty</h2>
        <a href="index.html">
        <button class="home-btn">Back To Home</button></a>`;
    }
}

generateCartItems()

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find(product => product.id === selectedItem.id);
    if (search === undefined) {
        basket.push({ id: selectedItem.id, item: 1 })
    } else {
        search.item++;
    }
    update(selectedItem.id)
    localStorage.setItem("data", JSON.stringify(basket));
};


let decrement = (id) => {

    let selectedItem = id;
    let search = basket.find(product => product.id === selectedItem.id);
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
        search.item--;
    }
    update(selectedItem.id)
    basket = basket.filter((x) => x.item !== 0)

    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id)
    document.getElementById(id).innerHTML = search.item
    calculation()
};

