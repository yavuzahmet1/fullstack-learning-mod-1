# Alışveriş Sepeti Uygulaması

Bu proje, bir alışveriş sepeti uygulamasının temel özelliklerini içeren bir web uygulamasıdır. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir, çıkarabilir ve toplam miktarı görebiliriz. [site görseli](https://yavuzahmet1.github.io/fullstack-clarusway/projects/shopping-cart/)

<img src="img/picture.gif" alt="Logo" width="500px" height="250px">

## Özellikler

- Ürünlerin bir listesi dinamik olarak oluşturulur.
- Sepete ürün ekleme ve çıkarma işlevselliği.
- Sepetteki toplam ürün miktarını gösteren bir gösterge.
- **localStorage** kullanılarak sepet verilerinin tarayıcıda saklanması.

## Kullanılan Teknolojiler

- **HTML**: Uygulamanın temel yapısı.
- **CSS**: Görsel düzenlemeler.
- **JavaScript**: Dinamik içerik oluşturma ve kullanıcı etkileşimlerinin yönetimi.
- **localStorage**: Kullanıcı verilerinin tarayıcıda saklanması.

## Proje Dosya Yapısı

# `map` Metodu Nedir?
- map**, bir dizi üzerinde çalışarak her bir eleman için belirli bir işlem uygular ve işlemin sonucunda **yeni bir dizi** döner.
- Orijinal dizi değişmez, sadece dönüş değerine göre yeni bir dizi oluşturulur.

# Kodda Kullanımı
javascript
shopItemsData.map(item => {
   - let { id, name, price, desc, img } = item; // Destructuring
   - return `<div id=product-id-${id} class="item">...</div>`;
}).join("");// joini mutlaka kullanın yoksa benim gibi günlerce süren düşünme sürecine girebilirsiniz : ), karşılaştığım hata dizi aralarına , işretini koyuyor ve cart boşluğu kaplayacak kadar virgül koyuyor.

#Neden Kullandık?
-Ürün Kartları Oluşturmak: map metodu, her bir ürün için dinamik bir HTML şablonu oluşturuyor.
-Dinamik ve Kısa Kod: Her ürünü manuel olarak HTML içinde yazmak yerine, map ile tüm ürünleri döngüyle işler ve daha az kod yazarız.
-Kolay Yönetim: Ürün bilgilerini bir dizi (shopItemsData) içinde tutarak, listeyi sadece veriyi değiştirerek güncelleyebiliriz.

## reduce Metodu
-Neden Kullandık?
-Toplam Ürün Sayısını Hesaplamak:
-basket.map(x => x.item): Sepetteki ürünlerin yalnızca item (miktar) bilgilerini içeren bir dizi oluşturur.
-reduce((x, y) => x + y, 0): Bu dizi üzerinde toplam işlemini gerçekleştirir.
-Dinamik ve Güvenilir: Yeni ürün eklenip çıkarıldığında, sepet miktarını hesaplamak için tek bir fonksiyon yeterlidir.

##Neden Bu İkisi?
-**map**:
--Görsel içerik oluşturmak için ideal (HTML şablonları, veri listeleri vb.).
--Diziden, üzerinde işlem yapılmış başka bir dizi üretir.
--**reduce**:
--Diziden tek bir sonuç üretmek (örneğin toplam, çarpım, maksimum değer vb.) için kullanılır.
--Sepetteki ürün miktarını toplamak gibi bir durumda çok faydalıdır.



