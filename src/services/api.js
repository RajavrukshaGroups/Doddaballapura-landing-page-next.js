/**
 * Centralized API configuration for Doddaballapura Landing Page.
 * 
 * To switch between local development and production:
 * - Option 1: Toggle `USE_LOCAL = true` for localhost:4000 or `false` for live server.
 * - Option 2: Provide `NEXT_PUBLIC_API_BASE_URL` in your environment (.env.local).
 */

const LIVE_BASE_URL = "https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes";
const LOCAL_BASE_URL = "http://localhost:4000/defenceWebsiteRoutes";

// In production (npm run build), defaults to false (LIVE_BASE_URL).
// In development (npm run dev), defaults to true (LOCAL_BASE_URL).
export const USE_LOCAL = process.env.NODE_ENV === "development";

/**
 * Resolves the active base URL:
 * 1. Explicit env variable NEXT_PUBLIC_API_BASE_URL (if provided)
 * 2. In production builds (NODE_ENV === 'production'), uses LIVE_BASE_URL
 * 3. In local development / localhost, uses LOCAL_BASE_URL
 */
export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_API_BASE_URL) {
    return process.env.NEXT_PUBLIC_API_BASE_URL;
  }
  if (process.env.NODE_ENV === "production") {
    return LIVE_BASE_URL;
  }
  if (typeof window !== "undefined") {
    const isLocalhost =
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1";
    if (isLocalhost) return LOCAL_BASE_URL;
  }
  if (USE_LOCAL) {
    return LOCAL_BASE_URL;
  }
  return LIVE_BASE_URL;
};

// Active Base URL
export const API_BASE_URL = getBaseUrl();

// Doddaballapura Website API Endpoints
export const API_ENDPOINTS = {
  // Contact Us Form Submission
  get CONTACT_US() {
    return `${getBaseUrl()}/doddaballapur-contactus`;
  },

  // Download Brochure
  get BROCHURE() {
    return `${getBaseUrl()}/doddaballapur-brochure`;
  },

  // Download Application Form
  get DOWNLOAD_APPLICATION() {
    return `${getBaseUrl()}/doddaballapur-download`;
  },
  get DOWNLOAD() {
    return `${getBaseUrl()}/doddaballapur-download`;
  },
};

export default API_ENDPOINTS;
