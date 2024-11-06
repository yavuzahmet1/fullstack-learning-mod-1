//? ====================================================
// ?              FONKSİYONLAR - RECURSIVE
// ? ====================================================

//* Kendi kendi çağıran fonksiyona recursive fonksiyon denilir.


const total = (n) => {
    let sum = 0;
    for (let i = 1; i < n; i++) {
        sum += i;
    }
    console.log("Number Total :", sum);
}
total(9)

//! Recursive Fonksiyonun Yapısı
// Bir recursive fonksiyonun çalışması için en az iki temel bileşene ihtiyaç vardır:
//? Sonlanma Koşulu: Fonksiyonun kendi kendini çağırmasını durduran koşul. (Sayma sayısı olduğu için 1den  küçük olursa durmalı)
//? Özyineleme Adımı: Fonksiyonun, kendisini tekrar çağırdığı adım.

const sums = (n) => {
    if (n < 1) {
        return
    } else {
        return sums(n - 1) + n
    }

}