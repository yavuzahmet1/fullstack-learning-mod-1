console.log("**** NEW GEN OPERATORS *****");

//* =============================================
//*  DESTRUCTURING (OBJECT)
//* =============================================
const product = {
    id: "1234",
    brand: "Apple",
    type: "smart phone",
    price: 3000
}

let { id, brand, type, price } = product
console.log(id);

const insanlar = {
    kisi1: {
        kimlikNo: "1234567890",
        adi: "Ahmet",
        soyadi: "Can",
        meslek: "Mimar",
        maas: 30000,
    },
    kisi2: {
        kimlikNo: "44234567890",
        adi: "Canan",
        soyadi: "Can",
        meslek: "Sosyal Gelişim Uzmanı",
        maas: 25000,
    },
};

// const { kisi1, kisi2 } = insanlar;
// console.log(kisi1.adi);

const person = {
    name: 'John Doe',
    age: 30,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }
};

const { kisi1: { adi, soyadi }, kisi2: { adi: kişi2Ad, soyadi: kisi2Soyadi } } = insanlar;
//* Example
const team = [
    {
        name: "Josh",
        surname: "Barry",
        job: "developer",
        age: 30,
    },
    {
        name: "John",
        surname: "Barry",
        job: "tester",
        age: 45,
    },
    {
        name: "Hazel",
        surname: "Nut",
        job: "team lead",
        age: 40,
    },
];

team.forEach(item => {
    console.log(item.name);
})

//* =============================================
//*  DESTRUCTURING (ARRAY)
//* =============================================
const people = ["Ali", "Veli", "Mehmet", "Ahmet"];//burada sıra önemli değil ama objectlerde önemli
console.log();
//* ==============================================
//*  REST (...)
//* =============================================

//* =============================================
//*  SPREAD (...)
//* =============================================Şß