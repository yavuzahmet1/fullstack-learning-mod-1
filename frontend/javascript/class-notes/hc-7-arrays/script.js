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