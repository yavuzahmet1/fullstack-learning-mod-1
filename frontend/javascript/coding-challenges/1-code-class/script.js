// 1- Square or rectangle
// let x = 4;
// let y = 6;
// function isSquareOrRectangle(a, b) {
//     if (a === b) return true
//     return false;
// }
// const result = isSquareOrRectangle(x, y) ? "Square" : "rectangle"
// console.log(result);

// 2-Sabah Rutini ok mi?

// let elYikamak = true;
// let disFircalamak = true;
// let kahvalti = true;
// const rutin = () => {

//     const resultRutin = (elYikamak && disFircalamak && kahvalti) ? "Sabah rutini tamam" : "Eksik görevler var"
//     console.log(resultRutin);
// }
// rutin()

// 3-parola kontrolü

// let username = "user"
// let password = "123"
// let count = 0;
// let flag = true;

// while (flag) {
//     count++;
//     let enterusername = prompt("Kullanıcı Adınızı giriniz");
//     let enterPassword = prompt("Parolanızı giriniz");
//     if (count == 3) {
//         console.log("Giriş hakkınız doldurdunuz");
//         break;
//     }
//     if (username == enterusername && password == enterPassword) {
//         console.log("Kullanıcı adınız ve parolanız doğru");
//         flag = false;
//     }
//     else {
//         console.log(`parolanız yanlış kalan hakkınız ${3 - count}`);
//     }

// }

// belirli harf kelime içinde kaç tane geçiyor;

// let world = "clarusway"
// let letter = "a"
// let count = 0;

// const countWorld = (n, k) => {

//     for (let index = 0; index < n.length; index++) {
//         if (n[index] === k) count++
//     }
//     return count
// }

// console.log(`${world} kelimesinden ${letter} harfinden ${countWorld(world, letter)} tane var`);

// 5-Elektrik Faturası Hesaplama (Loop ve Conditional)
// Bir kişinin elektrik tüketimine göre fatura hesaplayan bir fonksiyon yaz. Elektrik birim fiyatı 0.5 TL ve her 100 birimden sonra ekstra %5 vergi ekleniyor. Kullanıcıdan aylık tüketimini al ve 100 birimlik aralıklar halinde faturasını hesapla. Sonucunda, tüm aralıklar ve toplam maliyet çıktı olarak verilsin.

let invoiceAmount = 459;
let unitPrice = 0.5;
let tax = 0.05;

const invoiceAccount = () => {

}

// 6. Yıllık Faiz Hesaplama (Loop ve Function)
// Bir miktarın yıllık bileşik faizini hesaplayan bir fonksiyon yaz. Başlangıç miktarını, faiz oranını ve yıl sayısını kullanıcıdan alarak her yılın sonunda birikmiş toplam miktarı göster. Bileşik faiz, her yıl sonu miktarına eklenerek hesaplanır.




// 7.Bir arkadaşınız, uzun bir metnin içinde gizli bir kelime olduğunu söylüyor ve bu kelime büyük harfle yazılı. Metin içinde sadece büyük harfleri alarak gizli kelimeyi bulan bir fonksiyon yazın.