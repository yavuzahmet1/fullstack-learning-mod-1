/* -------------------------------------------------------------------------- */
/*                                   OBJECTS                                  */
/* -------------------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ama daha karmaşık veriler için Object kullanılır

//! Objectlerde key-value ( Property-value) değerlerini içerir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

const student = { name: "Ahmet", surname: "YAVUZ" }
console.log(student.name);

//! OBJECT OLUŞTURMA YÖNTEMLERİ
//! 3 farkli yöntem ile Object oluşturulabilir.
//? 1. Object() class'ından türetme
// Bu yöntem, JavaScript'teki Object sınıfını kullanarak bir nesne oluşturmayı içerir. 
// Bunun için new Object() yazılır ve sonradan nesneye özellikler atanır.

const car = new Object();
car.brand = "BMW";
car.model = 2010;
car.horsePower = 150;
console.log(car);

//! OOP(Object Oriented Programming) çok kullanılmıyor
//?Constructor metodu ile object oluşturmak

function PersonelList(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

const personel1 = new PersonelList(100, "Ali", 5000);
console.log(personel1);

//!object Literal (en çok kullanılan ve tercih edilen)

const house = {}
house.room = 5;
house.heating = "with stove";
house.pool = true;

const person = {
    name: "Ahmet",
    surname: "YAVUZ",
    salary: 10000,
    birthOfDay: 1990,
    isMarried: true,
    children: ["sema", "süha", "Sena"],
    address: { city: "Izmir", street: "lale", no: 5 },
    calculate: function () {
        return new Date().getFullYear() - this.birthOfDay;
        // },
        // sayHi: () => {
        //     return "Hello!"
        // },
        //* objec içinde arrow function
        // arrowFunction: () => {
        //     console.log(this.isMarried);
        //     console.log(person.isMarried);
        //     return isMarried
        // }
    }
}
// console.log(person);
// console.log(person.isMarried);
// console.log(person.calculate());
// console.log(person.arrowFunction());

//*------------READ/ACCESS

//! 1- .(dot) notation ile erişim
// console.log(person);
// console.log(person.address);

//! 2- [] square brackets, özellik yöntemi
//* dinamik erişim için kullanılır

console.log(person["name"]);

const keyWord = "surname"
console.log(person[keyWord]);

//! yeni bir özellik (property) ekleme
person.phone = "345-456-233";
person[keyWord] = 1990;
console.log(person);

//!object kopyalama
//*shallow copy (sığ) kopyalama
const firmaPersoneli = person
console.log(`Person : ${person.name}`);
console.log(`Firma Personel : ${firmaPersoneli.name}`);

//! 2 Deep Copy yöntemi
//*JSON.stringify() ve JSON.parse()

const deepCopy = JSON.parse(JSON.stringify(person))
console.log(deepCopy);

//*--------------Object Methods---------------
//? iç içe (nested) Object kullanımı

const employeeList = {
    person1: { name: "Salih", surname: "Kara", age: 45 },
    person2: { name: "Kaya", surname: "Zaman", age: 49 },
    person3: { name: "Ahmet", surname: "Yalçın", age: 42 },
    person4: { name: "Yahya", surname: "Sündüz", age: 58 }
}
console.log(employeeList.person2.surname);
console.log(employeeList["person3"]["name"]);

//* FOR-OF-IN YAPISI

const keys = Object.keys(person);
console.log(keys);

//* VALUE lara erişim sağlamak için Object.values()

const value = Object.values(person)
console.log(value);

//* Object.Entries

const data = Object.entries(person)
console.log(data);
