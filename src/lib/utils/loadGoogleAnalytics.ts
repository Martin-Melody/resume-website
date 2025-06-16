declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    gtagLoaded: boolean;
  }
}

export function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;

  // Prevent duplicate script injection
  if (document.querySelector('script[src*="googletagmanager"]')) return;

  // Define dataLayer and gtag globally
  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: any[]) {
    window.dataLayer.push(args);
  };

  // Set default consent to denied before loading script
  window.gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    wait_for_update: 500,
  });

  // Create script element
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=G-3MH7YWV37D";

  // Handle onload
  script.onload = () => {
    window.gtagLoaded = true;
    console.log("✅ Google Analytics script loaded");

    // Check if user already granted consent
    const consent = localStorage.getItem("ga_consent");
    if (consent === "granted") {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
        ad_storage: "granted",
      });

      window.gtag("config", "G-3MH7YWV37D", {
        anonymize_ip: true,
      });
    }
  };

  document.head.appendChild(script);
}
