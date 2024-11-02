//! ---------------------------------------------
//! ****************** SWITCH - CASE ***********
//! ---------------------------------------------
// Switch -case bloğu if-else gibi kullanılacak if-else alternatif bir yöntemdir.
// Burda bir şart durumunun karşılacağı birden fazla ihtimale göre ortaya çıkabilme ihtimali olan her duruma karşılık bir yapı verilir .
// Switch de önemli olan şey;  bir şartla karşılaştığı zaman onu uygular ve devam eder işte o noktada çıkmasını istiyoruz ve kod blogunu kırıp çıkmazsak sadece sonuncu değeri yazar

let product = "Computer";

let price;

switch (product) {
    case "computer":
        price = "5 dolar";
        break;
    case "keybord":
        price = "2 dolar";
        break;
    case "speaker":
        price = "4 dolar";
        break;
    default:
        price = "No price";
        break;

}
console.log(price);