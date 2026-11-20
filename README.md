# Cep Kapında — iPad Tamir Hemen

https://ipadtamirhemen.com.tr

Next.js ve React ile hazırlanmış bağımsız iPad onarım sitesi. Mobil uyumlu, kaydırmayla ilerleyen iPad onarım animasyonu ve WhatsApp fiyat talebi içerir.

## Geliştirme

```sh
npm ci
npm run dev
```

## Yayın

```sh
npm run build
```

Derleme `out/` ve GitHub Pages için `docs/` klasörünü oluşturur. `docs/` değişikliklerini kaynakla birlikte commit edip `main` dalına gönderin. GitHub Pages kaynağı: `main` / `docs`.

Alan adı `docs/CNAME` içinde tanımlıdır. Üretimde arama motoru indeksleme açıktır. İletişim bilgileri `src/config/site.ts` içindedir.
