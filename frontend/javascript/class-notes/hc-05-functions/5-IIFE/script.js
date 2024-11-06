//? ====================================================
// ?              FONKSİYONLAR - IIFE
// ? ====================================================

//**Immediately Invoked Function Expression (IIFE) yani "Hemen Çağrılan Fonksiyon İfadesi" */

const sum = () => {
    console.log("Hello")
}

sum();

(function () {
    console.log("Hi")
})();

(function (n) {
    console.log("Say hello")
})(55);


(function (x, y) {
    console.log(Math.pow(x, y))
})(2, 6);

//değişken kapsulleme
