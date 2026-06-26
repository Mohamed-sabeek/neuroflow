import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedCompanies from "./components/TrustedCompanies";
import Features from "./components/Features";
import Workflow from "./components/Workflow";
import Dashboard from "./components/Dashboard";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#172B36] text-[#F1F6F4] font-sans overflow-x-hidden selection:bg-[#FFC801] selection:text-[#172B36] relative">
      {/* Noise background */}
      <div className="noise-bg"></div>

      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Social Proof Banner */}
        <TrustedCompanies />

        {/* Bento Grid to Accordion Features Section */}
        <Features />

        {/* Workflow Pipeline Section */}
        <Workflow />

        {/* Developer Console Dashboard Section */}
        <Dashboard />

        {/* Matrix Pricing Section with Isolated Updates */}
        <Pricing />

        {/* Customer Testimonials Section */}
        <Testimonials />
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
