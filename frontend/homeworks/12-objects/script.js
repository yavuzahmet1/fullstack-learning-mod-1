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
    }
}
console.log(person);
console.log(person.isMarried);
console.log(person.calculate());