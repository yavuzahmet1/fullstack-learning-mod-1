# Random Cat Images

# Kullanılan Yapılar
- setTimeOut() 
- fetch()
- async - await
- .catch()
- Js DOM

# Beklenenler
- Sayfa açıldıktan 3sn sonra **loadingDiv** ekrandan kaybolsun **containerDiv** görünür hale getirildi.
- Verilen api adresine fetch() ve .then() metodunu kullanarak istek atıldı. Ayrıca hatayı yakalamak içinde .catch()metodunu zincire eklendi. Gelen cevabı **cardDiv** içerisine yazdırıldı.
- Sayfa yüklendiğinde resimler ekrana getirildi. Aynı şekilde kullanıcı **btn** elementine tıkladığında da istek atıldı resimler yenilendi.
- Eğer istekte hata meydana gelirse **cardDiv** içerisinde [hata resmi](./img/error.gif) ekrana getirildi.
- Apiden response gelene kadar **cardDiv** içerisinde [laoding resmi](./img/loading.gif) ekrana getirildi.
- **tarih** elementininin innerText ine anlık olarak tarih ve saat bilgisini yazdırıldı.

## Beklenen Çıktı

![Cat](./img/ass3-comleted.gif)

## Demo

[Live](https://anthonyins.github.io/async-ass1/)

## Not:
1. Kullanacağınız API adresi => "https://api.thecatapi.com/v1/images/search?limit=10"
2. Verilen templatei tercih etmeyip kendinize göre oluşturabilirsiniz.
3. Resimleri ekrana yansıtmak için bu yapıyı kullanabilirsiniz:
```html
<div class="col-12 col-sm-6 col-lg-4">
      <div style="height:200px;">
        <img src="" class="w-100 h-100" alt="...">
      </div>
</div>
