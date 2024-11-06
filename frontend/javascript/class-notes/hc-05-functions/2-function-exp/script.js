// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------

//**********************************************************/
//! * --------Function-Expression----------------------------*/
// 1-Fonksiyon bir değişkene tanımlanır.
// 2-Function kelimesini ardından fonksiyonun ismi verilir.
// 3-Sonra da bir parantez açılıp kapatılır.
//? önce fonksiyon oluşturmak şart - hoisting olmaz
namePrint()
const namePrint = function () {
    console.log("Hello");
}

namePrint()

function arrays(a, b, c) {
    let bigNumber = a;
    if (b > bigNumber) {
        bigNumber = b;
    } if (c > bigNumber) {
        bigNumber = c;
    }
    return bigNumber;
} console.log(arrays(12, 34, 101));

