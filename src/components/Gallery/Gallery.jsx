"use client";
import React, { useState, useMemo, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, Image as ImageIcon, HardHat, Camera, Sparkles, X } from "lucide-react";
import "./gallery.css";

// Video is loaded from public directory to ensure smooth Next.js compatibility
const Video = "/videos/galleryjcb.mp4";

import One from "../Project_Images/two.jpg";
import Two from "../Project_Images/three.jpg";
import Three from "../Project_Images/four.jpg";
import Four from "../Project_Images/five.jpg";
import Five from "../Project_Images/DSC04739.jpg";
import Six from "../Project_Images/six.jpg";
import Seven from "../Project_Images/seven.JPG";
import Eight from "../Project_Images/eight.JPG";
import Nine from "../Project_Images/nine.JPG";
import thirteen from "../Project_Images/thirteen.JPG";
import ten from '../Project_Images/ten.JPG';
import twelve from "../Project_Images/twelve.JPG";
import RecentImgfirst from "../../images/galleryImages/first_image.jpg";
import RecentImgSecond from "../../images/galleryImages/second_image.jpg";
import RecentImgThird from "../../images/galleryImages/thirdImage.jpg";
import RecentImgFourth from "../../images/galleryImages/forthImage.jpg";
import RecentImgFifth from "../../images/galleryImages/fifthImage.jpg";
import RecentImgSixth from "../../images/galleryImages/imageSix.jpg";

import gallery6 from "../../images/galleryImages/gallery6.jpeg";
import gallery7 from "../../images/galleryImages/gallery7.jpeg";
import gallery8 from "../../images/galleryImages/gallery8.jpeg";
import gallery9 from "../../images/galleryImages/gallery9.jpeg";
import gallery10 from "../../images/galleryImages/gallery10.jpeg";
import gallery11 from "../../images/galleryImages/gallery11.jpeg";
import gallery12 from "../../images/galleryImages/gallery12.jpeg";
import gallery13 from "../../images/galleryImages/gallery13.jpeg";
import gallery14 from "../../images/galleryImages/gallery14.jpeg";
import gallery15 from "../../images/galleryImages/gallery15.jpeg";
import gallery16 from "../../images/galleryImages/gallery16.jpeg";

import gallery17 from "../../images/galleryImages/gallery17.webp";
import gallery18 from "../../images/galleryImages/gallery18.webp";
import gallery19 from "../../images/galleryImages/gallery19.webp";
import gallery20 from "../../images/galleryImages/gallery20.webp";
import gallery21 from "../../images/galleryImages/gallery21.jpeg";
import gallery22 from "../../images/galleryImages/gallery22.jpeg";
import gallery23 from "../../images/galleryImages/gallery23.jpeg";
import gallery24 from "../../images/galleryImages/gallery24.jpeg";
import gallery25 from "../../images/galleryImages/gallery25.jpeg";
import gallery26 from "../../images/galleryImages/gallery26.jpeg";
import gallery27 from "../../images/galleryImages/gallery27.jpeg";
import gallery28 from "../../images/galleryImages/gallery28.jpeg";
import gallery29 from "../../images/galleryImages/gallery29.jpeg";
import gallery30 from "../../images/galleryImages/gallery30.jpeg";
import gallery31 from "../../images/galleryImages/gallery31.jpeg";
import gallery32 from "../../images/galleryImages/gallery32.jpeg";
import gallery33 from "../../images/galleryImages/gallery33.jpeg";

/* -------------------------------------------------------------------------- */
/*                               IMAGE COLLECTIONS                            */
/* -------------------------------------------------------------------------- */

const PLOT_IMAGES = [
  gallery7,
  gallery9,
  gallery12,
  gallery13,
  gallery14,
  gallery15,
  gallery16,
  gallery10,
  gallery6,
  gallery8,
];

const CONSTRUCTION_IMAGES = [
  gallery17,
  gallery18,
  gallery19,
  gallery20,
  gallery21,
  gallery22,
  gallery23,
  gallery24,
  gallery25,
  gallery26,
  gallery27,
  gallery28,
  gallery29,
  gallery30,
  gallery31,
  gallery32,
  gallery33,
  RecentImgfirst,
  RecentImgSecond,
  RecentImgThird,
  RecentImgFifth,
  RecentImgSixth,
  One,
  Two,
  Three,
  Four,
  Five,
  Six,
  Seven,
  Eight,
  Nine,
  ten,
  twelve,
  thirteen,
];

