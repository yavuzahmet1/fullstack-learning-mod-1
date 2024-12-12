//* ======================================================================
//*                          2- Promises
//* =======================================================================

//? Promise, asenkron bir islemin basariyla ve basarisizlikla bittigini gosteren
//? ve ayni zamanda basariyla bittiginde sonuc verilerini temsil eden bir nesne yapisidir.

//? SYTNAX
//?----------
//* 1- Ilk olarak new Promise() constructor'i ile yeni bir promise nesnesi olusturulur,
//* 2- constructor'a asil islemin yapilmasini saglayan bir executor fonksiyon verilir.
//* 3- Executor fonksiyona ise 2 argument gecirilir: resolve ve reject fonksiyonlari
//* 4- resolve fonksiyonu promise'in basariyla bittiginde, reject ise
//*    basarisizlikla bittiginde isletilirler.

//? new Promise (
//?    /* executor */
//?    function(resolve,reject){
//?       .......
//?    }
//? )

//? Bir Promise asagidaki state(durumlari) icerebilir:
//* pending: ilk state, fulfilled veya rejected olmayan, bekliyor
//* fulfilled:islemin basariyla tamamlandigini gosteren state.
//* rejected: islemin basarisizlikla tamamlandigini gosteren state

//! Bir promise le degerler tamamlanabilir yada bir sebeple (hata) iptal edilebilir.
//! Bu durumlar then() ve catch() metotlari ile yakalanabilir.
//? then() ve catch() metotlari promise dondururler.
//? Zincirleme (chain) olarak kullanilabilirler.

const person = { name: "kağan", surname: "bilir" };

new Promise((resolve, reject) => {
  // if(databaseden veriler düzgün geldiyse)
//   if (true) {
     if(false){
    resolve(person); //person yerinde database in url si olur
  } else {
    reject(new Error("promise başarısız"));
  }
})
  .then((response) => console.log(response))
  .catch((error) => console.log(error));







//  //?----------------------------------------------------
// //* 1- XMLHttpRequest (Eski yontem, Ornek: AJAX)
// //? https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// //* 2- Promise,
// //*daha tercih edilenler
// //! 3- Fetch API (Promise'in basitlestirilmis hali zincir(chain)),
// //! 4- ASYNC-AWAIT (Fetch API'nin chain dışında makyajlanmış hali)
