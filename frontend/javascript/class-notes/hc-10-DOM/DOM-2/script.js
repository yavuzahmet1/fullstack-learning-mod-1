//! createElement()

const myh1 = document.createElement("h1")

const textNode = document.createTextNode("my text here...");

myh1.appendChild(textNode)

document.querySelector("body").appendChild(myh1)

// document.querySelector("body").innerHTML = "<h1>my direct text</h1>" 
//güvensiz yöntem

const newLi = document.createElement("li");

const liText = document.createTextNode("Python");

newLi.appendChild(liText);
document.querySelector("ul").appendChild(newLi)

//! ID, CLASS GIBI OZELLIKLER ATAMA

newLi.className = "list red bg-primary"
newLi.id = "new-li"
newLi.title = "hello"
console.log(newLi)

//! setAttribute()
newLi.setAttribute("class", "list");
newLi.setAttribute("id", "new-li2")
console.log(newLi)

//! getAttribute()
console.log(newLi.getAttribute("id"));

//! classList()=>Değer atama mevcudu koruyan yöntem, kullanışlı yöntem
newLi.classList.add("border", "border-success", "border-5")
newLi.classList.add("color", "red")
console.log(newLi)
newLi.classList.remove("border")//borderi sildik
newLi.classList.contains("bold")//bold yoksa false döner
newLi.classList.toggle("border", "border-success", "border-5")//yoksa ekle varsa çıkart

//! YENİ ELEMENT EKLEME INNERHTML

document.querySelector("main").innerHTML += `<div> <input type="text"/></div>`

//+= mevcudu korur üzerine ekler + koymazsak diğerlerini siler inneri ekler

