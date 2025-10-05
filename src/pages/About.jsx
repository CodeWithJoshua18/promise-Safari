import React from "react";

function About() {
  const milestones = [
    { year: "2010", text: "Promise Expeditions was founded with a vision to inspire global travel." },
    { year: "2014", text: "Expanded into African safaris, offering curated wildlife adventures." },
    { year: "2018", text: "Introduced cultural immersion tours across Asia and Europe." },
    { year: "2023", text: "Recognized as a leading travel agency for authentic experiences." },
  ];

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">ℹ️ About Promise Expeditions</h2>
      <p className="text-gray-600 text-center mb-10">
        Our mission is simple: to create journeys that move people. We connect travelers with
        experiences that enrich, inspire, and create lasting memories.
      </p>
      <div className="space-y-6 border-l-4 border-black pl-6">
        {milestones.map((m, idx) => (
          <div key={idx}>
            <h3 className="font-bold">{m.year}</h3>
            <p className="text-gray-600">{m.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
