//* ============================================
//*                FOR LOOP
//* ============================================
console.log("**** LOOPS IN ARRAYS ***");

const salary = [5000, 8000, 9000, 3000];

let sum = 0;
for (let i = 0; i < salary.length; i++) {
    sum += salary[i];
}
console.log(`Total : ${sum}`);

const notes = [50, 45, 67, 75, 15];

const lessThan50 = [];
const olderThan50 = [];

for (let index = 0; index < notes.length; index++) {
    notes[index] < 50 ? lessThan50.push(notes[index]) : olderThan50.push(notes[index])
}
console.log(lessThan50);
console.log(olderThan50);
//* for...in, bir nesnenin (object) ya da dizinin (array) özelliklerini veya indislerini döner
//o array içindeki indisleri döner

for (let i in notes) {
    notes[i] < 50 ? lessThan50.push(notes[i]) : olderThan50.push(notes[i])
}
/*------------------------------------*/
let total = 0;
for (let i in salary) {
    total += salary[i];
}
console.log(`Total salary : ${total}, average: ${total / salary.length}`);

//* for...of dizi içindeki veriye erişmek için indisleme kullanmaya gerek yok

for (let i of salary) {
    total += i
}
console.log(`Total : ${total}`);

let big = [];
let little = [];
for (let i of notes) {
    i < 50 ? little.push(i) : big.push(i)
}
console.log(little);
console.log(big);

//* =======================================
//*          ARRAY ITERATIONS
//* =======================================

const numbers = [675, 89, 234, 12, 67, 34, 89]

//? Array iteration: bir arayın içindeki her bir elemana tek tek ulaşıp  grekli işlemlerin, karşılaştırmaların, filtlerin gibi işlemlerin yapılmasıdır

//! forEach
//! map
//! filter
//! reduce
//! every
//! some
//! find

//* =======================================
//*           FOREACH METHOD
//* =======================================
//! forEach, bir dizinin elemanlarını teker teker işlemek veya belirli bir işlemden geçirmek için oldukça kullanışlıdır.
//? 1-Void bir metottur: Herhangi bir değer döndürmez. (Yani işlemin sonucu undefined olur.)
//? 2-Diziyi değiştirmez: Orijinal dizi üzerinde değişiklik yapmaz, yalnızca her bir eleman üzerinde işlem yapar.
//? 3-Callback fonksiyonu alır: Dizinin her bir öğesi için çalıştırılacak bir fonksiyon alır.


numbers.forEach((number) => console.log(number * 5));
let fruits = ["apple", "banana", "juice"];
fruits.forEach((fruit) => console.log(fruit.toUpperCase()));

let ages = [45, 42, 23, 18, 34, 67];
ages.forEach((age) => {
    if (age >= 40) console.log("adult");
    else console.log("child");
})
ages.forEach((age) => age >= 40 ? console.log("adult") : console.log("child"))

//fonksiyon ile kullanımın ikinci yolu
ages.forEach(age);
function age(x) {
    console.log(x);
}

//function ile kullanımın 3. yolu
ages.forEach(function (x) { console.log(x) })

//! forEach() üç tane parametre alır

const vegetables = ["pırasa", "havuc", "ıspanak", "karnıbahar"];
vegetables.forEach((vegetable, index) => console.log(`vegetable number ${index + 1} is ${vegetable}`))

//! üç parametreli

//!*vegetable, index, arrayName-- > bu sıralama önemli

vegetables.forEach((vegetable, index, arr) => console.log(`${arr} vegetable number ${index + 1} is ${vegetable}`))
vegetables.forEach((vegetable, index, arr) => index % 2 === 0 ? console.log(arr) : null);
const temperatures = [23, 25, 22, 24, 20, 19, 18, 21, 24, 26, 22];
temperatures.forEach((temperature, index, tempArray) => console.log(Math.pow(temperature, 2)));
let sumTemp = 0;
let olderThan25 = 0;
let differenceTotal = 0;
temperatures.forEach((temperature, index, arr) => {
    sumTemp += temperature;
    temperature > 23 ? olderThan25++ : null;

    if (index < arr.length - 1) {
        const difference = Math.abs(arr[index + 1] - temperature);
        differenceTotal += difference
    }
});
console.log(`Average temperature : ${(sumTemp / temperatures.length).toFixed(2)}`);
console.log(`older than 25 : ${olderThan25}`);
console.log(`Total temperature difference : ${differenceTotal}`);

//! MAP METHOD

/* map yapılan değişikliği bir diziye atıp, bunu döndürebilir, forEach() gibi orjinali tüketmez. Orjinal diziyi değiştirmez*/

const numbersForMap = [23, 25, 22, 24, 20, 19, 18, 21, 24, 26, 22];

const square = numbersForMap.map((num) => num * num)
console.log(square);

const names = ["Ahmet", "Ali", "Nazan", "Veli", "Samet"]//OR
const namesArr = names.map(n => n.toUpperCase())
console.log(namesArr);

//?-------------- ÖRNEK -------------------
//? macBookTL dizisindeki rakamlarin Euro ve dolar
//? karsiliklarini hesaplatarak yeni dizelere kaydediniz

const macBookTL = [90000, 75000, 60000, 40000, 30000];

const euro = 36.29;
const dolar = 33.06;

const euroInReturn = macBookTL.map((item) => (item / euro).toFixed(2))
const dollarReturn = macBookTL.map((item) => (item / dolar).toFixed(2))

console.log(`Euro : ${euroInReturn}, Dollar : ${dollarReturn}`);

//*MAP() methoduda 3 parametre verir

//?-------------- ÖRNEK-2 -------------------
//?Öğrencinin sırasını,notunu ve başarı durumunu döndüren bir işlem
//? Notu 50den büyükse başarılı değilse başarısız

const exam = [85, 72, 95, 60, 47, 88];

const examResult = exam.map((note, index, arr) => {
    const status = note >= 50 ? "succesful" : "unsuccesful";
    return `${index + 1}. stutent has note : ${note}, status : ${status} `
})
console.log(examResult);

//! FILTER METHOD

const salaries = [9000, 3000, 5500, 7500, 12300, 2500];
const bigSalary = salaries.filter((salar) => salar > 5000)
console.log(bigSalary);

const namesLenght = ["Ahmet", "Ali", "Nazan", "Veli", "Samet"];
const newArr = namesLenght.filter((item) => item.length <= 4)
console.log(newArr);

//* =======================================
//*          CHAINING (PIPELINE)
//* =======================================

//? ORNEK: maasi 50000'den az olanları tespit edip %30 zam yapalım ve bunları yeni bir dizide toplayalım (orjinal diziyi degistirmeden)

const poors = salaries.filter((salary) => salary < 5000)
console.log(poors)
const lessPoor = poors.map((salary) => salary * 1.3)
console.log(lessPoor)

//? chaining
const increasedSalary = salaries.filter((salary) => salary < 5000).map((salary) => salary * 1.3)
console.log(increasedSalary)
const raised = salaries.filter((salary) => salary < 5500).map((salary) => salary * 1.3).forEach((salary) => console.log(salary))
console.log(raised)
/*3900
3250
undefined*///niye forEach undefined çünkü forEach ler değer döndermez, void dir

//! EVERY()

//* true yada false değeri dönderir and gibi çalışır tüm değerler şarta uyarsa True uymazsa False değer dönderir

//! SOME()

//* true yada false değeri dönderir or gibi çalışır değerlerden birini sağlarsa True değer dönderir hiç sağlamazsa False dönderir





