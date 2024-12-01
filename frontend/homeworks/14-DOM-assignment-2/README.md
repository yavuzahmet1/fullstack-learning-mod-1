# JavaScript DOM Assignment 2

## Change Random Background Color App

### Amaç:

- Bu görevin amacı, öğrendiklerinizi pekiştirmek. JS DOM kullanarak butona tıklanıldığında veya hover olunduğunda sayfanın arka plan rengini random olarak ayarlamanız. Ayarladığınız rengi inputun rengi olarak belirleyip ve rengi yazılı olarak ekrana yazdırmanız.


### Beklenen
![Random](./random.gif)

### Demo

[Live](https://anthonyins.github.io/js-dom-ass2/)

### Adımlar

- Html yapısını oluşturunuz. (İsteyenler verilen html yapısını da kullanabilirler.)
- Arka plan rengi vereceğiniz elementi yakalayınız.
- Event tanımlayacağınız buton elementlerini yakalayıp ilgili butona ilgili eventı tanımlayınız. 
- Butona tıklanıldığnda veya hover olduğunda arka plan rengini değiştirecek olan fonksiyonu yazınız.
- Rengin yansıtılacağı inputu ve rengin yazılı olarak sergileneceği elementi yakalayınız.
- Bulduğunuz rengi inputun değeri olarak belirleyiniz ve ayrıca ekrana da rengin hangi renk olduğunuz yazdırınız.


**Bonus :** 
- Input dan seçilen rengin arka plan olarak ayarlanması işlemini yapabilirsiniz.
- Enter tuşuna basıldığında da arka plan renginin ayarlanması işlemini yapabilirsiniz.
- copy iconuna tıklanıldığında ilgili rengin kopyalanması işlemini yaptırabilirsiniz. Bunun için Javascript navigator(window a aittir) nesnesine bakabilirsiniz. Navigator nesnesinin de clipboard özelliğini araştırabilirsiniz. (Kapsamlı bir nesnedir. Bu nesne, tarayıcının özelliklerini ve kullanıcı cihazıyla ilgili bilgileri içeren bir dizi özellik ve yöntem sunar. Kullanıcının loakasyonunu belirlemeye varana kadar bazı bilgileri sağlayabilir.) 
[Navigator için bakınız.](https://developer.mozilla.org/en-US/docs/Web/API/Navigator)
[Clipboard writeText() metodu için bakınız.](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText)

**Not :** 
- Tüm bu işlemleri Javascript Dom kullanarak yapınız.
- Kendinize göre eklemeler yapabilirsiniz.
- **Renkler css in içerdiği tüm renklerden rastgele oluşmalıdır.**
- type ı color olan input tek bir formatta value verir ve kabul eder.