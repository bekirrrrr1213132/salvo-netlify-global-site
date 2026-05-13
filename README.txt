SALVO METIN2 TOPLULUGU - NETLIFY GLOBAL ADMIN SURUMU

Bu surumde admin panelden yaptigin degisiklikler localStorage'a degil Netlify Functions + Netlify Blobs tarafina kaydedilir.
Bu yuzden kaydedilen ayarlar siteye giren herkeste gorunur.

ONEMLI:
Bu paketi Netlify'ye sadece ZIP surukle-birak olarak yuklemek her zaman yeterli olmayabilir.
Functions ve @netlify/blobs dependency kurulumu icin en saglikli yontem:
1) Bu klasoru GitHub reposuna yukle.
2) Netlify > Add new site > Import from Git ile repo bagla.
3) Build command: npm install
4) Publish directory: .
5) Environment variables bolumune ADMIN_PASSWORD ekle.

ADMIN SIFRESI:
Netlify panelinden ayarla:
Site settings > Environment variables > Add variable
Key: ADMIN_PASSWORD
Value: kendi sifren

Istersen ekstra guvenlik icin ADMIN_SECRET de ekleyebilirsin.

ADMIN PANEL:
site-adresin.netlify.app/#admin

Notlar:
- Eski localStorage surumunde degisiklikler sadece kendi tarayicinda gorunurdu.
- Bu surumde Kaydet butonu Netlify tarafindaki ortak ayarlari gunceller.
- Buyuk video/GIF dosyalari Netlify Function limitine takilabilir. Buyuk dosyalarda URL kullanmak daha sagliklidir.
