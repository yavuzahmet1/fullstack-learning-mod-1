const h1 = document.getElementsByTagName('h1');
const title = document.getElementsByClassName("title");

console.log(h1);
console.log(h1.length);

for (i of h1) {
    console.log(i.textContent);
}

[...h1].forEach(item => {
    console.log(item);
})

console.log(title);

// NodeList, DOM (Document Object Model) yapısında bir belge içindeki düğümlerin (nodes) bir koleksiyonunu ifade eden bir veri yapısıdır. Genellikle, JavaScript kullanarak DOM'dan eleman seçildiğinde bir NodeList döndürülür.
// NodeList, bir belge içindeki düğümlerin sıralı bir listesini içerir. Bu düğümler element, text, comment veya diğer düğüm türlerinden biri olabilir.
// Statik NodeList: Belirli bir zamanda alınır ve DOM'daki değişikliklerden etkilenmez. Örneğin, document.querySelectorAll() metodu genelde statik bir NodeList döndürür.
// Canlı NodeList: DOM'daki değişikliklere dinamik olarak yanıt verir. Örneğin, document.getElementsByClassName() ile elde edilen bir NodeList canlıdır.
// NodeList, bir diziye benzer ancak bir array değildir. Bu nedenle doğrudan map(), filter() gibi dizi metodlarını kullanamazsınız. Ancak modern JavaScript'te, Array.from() veya yayılma operatörü (...) ile bir NodeList'i diziye dönüştürebilirsiniz.
// NodeList, genellikle for döngüsü veya forEach() metodu ile dolaşılabilir.

// NodeList genelde DOM'da belirli elemanları seçerken elde edilir:
// document.querySelectorAll(selector):
// document.getElementsByTagName(tagName):
// childNodes:
// =>const parent = document.getElementById('parent');
// =>const children = parent.childNodes; // Canlı NodeList
// =>console.log(children);

// NodeList:
// =>const items = document.querySelectorAll('.item');
// =>items.forEach(item => console.log(item)); // Çalışır

// Array Dönüşümü:
// =>const itemsArray = Array.from(document.querySelectorAll('.item'));
// =>itemsArray.map(item => console.log(item));


