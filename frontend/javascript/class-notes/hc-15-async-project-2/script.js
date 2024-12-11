const getCountry = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    showToScreen(data);

}

getCountry();

const showToScreen = (x) => {
    x.forEach((item) => {
        document.querySelector("article").innerHTML += `
        <div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src=${item.flags.svg} class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title"> ${item.name.common}</h5>
    
<ul class="list-group list-group-flush">
  <li class="list-group-item">
  ${item.capital}
   </li>
  <li class="list-group-item">
  ${Object.values(item.languages)}
  </li>
  <li class="list-group-item"></li>
  ${Object.values(item.currencies)[0].name}
</ul>
 </div>
</div> 
`

    })
}

//!ekrana bastırılacak dizi elemanlarının key leri farklı farklıysa===>>
//!!!! Object.values()öğeleri, nesnede bulunan numaralandırılabilir  bir dizi döndürür, istenen nesne nin içindeki object in value larını yaz, bu value lar ,object.value sayesinde dizi içinde toplanır

//? Object.values(country.currencies)=currencies in value larını bir dizide toplar

//* TRY: nin value sini dizi yapar 0 indexli: [{name: 'Turkish lira', symbol: '₺'}]. TRY key i silinir
//* Object.values(country.languages)=languages in value larını bir dizide toplar[eng,span..] Eng key i silinir