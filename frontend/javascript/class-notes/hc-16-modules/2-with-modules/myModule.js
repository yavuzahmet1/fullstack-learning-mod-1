console.log("my module js page");

//! named export

export const workHour = 40;
export function sum(a, b) {
    return a + b;
}

let counter = 5;

const increase = (amount) => {
    return counter += amount;
}

const decrease = (amount) => {
    counter -= amount
}
const myName = "Ahmet";

export { increase, decrease, myName };

//* default export
//? bir sayfada 1 tane default export olabilir
//? tüm yapı tek seferde export edilir
//? import ederken istediğimiz isimle import edip kullanabiliriz

function ugurla() {
    console.log("görüşmek üzere js");

}

export default ugurla