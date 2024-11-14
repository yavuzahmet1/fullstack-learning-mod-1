// Kapsüllemenin Faydaları
// Güvenlik: sifre değişkeni, doğrudan erişime kapatılarak yalnızca yetkili fonksiyonlar aracılığıyla gösterilir.
// Veri Gizliliği: İstenmeyen değişikliklere karşı korunur.
// Kontrollü Erişim: Yalnızca belirlenen metodlar aracılığıyla erişim sağlanır.

const data = (function () {
    const password = "12345";

    return {
        passwordCall: function () {
            return password
        }
    }
});

console.log(data.passwordCall());

