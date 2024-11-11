//!Assignment Warm-up Questions***

//?1 - Finding out whether the number is odd or even

let number = +prompt("Enter a number");

const numberStatus = (n) => n % 2 === 0 ? "Even" : "odd"
console.log(`${number} is ${numberStatus(number)}`);

//? 2-Is the number a multiple of5?

let isMultipleOf5 = +prompt("Enter a number");

const resultIsMultiple = (n) => n % 5 === 0 && n != 0 ? "a multiple of 5" : "not a multiple of 5";
console.log(`The number ${isMultipleOf5} you have entered is ${resultIsMultiple(isMultipleOf5)}`);

//? 3-Is number positive or negative?

let num = +prompt("Enter a number");

const isNegativeOrPositive = (n) => n < 0 ? "negative" : "positive";
console.log(`The number ${num} you have entered is ${isNegativeOrPositive(num)}`);

//? 4-Converting a number to an absolute value.

let absoluteNumber = +prompt("Enter a number");

const isAbsoluteNumber = (n) => n *= -1;
console.log(`The absolute value of the number is ${isAbsoluteNumber(absoluteNumber)}`);

//? 5-Finding the square of a number

let squareNumber = +prompt("Enter a number");

(function (n) {
    console.log(`You entered is : ${squareNumber}==> Square result : ${n *= n}`);
})(squareNumber);

//? 6-Finding out how many digits entered number is.

let enterNumber = +prompt("Enter number a number");

let digitNumber = 0;
function findNumberOfDigits(n) {
    digitNumber = n.toString().length;
    return digitNumber;
}
console.log(findNumberOfDigits(enterNumber));

//? 7-Finding the sum of two entered numbers

let sum1 = +prompt("Enter a first");
let sum2 = +prompt("Enter a second");

(function (a, b) {
    console.log(`You entered is : ${sum1}+${sum2}==> Square result : ${sum1 + sum2}`);
})(sum1, sum2);

//? 8-Is the entered number between Dec. 10 and Dec. 20?

let between = +prompt("Enter a number");

const isBetween = (n) => n < 10 || n > 20 ? "The number you entered is not between 10 and 20" : "The number you entered is between 10 and 20"
console.log(isBetween(between));

//? 9-Calculating the rectangular area.

let shortEdge = +prompt("Enter the length of the short side of the rectangle");
let longEdge = +prompt("Enter the length of the long side of the rectangle");

(function (a, b) {
    console.log(`The short and long side of the rectangle : ${shortEdge}*${longEdge}==> The area of the rectangle : ${shortEdge * longEdge}`);
})(shortEdge, longEdge);

//? 10-If the number is positive, add 1; If negative, subtract 1

let enteredNumber = +prompt("Enter a number");

(function (n) {
    const resultEnterNumber = n === 0 ? `You entered number zero` : n < 0 ? `You entered a negative number : ${enteredNumber} and 1 was subtracted from your count : ${enteredNumber - 1}` : `You entered a positive number : ${enteredNumber} and added 1 from your number :${enteredNumber + 1}`;
    console.log(resultEnterNumber);
})(enteredNumber);


//! I was already 😊 questions

//? 1-Finding The Fibonacci Series
console.log("1-Finding the fibonacci series");
let fibNumber = 7;

const findFibonacci = (n) => {
    let start = 0;
    let firstNumber = 1;
    let series = 0;

    for (let index = 1; index < n; index++) {
        series = start + firstNumber;
        start = firstNumber;
        firstNumber = series;
        console.log(series);
    }
}
findFibonacci(fibNumber);

//? 2-Prime Number Control
console.log("2-Prime Number Control");

let primeControlNum = 7;

const isPrime = (n) => {
    if (n === 2) return true
    if (n <= 1 || n === 0) return false

    for (let index = 2; index < n; index++) {
        if (n % index === 0) return false
    }
    return true
}
const resultPrime = isPrime(primeControlNum) ? "Number is prime" : "Not prime";
console.log(resultPrime);

//? 3-Finding the Inverse Of Numbers
console.log("Finding the Inverse Of Numbers");

let inverseNumber = 123;

const inverse = (n) => {
    let tempString = String(n);
    //console.log(tempString[2]);
    //let temp;
    for (let i = tempString.length - 1; i <= 0; i--) {
        console.log(i);
        //temp += tempString[index]
    }
}

inverse(inverseNumber);

//TODO

//? 4-Excellent Number Control
console.log("Excellent Number Control");


