"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import {
  FaPlane,
  FaRoad,
  FaIndustry,
  FaBuilding,
  FaShieldAlt,
  FaFileAlt,
  FaCheckCircle,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaCopy,
  FaDownload,
  FaShareAlt,
  FaCalendarAlt,
  FaClock,
  FaUserAlt,
  FaArrowRight,
  FaCompass,
  FaChartLine,
  FaHome,
  FaHandHoldingUsd,
  FaCheck,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import BannerImg from "../../assets/Doddaballapur-page-banner-img.jpeg";
import logo from "../../assets/logo.png";
import "./BlogPost.css";

const DUE_DILIGENCE_CHECKLIST = [
  { id: "title", label: "Clear and marketable land title", category: "Legal" },
  { id: "encumbrance", label: "Encumbrance records (EC - 15 to 30 years verification)", category: "Legal" },
  { id: "layout", label: "Approved layout plans (BIAAPA / BMRDA / DPA approval)", category: "Approvals" },
  { id: "rera", label: "Applicable RERA registration, where required", category: "Compliance" },
  { id: "conversion", label: "Conversion and land-use permissions (DC conversion order)", category: "Legal" },
  { id: "track_record", label: "Developer track record, past deliveries and society credentials", category: "Builder" },
  { id: "road_access", label: "Road access, width, and connection to arterial highways", category: "Infrastructure" },
  { id: "utilities", label: "Water and electricity availability (overhead tank & transformers)", category: "Infrastructure" },
  { id: "drainage", label: "Drainage and underground sewage arrangements (STP & rainwater)", category: "Infrastructure" },
  { id: "tax_records", label: "Property tax and latest registration documentation / Khata", category: "Documentation" },
  { id: "distance", label: "Actual on-ground distance to major roads and employment hubs", category: "Location" },
  { id: "surroundings", label: "Development status, social infrastructure and surrounding growth", category: "Location" },
];

const COMPARISON_DATA = [
  {
    parameter: "Entry Price Point",
    doddaballapur: "Accessible, budget-friendly entry per sq.ft. allowing early market participation.",
    established: "High land costs, saturated pricing with premium capital requirements.",
  },
  {
    parameter: "Plot Availability & Sizes",
    doddaballapur: "Generous layout configurations (30x40, 30x50, 40x60) with freedom to customise.",
    established: "Scarce land parcels, mostly pre-built high-density apartments with fixed layouts.",
  },
  {
    parameter: "Appreciation Runway",
    doddaballapur: "High upside driven by upcoming STRR, Foxconn SEZ, and airport expansion corridors.",
    established: "Matured appreciation with stabilized growth rates.",
  },
  {
    parameter: "Living Environment",
    doddaballapur: "Serene, low-density green surroundings with planned gated community infrastructure.",
    established: "Congested traffic, dense urban pockets and limited open recreational spaces.",
  },
  {
    parameter: "Infrastructure Horizon",
    doddaballapur: "Fast-developing roads, satellite ring road integration, and industrial parks.",
    established: "Fully mature social ecosystems with higher ongoing maintenance costs.",
  },
];

