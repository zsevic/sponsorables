import ReactGA from "react-ga4";

export function trackEvent(category, label, action = "click") {
  if (process.env.NODE_ENV !== "development") {
    ReactGA.event({
      action,
      category,
      label,
    });
  }
}
