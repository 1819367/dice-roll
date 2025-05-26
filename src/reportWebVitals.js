import { getCLS, getFID, getLCP, getFCP, getTTFB } from 'web-vitals';

export default function reportWebVitals(onPerfEntry) {
    if (onPerfEntry && typeof onPerfEntry === 'function') {
        getCLS(onPerfEntry);   // Cumulative Layout Shift (visual stability)
        getFID(onPerfEntry);   // First Input Delay (interactivity)
        getLCP(onPerfEntry);   // Largest Contentful Paint (loading performance)
        getFCP(onPerfEntry);   // First Contentful Paint (time to first content)
        getTTFB(onPerfEntry);  // Time to First Byte (server response)
  }
}