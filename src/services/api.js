/**
 * Centralized API configuration for Doddaballapura Landing Page.
 * 
 * To switch between local development and production:
 * - Option 1: Toggle `USE_LOCAL = true` for localhost:4000 or `false` for live server.
 * - Option 2: Provide `NEXT_PUBLIC_API_BASE_URL` in your environment (.env.local).
 */

const LIVE_BASE_URL = "https://adminpanel.defencehousingsociety.com/defenceWebsiteRoutes";
//const LOCAL_BASE_URL = "http://localhost:4000/defenceWebsiteRoutes";

// Set to false for Live Production, or true for Local Development (localhost:4000)
export const USE_LOCAL = false;

// Active Base URL (defaults to LIVE if USE_LOCAL is false or if env is not set)
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  (USE_LOCAL ? LOCAL_BASE_URL : LIVE_BASE_URL);

// Doddaballapura Website API Endpoints
export const API_ENDPOINTS = {
  // Contact Us Form Submission
  CONTACT_US: `${API_BASE_URL}/doddaballapur-contactus`,

  // Download Brochure
  BROCHURE: `${API_BASE_URL}/doddaballapur-brochure`,

  // Download Application Form
  DOWNLOAD_APPLICATION: `${API_BASE_URL}/doddaballapur-download`,
  DOWNLOAD: `${API_BASE_URL}/doddaballapur-download`,
};

export default API_ENDPOINTS;
