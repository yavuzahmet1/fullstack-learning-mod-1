fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then((res) => res.json()).then(data => showScreen(data.meals));

function showScreen(data) {
    const mealsDiv = document.querySelector(".food");
    data.forEach((a) => {
        mealsDiv.innerHTML += `
          <div>
          <p>${a.strMeal}</p>
          <img src=${a.strMealThumb} alt=""/>
          </div>
          `;
    });
}
//!bayraklara tıklanınca o ülkenin yemeği gelsin
//!api yi aldığımız sitedeki url nin endpoint i 
// ülke vatandaşları şeklinde, örneğin Turkish.bizde
// bayraklara tıklanınca hazır img gelmişken ülke vatandaşı 
// da gelmiş olsun diye id sine bunu yerleştirdik, ve fetch 
// ile yazdığımız url nin sonuna bu id yi ekleyerek 
// tıkladığımız ülkenin yemeklerinin gelmesini sağladık
// fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=")

document.querySelectorAll("img").forEach((a) => (
    a.onclick = () => {
        // console.log(a.id);
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${a.id}`)
            .then((res) => res.json())
    }
));

//!arama inputuna yazdığım harfleri
// içeren yemekleri ekrana bastır
// (oninput=kullanıcı input elemanına her veri girişinde çalışmaktadır)