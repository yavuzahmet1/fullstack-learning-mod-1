// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

// //!Funct expression ve arrow func yontemlerinde
// //! Once fonks tanimlanmalidir sonra cagrilmalidir. Hoisting desteklenmez
// //! Aksi takdirde hata alırsiniz.

const sayHello = () => {
    console.log("Arrow function hello");
}
sayHello()

const calculate = (r, h) => Math.PI * r * r * h


console.log(calculate(3, 5))

const prime = (n) => {
    if (n < 2) return false
    if (n === 2) return true
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}
console.log(prime(1) ? "Prime number" : "Number is not prime number")