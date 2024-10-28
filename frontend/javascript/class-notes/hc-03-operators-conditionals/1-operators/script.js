//! OPERATORS

//öncelik üs, parantez içi, çarpma/bölme, çıkarma/toplama

let a = 20, b = 2;
let c = 2;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a ** 10)
console.log(a % b)

//hour and minute finding
//dakika olarak verilen değer kaç saat dk denk gelir

let duration = 377;

let hour = Math.floor(duration / 60)
console.log(hour)
let minute = duration % 60

console.log(`Give us the time in ${hour} hours and ${minute} minutes`)

//INCREMENT ++ ** DECREMENT --

let x = 10;

console.log(++x)
console.log(x++)

console.log(--x)
console.log(x--)

//ASSIGMENT OPERATORS
console.clear()
let t = 7, z = 10;

//! COMPARISION OPERATORS
let aa = 2, bb = "2";

console.log("Are aa and bb equal?", aa == bb);
console.log("Are aa and bb equal?", aa === bb);
console.log("Are aa and bb equal?", aa != bb);

//! AND OPERATOR &&
//Falsy Values
console.log(Boolean(""))
console.log(Boolean(0))
console.log(Boolean(-0))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(NaN))
// Truthy values
console.log(Boolean({}))
console.log(Boolean([]))

console.log("apple" && "banana" && "")

/**********************************************************************/
//! OR OPERATOR ||
console.log(false || false || true || false || false)