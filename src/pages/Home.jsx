import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  "/images/sacha-verheij-5bwgW8_9OPs-unsplash.jpg",
  "/images/hu-chen-0LwfbRtQ-ac-unsplash.jpg",
  "/images/sutirta-budiman-kjOBqwMUnWw-unsplash.jpg",
  "/images/stephan-bechert-xQWelDCacZE-unsplash.jpg",
];

function Home() {
  const [index, setIndex] = useState(0);

  // Auto cycle images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white py-20">
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Left: Text */}
          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Discover The World With Promise Expeditions
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="max-w-xl text-gray-300 mb-6 mx-auto md:mx-0"
            >
              Tailored tours, authentic experiences, and memories to last a lifetime.
            </motion.p>
            <motion.a
              href="/tours"
              whileHover={{ scale: 1.05 }}
              className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition inline-block"
            >
              Explore Tours
            </motion.a>
          </div>

          {/* Right: Stacked cycling images */}
          <div className="relative flex justify-center md:justify-end h-[400px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={heroImages[index]}
                alt="Travel"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -30 }}
                transition={{ duration: 0.8 }}
                className="absolute rounded-lg shadow-lg object-cover w-[300px] h-[400px]"
              />
            </AnimatePresence>

            {/* Extra stacked effect with faded outlines */}
            <div className="absolute w-[300px] h-[400px] rounded-lg border-2 border-white opacity-40 rotate-6"></div>
            <div className="absolute w-[300px] h-[400px] rounded-lg border-2 border-white opacity-20 -rotate-6"></div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="p-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">🌍 Global Adventures</h3>
          <p className="text-gray-600">
            From African safaris to European escapes, we connect you to the world’s wonders.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">🕊️ Seamless Travel</h3>
          <p className="text-gray-600">
            We handle the details so you can focus on the journey — stress free.
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold mb-2">🤝 Trusted Guides</h3>
          <p className="text-gray-600">
            Local experts, personalized service, and authentic cultural experiences.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
