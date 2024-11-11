// Stringler immutable (değiştirilemez) veri türlerüdür. Bir string oluşturduğunuzda, karakterlerini değiştiremezsiniz. Örneğin:
// let str = "hello";
// str[0] = "H"; // Bu değişiklik yapılmaz.
// console.log(str); // "hello" (değişmedi)
//Arrayler ise mutable (değiştirilebilir) yapıdadır. Elemanları doğrudan değiştirilebilir:

// Stringlerde bazı dizi metodlarına benzer metotlar vardır, örneğin .slice(), .indexOf(), .includes() gibi.
// Ancak Arraylerde olan .push(), .pop(), .splice() gibi metotlar stringlerde yoktur. Stringe eleman ekleyip çıkarmak gibi işlemler yapamazsınız.
// typeof operatörünü kullanarak veri türünü kontrol ettiğinizde, stringler "string" sonucunu verirken, arrayler "object" sonucunu verir:

//! ************STRING PROPERTY ************
// Property bir stringin kendi özelliğidir bir method(fonksiyon) değildir
//parantez açıp kapatmaya gerek yoktur

//? lenght
//Prototype

//! ************STRING METHODS ************
// charAt()             Returns the character at the specified index.
// charCodeAt()         Returns the Unicode of the character at the specified index.
// concat()             Joins two or more strings, and returns a new string.
// endsWith()           Checks whether a string ends with a specified substring.
// fromCharCode()       Converts Unicode values to characters.
// includes()           Checks whether a string contains the specified substring.
// indexOf()            Returns the index of the first occurrence of the specified value in a string.
// lastIndexOf()        Returns the index of the last occurrence of the specified value in a string.
// localeCompare()      Compares two strings in the current locale.
// match()              Matches a string against a regular expression, and returns an array of all matches.
// repeat()             Returns a new string which contains the specified number of copies of the original string.
// replace()            Replaces the occurrences of a string or pattern inside a string with another string, and return a new string without modifying the original string.
// search()              Searches a string against a regular expression, and returns the index of the first match.
// slice()              Extracts a portion of a string and returns it as a new string.
// split()              Splits a string into an array of substrings.
// startsWith()         Checks whether a string begins with a specified substring.
// substr()             Extracts the part of a string between the start index and a number of characters after it.
// substring()          Extracts the part of a string between the start and end indexes.
// toLocaleLowerCase()  Converts a string to lowercase letters, according to host machine's current locale.
// toLocaleUpperCase()  Converts a string to uppercase letters, according to host machine's current locale.
// toLowerCase()        Converts a string to lowercase letters.
// toString()           Returns a string representing the specified object.
// toUpperCase()        Converts a string to uppercase letters.
// trim()               Removes whitespace from both ends of a string.
// valueOf()            Returns the primitive value of a String object.

const text = "Clarusway"

console.log(text.length);
console.log(text[15]);
let text1 = "Ali";
let text2 = "Vali"
console.log(text1);




//! String Parçalama Metodları
// split()
// substring()
// substr()
// slice()

// *=========================================================
// *                 split() immutable
// *=========================================================
// Stringi belirtilen şekilde parçalara ayırır ve parçalarını bir diziye aktarır
// str.split(seperator) 
// saparator : ayrac

let textFull = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, quo!"
console.log(textFull.split(" "));
console.log(textFull.split(""));
let date = "11.11.2024";
let newDate = date.split(".")
console.log(newDate);

// *=========================================================
// *                 //? Join metodu
// *=========================================================

// Stringmethodu değildir
// string haline getirerek birleştirir, istediğimiz ifadelerle stringe dönüştürür

/* -------------------------------------------------------------------------- */
/*                               //? Join metodu                              */
/* -------------------------------------------------------------------------- */
// String metodu değildir
// Javascript dilinde join metodu, biz dizi elemanı string olarak birleştirir. Join metodu dizi (array) alarak bunu virgül gibi bir karakter ile ayırarak string'e dönüştürür.

/* -------------------------------------------------------------------------- */
//?                               Reverse Metodu                              */
/* -------------------------------------------------------------------------- */
// String metodu değildir
// reverse methodu ile bir diziyi tersine çevirebilmekteyiz. Dizi içerisindeki ilk değeri son, Son değeri ise ilk sıraya şeklinde sıralayabilmekteyiz.


let sentence = "Hello cohort 18";

console.log(sentence.slice(5,));

//! String Searching Methods

//*=>includes:Birşeyin içerip içermediğini true/false döndürür

//*=>indexOf:bir grubun veya karakter grubunun kaçıncı sırada olduğunun index numarasını verir yoksa -1 verir. Büyük küçük harfe duyarlıdır. Kelimeyi bulursa ilk gördüğünün indexini döndürür.

//*=>search: indexOf la benzer çalışır farkı Regexlerle kullanımından kaynaklanır.

//!REGEX-Regular Expression

// yazım stili/işaretleyicisir.

//g : global
//i : büyük küçük duyarsız arama

let variable = "AhmetYAVUZ";
console.log(variable.search(/h/));
console.log(variable.search(/[A-Z]/));
console.log(variable.search(/[a-z]/));
console.log(variable.search(/[0-9]/));
console.log(variable.search(/[A-Z]/));

//!Srtingde değişiklik yapma

//* Replace - immutable

let text4 = "Hello world, who are you world"

let newText = text4.replace("world", "Javascript")
console.log(newText);
let newText2 = text4.replaceAll("world", "Javascript")
console.log(newText2);

//*=> .trim() => baştaki ve sondaki boşlukları almak için kullanılıyor

