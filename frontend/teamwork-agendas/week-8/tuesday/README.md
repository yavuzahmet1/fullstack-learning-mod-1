# JS-CC-004 : TR Identity Number Validation

Purpose of the this coding challenge is to write a code that given TR Identity Number, returns  valid or invalid.

- Valid TR Identity Number must follow these rules:

1. TR Identity Number actually consists of 9 digits, the last 2 digits have been added for control/verification purposes. 
2. The ID number cannot start with 0. 
3. The 10th digit is obtained by using the first 9 digits, and the 11th digit is obtained by using the first 10 digits.
4. Add the digits in the 1st, 3rd, 5th, 7th and 9th digits, multiply by 7 and subtract the sum of the digits in the 2nd, 4th, 6th and 8th digits. 
5. The units digit of the result obtained (mod 10) gives the 10th digit of the ID number.
6. When we add the first 9 digits of the ID number and the 10th digit obtained by the above method, the ones digit (mod 10) gives the 11th digit.

## Expected Outcome

<img src="./img/id.gif" width="600" />

## Learning Outcomes

At the end of the this coding challenge, students will be able to;

- Analyze a problem, identify and apply programming knowledge for appropriate solution.

- Demonstrate their knowledge of algorithmic design principles by using JavaScript effectively.

## Problem Statement

- Write a function that takes number variable and return `true` or `false` and write document `invalid` or `valid`.

## Valid TR Identity Numbers for checking

- Here are randomly generated valid ID numbers. You can use them to test your code.

```
34444185856
10880383988
14702551364
90091059698
32413045316
12835718432
53963153566
11111111110
```
