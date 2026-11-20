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

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    ...payload,
    page_path: window.location.pathname,
    page_title: document.title,
  });
}