export default function BlogPost() {
  const [checkedItems, setCheckedItems] = useState({});
  const [consultationData, setConsultationData] = useState({
    name: "",
    phone: "",
    email: "",
    plotSize: "30x40 (1200 sq.ft)",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  // Toggle checklist item
  const toggleCheck = (id) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;

  // Handle consultation form submission
  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    if (!consultationData.name.trim() || !consultationData.phone.trim()) {
      toast.error("Please enter your name and phone number");
      return;
    }
    if (!/^\d{10}$/.test(consultationData.phone.replace(/\D/g, ""))) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }

    setSubmitting(true);
    // Emulate smooth submit and give feedback
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you! Our property advisor will connect with you shortly.");
      const whatsappText = encodeURIComponent(
        `Hello Defence Habitat Team,\nI read your blog "Why Doddaballapur Is Emerging as a Residential Destination" and I would like to inquire about plots.\n\nName: ${consultationData.name}\nPhone: ${consultationData.phone}\nPlot Size: ${consultationData.plotSize}`
      );
      window.open(
        `https://api.whatsapp.com/send/?phone=918884413931&text=${whatsappText}&app_absent=0`,
        "_blank"
      );
      setConsultationData({
        name: "",
        phone: "",
        email: "",
        plotSize: "30x40 (1200 sq.ft)",
        message: "",
      });
    }, 600);
  };

  // Copy article link to clipboard
  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Article link copied to clipboard!");
    }
  };

  // Share to WhatsApp
  const handleShareWhatsApp = () => {
    if (typeof window !== "undefined") {
      const shareUrl = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(
        "Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore - Read this comprehensive guide:"
      );
      window.open(`https://api.whatsapp.com/send?text=${text}%20${shareUrl}`, "_blank");
    }
  };

  // Share to Twitter/X
  const handleShareTwitter = () => {
    if (typeof window !== "undefined") {
      const shareUrl = encodeURIComponent(window.location.href);
      const text = encodeURIComponent(
        "Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore #RealEstate #NorthBangalore"
      );
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${shareUrl}`, "_blank");
    }
  };

  return (
    <div className="blog-post-page">
      <Toaster position="top-right" />

      {/* ===== 1. HERO BANNER ===== */}
      <section
        className="blog-hero-banner"
        style={{
          backgroundImage: `url(${BannerImg?.src || BannerImg})`,
        }}
      >
        <div className="blog-hero-content">
          {/* Breadcrumb navigation */}
          <nav className="blog-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blogs">Blogs</Link>
            <span>/</span>
            <span className="text-amber-300">Doddaballapur Corridor Guide</span>
          </nav>

          {/* Category Pill */}
          <div className="blog-category-badge">
            <FaCompass className="text-amber-400" />
            <span>North Bangalore Real Estate Guide</span>
          </div>

          {/* Main Title */}
          <h1 className="blog-hero-title">
            Why Doddaballapur Is Emerging as a Residential Destination in North Bangalore
          </h1>

          {/* Subtitle / summary */}
          <p className="text-slate-200 text-sm md:text-lg max-w-3xl mx-auto leading-relaxed mb-6 font-light">
            An in-depth analysis of connectivity, infrastructure upgrades, gated communities,
            and the surging demand for plotted developments along the northern growth corridor.
          </p>

          {/* Metadata bar */}
          <div className="blog-hero-meta">
            <span className="blog-meta-item">
              <FaUserAlt className="text-amber-400 text-xs" />
              <span>Defence Habitat Housing Society</span>
            </span>
            <span className="blog-meta-dot">•</span>
            <span className="blog-meta-item">
              <FaCalendarAlt className="text-amber-400 text-xs" />
              <span>Published: Updated 2026</span>
            </span>
            <span className="blog-meta-dot">•</span>
            <span className="blog-meta-item">
              <FaClock className="text-amber-400 text-xs" />
              <span>6 min read</span>
            </span>
            <span className="blog-meta-dot">•</span>
            <button
              onClick={handleCopyLink}
              className="blog-meta-item text-amber-300 hover:text-white transition-colors bg-white/10 px-3 py-1 rounded-full text-xs border border-white/20 cursor-pointer"
              title="Copy Link"
            >
              <FaCopy className="mr-1" />
              <span>Share Article</span>
            </button>
          </div>
        </div>
      </section>

      {/* ===== 2. KEY TAKEAWAYS HIGHLIGHT STRIP ===== */}
      <section className="blog-highlights-strip py-4 px-4">
        <Container className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="blog-highlight-card rounded-lg">
              <div className="blog-highlight-icon-wrap">
                <FaRoad />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Corridor Expansion
                </h4>
                <p className="text-sm font-bold text-[#1e3a60] m-0">
                  Direct SH-09 &amp; STRR Highway Links
                </p>
              </div>
            </div>

            <div className="blog-highlight-card rounded-lg">
              <div className="blog-highlight-icon-wrap">
                <FaPlane />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Airport Proximity
                </h4>
                <p className="text-sm font-bold text-[#1e3a60] m-0">
                  Easy Access to Kempegowda Intl Airport
                </p>
              </div>
            </div>

            <div className="blog-highlight-card rounded-lg">
              <div className="blog-highlight-icon-wrap">
                <FaShieldAlt />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Gated Security
                </h4>
                <p className="text-sm font-bold text-[#1e3a60] m-0">
                  Planned Plotted Community Layouts
                </p>
              </div>
            </div>

            <div className="blog-highlight-card rounded-lg border-r-0">
              <div className="blog-highlight-icon-wrap">
                <FaHandHoldingUsd />
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-1">
                  Accessible Entry
                </h4>
                <p className="text-sm font-bold text-[#1e3a60] m-0">
                  High-Growth Budget &amp; Long-Term Value
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ===== 3. MAIN ARTICLE & SIDEBAR SECTION ===== */}
      <section className="py-12 px-4 bg-[#f8fafc]">
        <Container className="max-w-6xl mx-auto">
          <Row className="g-5">
            {/* LEFT / MAIN ARTICLE COLUMN (Col 8) */}
            <Col lg={8} className="blog-article-col">
              <article className="blog-article-content bg-white p-6 md:p-10 rounded-2xl border border-slate-200 shadow-sm">
                
                {/* Introduction Paragraphs */}
                <div id="overview">
                  <p className="text-lg leading-relaxed text-slate-700 font-normal">
                    North Bangalore has steadily evolved from an overlooked peripheral zone into one of the 
                    city’s most closely watched residential corridors. While established areas often come with 
                    higher land costs and limited availability, emerging locations are attracting buyers who want 
                    to enter the market earlier and plan for the future.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    Among these locations, <strong>Doddaballapur</strong> is gaining attention as a potential residential 
                    destination, particularly for homebuyers, land investors, and families looking beyond the 
                    city’s crowded urban pockets.
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    So, what is driving this interest? The answer lies in a combination of connectivity, expanding 
                    infrastructure, employment potential, lifestyle preferences, and the growing demand for 
                    plotted developments.
                  </p>
                </div>

                {/* Interactive Table of Contents */}
                <div className="blog-toc-box">
                  <div className="blog-toc-title">
                    <FaCompass className="text-[#d97706]" />
                    <span>Table of Contents</span>
                  </div>
                  <ul className="blog-toc-list">
                    <li className="blog-toc-item">
                      <a href="#peripheral-to-corridor">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>1. Doddaballapur: From Peripheral Town to Corridor</span>
                      </a>
                    </li>
                    <li className="blog-toc-item">
                      <a href="#connectivity">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>2. Connectivity Putting North Bangalore on Radar</span>
                      </a>
                    </li>
                    <li className="blog-toc-item">
                      <a href="#why-plots-attractive">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>3. Why Plots Are Attractive to Modern Buyers</span>
                      </a>
                    </li>
                    <li className="blog-toc-item">
                      <a href="#gated-communities">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>4. The Rise of Gated Community Plotted Developments</span>
                      </a>
                    </li>
                    <li className="blog-toc-item">
                      <a href="#accessible-entry">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>5. A More Accessible Entry Point into North Bangalore</span>
                      </a>
                    </li>
                    <li className="blog-toc-item">
                      <a href="#employment-infrastructure">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>6. Employment &amp; Infrastructure Driving Demand</span>
                      </a>
                    </li>
                    <li className="blog-toc-item">
                      <a href="#doddaballapur-vs-established">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>7. Doddaballapur vs. Established Locations</span>
                      </a>
                    </li>
                    <li className="blog-toc-item">
                      <a href="#buyer-checklist">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>8. Due Diligence Checklist for Buyers</span>
                      </a>
                    </li>
                    <li className="blog-toc-item">
                      <a href="#bigger-picture">
                        <FaArrowRight className="text-xs text-[#d97706]" />
                        <span>9. The Bigger Picture: Next Residential Chapter</span>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* SECTION 1 */}
                <section id="peripheral-to-corridor">
                  <h2 className="blog-section-heading">
                    Doddaballapur: From Peripheral Town to Emerging Residential Corridor
                  </h2>
                  <p>
                    Doddaballapur has traditionally been known for its industrial and semi-urban character. Its 
                    location in North Bangalore, however, gives it an important advantage as the city continues 
                    expanding northward.
                  </p>
                  <p>
                    As Bangalore’s urban footprint grows, areas surrounding major transportation and 
                    employment corridors naturally attract residential development. Doddaballapur is 
                    positioned within this larger growth story, making it increasingly relevant to people 
                    searching for{" "}
                    <Link href="/" className="blog-keyword-link">
                      Plots for sale in Doddaballapur
                    </Link>
                    .
                  </p>
                  <p>
                    Unlike highly developed city neighbourhoods where land parcels can be scarce, plotted 
                    developments provide buyers with an opportunity to purchase land and potentially build 
                    according to their future requirements.
                  </p>
                  
                  {/* Quote Highlight */}
                  <div className="blog-quote-box navy">
                    <p className="blog-quote-text">
                      &ldquo;For families, this can mean planning a customised home. For long-term investors, a plot can 
                      represent an asset that offers flexibility compared with a ready-built property.&rdquo;
                    </p>
                  </div>
                </section>

                {/* SECTION 2 */}
                <section id="connectivity">
                  <h2 className="blog-section-heading">
                    Connectivity Is Putting North Bangalore on the Radar
                  </h2>
                  <p>
                    One of the biggest factors behind North Bangalore’s residential expansion is improving 
                    connectivity.
                  </p>
                  <p>
                    Doddaballapur benefits from its connection to the broader northern Bengaluru region and 
                    access toward important employment, industrial, airport and transportation corridors. The 
                    proximity of the wider region to Kempegowda International Airport has also contributed to 
                    increasing interest in North Bangalore real estate.
                  </p>
                  <p>
                    For people evaluating{" "}
                    <Link href="/" className="blog-keyword-link">
                      Plots for sale in North Bangalore
                    </Link>
                    , connectivity matters because residential growth rarely happens in isolation. Better roads, 
                    transportation links, commercial development and employment centres can collectively 
                    influence how a locality develops over time.
                  </p>
                  <p>
                    This is one reason buyers are increasingly looking beyond established neighbourhoods and 
                    exploring emerging plotted communities.
                  </p>

                  {/* Connectivity Callout Feature */}
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 my-6">
                    <h3 className="text-base font-bold text-[#1e3a60] flex items-center gap-2 mb-3">
                      <FaRoad className="text-amber-600" />
                      <span>Key Connectivity Highlights for Doddaballapur:</span>
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-600 shrink-0" />
                        <span>State Highway 9 (SH-09) 4-lane access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-600 shrink-0" />
                        <span>Satellite Township Ring Road (STRR) corridor</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-600 shrink-0" />
                        <span>Direct signal-free routes to Airport</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaCheckCircle className="text-emerald-600 shrink-0" />
                        <span>Upcoming Suburban Rail &amp; Metro connectivity</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* SECTION 3 */}
                <section id="why-plots-attractive">
                  <h2 className="blog-section-heading">
                    Why Plots Are Becoming Attractive to Modern Buyers
                  </h2>
                  <p>
                    The idea of buying land has changed considerably.
                  </p>
                  <p>
                    Earlier, many buyers considered plots primarily as investment assets. Today, they are 
                    increasingly being viewed as lifestyle assets as well.
                  </p>
                  <p>
                    A buyer may purchase a plot today and construct a home later, depending on finances, 
                    family requirements and future plans. This flexibility makes plotted developments 
                    particularly interesting for younger families and professionals who may not want to commit 
                    immediately to a completed apartment.
                  </p>
                  <p>
                    The demand for{" "}
                    <Link href="/" className="blog-keyword-link">
                      Residential plots for sale in Doddaballapur
                    </Link>{" "}
                    reflects this shift toward flexible homeownership.
                  </p>
                  <p>
                    Another attraction is the possibility of choosing the size, design and construction timeline of 
                    a future home. Instead of adapting to a pre-designed apartment layout, plot owners can 
                    potentially create a residence suited to their preferences, subject to applicable approvals 
                    and regulations.
                  </p>
                </section>

                {/* SECTION 4 */}
                <section id="gated-communities">
                  <h2 className="blog-section-heading">
                    The Rise of Gated Community Plotted Developments
                  </h2>
                  <p>
                    A major trend transforming the plotted-property segment is the rise of gated communities.
                  </p>
                  <p>
                    Traditional land purchases can sometimes leave buyers concerned about infrastructure, 
                    security, roads, drainage and community planning. Gated plotted developments aim to 
                    address several of these considerations by bringing multiple residential plots together 
                    within a planned environment.
                  </p>
                  <p>
                    This is contributing to interest in{" "}
                    <Link href="/" className="blog-keyword-link">
                      Gated community plots for sale in Doddaballapur
                    </Link>
                    .
                  </p>
                  <p>
                    Such developments may offer features such as internal roads, landscaped areas, security 
                    arrangements, utilities and common amenities, depending on the individual project.
                  </p>
                  <p>
                    For buyers, the appeal is straightforward: own a piece of land while being part of a planned 
                    residential community.
                  </p>

                  <div className="blog-quote-box gold">
                    <p className="blog-quote-text">
                      &ldquo;However, buyers should always verify project approvals, land title, layout permissions, 
                      developer credentials, infrastructure commitments and applicable RERA requirements 
                      before making a purchase.&rdquo;
                    </p>
                  </div>
                </section>

                {/* SECTION 5 */}
                <section id="accessible-entry">
                  <h2 className="blog-section-heading">
                    A More Accessible Entry Point into North Bangalore
                  </h2>
                  <p>
                    Property prices in established Bangalore neighbourhoods can make independent 
                    homeownership challenging for many first-time buyers.
                  </p>
                  <p>
                    This is where emerging locations can become relevant.
                  </p>
                  <p>
                    Compared with mature urban zones, developing corridors may offer a wider range of land 
                    options and plot configurations. Consequently, buyers specifically searching for{" "}
                    <Link href="/" className="blog-keyword-link">
                      Budget plots for sale in North Bangalore
                    </Link>{" "}
                    are increasingly exploring locations outside the city’s traditional residential hotspots.
                  </p>
                  <p>
                    &ldquo;Budget&rdquo; is relative, of course. Plot prices vary significantly depending on location, 
                    development, dimensions, approvals, infrastructure and proximity to major roads.
                  </p>
                  <p>
                    Therefore, instead of focusing only on the lowest advertised price, buyers should calculate 
                    the total acquisition cost, including registration, development charges, taxes and 
                    construction requirements.
                  </p>
                </section>

                {/* SECTION 6 */}
                <section id="employment-infrastructure">
                  <h2 className="blog-section-heading">
                    Employment and Infrastructure Could Support Long-Term Residential Demand
                  </h2>
                  <p>
                    Residential destinations generally become stronger when employment and infrastructure 
                    grow around them.
                  </p>
                  <p>
                    North Bangalore has attracted attention because of its connection to the airport, industrial 
                    areas, logistics activity, technology-driven development and expanding commercial 
                    infrastructure.
                  </p>
                  <p>
                    Doddaballapur’s industrial ecosystem is another factor worth considering when assessing its 
                    residential potential.
                  </p>
                  <p>
                    As employment opportunities expand across a broader region, demand for housing can 
                    gradually spread beyond traditional city centres. People may increasingly consider living 
                    farther from central Bangalore if connectivity, social infrastructure and housing affordability 
                    align with their requirements.
                  </p>
                  <p>
                    That makes{" "}
                    <Link href="/" className="blog-keyword-link">
                      Residential Plots for sale in North Bangalore
                    </Link>{" "}
                    an option worth researching for buyers with a longer investment horizon.
                  </p>
                </section>

                {/* SECTION 7: COMPARISON TABLE */}
                <section id="doddaballapur-vs-established">
                  <h2 className="blog-section-heading">
                    Doddaballapur vs. Established Bangalore Locations
                  </h2>
                  <p>
                    The difference between buying in an established locality and an emerging corridor largely 
                    comes down to priorities.
                  </p>
                  <p>
                    Established neighbourhoods typically offer mature social infrastructure, established retail 
                    ecosystems and existing residential communities. Emerging locations, meanwhile, may 
                    provide larger development opportunities and greater scope for future infrastructure 
                    expansion.
                  </p>
                  <p>
                    Doddaballapur belongs to the latter category.
                  </p>
                  <p>
                    That means buyers should approach the market with realistic expectations. Development 
                    can take time, and future infrastructure announcements should not automatically be 
                    treated as guaranteed increases in property value.
                  </p>
                  <p>
                    The smarter approach is to examine what exists today, what is officially approved or under 
                    development, and whether the location matches your intended use.
                  </p>

                  {/* Comparison Matrix Component */}
                  <div className="blog-comparison-container">
                    <div className="blog-comparison-header">
                      <div className="blog-comparison-col-left">
                        Doddaballapur (Emerging Corridor)
                      </div>
                      <div className="blog-comparison-col-right">
                        Established Bangalore Locations
                      </div>
                    </div>
                    {COMPARISON_DATA.map((item, idx) => (
                      <div key={idx} className="blog-comparison-row">
                        <div className="blog-comparison-cell highlight">
                          <strong className="block text-xs uppercase tracking-wider text-amber-700 font-bold mb-1">
                            {item.parameter}
                          </strong>
                          <span className="text-slate-800">{item.doddaballapur}</span>
                        </div>
                        <div className="blog-comparison-cell">
                          <strong className="block text-xs uppercase tracking-wider text-slate-500 font-bold mb-1 sm:hidden">
                            {item.parameter} (Established)
                          </strong>
                          <span className="text-slate-600">{item.established}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* SECTION 8: DUE DILIGENCE CHECKLIST */}
                <section id="buyer-checklist">
                  <h2 className="blog-section-heading">
                    What Should Buyers Check Before Purchasing a Plot?
                  </h2>
                  <p>
                    The excitement surrounding North Bangalore should not replace due diligence.
                  </p>
                  <p>
                    Before purchasing{" "}
                    <Link href="/" className="blog-keyword-link">
                      Plots for sale in Doddaballapur
                    </Link>
                    , prospective buyers should investigate:
                  </p>

                  {/* Interactive Due Diligence Checklist Card */}
                  <div className="blog-checklist-container">
                    <div className="blog-checklist-header">
                      <div>
                        <h3 className="text-lg font-bold text-[#1e3a60] m-0">
                          Buyer Due Diligence Checklist
                        </h3>
                        <p className="text-xs text-slate-500 m-0 mt-1">
                          Click each item as you verify documents or conduct your site inspection
                        </p>
                      </div>
                      <div className="text-xs font-bold px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full">
                        {checkedCount} of {DUE_DILIGENCE_CHECKLIST.length} Verified
                      </div>
                    </div>

                    <div className="space-y-2 mt-4">
                      {DUE_DILIGENCE_CHECKLIST.map((item) => {
                        const isChecked = !!checkedItems[item.id];
                        return (
                          <div
                            key={item.id}
                            className={`blog-checklist-item ${isChecked ? "checked" : ""}`}
                            onClick={() => toggleCheck(item.id)}
                            role="checkbox"
                            aria-checked={isChecked}
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") {
                                e.preventDefault();
                                toggleCheck(item.id);
                              }
                            }}
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => toggleCheck(item.id)}
                              className="blog-checklist-checkbox"
                              onClick={(e) => e.stopPropagation()}
                            />
                            <div className="flex-1">
                              <span
                                className={`text-sm ${
                                  isChecked
                                    ? "text-emerald-900 font-semibold line-through opacity-85"
                                    : "text-slate-800"
                                }`}
                              >
                                {item.label}
                              </span>
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200/60 text-slate-600">
                              {item.category}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <p className="mt-4">
                    A site visit is equally important. Online advertisements can provide an initial idea, but 
                    physically examining the plot and surrounding neighbourhood can reveal details that 
                    photographs and brochures cannot.
                  </p>
                </section>

                {/* SECTION 9: THE BIGGER PICTURE */}
                <section id="bigger-picture">
                  <h2 className="blog-section-heading">
                    The Bigger Picture: North Bangalore&apos;s Next Residential Chapter
                  </h2>
                  <p>
                    Doddaballapur’s growing visibility is part of a much larger transformation taking place across 
                    North Bangalore.
                  </p>
                  <p>
                    As Bengaluru expands, residential development is gradually moving beyond traditional city 
                    boundaries. Buyers are looking for a combination of affordability, connectivity, open 
                    surroundings and future potential—and plotted developments can address several of these 
                    preferences.
                  </p>
                  <p>
                    Whether someone is searching for{" "}
                    <Link href="/" className="blog-keyword-link">
                      Plots for sale in Doddaballapur
                    </Link>
                    ,{" "}
                    <Link href="/" className="blog-keyword-link">
                      Residential plots for sale in Doddaballapur
                    </Link>
                    , or{" "}
                    <Link href="/" className="blog-keyword-link">
                      Gated community plots for sale in Doddaballapur
                    </Link>
                    , the key is to look beyond the headline price.
                  </p>
                  <p>
                    Likewise, those comparing{" "}
                    <Link href="/" className="blog-keyword-link">
                      Plots for sale in North Bangalore
                    </Link>{" "}
                    and{" "}
                    <Link href="/" className="blog-keyword-link">
                      Residential Plots for sale in North Bangalore
                    </Link>{" "}
                    should evaluate location fundamentals, infrastructure, legal documentation and their own 
                    investment timeline.
                  </p>
                  <p>
                    Doddaballapur may not have the urban density of established Bangalore neighbourhoods—
                    and that is precisely what makes its residential story interesting.
                  </p>
                  <p className="font-semibold text-slate-900">
                    For buyers willing to research an emerging corridor rather than simply follow established 
                    property hotspots, Doddaballapur represents a location worth keeping on the North 
                    Bangalore real estate map.
                  </p>
                </section>

                {/* Society Author Trust Box */}
                <div className="blog-author-box">
                  <img
                    src={logo?.src || logo}
                    alt="Defence Habitat Logo"
                    className="blog-author-logo"
                  />
                  <div>
                    <h3 className="text-base font-extrabold text-[#1e3a60] m-0 mb-1">
                      Defence Habitat Housing Co-Operative Society Ltd.
                    </h3>
                    <p className="text-xs text-amber-700 font-semibold mb-2">
                      Reg. No: HSG-3/64/HHS/53744 • Registered under Karnataka Co-Operative Society Act
                    </p>
                    <p className="text-xs text-slate-600 m-0 leading-relaxed">
                      Committed to providing transparent, clear-titled, and high-quality plotted 
                      communities across North Bangalore. Our team offers direct guidance, project documentation 
                      assistance, and transparent site visits for prospective members and homebuyers.
                    </p>
                  </div>
                </div>

                {/* Social Share Bar */}
                <div className="border-t border-slate-200 pt-6 mt-6 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <FaShareAlt className="text-amber-600" />
                    <span>Share this Guide:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleShareWhatsApp}
                      className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                      title="Share on WhatsApp"
                      aria-label="Share on WhatsApp"
                    >
                      <FaWhatsapp size={16} />
                    </button>
                    <button
                      onClick={handleShareTwitter}
                      className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                      title="Share on X (Twitter)"
                      aria-label="Share on X"
                    >
                      <FaXTwitter size={15} />
                    </button>
                    <button
                      onClick={handleCopyLink}
                      className="w-9 h-9 rounded-full bg-[#24457b] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
                      title="Copy link"
                      aria-label="Copy Link"
                    >
                      <FaCopy size={14} />
                    </button>
                  </div>
                </div>

              </article>
            </Col>

            {/* RIGHT / SIDEBAR COLUMN (Col 4) */}
            <Col lg={4} className="blog-sidebar-col">
              <aside className="sticky top-28 space-y-6">

                {/* Widget 1: Quick Plot Consultation Form */}
                <div className="blog-sidebar-widget">
                  <h3 className="blog-sidebar-widget-title">
                    Inquire About Plots
                  </h3>
                  <p className="text-xs text-slate-500 mb-4">
                    Looking for approved residential plots in Doddaballapur? Connect with our housing society advisor.
                  </p>

                  <form onSubmit={handleConsultationSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your full name"
                        value={consultationData.name}
                        onChange={(e) =>
                          setConsultationData({ ...consultationData, name: e.target.value })
                        }
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#24457b] bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={consultationData.phone}
                        onChange={(e) =>
                          setConsultationData({
                            ...consultationData,
                            phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                          })
                        }
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#24457b] bg-slate-50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Plot Size Preference
                      </label>
                      <select
                        value={consultationData.plotSize}
                        onChange={(e) =>
                          setConsultationData({ ...consultationData, plotSize: e.target.value })
                        }
                        className="w-full text-xs px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:border-[#24457b] bg-slate-50"
                      >
                        <option value="30x40 (1200 sq.ft)">30 x 40 (1200 sq.ft)</option>
                        <option value="30x50 (1500 sq.ft)">30 x 50 (1500 sq.ft)</option>
                        <option value="40x60 (2400 sq.ft)">40 x 60 (2400 sq.ft)</option>
                        <option value="Custom / Larger Site">Custom / Larger Dimension</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-2.5 px-4 bg-[#24457b] hover:bg-[#1a345e] text-white text-xs font-bold rounded-md transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer mt-2"
                    >
                      {submitting ? (
                        <span>Connecting...</span>
                      ) : (
                        <>
                          <span>Request Consultation</span>
                          <FaArrowRight size={11} />
                        </>
                      )}
                    </button>
                  </form>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-[11px] text-slate-500">
                    <FaShieldAlt className="text-emerald-600" />
                    <span>100% Privacy • No Spam Guarantee</span>
                  </div>
                </div>

                {/* Widget 2: Download Brochure */}
                <div className="blog-sidebar-widget bg-gradient-to-br from-[#0f3460] to-[#1e3a60] text-white border-0">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-amber-400">
                      <FaDownload />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white m-0">Project Brochure</h4>
                      <span className="text-[11px] text-slate-300">Complete Layout Plan &amp; Specs</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-200 mb-4 leading-relaxed">
                    Download the official layout brochure including dimension plans, price details, and site amenities.
                  </p>
                  <Link
                    href="/download/brochure"
                    className="block w-full py-2.5 px-4 text-center text-xs font-bold rounded-md bg-[#d97706] hover:bg-amber-600 text-white transition-colors no-underline shadow"
                  >
                    Download PDF Brochure
                  </Link>
                </div>

                {/* Widget 3: Need Immediate Assistance / Call Advisor */}
                <div className="blog-sidebar-widget">
                  <h3 className="blog-sidebar-widget-title">
                    Talk to Society Advisor
                  </h3>
                  <p className="text-xs text-slate-600 mb-4">
                    Have questions regarding land conversion, approvals, or payment instalment options?
                  </p>
                  <div className="space-y-2">
                    <a
                      href="tel:+918884413931"
                      className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-slate-100 hover:bg-slate-200 text-[#1e3a60] text-xs font-bold rounded-md transition-colors no-underline"
                    >
                      <FaPhoneAlt size={12} className="text-emerald-600" />
                      <span>+91 88844 13931</span>
                    </a>
                    <a
                      href="https://api.whatsapp.com/send/?phone=918884413931&text=Hi%20Defence%20Habitat%2C%20I%20have%20an%20inquiry%20regarding%20Doddaballapur%20Plots&app_absent=0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2 px-3 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-md transition-colors no-underline"
                    >
                      <FaWhatsapp size={14} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Widget 4: Featured Society Projects */}
                <div className="blog-sidebar-widget">
                  <h3 className="blog-sidebar-widget-title">
                    Active Plotted Projects
                  </h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-xs font-bold text-[#1e3a60] m-0">
                          Defence Habitat Tapasihalli
                        </h4>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-1.5 py-0.5 rounded">
                          Phase 2 Open
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 m-0 mb-2">
                        DPA / BMRDA Approved • DC Converted • Doddaballapur Corridor
                      </p>
                      <Link
                        href="/"
                        className="text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 no-underline"
                      >
                        <span>View Project Details</span>
                        <FaArrowRight size={10} />
                      </Link>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="text-xs font-bold text-[#1e3a60] m-0">
                          Defence Habitat Marasandra
                        </h4>
                        <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.5 rounded">
                          Phase 2 Open
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 m-0 mb-2">
                        Change of Land Use Completed • Direct Highway Access
                      </p>
                      <Link
                        href="/"
                        className="text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 no-underline"
                      >
                        <span>View Project Details</span>
                        <FaArrowRight size={10} />
                      </Link>
                    </div>
                  </div>
                </div>

              </aside>
            </Col>
          </Row>
        </Container>
      </section>

      {/* ===== 4. BOTTOM ACTION CTA BANNER ===== */}
      <section className="bg-gradient-to-r from-[#031430] via-[#052354] to-[#0f3460] text-white py-14 px-4 border-t border-amber-500/20">
        <Container className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-400/20 text-amber-300 rounded-full text-xs font-semibold mb-4 border border-amber-400/30">
            <span>• DEFENCE HOUSING SOCIETY •</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-4">
            Looking for Residential Plots in Doddaballapur?
          </h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Benefit from 4 easy instalment payment structures, clear DC converted titles, 
            and planned gated community living in North Bangalore&apos;s fastest-growing corridor.
          </p>
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Link
              href="/"
              className="px-6 py-3 bg-[#d97706] hover:bg-amber-600 text-white font-bold text-sm rounded-md transition-all shadow-lg hover:shadow-xl no-underline"
            >
              Explore Available Plots
            </Link>
            <Link
              href="/download/brochure"
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-md border border-white/20 transition-all no-underline"
            >
              Download Brochure
            </Link>
            <Link
              href="/contact-us"
              className="px-6 py-3 bg-white text-[#0f3460] hover:bg-slate-100 font-bold text-sm rounded-md transition-all no-underline"
            >
              Book Site Visit
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== 5. MOBILE BOTTOM CTA BAR ===== */}
      <div className="blog-mobile-cta-bar">
        <div className="text-white text-xs">
          <span className="block font-bold">Doddaballapur Plots</span>
          <span className="text-[10px] text-amber-300">Phase 2 Booking Open</span>
        </div>
        <div className="flex gap-2">
          <a
            href="tel:+918884413931"
            className="px-3 py-1.5 bg-white text-[#0f3460] text-xs font-bold rounded flex items-center gap-1 no-underline"
          >
            <FaPhoneAlt size={10} />
            <span>Call</span>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=918884413931&text=Hi%20Defence%20Habitat%2C%20I%20want%20to%20know%20more%20about%20Doddaballapur%20Plots&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 bg-[#25D366] text-white text-xs font-bold rounded flex items-center gap-1 no-underline"
          >
            <FaWhatsapp size={12} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
