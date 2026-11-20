"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";
import { pushGtmEvent } from "@/lib/gtm";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  trackingEvent?: {
    event: string;
    contact_method?: "phone" | "whatsapp";
    placement?: string;
    label?: string;
  };
};

export function TrackedLink({ children, onClick, href, trackingEvent, ...props }: TrackedLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (trackingEvent) {
      pushGtmEvent({
        ...trackingEvent,
        href: typeof href === "string" ? href : undefined,
      });
    }

    onClick?.(event);
  };

  return (
    <a {...props} href={href} data-tracking-event={trackingEvent?.event} data-tracking-placement={trackingEvent?.placement} onClick={handleClick}>
      {children}
    </a>
  );
}
