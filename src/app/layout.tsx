import type { Metadata, Viewport } from "next";
import "./globals.css";
import "./ipad.css";

const url = "https://ipadtamirhemen.com.tr";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: "iPad Tamiri İstanbul | Cep Kapında", template: "%s | Cep Kapında" },
  description: "iPad, iPad Air, iPad Pro ve iPad mini için ekran, batarya ve şarj onarımı. İstanbul’da adresinizden teslim alma. Modelinizi seçin, WhatsApp’tan fiyat bilgisi alın.",
  applicationName: "Cep Kapında iPad Tamiri",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: [{url:"/favicon.ico"},{url:"/favicon-32.png",sizes:"32x32",type:"image/png"}], apple:"/apple-touch-icon.png" },
  openGraph: { type:"website",locale:"tr_TR",siteName:"Cep Kapında iPad Tamiri",title:"iPad Tamiri İstanbul | Cep Kapında",description:"Yeniden iPad. Ekran, batarya ve şarj onarımı için modelinizi seçin, onarımı birlikte planlayalım.",url:"/",images:[{url:"/images/blog-tablet.jpg",alt:"Cep Kapında iPad tamiri"}] },
  twitter:{card:"summary_large_image",title:"iPad Tamiri İstanbul | Cep Kapında",description:"iPad’iniz için yeni bir başlangıç.",images:["/images/blog-tablet.jpg"]},
};
export const viewport: Viewport = { width:"device-width",initialScale:1,themeColor:"#0766e8" };
export default function RootLayout({children}:{children:React.ReactNode}) {
 const schema={"@context":"https://schema.org","@type":"LocalBusiness","@id":`${url}/#business`,name:"Cep Kapında",url,telephone:"+905318576060",email:"cepkapinda@gmail.com",description:"İstanbul’da bağımsız iPad onarımı; ekran, batarya ve şarj sorunlarında teknik değerlendirme.",areaServed:{"@type":"City",name:"İstanbul"},address:{"@type":"PostalAddress",streetAddress:"Şişli Telefoncular Sokağı 178/A",addressLocality:"Şişli",addressRegion:"İstanbul",addressCountry:"TR"},sameAs:["https://cepkapinda.com","https://www.instagram.com/cepkapinda"]};
 return <html lang="tr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>{children}</body></html>;
}
