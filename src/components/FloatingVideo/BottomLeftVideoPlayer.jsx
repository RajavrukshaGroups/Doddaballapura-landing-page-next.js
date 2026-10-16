"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
  RotateCcw,
  Film,
} from "lucide-react";
import "./BottomLeftVideoPlayer.css";

const projectVideo = "/videos/defence-habitat-tapasihalli.mp4";

const BottomLeftVideoPlayer = () => {
  // Mounting state to prevent Next.js SSR hydration mismatch
  const [mounted, setMounted] = useState(false);

  // States
  const [isOpen, setIsOpen] = useState(true);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullView, setIsFullView] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [showControls, setShowControls] = useState(false);

  // Video refs
  const miniVideoRef = useRef(null);
  const modalVideoRef = useRef(null);
  const progressRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Format seconds to mm:ss
  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds === null) return "0:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  // Keep mini video playing on mount / play state change
  useEffect(() => {
    if (!mounted) return;
    const video = miniVideoRef.current;
    if (video && isOpen && !isFullView) {
      video.muted = isMuted;
      if (isPlaying) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Browser autoplay restrictions caught: ensure muted
            video.muted = true;
            setIsMuted(true);
            video.play().catch(() => {});
          });
        }
      } else {
        video.pause();
      }
    }
  }, [mounted, isOpen, isFullView, isPlaying, isMuted]);

  // Synchronize time and state when switching between mini player and full view
  useEffect(() => {
    if (!mounted) return;
    if (isFullView) {
      // Pause mini video
      if (miniVideoRef.current) {
        miniVideoRef.current.pause();
      }
      // Start full view video
      const modalVideo = modalVideoRef.current;
      if (modalVideo) {
        modalVideo.currentTime = currentTime;
        modalVideo.volume = isMuted ? 0 : volume;
        modalVideo.muted = isMuted;
        const playPromise = modalVideo.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        }
      }
    } else {
      // Exiting full view - resume mini player
      const miniVideo = miniVideoRef.current;
      if (miniVideo && isOpen) {
        miniVideo.currentTime = currentTime;
        miniVideo.muted = isMuted;
        if (isPlaying) {
          miniVideo.play().catch(() => {});
        }
      }
    }
  }, [mounted, isFullView]);

  // Listen for Escape key to close Full View
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isFullView) {
        setIsFullView(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isFullView]);

  // Update time tracker from whichever video is active
  const handleTimeUpdate = (e) => {
    const video = e.target;
    setCurrentTime(video.currentTime);
    if (!duration && video.duration) {
      setDuration(video.duration);
    }
  };

  const handleLoadedMetadata = (e) => {
    setDuration(e.target.duration);
  };

  // Toggle Play / Pause
  const togglePlay = (e) => {
    if (e) e.stopPropagation();
    const activeVideo = isFullView ? modalVideoRef.current : miniVideoRef.current;
    if (!activeVideo) return;

    if (activeVideo.paused) {
      activeVideo
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    } else {
      activeVideo.pause();
      setIsPlaying(false);
    }
  };

  // Toggle Mute
  const toggleMute = (e) => {
    if (e) e.stopPropagation();
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);

    if (miniVideoRef.current) {
      miniVideoRef.current.muted = nextMuted;
    }
    if (modalVideoRef.current) {
      modalVideoRef.current.muted = nextMuted;
      if (!nextMuted && modalVideoRef.current.volume === 0) {
        modalVideoRef.current.volume = volume || 0.8;
      }
    }
  };

  // Open Full View
  const openFullView = (e) => {
    if (e) e.stopPropagation();
    if (miniVideoRef.current) {
      setCurrentTime(miniVideoRef.current.currentTime);
    }
    // When opening full view, default to unmuted if user requested it
    setIsMuted(false);
    setIsFullView(true);
  };

  // Close Full View (return to mini)
  const closeFullView = () => {
    if (modalVideoRef.current) {
      setCurrentTime(modalVideoRef.current.currentTime);
    }
    setIsFullView(false);
  };

  // Close Mini Player Widget
  const handleCloseMini = (e) => {
    if (e) e.stopPropagation();
    if (miniVideoRef.current) {
      miniVideoRef.current.pause();
    }
    setIsPlaying(false);
    setIsOpen(false);
  };

  // Reopen Mini Player from launcher badge
  const handleReopen = () => {
    setIsOpen(true);
    setIsPlaying(true);
  };

  // Fully dismiss launcher
  const handlePermanentDismiss = (e) => {
    if (e) e.stopPropagation();
    setIsDismissed(true);
  };

  // Seek bar handler in Full View
  const handleSeek = (e) => {
    const video = modalVideoRef.current;
    if (!video || !duration) return;
    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const newTime = percentage * duration;
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Volume slider in Full View
  const handleVolumeChange = (e) => {
    const newVol = parseFloat(e.target.value);
    setVolume(newVol);
    if (modalVideoRef.current) {
      modalVideoRef.current.volume = newVol;
      if (newVol > 0 && isMuted) {
        setIsMuted(false);
        modalVideoRef.current.muted = false;
      } else if (newVol === 0) {
        setIsMuted(true);
        modalVideoRef.current.muted = true;
      }
    }
  };

  // Handle Fullscreen browser API in Full View
  const toggleBrowserFullscreen = () => {
    const modalEl = document.getElementById("fullview-video-container");
    if (!modalEl) return;
    if (!document.fullscreenElement) {
      modalEl.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  // Auto-hide controls in full view on inactivity
  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
    }, 2800);
  };

  if (!mounted || isDismissed) {
    return null;
  }

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* 1. MINIMIZED LAUNCHER BUTTON (Shows when floating widget is closed) */}
      {/* ------------------------------------------------------------------ */}
      {!isOpen && !isFullView && (
        <div
          className="bottom-left-video-launcher animate-bounce-subtle"
          onClick={handleReopen}
          role="button"
          tabIndex={0}
          title="Watch Defence Habitat Tapasihalli Video"
        >
          <div className="launcher-pulse"></div>
          <div className="launcher-icon-wrapper">
            <Film size={18} className="launcher-icon" />
          </div>
          <span className="launcher-text">Site Video Tour</span>
          <button
            className="launcher-close"
            onClick={handlePermanentDismiss}
            title="Dismiss completely"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* 2. FLOATING MINI PLAYER (Bottom-Left Side of Screen)               */}
      {/* ------------------------------------------------------------------ */}
      {isOpen && !isFullView && (
        <div className="bottom-left-video-card shadow-2xl">
          {/* Video Preview Container */}
          <div
            className="video-preview-wrapper"
            onClick={openFullView}
            title="Click for Full View"
          >
            <video
              ref={miniVideoRef}
              src={projectVideo}
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="mini-video-element"
            />

            {/* Hover-only Controls Overlay */}
            <div className="video-preview-overlay">
              <div
                className="mini-hover-actions"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="mini-hover-btn fullview-btn"
                  onClick={openFullView}
                  title="Full View"
                  aria-label="Full View"
                >
                  <Maximize2 size={15} />
                </button>
                <button
                  className="mini-hover-btn close-btn"
                  onClick={handleCloseMini}
                  title="Close"
                  aria-label="Close"
                >
                  <X size={16} />
                </button>
              </div>
            </div>

            {/* Slim Bottom Progress Bar */}
            <div className="mini-progress-track">
              <div
                className="mini-progress-bar"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* 3. FULL VIEW MODAL / LIGHTBOX                                     */}
      {/* ------------------------------------------------------------------ */}
      {isFullView && (
        <div
          className="fullview-modal-backdrop"
          onClick={closeFullView}
          onMouseMove={handleMouseMove}
        >
          <div
            id="fullview-video-container"
            className="fullview-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="fullview-modal-header">
              <div className="fullview-header-info">
                <div className="flex items-center gap-2">
                  <span className="live-dot" />
                  <span className="fullview-tag">Project Video Tour</span>
                </div>
                <h3 className="fullview-title">
                  Defence Habitat Tapasihalli
                </h3>
                <p className="fullview-subtitle">
                  Phase-1 Open For Booking • Strategic North Bangalore Location
                </p>
              </div>

              <div className="fullview-header-btns">
                <button
                  className="fullview-action-btn minimize"
                  onClick={closeFullView}
                  title="Minimize back to corner"
                >
                  <Minimize2 size={18} />
                  <span className="hidden sm:inline">Minimize</span>
                </button>

                <button
                  className="fullview-action-btn close"
                  onClick={closeFullView}
                  title="Close Video"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Large Video Box */}
            <div
              className="fullview-video-box group"
              onClick={togglePlay}
            >
              <video
                ref={modalVideoRef}
                src={projectVideo}
                autoPlay
                muted={isMuted}
                loop
                playsInline
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
                className="fullview-video-element"
              />

              {/* Big Center Play/Pause Flash Overlay */}
              {!isPlaying && (
                <div className="fullview-center-play-overlay">
                  <div className="center-play-bubble">
                    <Play size={36} className="text-white ml-1" />
                  </div>
                </div>
              )}

              {/* Control Bar */}
              <div
                className={`fullview-controls-bar ${
                  showControls || !isPlaying ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Progress / Scrubber Bar */}
                <div
                  ref={progressRef}
                  className="fullview-progress-track"
                  onClick={handleSeek}
                >
                  <div
                    className="fullview-progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  >
                    <span className="progress-scrubber-handle" />
                  </div>
                </div>

                {/* Bottom Buttons Bar */}
                <div className="fullview-controls-row">
                  {/* Left Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      className="fullview-ctrl-btn"
                      onClick={togglePlay}
                      title={isPlaying ? "Pause" : "Play"}
                    >
                      {isPlaying ? <Pause size={20} /> : <Play size={20} />}
                    </button>

                    <button
                      className="fullview-ctrl-btn"
                      onClick={() => {
                        if (modalVideoRef.current) {
                          modalVideoRef.current.currentTime = 0;
                          setCurrentTime(0);
                        }
                      }}
                      title="Replay from beginning"
                    >
                      <RotateCcw size={18} />
                    </button>

                    <div className="flex items-center gap-2 volume-group">
                      <button
                        className="fullview-ctrl-btn"
                        onClick={toggleMute}
                        title={isMuted ? "Unmute" : "Mute"}
                      >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="volume-slider hidden sm:block"
                        title="Volume"
                      />
                    </div>

                    <div className="time-display">
                      <span>{formatTime(currentTime)}</span>
                      <span className="time-divider">/</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Right Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      className="fullview-ctrl-btn"
                      onClick={toggleBrowserFullscreen}
                      title="Fullscreen"
                    >
                      <Maximize2 size={18} />
                    </button>
                    <button
                      className="fullview-ctrl-btn close-modal-btn"
                      onClick={closeFullView}
                      title="Exit Full View"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BottomLeftVideoPlayer;
