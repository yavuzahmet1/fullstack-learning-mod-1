const incomeInput = document.querySelector("#gelirInput");
const addBtn = document.querySelector("#ekle");
const addForm = document.querySelector("#ekleFormu");
const showIncome = document.querySelector("#gelirGoster")
let incomes = JSON.parse(localStorage.getItem('incomes')) || 0;
JSON.stringify
// localStorage'da 'incomes' adındaki anahtarı arar.
// Eğer bu anahtar yoksa, null döner.

// getItem bir JSON formatında string döndürdüğünde, 
// bunu bir JavaScript nesnesine dönüştürür.

// Eğer getItem('incomes') null dönerse, 
// JSON.parse(null) çalışır ve null sonuç verir (hata vermez).

// Eğer JSON.parse(...) sonucu null, undefined, veya boş bir değerse, 
// bu durumda incomes değişkenine 0 atanır.

addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    incomes = incomes + Number(incomeInput.value);
    showIncome.textContent = incomes;
    localStorage.setItem("incomes", incomes);
});

//!money spending section

const date = document.querySelector("#tarih");
const amount = document.querySelector("#miktar");
const descArea = document.querySelector("#harcamaAlani");
const expenseForm = document.querySelector("#harcama-formu");
const expenseTable = document.querySelector("#harcamaTablosu");
const remainShow = document.querySelector("#kalanGoster");
const remainShowLbl = document.querySelector(".kalanGoster");
const expenseShow = document.querySelector("#harcamaGoster")

let expenseArr = JSON.parse(localStorage.getItem("myIncome")) || [];
// JSON.stringify() bir JavaScript nesnesini ya da dizisini 
// JSON string'e dönüştürmek için kullanılır.

// Veriyi taşınabilir hale getirmek veya saklamak için oldukça faydalıdır.

//Özelleştirme ve okunabilirlik için replacer ve space parametrelerini destekler.

expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newExpense = {
        date: date.value,
        amount: Number(amount.value),
        desc: descArea.value,
        id: new Date().getTime(),
    }
    expenseArr.push(newExpense)
    localStorage.setItem("myIncome", JSON.stringify(expenseArr)); İ
    console.log(expenseArr);
});


expenseArr.forEach((item) => {
    addTable(item)
});

// console.log(expenseArr);
//! data added to table

function addTable({ id, amount, date, desc }) {
    expenseTable.innerHTML += `
                      <tr>
              <th scope="row">${desc}
              <td>${amount}</td>
              <td>${date}</td>
              <td><i class="fa-solid fa-trash-can text-danger ms-2 cursor-pointer" style="cursor:pointer" id="delete"/></td>
            </tr>`
};

//! delete procces

document.querySelectorAll(".fa-trash-can").forEach((x) => {
    x.onclick = () => {
        x.parentElement.parentElement.remove();
        expenseArr = expenseArr.filter((item) => x.id !== item.id);
        localStorage.setItem("myIncome", JSON.stringify(expenseArr))
    }
});

function calculateTotal() {
    const tolalExpense = expenseArr.reduce((acc, item) => acc + Number(item.amount), 0)
    console.log(tolalExpense);

    const income = Number(localStorage.getItem("incomes"))
    showIncome.textContent = income
    expenseShow.textContent = tolalExpense;
    remainShow.textContent = income - tolalExpense
}

calculateTotal();