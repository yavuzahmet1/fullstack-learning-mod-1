console.log("app.js")

import ugurla, { workHour } from "./myModule.js"
import { increase, decrease, sum, myName } from "./myModule.js"

console.log(sum(5, 7));
console.log(workHour);
console.log(increase(19))

//? named export yapılmış değişkenleri import yaparken "as" aliası ile isim değiştirerek import edebiliriz
//? default exportlarda istediğimiz isimle import edebiliriz