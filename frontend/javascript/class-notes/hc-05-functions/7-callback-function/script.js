// JavaScript'te callback fonksiyonları, bir fonksiyonun başka bir fonksiyona argüman olarak geçirilip, bu fonksiyonun daha sonra çağrılması prensibine dayanır.

function firstFunction(argument) {
    console.log("First Function");
    argument(23)
}

function secondFunction(number) {
    console.log("Second Function");
    console.log(number);
}
firstFunction(secondFunction)
//-------------------------------

function mathematicalOperations(number1, number2, operation) {
    const result = operation(number1, number2);
    console.log(result);

}
function sum(a, b) {
    return a + b;
}

function extraction(a, b) {
    return a - b;
}

mathematicalOperations(23, 56, extraction)