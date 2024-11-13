// //!Assignment Warm-up Questions***

// //?1 - Finding out whether the number is odd or even

// let number = +prompt("Enter a number");

// const numberStatus = (n) => n % 2 === 0 ? "Even" : "odd"
// console.log(`${number} is ${numberStatus(number)}`);

// //? 2-Is the number a multiple of5?

// let isMultipleOf5 = +prompt("Enter a number");

// const resultIsMultiple = (n) => n % 5 === 0 && n != 0 ? "a multiple of 5" : "not a multiple of 5";
// console.log(`The number ${isMultipleOf5} you have entered is ${resultIsMultiple(isMultipleOf5)}`);

// //? 3-Is number positive or negative?

// let num = +prompt("Enter a number");

// const isNegativeOrPositive = (n) => n < 0 ? "negative" : "positive";
// console.log(`The number ${num} you have entered is ${isNegativeOrPositive(num)}`);

// //? 4-Converting a number to an absolute value.

// let absoluteNumber = +prompt("Enter a number");

// const isAbsoluteNumber = (n) => n *= -1;
// console.log(`The absolute value of the number is ${isAbsoluteNumber(absoluteNumber)}`);

// //? 5-Finding the square of a number

// let squareNumber = +prompt("Enter a number");

// (function (n) {
//     console.log(`You entered is : ${squareNumber}==> Square result : ${n *= n}`);
// })(squareNumber);

// //? 6-Finding out how many digits entered number is.

// let enterNumber = +prompt("Enter number a number");

// let digitNumber = 0;
// function findNumberOfDigits(n) {
//     digitNumber = n.toString().length;
//     return digitNumber;
// }
// console.log(findNumberOfDigits(enterNumber));

// //? 7-Finding the sum of two entered numbers

// let sum1 = +prompt("Enter a first");
// let sum2 = +prompt("Enter a second");

// (function (a, b) {
//     console.log(`You entered is : ${sum1}+${sum2}==> Square result : ${sum1 + sum2}`);
// })(sum1, sum2);

// //? 8-Is the entered number between Dec. 10 and Dec. 20?

// let between = +prompt("Enter a number");

// const isBetween = (n) => n < 10 || n > 20 ? "The number you entered is not between 10 and 20" : "The number you entered is between 10 and 20"
// console.log(isBetween(between));

// //? 9-Calculating the rectangular area.

// let shortEdge = +prompt("Enter the length of the short side of the rectangle");
// let longEdge = +prompt("Enter the length of the long side of the rectangle");

// (function (a, b) {
//     console.log(`The short and long side of the rectangle : ${shortEdge}*${longEdge}==> The area of the rectangle : ${shortEdge * longEdge}`);
// })(shortEdge, longEdge);

// //? 10-If the number is positive, add 1; If negative, subtract 1

// let enteredNumber = +prompt("Enter a number");

// (function (n) {
//     const resultEnterNumber = n === 0 ? `You entered number zero` : n < 0 ? `You entered a negative number : ${enteredNumber} and 1 was subtracted from your count : ${enteredNumber - 1}` : `You entered a positive number : ${enteredNumber} and added 1 from your number :${enteredNumber + 1}`;
//     console.log(resultEnterNumber);
// })(enteredNumber);


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


///? 4-Excellent number control

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

//? 5-Checking the Armstrong Number

let armstrong = 153;

function isArmstrong(n) {
    let tmp = n.toString().split("");
    let total = 0;

    for (let index = 0; index < tmp.length; index++) {
        total += Math.pow(Number(tmp[index]), 3)
    }
    return total
}
const resultArmstrong = isArmstrong(armstrong) == armstrong ? "Number is Armstrong" : "Not Armstrong"
console.log(resultArmstrong);

//? 6-Printing the Pascal Triangle

let enterStep = 10;//+prompt("Enter a step number");

const drawTriangle = (n) => {
    for (let i = 0; i < n; i++) {
        console.log(` `)
        for (let j = 0; j < i; j++) {
            document.write("*");
            console.log("*")
        }
    }
}
drawTriangle(enterStep);

//? 7-Making a number with three digits

let enterNumberDigit = 7; //+prompt("Enter number a number");

function makeThree(n) {
    return "00" + n.toString()
}
console.log(makeThree(enterNumberDigit));


//? 8-Converting a number to a binary system

let enterForBinary = 56;

console.log(enterForBinary.toString(2));

// function turnToBinary(n) {
//     let baseBinary = "";
//     let remaining = 0;
//     let base = 0;
//     //baseBinary = n.toString().split(``);
//     console.log(baseBinary);
//     while (n > 0) {
//         remaining = n % 2;
//         //console.log(remaining);
//         baseBinary = remaining + baseBinary;
//         // console.log(base);
//         n = Math.floor(n / 2);
//         // console.log(base);
//     }
//     return base;
// }
// console.log(turnToBinary(enterForBinary));

//? 9-Find the sum of the digits of a number

let stepCount = 253;

function stepCalculate(n) {

    let tempStep = n.toString().split("");
    let total = 0;

    for (let i = 0; i < tempStep.length; i++) {
        total += Number(tempStep[i])
    }
    console.log(`you entered to number total : ${total}`);
}
stepCalculate(stepCount)

//? 10-Finding the exact divisors of a number

let exactDivisors = 54;

function divisors(n) {

    let mergeDivisors;

    for (let i = 1; i <= n; i++) {
        if (exactDivisors % i === 0) {
            mergeDivisors += "," + i.toString();
        }
    }
    console.log(mergeDivisors);
}
divisors(exactDivisors)

//? 11-Calculating exponential numbers=>Davetsiz misafir fonksiyonu ile çözüldü

let bases = 3;
let exponents = 3;

(function (x, y) {
    console.log(`Bases ${bases} => ${exponents} result ${Math.pow(bases, exponents)}`)
})(bases, exponents)

//? 12-Calculating the factorial of the number

let factorialNumber = 5;

(function (n) {
    let calculator = 1;
    for (; n >= 1; n--) {
        calculator *= n
        console.log(`${n}!`)
    }
    console.log(`result : ${calculator}`)
})(factorialNumber);

//? 13-How to find out if the number has a digit

let n = 467;//+prompt("Enter a number");
let findNum = 6;

const findingNumber = (k) => {
    let count = 0;
    let toStrN = "";
    toStrN = n.toString();

    for (let i = 0; i < toStrN.length; i++) {
        if (toStrN[i] == k) count++;
    }

    const resultFind = count == 0 ? `There is no call in the number you entered` : `There are ${count} digits in the number you entered`
    console.log(resultFind);
}
findingNumber(n);