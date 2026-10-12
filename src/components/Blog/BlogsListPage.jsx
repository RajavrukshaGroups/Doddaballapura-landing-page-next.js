"use client";
import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Container, Row, Col, Modal } from "react-bootstrap";
import { toast, Toaster } from "react-hot-toast";
import {
  FiSearch,
  FiCalendar,
  FiClock,
  FiArrowRight,
  FiX,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaBuilding,
  FaChartLine,
  FaLeaf,
  FaMapMarkerAlt,
  FaLightbulb,
  FaSpa,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { BLOG_POSTS, CATEGORIES, RECENT_POSTS } from "../../data/blogData";
import "./BlogsTheme.css";

const CATEGORY_ICONS = {
  "Real Estate": FaBuilding,
  Investment: FaChartLine,
  Lifestyle: FaLeaf,
  "North Bangalore": FaMapMarkerAlt,
  "Tips & Guide": FaLightbulb,
};

export default function BlogsListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [showEnquiryModal, setShowEnquiryModal] = useState(false);
  const [enquiryForm, setEnquiryForm] = useState({
    name: "",
    phone: "",
    email: "",
    requirement: "Residential Plots in Doddaballapur",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "All" ||
        post.category.toLowerCase() === selectedCategory.toLowerCase();
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    if (!enquiryForm.name.trim() || !enquiryForm.phone.trim()) {
      toast.error("Please fill in your name and phone number");
      return;
    }
    if (!/^\d{10}$/.test(enquiryForm.phone.replace(/\D/g, ""))) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setShowEnquiryModal(false);
      toast.success("Enquiry sent! Our property advisor will contact you shortly.");
      const waText = encodeURIComponent(
        `Hi Defence Habitat, I would like to enquire about plots.\nName: ${enquiryForm.name}\nPhone: ${enquiryForm.phone}\nRequirement: ${enquiryForm.requirement}`
      );
      window.open(
        `https://api.whatsapp.com/send/?phone=918884413931&text=${waText}&app_absent=0`,
        "_blank"
      );
      setEnquiryForm({
        name: "",
        phone: "",
        email: "",
        requirement: "Residential Plots in Doddaballapur",
      });
    }, 600);
  };

  return (
    <div className="blogs-wrapper py-10 md:py-14 px-4 md:px-8">
      <Toaster position="top-right" />
      <Container className="max-w-7xl mx-auto">
        {/* Top Header section */}
        <div className="mb-10">
          {/* Breadcrumbs */}
          <nav className="blog-breadcrumbs-nav mb-3" aria-label="Breadcrumb">
            <Link href="/">HOME</Link>
            <span>&gt;</span>
            <span className="text-[#162A45]">BLOGS</span>
          </nav>

          {/* Subtitle tag */}
          <div className="inline-block text-[11px] font-bold tracking-widest text-[#B28236] uppercase mb-1">
            OUR BLOGS
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <h1 className="font-serif-title text-3xl md:text-5xl font-bold text-[#162A45] tracking-tight leading-tight mb-3">
                Insights for a Better Tomorrow
              </h1>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl leading-relaxed m-0">
                Explore expert insights, market trends and valuable tips on land investment, lifestyle and real estate in North Bangalore.
              </p>
            </div>

            {/* Search Input */}
            <div className="blog-search-box">
              <FiSearch className="blog-search-icon" />
              <input
                type="text"
                placeholder="Search blogs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="blog-search-input"
              />
            </div>
          </div>
        </div>

        {/* Main Grid + Sidebar Layout */}
        <Row className="g-5">
          {/* LEFT: Blog Cards Grid (3 Columns) */}
          <Col lg={8} xl={9}>
            {filteredPosts.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-[#EFE9DF]">
                <p className="text-slate-500 text-base mb-4">
                  No blogs found matching &quot;{searchQuery}&quot;.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All");
                  }}
                  className="px-4 py-2 bg-[#C9A86A] text-white text-xs font-bold rounded-full cursor-pointer hover:bg-[#B28236] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPosts.map((post) => (
                  <article key={post.id} className="blog-card">
                    {/* Image wrap */}
                    <div className="blog-card-img-wrap">
                      <img
                        src={post.image?.src || post.image}
                        alt={post.title}
                        className="blog-card-img"
                        loading="lazy"
                      />
                      <span className="blog-pill-badge">{post.category}</span>
                    </div>

                    {/* Body */}
                    <div className="blog-card-body">
                      <div className="blog-card-meta">
                        <span className="flex items-center gap-1.5">
                          <FiCalendar className="text-[#B28236]" />
                          <span>{post.date}</span>
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1.5">
                          <FiClock className="text-[#B28236]" />
                          <span>{post.readTime}</span>
                        </span>
                      </div>

                      <h2 className="blog-card-title">
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="hover:underline text-inherit no-underline"
                        >
                          {post.title}
                        </Link>
                      </h2>

                      <p className="blog-card-excerpt">{post.excerpt}</p>

                      <Link
                        href={`/blogs/${post.slug}`}
                        className="blog-card-readmore no-underline"
                      >
                        <span>Read More</span>
                        <FiArrowRight />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination matching reference */}
            <div className="blog-pagination">
              <button
                className="blog-page-btn"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                aria-label="Previous page"
              >
                &lt;
              </button>
              {[1, 2, 3, 4, 5].map((pageNum) => (
                <button
                  key={pageNum}
                  className={`blog-page-btn ${currentPage === pageNum ? "active" : ""}`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              ))}
              <button
                className="blog-page-btn"
                onClick={() => setCurrentPage((p) => Math.min(5, p + 1))}
                aria-label="Next page"
              >
                &gt;
              </button>
            </div>
          </Col>

          {/* RIGHT: Sidebar matching reference */}
          <Col lg={4} xl={3}>
            <aside className="sticky top-24 space-y-6">
              {/* Widget 1: Categories */}
              {/* <div className="blog-widget-box">
                <h3 className="blog-widget-heading">Categories</h3>
                <div className="space-y-1">
                  <div
                    className={`blog-category-item ${selectedCategory === "All" ? "active" : ""}`}
                    onClick={() => setSelectedCategory("All")}
                  >
                    <div className="flex items-center gap-2.5">
                      <FaBuilding className="text-[#B28236] text-xs" />
                      <span>All Articles</span>
                    </div>
                    <span className="blog-category-count">{BLOG_POSTS.length}</span>
                  </div>
                  {CATEGORIES.map((cat) => {
                    const IconComponent = CATEGORY_ICONS[cat.name] || FaBuilding;
                    const isSelected = selectedCategory === cat.name;
                    return (
                      <div
                        key={cat.name}
                        className={`blog-category-item ${isSelected ? "active" : ""}`}
                        onClick={() => setSelectedCategory(cat.name)}
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComponent className="text-[#B28236] text-xs" />
                          <span>{cat.name}</span>
                        </div>
                        <span className="blog-category-count">{cat.count}</span>
                      </div>
                    );
                  })}
                </div>
              </div> */}

              {/* Widget 2: Your Dream Plot Awaits CTA Card */}
              <div className="blog-cta-dark-card">
                <div className="w-10 h-10 rounded-full bg-[#1E3A5F]/60 text-[#D4A373] flex items-center justify-center mx-auto mb-3">
                  <FaSpa size={20} />
                </div>
                <h3 className="font-serif-title text-xl font-bold text-white mb-2">
                  Your Dream Plot Awaits
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-0 max-w-xs mx-auto">
                  Invest in a brighter future at Defence Habitat plotted developments in North Bangalore.
                </p>
                <button
                  onClick={() => setShowEnquiryModal(true)}
                  className="blog-cta-dark-btn"
                >
                  <span>Enquire Now</span>
                  <FiArrowRight />
                </button>
              </div>

              {/* Widget 3: Recent Posts */}
              <div className="blog-widget-box">
                <h3 className="text-xl font-serif font-bold text-blue-900">Recent Posts</h3>
                <div>
                  {RECENT_POSTS.map((recent, idx) => (
                    <Link
                      key={idx}
                      href={`/blogs/${recent.slug}`}
                      className="blog-recent-post-item"
                    >
                      <img
                        src={recent.image?.src || recent.image}
                        alt={recent.title}
                        className="blog-recent-thumb"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="blog-recent-title">{recent.title}</h4>
                        <span className="blog-recent-date">{recent.date}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </Col>
        </Row>
      </Container>

      {/* Enquiry Modal */}
      <Modal
        show={showEnquiryModal}
        onHide={() => setShowEnquiryModal(false)}
        centered
        className="enquiry-modal"
      >
        <div className="bg-white rounded-2xl p-6 md:p-8 relative">
          <button
            onClick={() => setShowEnquiryModal(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 bg-transparent border-0 cursor-pointer"
            aria-label="Close"
          >
            <FiX size={20} />
          </button>

          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#F6EFE6] text-[#B28236] flex items-center justify-center mx-auto mb-3">
              <FaSpa size={22} />
            </div>
            <h3 className="font-serif-title text-2xl font-bold text-[#162A45] mb-1">
              Enquire About Plots
            </h3>
            <p className="text-xs text-slate-500 m-0">
              Get price sheet, layout brochure, and schedule a free site visit.
            </p>
          </div>

          <form onSubmit={handleEnquirySubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={enquiryForm.name}
                onChange={(e) =>
                  setEnquiryForm({ ...enquiryForm, name: e.target.value })
                }
                className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-[#C9A86A] bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                maxLength={10}
                placeholder="10-digit mobile number"
                value={enquiryForm.phone}
                onChange={(e) =>
                  setEnquiryForm({
                    ...enquiryForm,
                    phone: e.target.value.replace(/\D/g, "").slice(0, 10),
                  })
                }
                className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-[#C9A86A] bg-slate-50"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                Plot Preference
              </label>
              <select
                value={enquiryForm.requirement}
                onChange={(e) =>
                  setEnquiryForm({ ...enquiryForm, requirement: e.target.value })
                }
                className="w-full text-xs px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:border-[#C9A86A] bg-slate-50"
              >
                <option value="Residential Plots in Doddaballapur">
                  Doddaballapur Plotted Developments
                </option>
                <option value="30x40 (1200 sq.ft) Site">
                  30x40 (1200 sq.ft) Site
                </option>
                <option value="30x50 (1500 sq.ft) Site">
                  30x50 (1500 sq.ft) Site
                </option>
                <option value="40x60 (2400 sq.ft) Site">
                  40x60 (2400 sq.ft) Site
                </option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-[#C9A86A] hover:bg-[#B28236] text-white text-xs font-bold rounded-lg transition-colors cursor-pointer border-0 shadow-md flex items-center justify-center gap-2 mt-2"
            >
              {isSubmitting ? (
                <span>Submitting...</span>
              ) : (
                <>
                  <span>Submit Enquiry</span>
                  <FiArrowRight />
                </>
              )}
            </button>
          </form>

          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-center gap-3 text-xs text-slate-500">
            <a
              href="tel:+918884413931"
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#162A45] no-underline"
            >
              <FaPhoneAlt className="text-emerald-600" />
              <span>+91 88844 13931</span>
            </a>
            <span>•</span>
            <a
              href="https://api.whatsapp.com/send/?phone=918884413931&text=Hi%20Defence%20Habitat%2C%20I%20want%20to%20enquire%20about%20plots&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-emerald-600 hover:text-emerald-700 no-underline font-semibold"
            >
              <FaWhatsapp />
              <span>WhatsApp Chat</span>
            </a>
          </div>
        </div>
      </Modal>
    </div>
  );
}
