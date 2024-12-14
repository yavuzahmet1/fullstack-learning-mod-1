const getirCountry = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");

  const veri = await res.json();
  bastirCountry(veri);
};

getirCountry();

//!ekrana bastır

const bastirCountry = (veri) => {
  veri.forEach((a) => {
    // console.log(Object.values(a.languages));

    // console.log(Object.values(a.currencies)[0].name);

    document.querySelector("article").innerHTML += `
    
    
    <div class="card text-start w-50 shadow-lg bg-light my-4" style="width: 18rem;">
  <img src="${a.flags.svg} " class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${a.name.common} </h5>
    
<ul class="list-group list-group-flush">
  <li class="list-group-item">
  ${a.capital}
   </li>
  <li class="list-group-item">
 ${Object.values(a.languages)}
  </li>
  <li class="list-group-item"> ${Object.values(a.currencies)[0].name}  </li>
  
</ul>
 </div>
</div> 
    
    
    
    
    
    `;
  });
};
//!ekrana bastırılacak dizi elemanlarının key leri farklı farklıysa===>>
//!!!! Object.values()öğeleri, nesnede bulunan numaralandırılabilir  bir dizi döndürür, istenen nesne nin içindeki object in value larını yaz, bu value lar ,object.value sayesinde dizi içinde toplanır

//? Object.values(country.currencies)=currencies in value larını bir dizide toplar

//* TRY: nin value sini dizi yapar 0 indexli: [{name: 'Turkish lira', symbol: '₺'}]. TRY key i silinir
//* Object.values(country.languages)=languages in value larını bir dizide toplar[eng,span..] Eng key i silinir