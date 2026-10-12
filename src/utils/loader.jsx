"use client";
import React from "react";

const Loader = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(15, 34, 64, 0.7)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        backdropFilter: "blur(4px)",
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          border: "4px solid rgba(255, 255, 255, 0.2)",
          borderTop: "4px solid #f59e0b",
          borderRadius: "50%",
          animation: "spin 0.9s linear infinite",
        }}
      />
      <p
        style={{
          color: "#ffffff",
          marginTop: "16px",
          fontSize: "15px",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        Submitting...
      </p>
      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;
