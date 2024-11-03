//! JS LOOPS

//* 1. Sum of Numbers from 1 to N (for)

function sumNumber(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(`Total number : ${sumNumber(4)}`)

//* 2. Calculating the Factorial of N (for)

function factorialN(n) {
    let factorial = 1;
    for (let index = 1; index <= n; index++) {
        factorial *= index;

    }
    return factorial;
}

console.log(`Factorial : ${factorialN(5)}`);

//* 3. Finding the Number of Even Numbers from 1 to N (for)

function evenTotalNumber(n) {
    let totalEven = 0;
    for (let index = 0; index < n; index++) {
        if (index % 2 === 0) {
            totalEven++;
        }
    }
    return totalEven;
}
console.log(`Total even numbers : ${evenTotalNumber(8)}`);

//* 4. Finding Prime Numbers Up to N Entered by User (for)

// TODO this programme

function isPrime(x) {
    if (x < 2) return false;
    for (let index = 2; index < Math.sqrt(x); index++) {//neden karekökünü aldı anlamadım
        if (x % index === 0) {
            return false
        }
    }
    return true
}
function findPrimeNumber(n) {
    for (let index = 2; index <= n; index++) {
        if (isPrime(index)) {
            console.log(index);
        }
    }
}
findPrimeNumber(29);

//* 5. Sum of Numbers up to N that are Divisible by 3 (for)

function divisibleThree(n) {
    let divisible = 0;
    for (let index = 1; index < n; index++) {
        if (index % 3 === 0) {
            divisible += index
            console.log(index);
        }
    }
    return divisible;
}
console.log(`Total divisible three : ${divisibleThree(100)}`);

//* 6. Printing in Reverse Order Up to the Number Entered by the User (do...while) 

function reverseNumber(n) {
    do {
        console.log(n);
        n--;
    } while (0 <= n)
}

reverseNumber(19)

//* 8. Sum of Squares of Numbers from 1 to N up to N (for)

function squaresSum(n) {
    let totalSquare = 0;
    for (let index = 0; index < n; index++) {
        totalSquare += n ** 2;
    }
    return totalSquare;
}
console.log(`Total Square : ${squaresSum(6)}`)

//* 9. FizzBuzz (for) Up to Number Entered by User

function fizzBuzzNumber(n) {
    for (let index = 1; index < n; index++) {
        if (index % 3 === 0 && index % 5 === 0) {
            console.log(`${index} : FizzBuzz`)
        } else if (index % 3 === 0) {
            console.log(`${index} : Fizz`);
        } else if (index % 5 === 0) {
            console.log(`${index} : Buzz`);
        } else {
            console.log(index);
        }
    }
}
fizzBuzzNumber(10)

//* 10. The user plays the guessing game by getting a number between 1 and 10 (do...while)

function guessNumber() {

    let random = Math.floor(Math.random() * 10);
    let guess = 0;
    let count = 0;
    do {
        guess = Number(prompt(`Enter a number 1...10`))
        count++;
    } while (guess !== random)

    console.log(`You found the number in the ${count}th guess`);
}

guessNumber()

