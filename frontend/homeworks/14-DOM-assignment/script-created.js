let linkBootstrap = document.createElement("link");
linkBootstrap.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
linkBootstrap.rel = "stylesheet";
linkBootstrap.integrity = "sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
linkBootstrap.crossOrigin = "anonymous";
document.head.appendChild(linkBootstrap)

// const root = document.documentElement;
// root.style.setProperty("' Josefin Sans', sans-serif");
// document.head.style(root)

let header = document.createElement("header");
document.body.prepend(header)
console.log(header);

let nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg bg-danger"
nav.style.display = "flex";
nav.style.justifyContent = "center !important";
nav.style.textAlign = "center !important";
nav.style.flexDirection = "column"
nav.style.fontFamily = "'Courier New', Courier, monospace"
header.appendChild(nav)


let h1 = document.createElement("h1");
h1.className = "header";
h1.textContent = "Dinamic JavaScript DOM Assignment 1";
nav.appendChild(h1);

let divContainer = document.createElement("div");
divContainer.className = "container-fluid";
nav.appendChild(divContainer);

let buttonToggle = document.createElement("button");
buttonToggle.className = "navbar-toggler";
buttonToggle.type = "button";
buttonToggle.setAttribute("data-bs-toggle", "collapse");
buttonToggle.setAttribute("data-bs-target", "#navbarNav");
buttonToggle.setAttribute("aria-controls", "navbarNav");
buttonToggle.setAttribute("aria-expanded", "false");
buttonToggle.setAttribute("aria-label", "Toggle navigation");
buttonToggle.style.margin = "auto";
divContainer.appendChild(buttonToggle)

let span = document.createElement("span");
span.className = "navbar-toggler-icon"
buttonToggle.appendChild(span)

let divCollaps = document.createElement("div");
divCollaps.className = "collapse navbar-collapse  justify-content-center fw-bold";
divCollaps.id = "navbarNav";
// divCollaps.innerHTML = ` <ul class="navbar-nav">
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Contact</a>
//                         </li>
//                     </ul>`;
divContainer.appendChild(divCollaps); //sonda eklemeyi de denemek lazım



let ul = document.createElement("ul");
ul.className = "navbar-nav";
divCollaps.appendChild(ul);

let liHome = document.createElement("li");
liHome.className = "nav-item";
ul.appendChild(liHome);

let aHome = document.createElement("a");
aHome.href = "#"
aHome.className = "nav-link active"
aHome.setAttribute("aria-current", "page");
aHome.textContent = "Home"
liHome.appendChild(aHome)


let liContact = document.createElement("li");
liContact.className = "nav-item";
ul.appendChild(liContact);

let aContact = document.createElement("a");
aContact.href = "#"
aContact.className = "nav-link active"
aContact.setAttribute("aria-current", "page");
aContact.textContent = "Contact";
liContact.appendChild(aContact)

let section = document.createElement("section");
section.className = "container gap-5";
section.style.height = "100vh";
section.style.width = "100vmax";
section.style.display = "flex";
section.style.justifyContent = "center"
section.style.alignItems = "center";
section.style.flexDirection = "column";
document.body.appendChild(section)

let form = document.createElement("form");
form.style.width = "70%";
form.style.marginBottom = "2rem";
section.appendChild(form);

let divRow = document.createElement("div");
divRow.className = "form-row d-flex gap-4 flex-wrap justify-content-center align-items-center"
divRow.style.width = "70%";
form.appendChild(divRow);

let divColName = document.createElement("div");
divColName.className = "form-group col-sm-6 col-md-6 col-lg-3"
divRow.appendChild(divColName);

let inputName = document.createElement("input");
inputName.className = "form-control";
inputName.type = "text";
inputName.id = "name";
inputName.placeholder = "Anthony"
inputName.disabled = "true";
divColName.appendChild(inputName)


let divColPassword = document.createElement("div");
divColPassword.className = "form-group col-sm-6 col-md-6 col-lg-3"
divRow.appendChild(divColPassword);
let inputPassword = document.createElement("input");
inputPassword.className = "form-control";
inputPassword.type = "number";
inputPassword.id = "password";
inputPassword.placeholder = "123456";
inputPassword.disabled = "true";
divColPassword.appendChild(inputPassword)

let buttonSubmit = document.createElement("button");
buttonSubmit.type = "submit";
buttonSubmit.className = "btn btn-primary col-sm-12 col-md-6 col-lg-3";
buttonSubmit.textContent = "Sign in";
divRow.appendChild(buttonSubmit)

let ulProjects = document.createElement("ul");
ulProjects.className = "projects";
ulProjects.innerHTML = ` <h4>Js Dom Projects</h4>
            <li>Hello World!</li>
            <li>Guess Number</li>
            <li>Checkout Page</li>
            <li>income and expense project</li>
            <li>income and expense project</li>`

section.appendChild(ulProjects)

let scriptB = document.createElement("script");
scriptB.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
scriptB.integrity = "sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
scriptB.crossOrigin = "anonymous"
document.body.appendChild("scriptB")