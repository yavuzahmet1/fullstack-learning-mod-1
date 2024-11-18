const salaries = [40000, 30000, 20000, 100000];

const result = salaries.reduce((acc, item) => acc += item)
console.log(result);

const sentences = ["merhaba", "dünya", "ben", "javascript"];

const resultSentence = sentences.reduce((acc, item) => {
    return acc + " " + item
})
console.log(resultSentence);
//!FIND(), FINDLAST()
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.