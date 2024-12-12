const button = document.querySelector(".button");
const box = document.querySelector(".box");

const ekranaBas = (person) => {
  box.innerHTML = `
    <img src="${person.results[0].picture.large}" alt="Kullanıcı Resmi">
    <p>${person.results[0].name.title} ${person.results[0].name.first} ${person.results[0].name.last}</p>`;
};
const veriGetir = async () => {
  const result = await fetch("https://randomuser.me/api/");
  console.log(result);
  const data = await result.json();
  console.log(data);
  console.log(data.results);
  ekranaBas(data);
};
veriGetir();

button.addEventListener("click", (e) => {
  location.reload();
});
