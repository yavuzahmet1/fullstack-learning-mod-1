//* ===========================================================
//*                3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamiza ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.
//?! Bu baglamda syntatic sugar benzetmesi yapilabilir.

//!throw ile hata fırlatırsak kodumuz o satırda durur. kodumuzu durdurmak istemezsek diğer sayfadaki kodları kullanırız

// Informational responses (100 – 199)
// Successful responses (200 – 299)
// Redirection messages (300 – 399)
// Client error responses (400 – 499)
// Server error responses (500 – 599)

//!chain (zincir then)
// fetch("https://api.github.com/users").then((res)=>res.json()).then((veri)=>console.log(veri))

fetch("https://api.github.com/users") //database e istek attık
  .then((res) => {
    if (!res.ok ) {//hata kontrolü yaptık
      throw new Error("url de hata var");
    }

    return res.json(); //gelen verileri js ye uygun hale getirdik
  }) 
  .then((veri) => ekranaBastir(veri))//veriler hatasız ise çalışacak kod
  .catch((error) => console.log(error));//veriler hatalı ise çalışacak kod

const ekranaBastir = (data) => {
   console.log(data);

  data.forEach(({ login, avatar_url, node_id }) => {
    document.querySelector("section").innerHTML += `
   
   <h1>${login} </h1>
   <img width="300px" src=${avatar_url}/>
   <h3>${node_id} </h3>
   `;
  });
};
