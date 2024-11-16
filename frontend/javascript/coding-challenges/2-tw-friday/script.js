// //const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
// const itCompanies = new Array("Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle",
//     "Amazon"
// );
// console.log(itCompanies);

// const itCompanies1 = Array.of(
//     "Facebook",
//     "Google",
//     "Microsoft",
//     "Apple",
//     "IBM",
//     "Oracle",
//     "Amazon"
// );

// console.log(`this array has length : ${itCompanies1.length}`);
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
    'Adana',
]

console.log(`this array has length : ${countries.length}`)//length
console.log(`first item : ${countries[0]}`);
console.log(`last item : ${countries[countries.length - 1]}`);
console.log(`last item : ${countries[(countries.length - 1) / 2]}`);
console.log(`last item : ${countries[Math.floor((countries.length) / 2)]}`);

countries.push("Turkiye")
console.log("PUSH :", countries);
console.log(`PUSH : ${countries}`);
// console.log(`UPPERCASE : ${countries.toUpperCase()}`);
// for (i of countries) {
//     console.log(i.toUpperCase());
// }
console.log(`last item : ${countries[countries.length - 1]}`)

// console.log(countries[12][1]);

let big = [];
for (i of countries) {
    console.log(i.toUpperCase());
    big.push(i.toUpperCase());
}
console.log(big);
console.log(`PUSH : ${countries}`);

const itCompanies = ["Facebook",
    "Google",
    "Microsoft",
    "Apple",
    "IBM",
    "Oracle",
    "Amazon"];
let company = "Apple";

const companiesResult = itCompanies.includes(company) ? `This company exists ${company}` : `${company} not exists `;

console.log(companiesResult);
let count = 0;
for (company of itCompanies) {
    if (company.toLowerCase().indexOf("o") !== company.toLowerCase().lastIndexOf("o")) console.log(company);
}
console.clear()
//Sort the array using sort() method
// console.log(itCompanies.sort());
console.log(itCompanies.sort());// TO DO


//Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
// console.log(itCompanies.slice(-3, itCompanies.length));

//Slice out the last 3 companies from the array
// console.log(itCompanies.slice(((itCompanies.length - 1) / 2), (itCompanies.length + 1) / 2));

// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array

console.log(itCompanies.pop());
console.log(itCompanies.shift());
// console.log(itCompanies);
// console.log(itCompanies.splice((itCompanies.length - 1) / 2, 1));
// console.log(itCompanies.splice(0, itCompanies.length));
console.log(itCompanies);
//
console.log(itCompanies.splice(0, 0));
console.log(itCompanies);

// array.splice(start, deleteCount, item1, item2, ...);
let fruits = ["elma", "muz", "çilek", "portakal"];
fruits.splice(2, 1, "karpuz", "kavun"); // 2. indexten başlayarak 1 eleman çıkar, yerine "karpuz" ve "kavun" ekle
console.log(fruits); // ["elma", "muz", "karpuz", "kavun", "portakal"]


