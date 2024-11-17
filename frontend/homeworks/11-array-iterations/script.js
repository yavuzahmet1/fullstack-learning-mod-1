//!ARRAY ITERATIONS

//! WARMING UP QUESTIONS

let numbers = [1, 56, 99, 100, 132, -14, 68, -178, 91, 10, 54, -198, 7, 3, 6, 11, -125, 1290];
let strArrays = ["Apple", "Cat", "Ball", "Cartoon", "Banana", "Avocado", "Juice", ["pear", "muskmelon", "watermelon"]];

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

//* 11-Write a function that returns only odd numbers from an array.

const returnEvenNumbers = (arr) => {
    let evenNumbers = arr.filter((item) => (item % 2 === 1) || (item % 2 === -1));
    console.log(evenNumbers);
}
returnEvenNumbers(numbers)

//* 12-A function that adds an index to each element in an array and returns a new array write a function.

const addIndexToArray = (arr) => {
    let addIndex = arr.map((item, index) => `the index number ${index} is ${item}`)
    console.log(addIndex);
}
addIndexToArray(numbers)

//* 13-Write a function that finds the largest number in an array.

const bigNumberInArray = (arr) => {
    let tmp = arr[0];
    for (let a of arr) {
        if (tmp < a) tmp = a
    }
    return tmp;
}
console.log(bigNumberInArray(numbers));

//* 14-Write a function that increments each element in an array by 3 (in place of the array by changing).

const addNumberToArray = (arr) => {
    let addThree = arr.map((item) => item + 3)
    console.log(addThree);
}
addNumberToArray(numbers)

//* 15-For the first time in a series write a function that returns the index of the element that is 10.

const findOf10Index = (arr) => {
    const find = arr.map((item, index) => {
        if (item === 10) return index
    }).filter((i) => i !== undefined)
    console.log(`the index where the number is located is ${find}`);
}
findOf10Index(numbers)

//* 16-A function that checks whether all the numbers in an array are positive or not in summer

const isPositiveArray = (arr) => arr < 0

console.log(numbers.every(isEvenArray) ? "the series is all negative" : "there is also a positive number in the sequence")

//* 17-Type a function that returns words longer than 4 characters in an array

const olderThan4Char = (arr) => {
    const result = arr.filter((item) => item.length > 4)
    console.log(result);
}
olderThan4Char(strArrays)

//* 18-Write a function that turns the substrings in an array into a flat list.

const straightArray = (arr) => {

}
straightArray(strArrays)

//* 19-A function that separates the words in an array into letters and turns them into a straight list in summer.
// bu soruyu araştırarak yaptım 2 farklı kullanım mevcut olduğunu gördüm flatMap() ve map().flat()
const sentenceToLetter = (arr) => {
    return arr.flatMap(item => item.split(""));
}
console.log(sentenceToLetter(strArrays));

const sentenceToLetter2 = (arr) => {
    return arr.map(item => item.split("")).flat();
}
console.log(sentenceToLetter2(strArrays));

//* 20-Write a function that calculates the sum of even numbers in an array.

const evenTotalInArray = (arr) => {
    let total = 0;
    arr.map((item) => {
        if (item % 2 === 0) total += item
    })
    console.log(`the sum of the even numbers in the sequence : ${total}`);
}
evenTotalInArray(numbers)