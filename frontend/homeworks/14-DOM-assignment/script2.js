//! Header

const header = document.createElement("header");

header.style.backgroundColor = "#FF4500";
header.style.color = "white";
header.style.textAlign = "center";
header.style.padding = "10px 0";
document.body.appendChild(header);

//! Title

const title = document.createElement("h1");
title.id = "title";
title.textContent = "Javascript Dom Assignment 1";
header.appendChild(title);

//! nav-item

const ul1 = document.createElement("ul");
header.appendChild(ul1);
ul1.className = "nav-item";
ul1.style.display = "flex";
ul1.style.flexDirection = "row";
ul1.style.justifyContent = "center";
ul1.style.listStyleType = "none";
ul1.style.gap = "10px";

//! nav-item-li

const liHome = document.createElement("li");
ul1.appendChild(liHome);
liHome.id = "home";
liHome.textContent = "Home";

const liContact = document.createElement("li");
ul1.appendChild(liContact);
liContact.textContent = "Contact";

//! Inputs and Button

const div2 = document.createElement("div");
div2.id = "inBut";
document.body.appendChild(div2);
div2.style.margin = "64px auto";
div2.style.display = "flex";
div2.style.gap = "4px";
div2.style.alignItems = "center";
div2.style.justifyContent = "center";
div2.style.flexWrap = "wrap";

const input1 = document.createElement("input");
input1.type = "text";
input1.id = "username";
input1.value = "Anthony";
input1.disabled = "true";

const input2 = document.createElement("input");
input2.id = "password";
input2.value = "123456";
input2.disabled = "true";
div2.appendChild(input1);
div2.appendChild(input2);

const btn = document.createElement("button");
btn.className = "btn";
btn.textContent = "Giriş Yap";
div2.appendChild(btn);
btn.style.backgroundColor = "#C0EFC0";
btn.style.color = "";
btn.style.padding = "10px";
btn.style.borderRadius = "5px";
btn.style.border = "none";

//! Text Part

const div3 = document.createElement("div");
div2.appendChild(div3);
div3.style.flexBasis = "100%";
div3.style.placeItems = "center";
div3.style.justifyContent = "center";

const title2 = document.createElement("h3");
div3.appendChild(title2);
title2.textContent = "Js Dom Projects";
title2.style.order = "1";
title2.style.paddingTop = "240px";

const ul2 = document.createElement("ul");
div3.appendChild(ul2);
ul2.style.textAlign = "justify";

const myProjects = [
    "Hello World!",
    "Guess Number",
    "Checkout Page",
    "Gelir-Gider Projesi",
    "Api Projects",
];

myProjects.forEach((element) => {
    const listItem = document.createElement("li");
    listItem.className = "Projects";
    listItem.textContent = element;
    ul2.appendChild(listItem);
});