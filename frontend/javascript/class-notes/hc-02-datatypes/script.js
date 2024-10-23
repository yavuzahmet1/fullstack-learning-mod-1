const age = 40;
console.log(typeof age)

//to fixed()
console.log(45.33.toFixed())

/*STRING DATA TYPE*/
let text = "javascript";

let text1 = "high-level language";

text[2] = "d"
console.log(text[2])//v olur yani immutable

let text2 = "Ben javascrip\"in özelliklerini öğreniyorum"//\ kaçış karakteridir.
console.log(text2)

// ESCAPE CHARACTER (Kaçış karakterleri)
// \t   tab - 8 karakter ileri atar
// \r	Satır başı (Carriage Return)
// \n	Bir alt satıra iner
// \v	Dikey Tab
// \f	Sayfa ilerleme
// \"	Çift tırnak
// \’	Tek tırnak
// \	Backslash

/*String birleştirme işlemleri*/
//+ ile birleştirme
//concat methodu ile birleştirme
//teplate literal

//backtick işareti ``

//!--------------------------------------
//! NONPRIMITIVE DATA TYPES -REFERENCE BASED
//!--------------------------------------
//! *********** ARRAY *******
//Birden fazla değer tutabilen değişkenlere array(dizi) denir
let classes = [26, 56, 66, 91];
//! *********** OBJECT *******
let obj = {
    name: "Helen",
    lastName: "Güven",
    age: "40"
}
console.log(obj)
//! *********** FUNCTION *******
function example() {
    let sum = 45 + 77
    return sum;
}
console.log(example())
//! *********** TYPE CONVERSION *******
let a = 5;
let b = "14";
console.log(a + b)//514 değerini verirdi
console.log(a - b)//-9 resault
console.log(a * b)//70 result
console.log(a / b)//0.35 gibi sonuç verir

let x = "20";
let newX = Number(x)//number a çevirdik
let deger6 = "20";
console.log(typeof deger6);
let newDeger = Number(deger6);
console.log(typeof newDeger);

//! *********** DATE OBJECT *******

const now = new Date()

console.log(now)

console.log(now.getFullYear())
console.log(now.getDate())
console.log(now.getMonth())
console.log(now.getTime())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(`Hour ${now.getHours()}:${now.getMinutes()} `)
function example() {
    let sum = 65 + 32;
}
console.log(example());