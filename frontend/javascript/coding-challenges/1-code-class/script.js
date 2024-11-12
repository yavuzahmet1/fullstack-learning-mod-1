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

// belirli harf kaç tane geçiyor

let world = "clarusway"
let letter = "a"
let count = 0;

const countWorld = (n, k) => {

    for (let index = 0; index < n.length; index++) {
        if (n[index] === k) count++
    }
    return count
}

console.log(`${world} kelimesinden ${letter} harfinden ${countWorld(world, letter)} tane var`);

