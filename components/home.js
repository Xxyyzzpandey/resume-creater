import Link from "next/link";
import React from "react";

export default function Homepage() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      minHeight: "100vh", 
      backgroundColor: "#1a202c", 
      padding: "20px", 
      backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.1) 4px, transparent 3px)",
      backgroundSize: "10px 10px" 
    }}>
      <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#f7fafc", marginBottom: "10px" }}>
        Build Your Professional Resume in Minutes
      </h1>
      <p style={{ color: "#a0aec0", fontSize: "1.125rem", textAlign: "center", maxWidth: "600px", marginBottom: "20px" }}>
        Create a stunning, professional resume with our easy-to-use resume builder. No design skills required!
      </p>
      <Link href="/editor" style={{ backgroundColor: "#3182ce", color: "white", padding: "12px 24px", fontSize: "1rem", borderRadius: "8px", border: "none", cursor: "pointer", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)" }}>
        Get Started for Free
      </Link>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "40px", width: "100%", maxWidth: "900px" }}>
        <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#2d3748", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "10px", color: "#edf2f7" }}>Easy to Use</h2>
          <p style={{ color: "#a0aec0" }}>Simple and intuitive interface for creating resumes.</p>
        </div>
        <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#2d3748", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "10px", color: "#edf2f7" }}>ATS Friendly</h2>
          <p style={{ color: "#a0aec0" }}>Designed to pass through applicant tracking systems easily.</p>
        </div>
        <div style={{ padding: "20px", textAlign: "center", backgroundColor: "#2d3748", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "600", marginBottom: "10px", color: "#edf2f7" }}>Multiple Templates</h2>
          <p style={{ color: "#a0aec0" }}>Choose from a variety of professional templates.</p>
        </div>
      </div>
    </div>
  );
}
