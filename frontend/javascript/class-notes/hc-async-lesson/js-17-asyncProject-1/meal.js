let dizi = [];

fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
  .then((res) => res.json())
  .then((veri) => {
    dizi = veri;
    showScreen(veri.meals);
  });

//!ekrana bastırma

function showScreen(data) {
  const mealsDiv = document.querySelector(".food");

  mealsDiv.innerHTML = "";

  data.forEach((a) => {
    mealsDiv.innerHTML += `
<div class="col-sm-6 col-md-4">
<p>${a.strMeal} </p>
<img width="200px" src=${a.strMealThumb}  alt=""/>
</div>



`;
  });
}

//!bayraklara tıklanınca o ülkenin yemeği gelsin
//!api yi aldığımız sitedeki url nin endpoint i ülke vatandaşları şeklinde, örneğin Turkish. bizde bayraklara tıklanınca hazır img gelmişken ülke vatandaşı da gelmiş olsun diye id sine bunu yerleştirdik, ve fetch ile yazdığımız url nin sonuna bu id yi ekleyerek tıkladığımız ülkenin yemeklerinin gelmesini sağladık

document.querySelectorAll("img").forEach(
  (a) =>
    (a.onclick = () => {
      // console.log(a.id);
      fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
        .then((response) => response.json())
        .then((veri) => showScreen(veri.meals));
    })
);

//!arama inputuna yazdığım harfleri içeren yemekleri ekrana bastır (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)

document.querySelector("input").oninput = (e) => {
//   console.log(e.target.value);

//   console.log(dizi);

let veri= dizi.meals.filter((a)=>a.strMeal.toLowerCase().includes(e.target.value.toLowerCase()))

showScreen(veri)


};

