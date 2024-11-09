//!LOOPS QUESTIONS-1

//? 1-Kullanıcının girdiği bir sayının asal olup olmadığını kontrol eden bir program yazın.
console.log("Kullanıcının girdiği bir sayının asal olup olmadığını kontrol eden bir program yazın.");
function isPrime(a) {

    if (a === 2) return true;
    if (a < 2) return false;
    for (let i = 2; i < a; i++) {

        if (a % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(3) ? "Number is prime" : "Number is not prime");

//? 2-Bir dizideki en büyük ve en küçük sayıları bulan bir fonksiyon yazın (dizi yok, sadece sayılar).
console.log("2-Bir dizideki en büyük ve en küçük sayıları bulan bir fonksiyon yazın (dizi yok, sadece sayılar)");
function findBigNumber(a, b, c) {
    let bigNumber = a;
    if (b > a) {
        bigNumber = b;
    }
    if (c > b) {
        bigNumber = c;
    }
    return bigNumber;
}
console.log(findBigNumber(55, 65, 9));

//? 3-Kullanıcının girdiği bir kelimenin palindrom olup olmadığını kontrol eden bir fonksiyon yazın.
console.log("3-Kullanıcının girdiği bir kelimenin palindrom olup olmadığını kontrol eden bir fonksiyon yazın.");
let wordGuess = "Ece";
let subWorld = "";

for (let i = wordGuess.length - 1; i >= 0; i--) {
    subWorld = subWorld + wordGuess[i];
}
console.log(subWorld.toLowerCase() === wordGuess.toLowerCase() ? "Palindrom" : "Not Palindrom");

//? 4-1 ile 50 arasında rastgele bir sayı tahmin etme oyunu yazın ve kullanıcı doğru tahmin edene kadar devam etsin.
console.log("4-1 ile 50 arasında rastgele bir sayı tahmin etme oyunu yazın ve kullanıcı doğru tahmin edene kadar devam etsin.");
// let logic = false;
// let randomNumber = Math.floor(Math.random() * 50 + 1);
// let count = 0;

// while (!logic) {
//     count++;
//     let guess = +prompt(`Enter a number ${randomNumber}`);
//     if (guess < 1 || guess > 50 || guess != randomNumber) {

//         continue;
//     } else {
//         logic = true;
//     }
// }

// console.log(logic ? "You win" : "wrong number")

//? 5-Kullanıcıdan alınan sayının faktöriyelini hesaplayan bir fonksiyon yazın.
console.log("5-Kullanıcıdan alınan sayının faktöriyelini hesaplayan bir fonksiyon yazın.");
// let faktorial = 1;
// let number = +prompt("Enter a number")
// console.log(calculateFak(number))
// function calculateFak(n) {
//     for (let i = 1; i <= n; i++) {
//         faktorial *= i;
//     }
//     return faktorial
// }

//? 6-1'den N'e kadar olan sayıların toplamını ve ortalamasını hesaplayan bir program yazın.
console.log("6-1'den N'e kadar olan sayıların toplamını ve ortalamasını hesaplayan bir program yazın.");
// let enterNumber = +prompt("Enter a number and seen result");
// let total = 0;
// allTotalNumber(enterNumber)
// function allTotalNumber(n) {
//     for (let i = 0; i <= n; i++) {
//         total += i;
//     }
//     console.log(`${n} sayısına kadar olan sayıların toplamı : ${total} ortalaması : ${total / enterNumber}`)
// }

//? 7-Bir dizideki tüm elemanların toplamını ve ortalamasını hesaplayan bir fonksiyon yazın (dizi yok, sadece sayılar).
console.log("7-Bir dizideki tüm elemanların toplamını ve ortalamasını hesaplayan bir fonksiyon yazın (dizi yok, sadece sayılar).");

// function sumArray(x, y, z) {
//     console.log(x + y + z);
// }
// sumArray(67, 89, 54);

//? 8-Kullanıcının girdiği bir metindeki sesli harflerin sayısını hesaplayan bir program yazın.
console.log("8-Kullanıcının girdiği bir metindeki sesli harflerin sayısını hesaplayan bir program yazın.");

// let enterString = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente, labore.";

// let count = 0;
// for (let i = 0; i < enterString.length - 1; i++) {
//     switch (enterString[i]) {
//         case "a":
//             count++;
//             continue;
//         case "e":
//             count++;
//             continue;
//         case "i":
//             count++;
//             continue;
//         case "o":
//             count++;
//             continue;
//         case "u":
//             count++
//             continue;
//         default:
//             continue;
//     }
// }
// console.log(`Toplam sesli harf sayisi ${count}`);

//? 9-Fibonacci dizisini belirli bir sayıya kadar yazdıran bir program yazın.



//? 10-Kullanıcının girdiği bir kelimenin içindeki sesli harfleri bulup, her birinin sayısını gösteren bir program yazın.