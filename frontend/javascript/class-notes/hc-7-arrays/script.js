// ?==============================================
// ?            DIZILER (ARRAYS)
// ?==============================================
//?JavaScript'te array (dizi), birden fazla değeri tek bir değişken içinde depolamamızı sağlayan bir veri yapısıdır.
//? Diziler, farklı türde verileri (sayılar, stringler, booleanlar vb.) aynı anda tutabilir ve indeks numaralarıyla erişilebilirler. 

const numbers = [];
const school = "Mediterranean school"
const arrays = ["Ahmet", "Berk", "Harvey", 34, 78, true, undefined, [3, 6, 9], school]

console.log(arrays.forEach((s) => console.log(s)));

console.log(arrays[0].toLowerCase());

const newArray = new Array("Javascript", "HTML", "React")
console.log(newArray);

const numberss = Array.of(4);
console.log(numbers);

//DIZIYI DEĞİSTİREN METHODLAR (MUTHADOR)

const cars = ["BMV", "Audi", "Skoda", "Porshe", "Tofas", "Tesla"];
console.log(cars);
console.log(cars[5]);


//! .PUSH() METHOD
//*Dizinin sonuna eleman eklenir ve çok kullanılır.
//*yeni eklenmiş eleman ile birlikte eleman sayısını döndürür.
cars.push("Jeep")
console.log(cars);

//!.POP() METHOD
//*sondan eleman sizler
cars.push()
console.log(cars);

//! .UNSHIFT() METHOD
//* baştan ekleme yapılır
cars.unshift("Mercedes")
console.log(cars);

//! .SHIFT() METHOD
//* baştan siler
cars.shift();
console.log(cars);

//! .SPLICE() METHOD
//* bir array içinde araya bir yere ekleme yapar.
//* Bir array içinde arada bir noktaya ekleme yapmak için kullanılır
//? 1.parametre: eklenecek indis numarasi
//? 2.parametre: 0 ise araya ekleme, 1 ise uzerine yazma
//? 3.parametre: yeni eklenecek veri

cars.splice(2, 0, "serçe")
console.log(cars);

cars.splice(5, 1)//5. indexi siliyor
console.log(cars);

cars.splice(5)
console.log(cars);

//! .REVERSE() METHOD
// diziyi tersine çevirir
cars.reverse();
console.log(cars);

//! .SHORT() METHOD
//* sıralama işlemi yapar.
cars.sort()// varsayılan küçükten büyüğe
console.log(cars);