export default function GalleryPage() {
  /* -------------------------- STATE MANAGEMENT -------------------------- */
  const [activeCategory, setActiveCategory] = useState("plots");
  const [visibleCount, setVisibleCount] = useState(6);
  const [loadedImages, setLoadedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingMessage, setLoadingMessage] = useState('Loading images...');
  const [showLoadingDetails, setShowLoadingDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryRef = useRef(null);

  /* ----------------------- HASH BASED SCROLL ---------------------------- */
  useEffect(() => {
    if (window.location.hash === "#plots") {
      const section = document.getElementById("plots");
      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    }
  }, []);

  /* ----------------------- CURRENT IMAGES ------------------------------- */
  const currentImages = useMemo(() =>
    activeCategory === "plots"
      ? PLOT_IMAGES
      : CONSTRUCTION_IMAGES,
  [activeCategory]);

  /* ---------------------- LOADING MESSAGES ----------------------------- */
  const loadingMessages = {
    plots: [
      'Loading plot layouts...',
      'Arranging property views...',
      'Preparing site visuals...',
      'Organizing plot gallery...',
      'Almost there...'
    ],
    construction: [
      'Loading construction updates...',
      'Preparing progress photos...',
      'Organizing site images...',
      'Almost ready to showcase...',
      'Just a moment...'
    ]
  };

  /* ---------------------------------------------------------------------- */
  /*                     ASYNC IMAGE PRELOADER FUNCTION                     */
  /* ---------------------------------------------------------------------- */
  const loadImages = async (images) => {
    setLoading(true);
    setLoadingProgress(0);
    
    // Rotate loading messages
    const messageInterval = setInterval(() => {
      const messages = loadingMessages[activeCategory] || loadingMessages.plots;
      setLoadingMessage(messages[Math.floor(Math.random() * messages.length)]);
    }, 2000);

    try {
      let loadedCount = 0;
      // We only need to wait for the first batch of images to load to show the gallery quickly
      const imagesToPreload = images.slice(0, 6);
      const total = imagesToPreload.length;

      // Load images concurrently instead of sequentially
      const promises = imagesToPreload.map((imgItem) => {
        return new Promise((resolve) => {
          const img = new Image();
          const srcUrl = imgItem?.src || imgItem;
          img.src = srcUrl;
          img.onload = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / total) * 100);
            resolve(srcUrl);
          };
          img.onerror = () => {
            loadedCount++;
            setLoadingProgress((loadedCount / total) * 100);
            resolve(srcUrl);
          };
        });
      });

      await Promise.all(promises);
      
      // Set all images so they are available, browser will lazy load the rest
      setLoadedImages(images);
    } catch (error) {
      console.log("Image loading failed", error);
      setLoadingMessage('Some images failed to load');
      setLoadedImages(images);
    } finally {
      clearInterval(messageInterval);
      setLoading(false);
      setShowLoadingDetails(false);
    }
  };

  /* ---------------- LOAD IMAGES WHEN CATEGORY CHANGES ---------------- */
  useEffect(() => {
    loadImages(currentImages);
  }, [currentImages]);

  /* ---------------- CATEGORY CHANGE ---------------- */
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    galleryRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
    setVisibleCount(6);
  };

  /* ---------------- LOAD MORE ---------------- */
  const toggleLoadMore = () => {
    if (visibleCount === 6) {
      setVisibleCount(loadedImages.length);
    } else {
      setVisibleCount(6);
      galleryRef.current?.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* ------------------------------------------------------------------ */}
      {/*                         HERO VIDEO SECTION                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-black">
              Your Vision <br/>
              <span className="text-emerald-900 text-5xl">
                Our Mission
              </span>
            </h2>
            <p className="text-slate-700 mt-4 text-lg">
              Join us at Defence Habitat, where your vision
              for the perfect property becomes reality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <video
              autoPlay
              muted
              loop
              controls
              playsInline
              className="w-full h-full object-cover"
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/*                           CATEGORY NAV                             */}
      {/* ------------------------------------------------------------------ */}
      <header
        className="sticky z-50 py-6 px-4 pointer-events-none"
        style={{ top: "130px" }}
      >
        <div className="max-w-7xl mx-auto flex justify-end">
          <nav className="flex bg-blue-100 p-1 rounded-xl pointer-events-auto shadow-md">
            <button
              type="button"
              onClick={() => handleCategoryChange("plots")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                activeCategory === "plots"
                  ? "bg-white shadow text-blue-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <ImageIcon size={16} />
              Plot Allotment
            </button>
            <button
              type="button"
              onClick={() => handleCategoryChange("construction")}
              className={`flex items-center gap-2 px-6 py-2 rounded-lg text-sm font-semibold transition cursor-pointer ${
                activeCategory === "construction"
                  ? "bg-white shadow text-blue-900"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <HardHat size={16} />
              Construction Progress
            </button>
          </nav>
        </div>
      </header>

      {/* ------------------------------------------------------------------ */}
      {/*                              GALLERY                               */}
      {/* ------------------------------------------------------------------ */}
      <section
        id="plots"
        ref={galleryRef}
        className="py-16 px-4 max-w-7xl mx-auto w-full"
      >
        <div className="mb-10">
          <h3 className="text-3xl font-extrabold text-[#1e3a60]">
            {activeCategory === "plots"
              ? "Plot Allotment"
              : "Construction Progress"
            }
          </h3>
          <p className="text-slate-600 font-medium mt-2">
            {!loading && `Showing ${Math.min(visibleCount, loadedImages.length)} of ${loadedImages.length} images`}
          </p>
        </div>

        {/* ---------------------- INTERACTIVE LOADING ---------------------- */}
        <AnimatePresence mode="wait">
          {loading && (
            <motion.div
              key="loading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center py-16 px-4"
            >
              {/* Main spinner with progress ring */}
              <div className="relative mb-8">
                {/* Background ring */}
                <div className="w-20 h-20 border-4 border-blue-100 rounded-full" />
                
                {/* Rotating progress ring */}
                <motion.div
                  className="absolute top-0 left-0 w-20 h-20 border-4 border-blue-700 border-t-transparent rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                />
                
                {/* Center icon with pulse animation */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  {activeCategory === "plots" ? (
                    <Camera className="w-8 h-8 text-blue-700" />
                  ) : (
                    <HardHat className="w-8 h-8 text-blue-700" />
                  )}
                </motion.div>
              </div>

              {/* Animated loading message */}
              <motion.p
                key={loadingMessage}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-lg font-medium text-blue-900 mb-2"
              >
                {loadingMessage}
              </motion.p>

              {/* Progress bar */}
              <div className="w-64 h-2 bg-blue-100 rounded-full overflow-hidden mb-4">
                <motion.div
                  className="h-full bg-blue-700"
                  initial={{ width: 0 }}
                  animate={{ width: `${loadingProgress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Progress percentage */}
              <p className="text-sm text-blue-600 mb-4 font-semibold">
                {Math.round(loadingProgress)}% complete
              </p>

              {/* Interactive details toggle */}
              <button
                type="button"
                onClick={() => setShowLoadingDetails(!showLoadingDetails)}
                className="text-sm text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 cursor-pointer font-medium"
              >
                <Sparkles size={14} />
                {showLoadingDetails ? 'Hide details' : 'Show details'}
              </button>

              {/* Expandable details */}
              <AnimatePresence>
                {showLoadingDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-blue-800 overflow-hidden"
                  >
                    <p>• Loading {currentImages.length} images</p>
                    <p>• {Math.round(loadingProgress)}% loaded successfully</p>
                    <p>• Category: {activeCategory === 'plots' ? 'Plot Allotment' : 'Construction'}</p>
                    <p>• Please wait while we optimize your experience</p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Loading particles */}
              <div className="flex gap-2 mt-8">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-blue-400 rounded-full"
                    animate={{
                      y: [0, -10, 0],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ------------------------ IMAGE GRID --------------------------- */}
        <AnimatePresence>
          {!loading && (
            <motion.div
              key="gallery"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
            >
              {loadedImages.slice(0, visibleCount).map((image, index) => {
                const srcUrl = image?.src || image;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.4) }}
                    className="rounded-xl overflow-hidden shadow hover:shadow-xl group cursor-pointer bg-slate-100"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedImage(srcUrl)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img
                        src={srcUrl}
                        alt={`Gallery ${index + 1}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                      <motion.div
                        className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300"
                        initial={false}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ----------------------- LOAD MORE ----------------------------- */}
        {!loading && loadedImages.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <button
              type="button"
              onClick={toggleLoadMore}
              className="loadMore-btn"
            >
              {visibleCount === 6 ? (
                <>
                  <span>Load More</span>
                  <ChevronDown size={20} strokeWidth={2.4} />
                </>
              ) : (
                <>
                  <span>Show Less</span>
                  <ChevronUp size={20} strokeWidth={2.4} />
                </>
              )}
            </button>
          </motion.div>
        )}
      </section>

      {/* -------------------- FULLSCREEN LIGHTBOX ----------------------- */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4 cursor-pointer"
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white bg-white/20 hover:bg-white/40 p-2 rounded-full cursor-pointer transition"
          >
            <X size={24} />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Full View"
            className="max-h-[90vh] max-w-[95vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </div>
  );
}
