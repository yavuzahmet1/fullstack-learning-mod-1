// let dizi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let toplamCift = 0;
// let toplamTek = 0;
// const hesapla = (dizi) => {
//     for (let i = 0; i < dizi.length; i++) {
//         if (dizi[i] % 2 === 0) {
//             toplamCift += dizi[i];
//         } else {
//             toplamTek += dizi[i];
//         }
//     }
//     //   console.log(toplamCift);
//     //   console.log(toplamTek);
//     return { toplamCift, toplamTek };
// };
// console.log(hesapla(dizi));

// {
//     let numbers = [10, 8, 12, 7, 5, 15, 13, 20];
//     let decrease = false;
//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (numbers[i] > numbers[i + 1] && !decrease) {
//             console.log(numbers[i], numbers[i + 1]);
//             decrease = true;
//         } else if (numbers[i] < numbers[i + 1]) {
//             decrease = false;
//         }
//     }
// }
// //? Bir dizi içinde tek sayıların toplamını ve çift sayıların
// //? toplamını ayrı ayrı hesaplayan bir for döngüsü yaz.

// {
//     let numbers = [3, 8, 15, 6, 12, 7, 21, 14];
//     let oddsum = 0;
//     let evensum = 0;

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] % 2 === 0) {
//             evensum += numbers[i];
//         }
//         if (numbers[i] % 2 !== 0) {
//             oddsum += numbers[i];
//         }
//     }
//     console.log(`Çift Sayılar Toplamı: ${evensum}`);
//     console.log(`Tek Sayılar Toplamı: ${oddsum}`);
// }

// //? Bir dizide en yüksek ve en düşük değeri bulan bir while döngüsü yaz.

// {
//     let numbers = [3, 8, 15, 6, 12, 7, 21, 14];
//     let biggest = numbers[0];
//     let smallest = numbers[0];
//     let i = 0;
//     while (i < numbers.length) {
//         if (numbers[i] > biggest) {
//             biggest = numbers[i];
//         }
//         if (numbers[i] < smallest) {
//             smallest = numbers[i];
//         }
//         i++;
//     }
//     console.log(`En Büyük: ${biggest}`);
//     console.log(`En Küçük: ${smallest}`);
// }

// //? Bir dizi içindeki tüm sayıları sırayla kontrol et ve sadece
// //? art arda gelen sayılar azalan sıradaysa (önceki sayı bir sonrakinden
// //? büyükse) bu sayı çiftini ekrana yazdır.

// {
//     let numbers = [10, 8, 12, 7, 5, 15, 13, 20];
//     let decrease = false;
//     for (let i = 0; i < numbers.length - 1; i++) {
//         if (numbers[i] > numbers[i + 1] && !decrease) {
//             console.log(numbers[i], numbers[i + 1]);
//             decrease = true;
//         } else if (numbers[i] < numbers[i + 1]) {
//             decrease = false;
//         }
//     }
// }

// //? Bir do...while döngüsü kullanarak, kullanıcının girdiği sayıya
// //? kadar olan(Girilen Sayı Dahil Değil) tüm sayıların toplamını
// //? hesaplayın. (Kullanıcıdan sayıyı alın.)

// {
//     let num = 4;
//     let i = 0;
//     let toplam = 0;

//     do {
//         toplam += i;
//         i++;
//     } while (i < num);
//     console.log(toplam);
// }

// //? Soru: Bir dizide (array) belirli bir sayının (örneğin, 7)
// //? bulunup bulunmadığını kontrol eden bir kod yaz.
// //? Eğer sayı dizide bulunursa bulundu çıktısını ver,
// //? bulunmazsa bulunamadı çıktısını ver.

// const numbers = [3, 5, 8, 12, 7, 15, 22];
// let x = 7;
// let i = 0;
// let flag = true;

// while (flag && i < numbers.length) {
//     if (x === numbers[i]) flag = false;
//     i++;
// }
// console.log(flag ? "Mevcut Değil" : "Mevcut");


//   Bu JavaScript kodunun amacı, numbers dizisinde x değişkeninin(18) olup olmadığını kontrol etmektir.Eğer x dizide varsa "Mevcut", yoksa "Mevcut Değil" yazdırılır.Kodun nasıl çalıştığını adım adım inceleyelim:

// Adım 1: Değişkenlerin Tanımlanması
// javascript
// Kodu kopyala
// const numbers = [3, 5, 8, 12, 7, 15, 22];
// let x = 18;
// let i = 0;
// let flag = true;
// numbers: Kontrol edilecek sayılardan oluşan dizi.
//     x: Dizide aranacak sayı(18).
//         i: while döngüsünde dizinin elemanlarını sırayla kontrol etmek için kullanılan sayaç.
//             flag: Döngünün devam edip etmeyeceğini belirleyen bayrak.Başlangıçta true olarak ayarlanmıştır, yani döngü çalışmaya hazır durumda.
//                 Adım 2: while Döngüsü ile Arama
// javascript
// Kodu kopyala
// while (flag && i < numbers.length) {
//     if (x === numbers[i]) flag = false;
//     i++;
// }
// Döngü şu iki şart sağlandığı sürece çalışır:

// flag true olmalı(henüz x bulunmadı),
//     i < numbers.length(dizinin sonuna gelinmemiş olmalı).
//         if(x === numbers[i]): Eğer x, dizinin o anki elemanına eşitse(x === numbers[i]), flag false yapılır.Bu durumda döngü bir sonraki adımda durur, çünkü flag artık true değildir.

//             i++: i her adımda bir artırılarak dizideki bir sonraki eleman kontrol edilir.

//                 Adım 3: Sonucun Yazdırılması
// javascript
// Kodu kopyala
// console.log(flag ? "Mevcut Değil" : "Mevcut");
// flag true kaldıysa(yani x hiçbir elemanla eşleşmediyse), "Mevcut Değil" yazdırılır.
// Eğer flag false olduysa(yani x dizide bulunduysa), "Mevcut" yazdırılır.
//     Çıktı
// Bu durumda, x(18) dizide bulunmadığı için flag true kalır ve sonuç olarak "Mevcut Değil" yazdırılır.

//     Özet
// Bu kod, x dizide bulunana kadar numbers dizisinde arama yapar ve x bulunduğunda döngüyü durdurur.