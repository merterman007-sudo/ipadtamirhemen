"use client";

import { useEffect, useState } from "react";

const storageKey = "ith-measurement-consent-v1";
const containerId = "GTM-MMQPTFDR";

function startMeasurement() {
  if (document.getElementById("ith-gtm")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "ith-gtm";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.appendChild(script);
}

export function MeasurementConsent() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    let choice: string | null = null;
    try { choice = localStorage.getItem(storageKey); } catch {}
    if (choice === "accepted") startMeasurement();
    else if (choice !== "rejected") setOpen(true);
  }, []);

  function choose(accepted: boolean) {
    try { localStorage.setItem(storageKey, accepted ? "accepted" : "rejected"); } catch {}
    setOpen(false);
    if (accepted) startMeasurement();
    else if (document.getElementById("ith-gtm")) window.location.reload();
  }

  return <>
    <button className="ith-cookie-settings" type="button" onClick={() => setOpen(true)}>Çerez tercihleri</button>
    {open && <section className="ith-consent" aria-label="Çerez tercihleri">
      <div><strong>Çerez tercihleriniz</strong><p>Ziyaretleri ve telefon / WhatsApp butonu tıklamalarını Google Analytics ile ölçmek için izninizi istiyoruz. Mesaj içeriğinizi ölçüm araçlarına göndermeyiz. <a href="/olcum-ve-cerezler/">Detaylar</a></p></div>
      <div className="ith-consent-actions"><button type="button" onClick={() => choose(false)}>Reddet</button><button type="button" onClick={() => choose(true)}>Kabul et</button></div>
    </section>}
  </>;
}
