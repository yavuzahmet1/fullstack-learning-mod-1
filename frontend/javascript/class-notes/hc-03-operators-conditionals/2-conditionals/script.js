/* -------------------------------------------------------------------------- */
//!                                CONDITONALS                             */
/* -------------------------------------------------------------------------- */
//! ******* IF -  ELSE 
/*if ( şart )
{ 
    şart durumu doğru ise bu blok çalıştırılır
}
else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

let number = 349//Number(prompt("Enter a number"))
console.log(typeof number)
let remain = number % 2
if (remain === 0) {
    console.log("Number is even")
} else {
    console.log("Number is odd ")
}
//! ******* IF - ELSE IF - ELSE 
/* if ( şart1 )
{ 
    şart1 durumu doğru ise bu blok çalıştırılır
} 

else if (şart2 ){
    şart1 durumu doğru değil şart2 durumu doğru ise bu blok çalıştırılır
}

else{
    şart durumu doğru değilse bu blok çalıştırılır.
}
*/

const number1 = 345;
const number2 = 22;
const operator = "*"//prompt("please enter one of the operators such as '+,-,*,/' ")
if (operator === "+") {
    console.log(`${number1}${operator}${number2} :`, number1 + number2)
} else if (operator === "-") {
    console.log(`${number1}${operator}${number2} :`, number1 - number2)
} else if (operator === "*") {
    console.log(`${number1}${operator}${number2} :`, number1 * number2)
} else if (operator === "/") {
    console.log(`${number1}${operator}${number2} :`, number1 / number2)
    if (number2 != 0) {
        console.log(number1 / number2)
    } else {
        console.log("infinity")
    }
}

/* -------------------------------------------------------------------------- */
//!                                SHORT CIRCUIT                              */
/* -------------------------------------------------------------------------- */
// JavaScript'te || (veya) ve && (ve) operatörleri, ifadeleri değerlendirirken "kısa devre" yaparak çalışır. Bu, ifadelerin doğruluğunu ya da yanlışlığını kontrol ederek sonuca erken ulaşmalarını sağlar. Böylece, gerekli olmadıkça diğer ifadeleri incelemezler.

// Short-Circuit Operatörleri Nasıl Çalışır?

// OR (||) Operatörü: İlk doğru (truthy) değeri bulduğunda durur ve onu döndürür. Eğer ilk ifade yanlış (falsy) ise, bir sonrakine geçer.

// AND (&&) Operatörü: İlk yanlış (falsy) değeri bulduğunda durur ve onu döndürür. Eğer ilk ifade doğru (truthy) ise, bir sonrakine geçer.

let age = 18;
let control = age >= 18 && "can vote";

console.log(control)
console.log(control ? "can vote" : "ca not vote")

let isStock = true;
let balance = 150;
let price = 100;
let messageSale = (isStock && balance) ? "You can make a purchase" : "You cannot make a purchase"
console.log(messageSale)

//! OR OPERATOR
let favoriteColor = null;
let defaultColor = "blue";
let color = favoriteColor || defaultColor;
console.log(color)