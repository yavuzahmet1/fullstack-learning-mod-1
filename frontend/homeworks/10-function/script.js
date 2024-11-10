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


