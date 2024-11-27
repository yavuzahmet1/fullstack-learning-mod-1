console.log("**** TRAVERSING DOM ****")

//*===========================================
//*            TRAVERSING DOM
//*===========================================
//? Bir HTML elementi uzerinden baska elementleri secmeye
//? DOM traversing denilir. Ozellikle dinamik olarak degisen
//? (silme veya yeni ekleme gibi) HTML elemanlarinin secerken
//? gerekli olabilir.

//? Secme islemi 3 yonlu yapilabilir.
//? - Yukari yonde (Parent)
//? - Asagi yonde (children)
//? - Yatay yonde (Sibling)

//* 1- Yukari Yonde traverse
//*----------------------------------------------
//! parentElement, parentNode

{
    let h2 = document.getElementById("add-new-item")
    console.log(h2);
    console.log(h2.parentNode);
    console.log(h2.parentNode.parentNode);
    console.log(h2.parentNode.parentNode.parentNode);
    //document e kadar çıkar
    //Tüm düğüm türleriyle çalışmanız gerekiyorsa. Örneğin, metin veya yorum düğümleriyle çalışıyorsanız.
    //Daha genel bir kullanım sağlar.
    console.log(h2.parentElement);
    console.log(h2.parentElement.parentElement);
    console.log(h2.parentElement.parentElement.parentElement);
    console.log(h2.parentElement.parentElement.parentElement.parentElement);
    // Eğer üst düğüm bir element değilse, parentElement null döner
    // Sadece HTML elementleri ile çalışmak istiyorsanız.
    // Daha spesifik ve güvenlidir, çünkü yalnızca elementleri döndürür.

    // closest : bir DOM elementinin kendisini ya da hiyerarşisinde yukarı doğru arama yaparak belirli bir CSS seçiciyle eşleşen en yakın üst öğeyi (ancestor) döndürmek için kullanılan bir JavaScript yöntemidir. Bu yöntem, hem kendisini hem de üst öğelerini kontrol ederek eşleşen ilk öğeyi döndürür.

    // Kendisiyle Başlar: Arama, çağrıldığı öğeden başlar ve yukarı doğru devam eder.
    // Eşleşen bir öğe bulunursa o öğe döner.
    // Eğer hiçbir eşleşme yoksa null döner.
    // Amacı:Belirli bir CSS seçicisine uyan bir element bulmak.

    let section = document.querySelector("section.add-item");
    console.log(section.firstElementChild); //h2 ye gider
    console.log(section.firstChild);
    console.log(section.lastElementChild);//btn
    console.log(section.lastChild);//text yazı içeren html elementlerinin yazısına erişir
    console.log(section.children);//HTML collection dönüyor=>
    // HTMLCollection(3) [h2#add-new-item, input#input, input#btn, add-new-item: h2#add-new-item, input: input#input, btn: input#btn]

    // Yatay yönde traversing
    //! nextElementSibling ,previousElementSibling
    let htmlLi = document.querySelector(".list")
    console.log(htmlLi);
    console.log(htmlLi.nextElementSibling());


    //:not(div)=>kullanımı da var

}



//* 2- Asagi Yonde traverse
//*----------------------------------------------
//? Children, firstElementChild, lastElementChild



//* 3- Yatay Yonde traverse
//*----------------------------------------------
//! nextElementSibling ,previousElementSibling