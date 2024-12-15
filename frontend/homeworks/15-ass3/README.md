# Random Cat Images

# Kullanılan Yapılar
- setTimeOut() 
- fetch()
- async - await
- .catch()
- Js DOM

# Yapılanlar
- Sayfa açıldıktan 3sn sonra **loadingDiv** ekrandan kaybolsun **containerDiv** görünür hale getirildi.
- Verilen api adresine fetch() ve .then() metodunu kullanarak istek atıldı. Ayrıca hatayı yakalamak içinde .catch()metodunu zincire eklendi. Gelen cevabı **cardDiv** içerisine yazdırıldı.
- Sayfa yüklendiğinde resimler ekrana getirildi. Aynı şekilde kullanıcı **btn** elementine tıkladığında da istek atıldı resimler yenilendi.
- Eğer istekte hata meydana gelirse **cardDiv** içerisinde [hata resmi](./img/error.gif) ekrana getirildi.
- Apiden response gelene kadar **cardDiv** içerisinde [laoding resmi](./img/loading.gif) ekrana getirildi.
- **tarih** elementininin innerText ine anlık olarak tarih ve saat bilgisini yazdırıldı.

## Oluşturulan Çıktı

![Cat](./img/ass3-comleted.gif)

## Demo

[Live](https://yavuzahmet1.github.io/fullstack-clarusway/frontend/homeworks/15-ass3)


