// DOM=>her HTML elementini objeye dönüştürür
// DOM=>DOM tree şeklinde olur
//window bizim en dışarıdaki objemizdir.

document.title = "Hello! Chort 18"

//! GETELEMENTBYID
const headerText = document.getElementById("add-new-item");
// OR 
document.getElementById("add-new-item").style.color = "blue";
document.getElementById("add-new-item").style.backgroundColor = "yellow"
document.getElementById("add-new-item").style.border = "2px solid red"
// OR 
headerText.style.color = "blue";
headerText.style.backgroundColor = "yellow";
headerText.style.border = "2px solid red";
headerText.style.fontFamily = "Tahoma";

//burada yapılan tüm değişiklikler inline styling olduğundan ezilemez

const btn = document.getElementById("btn");

// DOM ELEMANLARINA ERİŞİM-İÇERİK-OKUMA-DEĞİŞTİRME
const htmlLi = document.getElementById("html-li");
console.log(htmlLi);
htmlLi.style.color = "red"

// bir text elementin içeriği textContent, innerHTML, innerText ile değiştirilir. 
// textContent: Bir elemanın tüm metin içeriğini alır veya ayarlar.
// innerHTML : Bir elemanın HTML içeriğini alır veya ayarlar.
// innerText:Bir elemanın görünen (render edilmiş) metin içeriğini alır veya ayarlar.

htmlLi.textContent = "HTML5"
htmlLi.innerHTML = "Deneme"

console.log(htmlLi.textContent);
console.log(htmlLi.innerHTML);
console.log(htmlLi.innerText);


const myInput = document.getElementById("input");
console.log(myInput.value);

//! GETELEMENTBYTAGNAME
{
    let allLi = document.getElementsByTagName("li")
    console.log(allLi);
    //tüm collectionlara ulaşılır
    console.log(allLi[2].textContent);
    allLi[2].textContent = "Değiştirildi"

    //bu şekilde kullanamayız çünkü array değiller önce arraya çevrilecek

    let arrayLi = [...allLi]//arraya cevrildi spread ile
    console.log(arrayLi);

    arrayLi.forEach(item => {
        item.style.color = "magenta"
    })
    Array.from(allLi) //ile de arraya cevirebiliriz.
}

//! GETELEMENTBYCLASSNAME

{
    let mylist = document.getElementsByClassName("list");
    console.log(mylist);
    mylist[0].innerHTML = "HTML DERSLERİ"
    document.getElementsByClassName("list")[2].style.color = "orange"
}

//! QUERYSELECTOR()

// id, class ve tag ile seçim yapılabilir
// eşleşme bulamazsa null döner
// Bir Element (bulunan ilk eşleşen öğe) döner.
// Daha hızlıdır çünkü yalnızca ilk eşleşmeyi bulup durur.

// document.querySelector("#id")
// document.querySelector(".class")
// document.querySelector("tag")=> ilk gördüğü elemanı seçer

// hocam, performans olarak hangisi daha kullanışlı queryselectorAll("#id") mu yoksa getElementById(), sonuçta ikisi de aynı işleve sahip. kafayı bulandırmayalım hangisini kullanmak istiyorsan onu kullan.

//! QUERYSELECTORALL()

// bir NodeList döndürür, dahili olarak forEach metodu barındırır
// ama istenirse sprad veya Array.from() ile array a dönüştürülebirilir.

const list = document.querySelectorAll(".item-list .list");
list.forEach(item => console.log(item.innerText));

// diğer array methodlarını(map, reduce, filter) kullanmak için arraya dönüştürmeliyiz.

//! TRAVERSING

// bilinen bir elementin yanındakini yukarısındakini seç de diyebiliriz buna denir aynı seviyede yani sibling olanı seçebiliriz.
