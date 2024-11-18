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
/*--------------------------------------------------------------------------------------------------------------------------------*/

//!                                     NOT ÖZET

/*--------------------------------------------------------------------------------------------------------------------------------*/

//* FOREACH():
//1-Boş hücrenin atlandığını ve tanımsız hiçbir hücrenin yazdırılmadığını unutmayın
//2-Geri dönüş değeri yoktur
//3-Kullanım: Yalnızca her eleman üzerinde işlem yapmak için uygundur 
//4-forEach() metodu bize bir değer döndürmez; yani hiçbir şey döndürmez (undefined). Bu yüzden forEach() yeni bir dizi ya da veri oluşturmak için değil, bir dizi üzerinde yan etkiler (örneğin, konsola yazdırma veya dış bir değişkeni güncelleme) yaratmak için kullanılır.

//*MAP():
//1-Her eleman üzerinde işlem yapıp yeni bir dizi döndürmek.
//2-Mevcut diziyi değiştirmez, her zaman yeni bir dizi oluşturur.
//3-Geri dönüş:İşlemden geçirilen her bir elemanın sonucundan oluşan yeni bir dizi.
//4-Kullanım alanı:Dizi elemanlarını dönüştürmek. Verileri formatlamak veya başka bir yapı oluşturmak. ve 3 parametre alır.
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
];
const namess = users.map(user => user.name);
console.log(names); // Çıktı: ["Alice", "Bob", "Charlie"]


//*FILTER():
//1-Amaç: Belirli bir koşulu sağlayan elemanlarla yeni bir dizi oluşturur.
//2-Geri dönüş değeri: Filtrelenmiş yeni bir dizidir.
//3-Kullanım: Koşula uyan elemanları seçmek için uygundur.

//*EVERY():
//1-Amaç: Dizideki tüm elemanların bir koşulu sağlayıp sağlamadığını kontrol eder.
//2-Geri dönüş değeri: Boolean (true veya false).
//3-Kullanım: Tüm elemanların bir kurala uyduğunu doğrulamak için uygundur.
const nums = [2, 4, 6, 8];
const allEven = nums.every(num => num % 2 === 0);
console.log(allEven); // Çıktı: true

//*SOME():
//1-Amaç: Dizideki en az bir elemanın bir koşulu sağlayıp sağlamadığını kontrol eder.
//2-Geri dönüş değeri: Boolean (true veya false).
//3-Kullanım: Elemanlardan birinin bir kurala uyup uymadığını doğrulamak için uygundur.
const hasEven = nums.some(num => num % 2 === 0);
console.log(hasEven); // Çıktı: true

//*FIND():
//1-Amaç: Belirli bir koşulu sağlayan ilk elemanı bulur ve döner.
//2-Geri dönüş değeri: Koşula uyan ilk eleman, eğer bulunamazsa undefined.
//3-Kullanım: Tek bir elemanı seçmek için uygundur.
const firstGreaterThan15 = nums.find(num => num > 15);
console.log(firstGreaterThan15); // Çıktı: 20

//*REDUCE():
//1-Dizi elemanlarını birleştirerek tek bir sonuç döndürür.
//2-İşlemler bir birikim (accumulator) üzerinden yapılır.
//3-Geri dönüş değeri : Hesaplanan tek bir değer (örneğin, bir sayı, nesne, string veya başka bir yapı).
//4-Kullanım alanı:Dizi elemanlarını toplamak, çarpmak. Bir diziyi nesneye veya başka bir yapıya dönüştürmek.
//5- dizi elemanlarını birleştirerek tek bir sonuç üretebildiği için toplama, çarpma, gruplama, nesne oluşturma, hatta daha karmaşık işlemler için kullanılabilir. Bu esneklik, reduce()'u birçok farklı senaryo için kullanışlı hale getirir.
//6-Bir diziyi işlemek ve aynı anda başka bir sonuç oluşturmak gerektiğinde, reduce() diğer yöntemlere göre daha uygundur. Örneğin, hem toplama hem de başka bir veri formatı oluşturma işini aynı anda yapabilirsiniz.
//7-Bu gibi işlemler için map(), filter() ve forEach() gibi diğer yöntemleri birleştirmek yerine, reduce() ile tek bir işlemde sonuç alınabilir.
//8-Kodun Daha Fonksiyonel ve Temiz Olmasını SağlarFonksiyonel programlama prensiplerini takip eden yazılımlarda, dizi manipülasyonları genellikle fonksiyonlar aracılığıyla yapılır. reduce(), karmaşık işlemleri tek bir yerde toplayarak daha okunabilir ve daha az hata içeren kod yazılmasına olanak tanır.
//9-Performans Avantajı (Tek Bir Döngü ile İşlemler)
//10-Daha Az Bağımsız Metot Gerektirir Diğer yöntemler (map, filter, some, every) genellikle tek bir görev için özelleştirilmiştir. Ancak reduce(), bu işlemlerin çoğunu kapsayabilir. Bu nedenle, karmaşık işlemleri yapmak için ek yöntemler yazmak gerekmez.
//11-Dezavantajları Tabii ki reduce()'un aşırı kullanımı kodun daha karmaşık hale gelmesine neden olabilir: Okuması zorlaşabilir, özellikle başlangıç seviyesindeki geliştiriciler için. Bazı durumlarda, map() ve filter() gibi yöntemler daha net ve anlaşılır olabilir.

const result = array.reduce((accumulator, currentValue, index, array) => {
    // İşlem yapılacak kod
    return updatedAccumulator;
}, initialValue);
/*accumulator: Biriken değer.
currentValue: Şu anki eleman.
index: Şu anki elemanın indeksi.
array: Orijinal dizi.
initialValue: accumulator için başlangıç değeri (isteğe bağlıdır, belirtilmezse ilk eleman alınır).*/

const sums = numbers.reduce((acc, num) => acc + num, 0);
console.log(sums); // Çıktı: 15

const fruitss = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruitss.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(fruitCount);
// Çıktı: { apple: 3, banana: 2, orange: 1 }

const numberss = [10, 25, 30, 5, 40];

const maxNumber = numberss.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(maxNumber); // Çıktı: 40

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 750 },
];

// Fiyatları al ve toplamlarını hesapla
const totalCost = products
    .map(product => product.price) // [1000, 500, 750]
    .reduce((acc, price) => acc + price, 0);

console.log(totalCost); // Çıktı: 2250

//En pahalı ürünü bulan program
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 750 },
];

const result = products.reduce((acc, product) => {
    acc.total += product.price; // Toplam fiyatı hesapla
    if (product.price > acc.mostExpensive.price) {
        acc.mostExpensive = product; // En pahalı ürünü bul
    }
    return acc;
}, { total: 0, mostExpensive: { name: "", price: 0 } });

console.log(result);
// Çıktı:
// { total: 2250, mostExpensive: { name: "Laptop", price: 1000 } }

const numbers = [1, 2, 3, 4, 5, 6];

// Hem çift sayıları bul hem de karesini al
const squaredEvens = numbers.reduce((acc, num) => {
    if (num % 2 === 0) {
        acc.push(num ** 2);
    }
    return acc;
}, []);

console.log(squaredEvens); // Çıktı: [4, 16, 36]




