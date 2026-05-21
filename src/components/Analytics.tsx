import { useEffect } from "react";
import { useLocation } from "wouter";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

const GA_ID = "G-F0YKP4N76S";

export function trackPageView(path: string) {
  if (!window.gtag) return;
  window.gtag("config", GA_ID, { page_path: path });
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (!GA_ID || !window.gtag) return;
  window.gtag("event", eventName, params);
}

export function Analytics() {
  const [location] = useLocation();

  useEffect(() => {
    trackPageView(location);
  }, [location]);

  return null;
}
