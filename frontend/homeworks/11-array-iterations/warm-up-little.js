//! LET ME WARM UP A LITTLE

let number = [1, 7, 11, 34, 67, 1, 2, 3];
let numbers = [1, 56, 99, 100, 132, -14, 68, -178, 91, 10, 54, -198, 7, 3, 6, 11, -125, 1290];
let strArrays = ["Apple", "Cat", "Ball", "Cartoon", "Banana", "Avocado", "Juice"];

//* 1-Write an algorithm that reverses the order of elements in an array, but creates a new array without directly changing the array elements

const reverseArrayElements = (arr) => {
    return arr.reverse();
}
console.log(reverseArrayElements(strArrays));

//* 2-Write a function that separates all numbers in an array into two separate sub-arrays based on whether they are even or odd.

let even = [];
let odd = [];
const isEvenOrOdd = (arr) => {
    arr.map((item) => {
        if (item % 2 === 0) even.push(item);
        else odd.push(item);
    })
    console.log(`Even Array : ${even}`);
    console.log(`Odd Array : ${odd}`);
}
isEvenOrOdd(numbers);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const [oddSum, evenSum] = numbers.reduce(
//   (acc, n) => {
//     n % 2 === 0 ? (acc[0] += n) : (acc[1] += n);
//     return acc;
//   },
//   [0, 0]
// );

console.log("Odd Sum:", oddSum, "| Even Sum:", evenSum);

//* 3-Write an algorithm that calculates the sum of the numbers following each element in an array and creates an new array

const sumNumberFollowing = (arr) => {
    let sum = 0;
    let sumArray = [];
    arr.map((item, index, arrays) => {
        arrays[index + 1] !== undefined ? sum = arrays[index] + arrays[index + 1] : null
        sumArray.push(sum)
    })
    return sumArray
}
console.log(sumNumberFollowing(numbers));

//* 4-Write an algorithm to find the most frequently occurring element in an array and the number of occurrences.
//TODO
//* 5-Write an algorithm that calculates the mode (most repeated element) of all elements in an array.
//TODO
//* 6-Write a function that splits an array into sub-arrays (e.g. every 3rd element) and returns an array of sub-arrays.
// Example:
// [1, 2, 3, 4, 5, 6] → [[1, 2, 3], [4, 5, 6]]
//TODO
//* 7-Write a function that calculates the differences between all elements in an array and returns a new array.
// Example:
// [10, 7, 4] →[3, 3]

const differenceElement = (arr) => {
    let difference = [];

    arr.map((item, index, arrays) => {
        arrays[index + 1] !== undefined ? difference.push(arrays[index] - arrays[index + 1]) : null
    })
    return difference;
}
console.log(differenceElement(numbers));

//* 8-Write an algorithm that replaces each element in an array by the product of the square of itself and its index.

const squareOfIndex = (arr) => {
    let result = arr.map((item, index) => console.log(`the new value of element number ${item}, which has index number ${index}, is ${Math.pow(item, 2) * index}`))
    return result;
}
squareOfIndex(numbers)

//* 9-Sort the numbers in an array from largest to smallest, but return only the new array without disturbing the original order of the array.

const sortArray = (arr) => {
    return arr.sort().reverse();
}
console.log(sortArray(numbers));

//* 10-Write an algorithm that sorts an array by computing the total length of each element.
// Example:
// ['a', 'bb', 'ccc'] → ['ccc', 'bb', 'a']
//TODO

//* 11-Write a function that sums the first 5 elements in an array and changes the rest to zero.
//Burada ikitane map kullanmak durumunda kaldım, varsa kısa yöntemi çözüm yoluna açığım

const sumAndWriteZero = (arr) => {
    let sum = 0;
    let a = 0;
    let result = arr.map((item, index) => index < 5 ? sum += item : item[index] = 0)
    let lastResult = result.map((item, index) => index === 0 ? item[index] = sum : item[index] = 0)
    return lastResult;
}
console.log(sumAndWriteZero(number))

//* 12-Write an algorithm that separates an array into two groups, greater than or less than a given threshold (e.g. 10).

const olderThan10 = (arr) => {
    let less10 = [];
    let older10 = [];
    let allList = [];
    arr.filter((item) => item < 10 ? less10.push(item) : older10.push(item))
    return allList = [less10, older10];
}
console.log(olderThan10(number));

//* 13-Write an algorithm that adds the elements of an array together with their indexes.
// Example:
// [5, 10, 15] → [5, 11, 17]

const addIndexToItem = (arr) => {
    return arr.map((item, index) => item + index)
}
console.log(addIndexToItem(number));

//* 14-Write a function that returns the sum of the squares of each element in an array, but does not account for negative numbers.
console.log(14);
const square = (arr) => {
    let sum = 0;
    let result = arr.filter((item) => item >= 0).map((item) => Math.pow(item, 2))
    for (let a of result) {
        sum += a;
    }
    return sum;
}
console.log(square(number));

//* 15-Write an algorithm that returns a new array by considering the number of occurrences of elements in an array.
// Example:
// [2, 2, 3, 3, 3] →[4, 9]

//TODO

//* 16-Write an algorithm to split an array into two separate arrays, odd and even, based on their indexes.

const evenOrOddIndex = (arr) => {
    let evenIndex = [];
    let oddIndex = [];
    arr.map((item, index) => index % 2 === 0 ? evenIndex.push(`even index ${index}:${item}`) : oddIndex.push(`odd index ${index}:${item}`));
    console.log(evenIndex);
    console.log(oddIndex);
}
evenOrOddIndex(number)

//* 17-Write a function that returns the sum of strings that are only digits in an array.
// Example:
// ['1', '2', 'abc', '3'] → 6

//TODO

//* 18-Write an algorithm that reduces consecutive elements in an array to a single element.
// Example:
// [1, 1, 2, 3, 3, 3, 4] →[1, 2, 3, 4]

//TODO

//* 19-Write a function that squares all even numbers in an array and calculates the sum of those squares.

const squareSum = (arr) => {
    let sum = 0;
    arr.forEach((item) => item % 2 === 0 ? sum += Math.pow(item, 2) : null)
    return sum;
}
console.log(squareSum(number));

//* 20-Write an algorithm that returns a string by translating each element in an array by its index.
// Example:
// [10, 20, 30] → "0:10, 1:20, 2:30"

const indexAndItem = (arr) => {
    return arr.forEach((item, index) => console.log(`${index}:${item}`))
}
indexAndItem(number);






