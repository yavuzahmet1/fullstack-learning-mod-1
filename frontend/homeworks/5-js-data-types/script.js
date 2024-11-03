//! Data Types Application Questions

//! 1-Number Operations
// Write a program that calculates the area and circumference of a circle by asking the user for the radius of the circle.

let r = 30;
let result;
console.log("1-Number Operations")
console.log(`Area of ​​circle: ${Math.floor(Math.PI * (r ** 2))} and surroundings: ${Math.floor(2 * Math.PI * r)}`)


//! 2-Decimal Rounding
// Get a decimal number from the user. Round it up and then down to display the result.
let number = 45.4 //prompt('Please enter a decimal number')
console.log("2-Decimal Rounding")
console.log(`The number you entered has been rounded down :${Math.floor(number)}; The number you entered is rounded up: ${Math.ceil(number)}`)


//! 3-Random Number Generation
// Write a program that generates a random number between 1 and 100 and prints that number to the screen.
console.log("3-Random Number Generation")
console.log((Math.floor(Math.random() * 100)) + 1);

//! 4-Finding Max and Min
// Write a program that takes 5 numbers from the user and finds the largest and smallest numbers among these numbers.
let arrayNumbers = [2, 3, 4, 8, 9, 10, 32, 22];
console.log("4-Finding Max and Min")
console.log(`minimum number : ${Math.min(...arrayNumbers)}, maximum number : ${Math.max(...arrayNumbers)} in array`)

//! 5-Number Conversion
// Take an integer as text from the user and convert it to an integer and print it to the screen.

let enteredStringNumber = "456";
console.log("5-Number Conversion")
console.log(`The number entered as a ${typeof enteredStringNumber} "${enteredStringNumber}" was converted to ${typeof Number(enteredStringNumber)} type and one was added to the result : ${Number(enteredStringNumber) + 1}`)

//! 6-Exponent Calculation
// Write a program that takes two numbers from the user and raises the first number to the power of the second number.
console.log("6-Exponent Calculation")
let numberA = 10;// prompt("Enter the number to be calculated as the exponent.")
let numberB = 5; //prompt("Enter the number of exponents.")

console.log(Math.pow(numberA, numberB))

//! 7- Calculating Square Roots
// Write a program that finds the square root of a number. Get the number from the user.
console.log("7- Calculating Square Roots")
let squareNumber = 225;
console.log(`${squareNumber} square root of the number : ${Math.sqrt(squareNumber)} or ${Math.pow(squareNumber, 0.5)}`)

//! 8- String Concatenation
// String Concatenation Write a program that takes two sentences from the user, concatenates them, and prints them on the screen.

console.log("8- String Concatenation")
const sentence1 = "Please enter the first sentence:" //prompt("Please enter the first sentence:");
const sentence2 = "Please enter the second sentence:" //prompt("Please enter the second sentence:");

console.log(sentence1 + " " + sentence2)

//! 9- String Length
// Write a program that takes a word from the user and finds the length of that word.

console.log("9- String Length")

let str = "lorem Ipsum ante date"
console.log(`character length : ${str.length}`)

//! 10-  String Character Replacement
// Take a word from the user and replace the 3rd character of the word with 'Z', then print the result on the screen

console.log("10-  String Character Replacement")

let inpuStrChange = "replace my word"

inpuStrChange[2] = "Z";
console.log(`changed character ${inpuStrChange.replace(inpuStrChange[2], "Z")}`)


//! 11- Boolean Comparison
// Write a program that takes two numbers from the user and checks whether they are equal.

console.log("11-Boolean Comparison")

let num1 = 30 //prompt("Enter a number")
let num2 = 40 //prompt("Enter a number")
console.log(`Equality of the ${num1} and ${num2} numbers is ${num1 === num2}`)

//! 12- Number or String?
// Write a program that takes input from the user and checks whether the value is a number or a string.

console.log("12- Number or String?")

let info = 232323; //prompt("Enter a character");
console.log(`${typeof info} is the data type you entered`);

//! 13- Calculating Birth Year
// Write a program that calculates the user's age based on the year the user was born

console.log("13- Calculating Birth Year")

let birthDate = 1987; //prompt("Enter your birth date")
let now = new Date();
console.log(`Your age based on the date you entered ${now.getFullYear() - birthDate}`)

//! 14- Difference Between Null and Undefined
//First declare a variable as null and then as undefined and in both cases print the type of the variable.

console.log("14- Difference Between Null and Undefined")

let nullVariable = null;
let undefinedVariable = undefined;
console.log(`The type of variable declared null : ${typeof nullVariable}, The type of variable declared as undefined : ${typeof undefinedVariable}`)

//! 15- Mathematical Operation
// Write a program that takes a number from the user and calculates the square and cube of that number.

console.log("15- Mathematical Operation")

let enterNumber = 12; //prompt("Enter a number")
console.log(`${enterNumber} square : ${enterNumber ** 2} and cube : ${enterNumber ** 3} of the number`)

//! 16- Printing String Characters One by One
// Write a program that takes a word from the user and prints each character of that word on separate lines.

console.log("16- Printing String Characters One by One")

let enteredWord = "Write a word"
for (word of enteredWord) {
    console.log(word)
}

//! 17- Date Formatting
// Write a program that takes today's date and prints it to the screen in "Day/Month/Year Hour:Minute" format.

console.log("17- Date Formatting")

let nowDate = new Date();
console.log(`Now Date is : ${nowDate.getDay()}/${nowDate.getMonth()}/${nowDate.getFullYear()} ${nowDate.getHours()}:${nowDate.getMinutes()}`)

//! 18- Converting to Integer
// Take a decimal number from the user and print the integer part of that number.

console.log("18- Converting to Integer")

let floatToInt = 34.89;// prompt("Enter a decimal number");

console.log(`the integer part of the decimal number : ${floatToInt} you entered : ${Math.trunc(floatToInt)}`)

//! 19- Average Calculation
// Write a program that takes three different numbers from the user, calculates the average of these numbers, and prints them on the screen.

console.log("19- Average Calculation")

let a = 34, b = 23, c = 41;

let resultAvg = [a, b, c]
console.log((resultAvg.reduce((sum, number) => sum + number, 0) / resultAvg.length).toFixed())

//! 20- Accessing Array Elements
// Define an array and print the first and last elements of this array. You can also get the array from the user

console.log("20- Accessing Array Elements")

let arrayNumber = [23, 245, 76, 98, 101]

console.log(`first data : ${arrayNumber.shift()} and last data ${arrayNumber.pop()} of the array`)


