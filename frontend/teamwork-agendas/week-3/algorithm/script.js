function reverseWord(sentence) {
    let result = "";
    let word = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
        if (sentence[i] === " ") {
            result += word + " ";
            word = "";
        } else {
            word = sentence[i] + word;

        }
    }
}
// reverseWord("Hello Js Word 2023")
console.log(reverseWord("Hello Js Word 2023"));

let a = "Hello Js Word 2023"

let b = a.split(" ")

console.log(b.length);
console.log(b);

for (let i = 0; i < b.length; i++) {
    console.log(b[i]);

}
