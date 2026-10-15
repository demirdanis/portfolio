# Blog Yazısı Ekleme Kılavuzu

Bu belge, Demir Danış'ın portfolio sitesine yeni bir blog yazısı eklemek için izlenmesi gereken adımları açıklar.

## Gerekli Bilgiler

Yeni bir blog yazısı eklemek için şu bilgilere ihtiyacınız vardır:
1. **Başlık** - Blog yazısının başlığı
2. **İçerik** - Blog yazısının tam metni
3. **Kapak Görseli** - `public/img/` dizininde olan görselin yolu (örn: `public/img/waterfootprint.webp`)
4. **Etiketler** - İlgili etiketler dizisi (örn: `["AI", "Environment", "Technology"]`)
5. **Okuma Süresi** - Tahmini okuma süresi (örn: `"9 min"`)
6. **Kısa Açıklama** - Blog listeleme sayfasında gösterilecek kısa açıklama

## Adımlar

### 1. Slug Oluşturma
Blog yazısı başlığından URL uyumlu bir slug oluşturun:
- Tüm harfleri küçük harfe çevirin
- Türkçe karakterleri İngilizce karşılıklarıyla değiştirin (ç→c, ı→i, ş→s, ğ→g, ö→o, ü→u)
- Noktalama işaretlerini kaldırın
- Boşlukları tire (-) ile değiştirin
- Örnek: `"Water Consumption in the Age of Superintelligence"` → `"water-consumption-age-superintelligence"`

### 2. ID Belirleme
Mevcut blog yazılarının en yüksek ID'sini bulun ve bir sonraki ID'yi kullanın. Portfolio servis dosyasında (`src/service/portfolio.service.ts`) en yüksek blog ID'sini bulmak için:
```bash
grep -n "id: [0-9]" src/service/portfolio.service.ts | grep "blogs:" -A20 | tail -1
```

### 3. İçerik Formatlama
Blog içeriğini uygun formata dönüştürün:
- Paragraflar için: `{ type: "paragraph", content: "metin" }`
- Başlıklar için: `{ type: "heading", content: "Başlık Metni" }`
- Listeler için: `{ type: "list", content: ["madde 1", "madde 2"] }`
- Kod blokları için: `{ type: "code", content: "kod" }`

### 4. Dosya Düzenleme
`src/service/portfolio.service.ts` dosyasını düzenleyin:

#### a) Blog Dizisini Bulun
```javascript
blogs: ([
  // mevcut blog yazıları...
] as BlogPost[]).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
```

#### b) Yeni Blog Yazısını Ekleyin
En son blog yazısından sonra, sıralama fonksiyonundan önce yeni blog yazısını ekleyin:
```javascript
{
  id: [SONRAKI_ID],
  slug: "[OLUŞTURULAN_SLUG]",
  title: "[BLOG_BAŞLIĞI]",
  shortDesc: "[KISA_AÇIKLAMA]",
  coverImage: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "[GÖRSEL_YOLU]",
  tags: ["ETIKET1", "ETIKET2", "ETIKET3"],
  date: "[TARIH]",
  readTime: "[OKUMA_SÜRESİ]",
  author: "Demir Danış",
  sections: [
    // formatlanmış içerik buraya
  ],
},
```

#### c) Sıralamayı Koruyun
Blog yazıları tarihe göre otomatik sıralanır (en yeniden en eskiye). Yeni eklenen blog, tarihine göre doğru pozisyonda görünecektir.

### 5. Tarih Formatı
Tarih formatı: `"Month DD, YYYY"` (örn: `"October 15, 2026"`)

### 6. Test Etme
Değişiklikleri test edin:
```bash
# TypeScript kontrolü
npx tsc --noEmit

# Geliştirme sunucusunu başlatma
npm run dev

# Build testi (opsiyonel)
npm run build
```

## Örnek Blog Yapısı
```javascript
{
  id: 8,
  slug: "water-consumption-superintelligence-illusion-individual-responsibility-real-solutions",
  title: "Water Consumption in the Age of Superintelligence: The Illusion of Individual Responsibility and the Real Solutions",
  shortDesc: "While AI companies advise users to write 'eco-friendly prompts,' the real environmental burden lies with inefficient infrastructure...",
  coverImage: (process.env.NEXT_PUBLIC_BASE_PATH || "") + "/img/waterfootprint.webp",
  tags: ["AI", "Environment", "Technology", "Ethics", "Sustainability"],
  date: "October 15, 2026",
  readTime: "9 min",
  author: "Demir Danış",
  sections: [
    {
      type: "paragraph",
      content: "It is an undeniable scientific fact that artificial intelligence (AI) technologies..."
    },
    {
      type: "heading",
      content: "The Anatomy of Blame-Shifting"
    },
    // ... diğer section'lar
  ],
}
```

## Dosya Yapısı
- Blog verileri: `src/service/portfolio.service.ts`
- Blog tipleri: `src/types/portfolio-data.types.ts`
- Blog detay sayfası: `src/app/blog/[slug]/page.tsx`
- Blog listeleme: `src/components/blog-section/blog-section.tsx`
- Blog görselleri: `public/img/`

## Notlar
1. Blog yazıları otomatik olarak tarihe göre sıralanır
2. `NEXT_PUBLIC_BASE_PATH` environment variable'ı kullanılıyorsa, görsel yolları otomatik olarak ayarlanır
3. Yeni eklenen blog hemen canlıya çıkar
4. İçerik formatlama önemlidir - her paragraf ve başlık ayrı section olmalıdır

## Sık Yapılan Hatalar
1. **Eksik virgül**: Blog nesneleri arasında virgül unutmak
2. **Yanlış ID**: Mevcut ID'leri kontrol etmeden yanlış ID kullanmak
3. **Format hatası**: İçerik section'larını doğru formatta yazmamak
4. **Slug hatası**: Özel karakterler veya büyük harf içeren slug kullanmak
5. **Sıralama fonksiyonunu silmek**: Blog dizisinden sonra `.sort(...)` fonksiyonunu silmek veya değiştirmek

## Hızlı Kontrol Listesi
- [ ] Slug oluşturuldu ve kontrol edildi
- [ ] Doğru ID belirlendi
- [ ] İçerik doğru formatlandı
- [ ] Tarih doğru formatta
- [ ] Görsel yolu doğru
- [ ] Etiketler dizi olarak eklendi
- [ ] Blog dizisinde virgüller doğru
- [ ] Sıralama fonksiyonu korundu
- [ ] TypeScript hatası yok
- [ ] Geliştirme sunucusunda test edildi