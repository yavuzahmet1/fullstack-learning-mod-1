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


let generateShop = () => {

    return (shop.innerHTML = shopItemsData.map(item => {
        return `<div class="item">
                     <img width="220px" src="${item.img}" alt="">
                 <div class="details">
                        <h3>${item.name}</h3>
                        <p>${item.desc}</p>
                        <div class="price-quantity">
                             <h2>${item.price}</h2>
                             <div class="buttons">
                                 <i class="bi bi-dash"></i>
                                 <div class="quantity">0</div>
                                 <i class="bi bi-plus"></i>
                           </div>
                         </div>
                     </div>
                 </div>`
    }))
}

generateShop()