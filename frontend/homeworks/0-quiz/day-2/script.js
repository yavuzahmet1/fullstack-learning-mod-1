// Exercises: Level 1
// Create an empty object called dog
// Print the the dog object on the console
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// Get name, legs, color, age and bark value from the dog object
// Set new properties the dog object: breed, getDogInfo

const dog = {
    name: "Lessie",
    legs: 4,
    color: "brown",
    age: 5,
    bark: function () {
        return "woof woof"
    },
};
dog.breed = 3;
console.log(dog.bark());
dog.getDogInfo = function () {
    console.log(`${this.name} ${this.color} ${this.age} ${this.breed}`);
}
dog.getDogInfo()

// Exercises: Level 2

const users = {
    Alex: {
        email: 'alex@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript'],
        age: 20,
        isLoggedIn: true,
        points: 30
    },
    Asab: {
        email: 'asab@asab.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
        age: 25,
        isLoggedIn: false,
        points: 50
    },
    Brook: {
        email: 'daniel@daniel.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
        age: 30,
        isLoggedIn: true,
        points: 50
    },
    Daniel: {
        email: 'daniel@alex.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
        age: 20,
        isLoggedIn: false,
        points: 40
    },
    John: {
        email: 'john@john.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
        age: 20,
        isLoggedIn: true,
        points: 50
    },
    Thomas: {
        email: 'thomas@thomas.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        age: 20,
        isLoggedIn: true,
        points: 40
    },
    Paul: {
        email: 'paul@paul.com',
        skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
        age: 20,
        isLoggedIn: false,
        points: 40
    }
}
let personWithMostSkills = "";
let maxSkills = 0;

for (const [name, { skills }] of Object.entries(users)) {
    if (skills.length > maxSkills) {
        maxSkills = skills.length;
        personWithMostSkills = name;
    }
}
console.log(`The person with the most skills is ${personWithMostSkills}`);
// Find the person who has many skills in the users object.

// let { ...a } = users
// let { ...acc } = Object.entries(a)
// console.log(acc[0][1]["skills"].length);

// console.log(a);
const skillsName = (arr) => {
    const result = Object.entries(arr).reduce((acc, item) => {
        if (item[1].skills.length > acc[1]) {
            acc[0] = item[0]; // Nesneyi güncelliyoruz
            acc[1] = item[1].skills.length;
        }
        return acc
    }, [0, 0])
    // console.log(`${result[0]}-${result[1]}`);
    // let tmp = [0, 0];
    // for (let user of Object.entries(arr)) {

    //     if (user[1].skills.length > tmp[1]) {
    //         tmp = [user[0], user[1].skills.length]
    //     }
    // }
    // console.log(tmp);
}
// skillsName(users)

// Count logged in users, count users having greater than equal to 50 points from the following object.
console.clear()
const pointsSelect = (arr) => {
    const resultPoint = Object.entries(arr).reduce((acc, item) => {
        item[1].isLoggedIn && item[1].points >= 50 ? acc++ : null
        return acc;
    }, 0)
    console.log(resultPoint);
}
pointsSelect(users)