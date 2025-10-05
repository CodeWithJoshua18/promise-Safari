import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

// --- Placeholder Pages ---
function Home() {
  return <div className="p-6 text-center text-xl">🏡 Welcome to Promise Expeditions!</div>;
}

function Tours() {
  return <div className="p-6 text-center text-xl">🌍 Explore our Tours.</div>;
}

function About() {
  return <div className="p-6 text-center text-xl">ℹ️ Learn more About Us.</div>;
}

function Contact() {
  return <div className="p-6 text-center text-xl">📞 Get in Touch with Us.</div>;
}

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-16"> {/* padding so content doesn't hide behind navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
