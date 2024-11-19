const numbers = [1, 2, 3, 5];

let total = 0;
const s = numbers.forEach(item => total += item);
console.log(total);//11
// console.log(s);//undefined

const result = numbers.reduce((acc, item) => acc + item)
console.log(result);

let result2 = numbers.reduce(function (acc, number) {
    return acc + number;
})
console.log(result2);

const basket = [
    {
        name: "iphone 8",
        price: 700,
        store: "Vatan"
    },
    {
        name: "Apple Macbook",
        price: 1400,
        store: "Vatan"
    },
    {
        name: "Asus Zen",
        price: 1000,
        store: "MediaMarkt"
    },
    {
        name: "Samsung Notebook",
        price: 1200,
        store: "MediaMarkt"
    }
]

let sum = basket.reduce((acc, item) => acc + item.price, {});
console.log(sum);

const names = ["Ahmet", "Mehmet", "Hasan", "Halit", "Veli", "John", "Ahmet"];
const namesCount = names.reduce((allNames, item) => {
    if (item in allNames) {
        allNames[item]++;
    } else {
        allNames[item] = 1;
    }
    return allNames
}, {})

console.log(namesCount);