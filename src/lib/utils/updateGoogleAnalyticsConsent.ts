export function updateGoogleAnalyticsConsent(granted: boolean) {
  if (typeof window === "undefined" || typeof window.gtag !== "function")
    return;

  window.gtag("consent", "update", {
    analytics_storage: granted ? "granted" : "denied",
    ad_storage: granted ? "granted" : "denied",
  });

  if (granted) {
    window.gtag("config", "G-3MH7YWV37D", {
      anonymize_ip: true,
    });
  }
}
