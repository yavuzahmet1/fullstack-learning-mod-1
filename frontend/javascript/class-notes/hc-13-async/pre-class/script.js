//async

console.log(1);
setTimeout(() => {
    console.log(2)
}, 3000);
console.log(3);

console.log("start");

const login = (username, password, callback) => {
    setTimeout(() => {
        return { username: username }
    }, 2000);
}

const user = login("ahmetyavuz", "12345", user = {
    console.log(user);
})
console.log(user);

console.log("end");