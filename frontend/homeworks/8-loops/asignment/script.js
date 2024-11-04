//! TERNARY

//?  1.Classifying a Number: Whether a number is positive, negative or zero and return "Positive", "Negative" or "Zero".

let numberStatus = 1;

const resultNumberStatus = numberStatus < 0 ? "Negative" : numberStatus === 0 ? "Zero" : "Positive";

console.log(resultNumberStatus);

//? 2.Credit Application Status: If a person's credit score is 700 or higher "Loan approved" if between 500 and 699 "Additional documents required" if above 500 if below return "Credit denied"

let creditStatus = 600;

const resultCreditStatus = creditStatus >= 700 ? "Loan approved" : creditStatus > 500 || creditStatus < 699 ? "Additional documents required" : "Credit denied";

console.log(resultCreditStatus);

//? 3.Temperature Condition: According to a temperature value, "Below freezing point", "Room Determine whether "at temperature" or "at boiling point"

let temperture = 40;

const resultTemperture = temperture < 0 ? "Below freezing point" : temperture > 100 ? "at boiling point" : "Room Determine whether at temperature"

console.log(resultTemperture);

//? 4.Student Achievement Status: "Excellent", "Good", "Average", according to a student's grade Set success levels such as "Bad" 90-100 Great, 80-89 Good, 70-79 Fair, 0-69 Poor)

let note = 91;

const resutNote = note >= 90 && note <= 100 ? "Excellent" : note >= 80 && note <= 89 ? "Good" : note >= 70 && note <= 79 ? "Fair" : "poor";

console.log(resutNote);

//? 5.Age Group: "Child", "Teenager", "Adult", "Elderly" based on a person's age Categorize as 0-12 Child, 13-24 Youth, 25-64 Adult, 65 and above: old

let age = 49;

const resultAge = age >= 0 && age <= 12 ? "Child" : age >= 13 && age <= 24 ? "Youth" : age >= 25 && age <= 64 ? "Adult" : "old";

console.log(resultAge);

//? 6.Discount Status of a Product: 20% if the price of a product is 100 TL or more Discount: 10% discount if it is between 50-99 TL, no discount if it is below calculate the new price

let price = 55;

let resultPrice = price >= 100 ? `${price - ((price * 20) / 100)}` : price >= 50 && price <= 99 ? `${price - ((price * 10) / 100)}` : `${price}`;

console.log(resultPrice);

//? 7.Membership Status of a User: If a user is a member, "Membership is logged in", if not, give "Guest login" message. Additionally, if the user is a member, active or check passive status

let isMember = true

const memberStatus = isMember === true ? "Membership is logged in" : "Guest login"

console.log(memberStatus);

//? 8.Comparison of Two Values: By comparing two numbers, "Both are equal", "First greater", return result as "Second greater"

let number1 = 45;
let number2 = 50;

const resultNumbers = number1 === number2 ? "Both are equal" : number1 > number2 ? "First greater" : "Second greater"

console.log(resultNumbers);

//? 9.Course Selection: "Basic", "Intermediate", "Advanced" according to a student's course selection Beginner: 1-3, Intermediate: 4-6, Advanced: 7-10

let level = 3;

const resultStatus = level >= 1 && level <= 3 ? "Basic" : level >= 4 && level <= 6 ? "Intermediate" : "Advanced"

console.log(resultStatus);

//? 10.Department Selection: Which department a student can study according to his/her grades? Specify: "Engineering" 80 and above), "Economics" 60-79, "Social Sciences" 0-59.

let department = 85;

const resultDepartment = department >= 0 && department <= 59 ? "Engineering" : department >= 60 && department <= 79 ? "Economics" : "Engineering"

console.log(resultDepartment);



//! LOOPS==> SECTION 1

//? 1. A program that checks whether a number entered by the user is prime in summer.

console.log("İs prime number?");

let number = 37;

//? 2. Write a function that finds the largest and smallest numbers in an array (array none, just numbers).



//? 3. A tool that checks whether a word entered by the user is a palindrome. Write a function.


//? 4. Write a random number guessing game between 1 and 50 and the user Let it continue until you guess correctly.


//? 5. Write a function that calculates the factorial of the number received from the user.


//! LOOPS==> SECTION 2

//? 1. A method that calculates the sum and average of numbers from 1 to N. write a program.


//? 2. A method that calculates the sum and average of all elements in an array. write function (no arrays, just numbers).


//? 3. A system that calculates the number of vowels in a text entered by the user. write a program.


//? 4. Write a program that prints the Fibonacci sequence up to a certain number.


//? 5. Finds the vowels in a word entered by the user and reads each vowel Write a program that displays the number.


