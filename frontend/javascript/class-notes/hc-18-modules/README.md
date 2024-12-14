##NEDEN FRONTEND GELİŞTİRMEDE NODEJS KULLANILIR?

- NodeJS, JS ile Backend Uygulamalarinin geliştirilebilmesi için yazildi.
- Bu sebeple, Chrome browser'ların JS motoru, PC ve Server'larda çalışabilecek şekilde implement edildi.
- Ancak NodeJS de çalışacak uygulamalarin UI tarafıyla ilgisi olmayacaği için DOM, window v.b kisimlar implement edilmedi.
- Browser'lar ES modüllerini desteklemeden önce NodeJS modul yapisini (CommonJS) destekliyordu.
- Dolayısıyla Frontend geliştiricileri,
  - NodeJS'in modül yapısından faydalanmak istediler.
  - Ayrıca, NodeJS üzerinde bulunan ve npm olarak adlandirilan paket yönetim sistemi de harici kütüphanlerin yönetimini kolaylaştırdığı için NodeJS üzerinde Frontend geliştirme fikri ağır bastı.
- Ancak, browser'larda bulunan bir çok API Nodejs tarafından desteklemediği için uygulama NodeJS üzerinde geliştirilse bile yine Browser'larda çalıştırılmalıydı.
- İşte bu ikisi (NodeJS ve Browser) arasindaki uyumu sağlamak için yani NodeJS üzerinde geliştirilen uygulamaların paketlenerek bir bundle (Bir çok harici kod ve modülün birleştirilmesi işlemi) oluşturulup Browser'lara sunulabilmesi için Webpack, Rollup, Parcel gibi bundler'lar kullanıldı.
- Günümüzde birçok FE kütüphanesi (React,Vue,Angular v.b) yukarıda bahsedilen şekilde frontend geliştirilmesine imkan sağlamış oluyor. Son yıllarda Vite gibi tool'lar yardımıyla FE geliştirmedeki tüm bu süreçler daha kolay bir şekilde yönetilebilmektedir.
  -Sonuç olarak, NodeJS her ne kadar Backend geliştirme için yazılmış olsa da bir çok avantajından dolayı FE geliştirmede de yaygın bir şekilde kullanılmaktadır.


Nodejs ortamında proje başlatma : npm init || npm init -y
Nodejs ortamında paket yükleme : npm install package_name || npm i package_name
Nodejs ortamında js dosyasını çalıştırma : node dosyaAdi.js