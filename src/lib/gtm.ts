"use client";

type GtmEventPayload = {
  event: string;
  contact_method?: "phone" | "whatsapp";
  placement?: string;
  label?: string;
  href?: string;
  form_name?: string;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function pushGtmEvent(payload: GtmEventPayload) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    if (localStorage.getItem("ith-measurement-consent-v1") !== "accepted") return;
  } catch { return; }

  // Never retain free-text WhatsApp message query parameters in the data layer.
  const safePayload = { ...payload };
  if (safePayload.href) {
    try {
      const destination = new URL(safePayload.href, window.location.origin);
      safePayload.href = destination.protocol === "tel:"
        ? "tel:"
        : `${destination.origin}${destination.pathname}`;
    } catch { delete safePayload.href; }
  }
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...safePayload,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}
