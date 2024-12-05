let shop = document.getElementById("shop");


let shopItemsData = [
    {
        id: "jfhgbvnscs",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-1.jpg"
    },
    {
        id: "ioytrhndcv",
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-2.jpg"
    },
    {
        id: "wuefbncxbsn",
        name: "T Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-3.jpg"
    },
    {
        id: "thyfhcbcv",
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "img/img-4.jpg"
    }
];
let basket = [];

let generateShop = () => {

    return (shop.innerHTML = shopItemsData.map(item => {
        let { id, name, price, desc, img } = item;//destructuring

        return `<div id=product-id-${id} class="item">
                     <img width="220px" src=${img} alt="">
                 <div class="details">
                        <h3>${name}</h3>
                        <p>${desc}</p>
                        <div class="price-quantity">
                             <h2>${price}</h2>
                             <div class="buttons">
                                 <i onclick="decrement(${id})" class="bi bi-dash"></i>
                                  <div id=${id} class="quantity">0</div>
                                 <i onclick="increment(${id})" class="bi bi-plus"></i>
                           </div>
                         </div>
                     </div>
                 </div>`
    }).join(""));
}

// .join(""):
// map fonksiyonu, her bir öğe için bir HTML dizesi döndürür 
// ve bu diziler bir dizi (array) olarak tutulur. 
// Ancak, HTML'in düzgün bir şekilde yerleştirilebilmesi 
// için bu diziyi tek bir string'e dönüştürmek gerekir.
// join("") fonksiyonu, map tarafından döndürülen dizi 
// öğelerini birleştirir. Buradaki "" parametresi, 
// öğelerin arasına herhangi bir karakter (boşluk, virgül vb.) 
// eklenmeden birleştirilmesini sağlar. Bu sayede, 
// HTML şablonları birbirine eklenmiş olur.

//quantity e, id vermemizin nedeni sayıyı arttırınca 
//hedeflediğimiz id ye ait objenin sayını arttıracağız

generateShop()

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find(product => product.id === selectedItem.id);
    if (search === undefined) {
        basket.push({ id: selectedItem.id, item: 1 })
    } else {
        search.item += 1;
    }
    update(selectedItem.id)

};
let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find(product => product.id === selectedItem.id);
    if (search.item === 0) return;
    else {
        search.item -= 1;
    }
    console.log(basket);
    update(selectedItem.id)
};
let update = (id) => {
    let search = basket.find((x) => x.id === id)
    console.log(search.item);
    document.getElementById(id).innerHTML = search.item
    document.querySelector(".cart-amount").innerHTML = basket.length
};

1.28.00
