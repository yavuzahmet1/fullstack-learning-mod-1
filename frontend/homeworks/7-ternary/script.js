//*TERNARY

//? 1. Is number negative or positive?
let number = 30;
let resultNumber = number > 0 ? "positive" : "negative";
console.log(resultNumber);

//? 2. Is a person 18 years of age or older?
let age = 32;
let resultAge = age > 18 ? "Person over 18 years old" : "Person is not over 18 years old"
console.log(resultAge);

//? 3. Check if a number is even or odd.
let num = 34;
let resultNum = num % 2 === 0 ? "even" : "odd"
console.log(resultNum);

//? 4. If a username is not entered, default to "Guest".
let username = "Ahmet";
let resultUsername = username == "" ? "Guest" : username;
console.log(resultUsername);

//? 5. Check if a student's grade is 50 or greater.
let grade = 54;
let resultGrade = grade >= 50 ? "over 50 or greater" : "Less than 50"
console.log(resultGrade);

//? 6. According to weather if the temperature is higher than 20 degrees, set it as "HOT", otherwise set it as "Cold" 
let temperature = 32;
let resultTemperture = temperature > 20 ? "HOT" : "COLD"
console.log(resultTemperture);

//? 7. Classify a person as "Child" or "Adult" based on their age.
let personAge = 19;
let resultPersonAge = personAge > personAge ? "Adult" : "Child";
console.log(resultPersonAge);

//? 8. If a customer is a member, give a 10% discount, otherwise return full price.

let member = false;
let resultMember = member === true ? "10% discount" : "full price";
console.log(resultMember);

//? 9. Check whether a character is lowercase or uppercase.

let character = "A";
let resultCharacter = character === character.toLowerCase() ? "character is lowercase" : "uppercase";

console.log(resultCharacter);

//? 10. If it is an input number type, classify it as "Number", not "Text".

let inputCharacter = "45"
let resultInputCharacter = typeof inputCharacter === "number" ? "Number" : "Text";
console.log(resultInputCharacter);

//! Intermediate to Advanced

//? 1. Determine whether a person will be free if they are under 12, discounted if they are over 60, or will pay full price otherwise.

let agePay = 11;
let resultAgePay = agePay < 12 ? "free" : agePay > 60 ? "discounted" : "full price"

console.log(resultAgePay);

//? 2. Classify a student as "Failing", "Average" or "Passing" based on their grade.

let note = 70;
let resultNote = note < 50 ? "Falling" : note > 80 ? "Passing" : "Average";

console.log(resultNote);

//? 3. Determine whether a day is a weekday or a weekend by whether the day name is "Saturday" or "Sunday".

let day = "Saturday";
let resultDay = (day === "Saturday" || day === "Sunday") ? "weekend" : "weekday";

console.log(resultDay);

//? 4. Determine whether a number is positive, negative, or zero.

let givenNumber = -1;
let resultGivenNumber = givenNumber < 0 ? "negative" : givenNumber === 0 ? "zero" : "positive";

console.log(resultGivenNumber);

//? 5. If a user is a member, set the shipping to free, if not, set it to 20 TL. However, if the order amount is 100 TL or more, set it to free.

let productPrice = 150;
let IsMember = false;
let resultCargoPrice = (productPrice > 100 || IsMember == true) ? "Cargo price is free" : `Total price : ${productPrice + 20} `
console.log(resultCargoPrice);

//? 6. Determine the larger of the two given numbers.

let num1 = 14;
let num2 = 37;

let resultN = num2 < num1 ? "num1 is larger than num2" : "num2 is larger than num1"
console.log(resultN);

//? 7. Check if the user's password is both "password123" and 8 characters or more in length.

let password = "password123";
let enteredPassword = "daasd"
let resultPassword = password === enteredPassword ? "Password is true" : enteredPassword.length < 8 ? "password must be over 8 character" : "Password is wrong"

console.log(resultPassword);

//? 8. Determine whether a number is divisible by both 3 and 5.

let givenNum = 44;
let resultGivenNum = (givenNum % 3 === 0 && givenNum % 5 === 0) ? "divisible by both 3 and 5" : "not divisible by both 3 and 5."

console.log(resultGivenNum);

//? 9. If a product's price information is valid and in stock, return "Available for sale". Otherwise, return "Not available".

let isValidPrice = 50;
let isInStock = true;

let resultSale = (isValidPrice && isInStock === true) ? "Available for sale" : "Not Available"

console.log(resultSale);


//? 10. If a student's grade is greater than 50 and the number of absences is less than 5, give a "Pass" message, otherwise give a "Fail" message.

let studentGrade = 71;
let absences = 4;

let resultPass = (studentGrade >= 50 && absences < 5) ? "Pass" : "Fail"

console.log(resultPass);

