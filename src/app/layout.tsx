import type { Metadata, Viewport } from "next";
import { MeasurementConsent } from "@/components/measurement-consent";
import "./globals.css";
import "./ipad.css";

const url = "https://ipadtamirhemen.com.tr";
export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: { default: "iPad Tamir Hemen | İstanbul iPad Tamiri", template: "%s | iPad Tamir Hemen" },
  description: "iPad, iPad Air, iPad Pro ve iPad mini için ekran, batarya ve şarj onarımı. İstanbul’da adresinizden teslim alma. Modelinizi seçin, WhatsApp’tan fiyat bilgisi alın.",
  applicationName: "iPad Tamir Hemen",
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  icons: { icon: [{url:"/favicon.ico?v=ith2"},{url:"/favicon-32.png?v=ith2",sizes:"32x32",type:"image/png"},{url:"/favicon-192.png?v=ith2",sizes:"192x192",type:"image/png"}], apple:"/apple-touch-icon.png?v=ith2" },
  openGraph: { type:"website",locale:"tr_TR",siteName:"iPad Tamir Hemen",title:"iPad Tamir Hemen | İstanbul iPad Tamiri",description:"Yeniden iPad. Ekran, batarya ve şarj onarımı için modelinizi seçin, onarımı birlikte planlayalım.",url:"/",images:[{url:"/images/blog-tablet.jpg",alt:"iPad Tamir Hemen"}] },
  twitter:{card:"summary_large_image",title:"iPad Tamir Hemen | İstanbul iPad Tamiri",description:"iPad’iniz için yeni bir başlangıç.",images:["/images/blog-tablet.jpg"]},
};
export const viewport: Viewport = { width:"device-width",initialScale:1,themeColor:"#0766e8" };
export default function RootLayout({children}:{children:React.ReactNode}) {
 const schema={"@context":"https://schema.org","@type":"LocalBusiness","@id":`${url}/#business`,name:"iPad Tamir Hemen",alternateName:"Cep Kapında iPad Onarımı",logo:`${url}/brand/ipad-tamir-hemen-logo.svg`,url,telephone:"+905318576060",email:"cepkapinda@gmail.com",description:"İstanbul’da bağımsız iPad onarımı; ekran, batarya ve şarj sorunlarında teknik değerlendirme.",areaServed:{"@type":"City",name:"İstanbul"},address:{"@type":"PostalAddress",streetAddress:"Şişli Telefoncular Sokağı 178/A",addressLocality:"Şişli",addressRegion:"İstanbul",addressCountry:"TR"},sameAs:["https://cepkapinda.com","https://www.instagram.com/cepkapinda"]};
 return <html lang="tr"><body><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,"\\u003c")}}/>{children}<MeasurementConsent/></body></html>;
}
