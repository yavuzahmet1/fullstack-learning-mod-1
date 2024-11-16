//!ARRAY ITERATIONS

//! WARMING UP QUESTIONS

let numbers = [1, 56, 99, 100, 132, -14, 68, -178, 91, 54, -198, 7, 3, 6, 11];
let strArrays = ["Apple", "Cat", "Ball", "Cartoon", "Banana", "Avocado", "Juice"];

//* 1-Write a function that squares the positive numbers in an array and returns the ones whose result is greater then 50.

const positiveNumberSquare = (numbersArray) => {
    numbersArray
        .filter((item) => item > 0)
        .forEach((x) => console.log(`${x} number is square ${Math.pow(x, 2)}`))
}
positiveNumberSquare(numbers)

//* 2-Write a function that calculates the product of all the numbers in an array

const allMultiplication = (arr) => {
    let total = 1;
    for (number of arr) {
        total *= number
    }
    return total;
}
console.log(`All number multiplication : ${Math.abs(allMultiplication(numbers))}`);

//* 3-Write a function that returns the index of the first negative number in an array.

const findNegative = (num) => {
    console.log(num);
    for (let index in num) {
        if (num[index] < 0) return index;
    }
    return null;
}
console.log(`index of the first negative number in the array : ${findNegative(numbers)}`);

//* 4-Write a function that converts all words in a string to uppercase.

const allConvertUpperCase = (str) => {
    str.forEach((item) => console.log(item.toUpperCase()))
}
allConvertUpperCase(strArrays)

//* 5-Write a function that finds the first 50+ numbers in an array.

const findOlderThan50 = (num) => {
    for (let n of num) {
        if (n > 50) return n;
    }
    return null;
}
console.log(`50 is the first big number in this array : ${findOlderThan50(numbers)}`);

//* 6-Write a function that squares the numbers in an array and returns the numbers less than 100.

const squareAndOlderThan100 = (num) => {
    const result = num.map((item) => Math.pow(item, 2)).filter((item) => item < 100);
    console.log(result);
}
squareAndOlderThan100(numbers);

//* 7-Write a function that checks whether all elements in an array are even.

const isEvenArray = (num) => num % 2 === 0;
console.log(numbers.every(isEvenArray) ? "This array is even" : "This array not even");

//* 8-Write a function to reverse an array,

const reverseArr = (num) => {
    return num.reverse();
}
console.log(reverseArr(numbers));

//* 9-Write a function to check if at least one element in an array is a multiple of 10

const isThereMultiple10 = (num) => num % 10 === 0;
console.log(numbers.some(isThereMultiple10) ? "There are 10 times the number" : "There is no number multiple of 10");

//* 10-Write a function that reverses all the words in an array.
console.log(strArrays[2].reverse);
const reverseSentence = (num) => {
    let sentence = num.map((item) => item.split("").reverse().join(""))
    console.log(sentence);
}
reverseSentence(strArrays)
