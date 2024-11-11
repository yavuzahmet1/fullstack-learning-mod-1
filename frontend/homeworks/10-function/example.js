//! I was already 😊 questions

//? 1-Finding The Fibonacci Series

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

//? 3-Finding the inverse of numbers

let enterNumber = 6785;

const inverseOfNumber = (n) => {
    let concatNum;
    const inverse = n.toString().split("",)
    console.log(inverse.length);

    for (let i = inverse.length; i >= 0; i--) {
        concatNum += inverse[i];
    }
    return concatNum
}
console.log(inverseOfNumber(enterNumber).slice(3));

//other short solution

const inverse = (n) => {
    let tempString = n.toString().split("").reverse().join("");
    return parseInt(tempString);
}

inverse(enterNumber);


//? 4-Excellent number control

let excellentNumber = 6;

function isExcellentNumber(n) {
    let total = 0;
    for (let i = 1; i < n; i++) {
        if (n % i === 0) {
            total += i;
        }
    }
    if (n === total) {
        return true;
    }
    return false;
}
const resultExcellent = isExcellentNumber(excellentNumber) ? "Number is excellent" : "Number is not excellent";
console.log(resultExcellent);


