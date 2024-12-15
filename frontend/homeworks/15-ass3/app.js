const cardDiv = document.getElementById("cardDiv");
const loadingDiv = document.getElementById("loading");
const btn = document.querySelector(".btn");
const containerDiv = document.querySelector(".container");
const date = document.getElementById("date");
const now = new Date();
let count = 0;

window.addEventListener("load", loading())

function loading() {
    setTimeout(() => {
        loadingDiv.style.display = "none";
        containerDiv.style.display = "block"
        btn.style.display = "block"
        getData()

        date.textContent = now.toLocaleString()

    }, 3000)
    containerDiv.style.display = "none"
    btn.style.display = "none"
}

const getData = async () => {
    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=10");

        if (!res.ok) {

            throw new Error();
        }
        const data = await res.json()
        showToScreen(data)
    } catch (error) {
        cardDiv.innerHTML = `<img src="./img/error.gif" class="w-100 h-100" alt="no image">`
    };

}

function showToScreen(getData) {
    getData.map(element => {
        const { url } = element;

        cardDiv.innerHTML += `
            <div class="col-12 col-sm-6 col-lg-4">
                <div style="height:200px;">
                    <img src="${url}" class="w-100 h-100" alt="no image">
                </div>
         </div>
        `
    });

}

btn.onclick = function () {
    setTimeout(() => {
        loadingDiv.style.display = "none";
        cardDiv.innerHTML = "";
        getData();
    }, 500)
    cardDiv.innerHTML = `<img src="./img/loading.gif" class="w-100 h-100" alt="no image">`

}

