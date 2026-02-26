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

  // Initialize queue timestamp before script load
  window.gtag("js", new Date());

  // Handle onload
  script.onload = () => {
    window.gtagLoaded = true;
  };

  document.head.appendChild(script);
}
