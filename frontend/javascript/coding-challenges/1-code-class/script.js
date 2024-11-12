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

// Elektrik Faturası Hesaplama (Loop ve Conditional)
// Bir kişinin elektrik tüketimine göre fatura hesaplayan bir fonksiyon yaz. Elektrik birim fiyatı 0.5 TL ve her 100 birimden sonra ekstra %5 vergi ekleniyor. Kullanıcıdan aylık tüketimini al ve 100 birimlik aralıklar halinde faturasını hesapla. Sonucunda, tüm aralıklar ve toplam maliyet çıktı olarak verilsin.

let unitPrice = 0.5;
let tax = 0.05;
let remaining = 0;
let spentKw = 100;//+prompt("enter the amount of Kw spent")// burayı birim olarak düşündüm

const invoiceAccount = (kw) => {
    let totalInvoice = unitPrice * kw; //kullanılan kw ile birim fiyatı çarptım ilk etapta faturayı hesapladım 
    remaining = Math.floor(kw / 100);//kullanılan miktarı her 100 birim denildinden kaç tane 100 var bunu almak için burayı yazdım.
    for (let index = 0; index < remaining; index++) { //burada birim sayısı kadar döngüye aldım (her 100 denildiğinden 4 kez)
        totalInvoice = totalInvoice + (tax * totalInvoice);// vergiyi ekleyerek her defasında toplam fatura miktarını güncelledim
    }
    return Math.floor(totalInvoice);
}
console.log(`Girdiğiniz kilowat : ${spentKw}kw ve ödeyeceğiniz miktar : ${invoiceAccount(spentKw)}₺`);

// Yıllık Faiz Hesaplama (Loop ve Function)
// Bir miktarın yıllık bileşik faizini hesaplayan bir fonksiyon yaz. Başlangıç miktarını, faiz oranını ve yıl sayısını kullanıcıdan alarak her yılın sonunda birikmiş toplam miktarı göster. Bileşik faiz, her yıl sonu miktarına eklenerek hesaplanır.

let money = 10000;
let interestRate = 0.06;
let year = 5;
let totalMoney = 0;

const annualInterest = (amountOfMoney) => {

    for (let index = 1; index <= year; index++) {
        amountOfMoney = amountOfMoney + amountOfMoney * interestRate;//faiz nasıl hesaplanır tam bilmiyorum ama yıla göre faiz hesaplayıp ana parayla güncelleme yapıyor, yıllar geçtikçe faiz tutarı artıyor onu yapmaya çalıştım.
    }
    return amountOfMoney
}
console.log(`Anaparaniz ${money}, toplam faizli kazanciniz : ${Math.floor(annualInterest(money))}`);

// Bir arkadaşınız, uzun bir metnin içinde gizli bir kelime olduğunu söylüyor ve bu kelime büyük harfle yazılı. Metin içinde sadece büyük harfleri alarak gizli kelimeyi bulan bir fonksiyon yazın.

let text = "bU cümlede NasiL SiNirli İfadeler Kullanilmiştir"
//Arrow function
const findSecretWord = (areaText) => {
    let upperWord = '';
    for (let index = 0; index < areaText.length; index++) {// burda text'de tanımlanan metin uzunluğu kadar döndüye alıyoruz
        if (areaText[index] === areaText[index].toUpperCase() && areaText[index] !== ' ') upperWord += areaText[index];
        //text içindeki her karakteri kontrol ediyor büyük harf varsa VE boşluk yoksa diye iki kesin sonucun TRUE olması durumunda yanındaki kodda bulduğu büyük harfli STRING karakterleri birleştirme işlemi yapıyor.
    }
    return upperWord; //döngü sonrasında birleştirdiği karakterleri dönüyor RETURN olduğundan sonucu görmemiz için fonksiyonu console.log() içerisinde çağırmalıyız.
}
console.log(`ARROW FUNCTION=> cümle içinde gizli kalmiş kelimemiz : ${findSecretWord(text)}`);

//IIFE=> bu foksiyonu da çağırmadan direk yazdırmak için kullanmak istedim DAVETSİZ MİSAFİR fonksiyonu :)
(function (areaText) {
    let upperWord = '';
    for (let i = 0; i < areaText.length; i++) {
        if (areaText[i] === areaText[i].toUpperCase() && areaText[i] !== ' ') upperWord += areaText[i];
    }
    console.log(`IIFE FUNCTION=> cümle içinde gizli kalmis kelimemiz : ${upperWord}`);
})(text)




