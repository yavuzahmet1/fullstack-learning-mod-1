let models = [
    {
        name: 'BMV',
        image: "bmw.jpg"
    },
    {
        name: 'Honda',
        image: "honda.jpg"
    },
    {
        name: 'Mazda',
        image: "mazda.jpg"
    },
    {
        name: 'SKODA',
        image: "skoda.jpg"
    },
    {
        name: 'Volvo',
        image: "volvo.jpg"
    }
]

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const img = document.querySelector(".card-img-top");
let count = 0;
right.addEventListener("click", () => {

    if (count === models.length) return;
    img.setAttribute.src = models[count].image
    count++
    console.log(models[count].image)
})

console.log(models)

