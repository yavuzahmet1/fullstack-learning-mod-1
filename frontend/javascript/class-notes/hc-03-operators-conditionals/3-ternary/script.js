//!  ************  TERNARY OPERATOR ************
// Şarta bağlı durumlar yazmak için başka ve daha kısa bir yöntem de ternary operator
// ES6 ile gelen bir özellik

//1. uses

let age = 20;

age >= 18 ? console.log("You can use vote") : console.log("You can not use vote");

//2.uses

let message = age > 18 ? "You can use vote" : "You can not use vote";
console.log(message);

let ageForSoldier = 20;
let gender = "male";
let health = true;

if (ageForSoldier > 18 && gender == "male" && health == true) {
    console.log("You can be soldier");
} else {
    console.log("You can not be soldier");
}

const result = (ageForSoldier > 18 && gender == "male" && health == true) ? "You can be soldier" : "You can not be soldier"
console.log(result);

//Is the given number odd or even?
let x = 34;
let resultx = (x % 2 === 0) ? "number is even" : "number is odd";
console.log(resultx);

//speed 120>fast => 90>normal =>90<speed slow// nested ternary structure
let speed = 80;

let resultSpeed = (speed > 120) ? "fast" : (speed > 90) ? "normal" : "slow";
console.log(resultSpeed);

let day = "Saturday";
let resultDay = (day == "Saturday" || day == "Sunday") ? "weekend" : "mid-week";
console.log(resultDay);




