let countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', "England"]
let names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
];
/*Use forEach to console.log each country in the countries array.*/
/* Use forEach to console.log each name in the names array.*/
/*Use forEach to console.log each number in the numbers array.*/
let countriesArray = [];
countries.forEach((items) => countriesArray.push(items))
// console.log(countriesArray);

// Use map to create a new array by changing each country to uppercase in the countries array.*/
let mapCountry = countries.map(item => item.toUpperCase())
console.log(mapCountry);
console.log("Orginal", countries);
// Use map to create an array of countries length from countries array.*/
let countryLength = countries.map(item => item.length);
console.log(countryLength);

// Use map to create a new array by changing each number to square in the numbers array*/
let numberSquare = numbers.map(item => Math.pow(item, 2));
let numberSquareReduce = numbers.reduce((acc, item) => {
    acc.push(item ** 2);
    return acc;
}, [])
console.log(numberSquareReduce);

// Use map to change to each name to uppercase in the names array*/
// let newCountries = countries.map((item) => item.toUpperCase());
// countries = newCountries;
// console.log(countries);

// Use map to map the products array to its corresponding prices.*/

let productPrice = products.map(item => console.log(`product : ${item.product}, price : ${item.price}`));

// Use filter to filter out countries containing land.*/
// console.log(countries);
let filterCountry = countries.filter(item => item.toLocaleLowerCase().includes("land"))
console.log(filterCountry);

// Use filter to filter out countries containing six letters and more in the country array.*/
let filterLength = countries.filter(item => item.length >= 7);
console.log(filterLength);

// Use filter to filter out country start with 'E';*/
let startE = countries.filter(item => item[0] == "E");
let startESearch = countries.filter(item => item.startsWith("E"));
// console.log(startESearch);
// console.log(startE);

// Use filter to filter out only prices with values.*/
let productPriceValues = products.filter(item => +item.price)
let productPriceValuesTypeOf = products.filter(item => typeof item.price === "number");
console.log(productPriceValuesTypeOf);
console.log(productPriceValues);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.*/
let getStrings = [1, 3, 4, "1a", "b", "E"];
function getStringLists(n) {
    return n.filter(item => isNaN(item))
    // return n.filter(item => typeof item.price === "string")
}
console.log(getStringLists(getStrings));

// Use reduce to sum all the numbers in the numbers array.*/
let sumReduce = numbers.reduce((acc, item) => acc + item)
console.log(sumReduce);
console.clear()
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let reduceString = countries.reduce((acc, item) => acc + ", " + item);
let reduceString2 = countries.reduce((acc, item) => acc + ", " + item)
console.log(`${reduceString.slice(0, reduceString.length - 1)}`);

// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const result = countries.reduce((acc, item, i) =>
    acc + (i === countries.length - 1 ? ' and ' : ', ') + item, 'Estonia')
    + ' are north European countries.';
console.log(result);

// Explain the difference between some and every*/
//---

// Use some to check if some names' length greater than seven in names array*/
let someNames = names.some((item) => item.length > 7) ? "Var" : "yok"
console.log(someNames);

// Use every to check if all the countries contain the word land*/
let everyCountry = countries.every(item => item.toLowerCase().includes("land")) ? "Var" : "yok"
console.log(everyCountry);

// Explain the difference between find and findIndex.*/
let findSentence = names.find(item => item.includes("ias"))
console.log(findSentence);
let findIndexSentence = names.findIndex(item => item.includes("ias"))
console.log(findIndexSentence);

// Use find to find the first country containing only six letters in the countries array*/

let findLength6 = countries.find(item => item.length === 6)
console.log(findLength6);

// Use findIndex to find the position of the first country containing only six letters in the countries array*/

let findIndexLength6 = countries.findIndex(item => item.length === 6)
console.log(findIndexLength6);

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.*/

let findNorway = countries.findIndex(item => item === "Norway")
console.log(findNorway);

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.*/

let findRussia = countries.findIndex(item => item === "Rus")
console.log(findRussia);

