import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ölçüm ve Çerezler", alternates: { canonical: "/olcum-ve-cerezler/" } };

export default function MeasurementInformation() {
  return <main style={{maxWidth:800,margin:"80px auto",padding:"0 24px",lineHeight:1.8}}>
    <a href="/">← iPad Tamir Hemen</a><h1>Ölçüm ve çerez tercihleri</h1>
    <p>iPad Tamir Hemen, Cep Kapında tarafından sunulan bağımsız bir onarım hizmetidir. İzin verdiğinizde ziyaretleri ve iletişim butonlarının kullanımını anlamak için Google Etiket Yöneticisi ve Google Analytics kullanırız. Reklam ölçümü, Google Ads bağlantısı üzerinden yapılabilir.</p>
    <p>Ölçüm verileri sayfa adresi, sayfa başlığı, cihaz ve tarayıcı bilgileri ile telefon / WhatsApp butonuna tıklanması ve butonun sayfadaki konumu gibi etkileşimleri içerebilir. WhatsApp için girdiğiniz serbest mesajı ve model numarası alanını Analytics olaylarına eklemeyiz. Butona tıklanması, mesaj gönderildiğini veya onarım yapıldığını göstermez.</p>
    <p>Ölçüm araçları yalnızca “Kabul et” seçiminizden sonra yüklenir. “Reddet” seçimiyle siteyi ve iletişim bağlantılarını kullanmaya devam edebilirsiniz. Seçiminiz bu tarayıcıda yerel olarak saklanır. Sayfanın altındaki “Çerez tercihleri” butonuyla tercihinizi değiştirebilirsiniz. Tercihi geri almak gelecekteki ölçümü durdurur; daha önce iletilen verileri kendiliğinden silmez.</p>
    <p>Google’ın veri kullanımı hakkında: <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">Google hizmetlerini kullanan sitelerden gelen bilgiler</a>.</p>
    <p>Sorularınız için <a href="mailto:cepkapinda@gmail.com">cepkapinda@gmail.com</a> adresine yazabilirsiniz.</p>
  </main>;
}
