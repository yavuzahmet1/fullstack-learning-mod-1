// let x = 0;

// for (x++; x <= 20; x++) {
//     y = 5;
//     console.log(x * y);
// }

// //* 13, 15, 24 sayılarını toplayan algoritmayı yazınız.

// A1: Sayıların toplamına 0 değerini ata

// A2: Sayıların toplamı ile 13 değerini topla ve sonucu sayıların toplamına ata

// A3: Sayıların toplamı ile 15 değerini topla ve sonucu sayıların toplamına ata

// A4: Sayıların toplamı ile 24 değerini topla ve sonucu sayıların toplamına ata

// A5: Sayıların toplamını belirt



// console.clear()

// let a = true;
// let count = 0;


// while (a) {

//     if (count === 5) {
//         a = false;
//     }
//     console.log(count++);

// }

console.clear()



// 1 ile 50 arasında rastgele bir sayı tahmin etme oyunu yazın ve kullanıcı doğru tahmin edene kadar devam etsin.

// let logic = false;

// let random = Math.floor(Math.random() * 50 + 1);
// let counts = 0;

// while (!logic) {
//     let guess = +prompt(`1 ile 50 arasında sayı giriniz! ${random}`)
//     counts++;

//     if (guess < 1 || guess > 50) {
//         continue;
//     } else if (guess === random) {
//         console.log(`${counts} kez girince tahmini bildiniz`);
//         logic = true;
//     }

// }

//! Soru 17: Bir dizi içerisinde aynı değeri birden fazla kez barındıran öğeleri
//! for döngüsü kullanarak kaldırın. (Örnek dizi: [1, 2, 2, 3, 3, 3, 4])

// let array = [1, 2, 4, 3, 3, 3, 4];
// let sortArray = array.sort();//[1, 2, 3, 3, 3, 4, 4]
// console.log(sortArray);
// let newArray = [];

// for (let i = 0; i < sortArray.length; i++) {
//     if (sortArray[i] != sortArray[i - 1]) {
//         console.log(newArray.push(sortArray[i]));
//     }

// }

// console.log(newArray);






