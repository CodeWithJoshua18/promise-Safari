import React from "react";

function Tours() {
  const tours = [
    {
      title: "Safari in Maasai Mara",
      desc: "Witness the Great Migration and experience African wildlife up close.",
      img: "https://source.unsplash.com/400x300/?safari,africa",
    },
    {
      title: "Climb Mount Kilimanjaro",
      desc: "Challenge yourself on Africa’s tallest peak with expert guides.",
      img: "https://source.unsplash.com/400x300/?mountain,climbing",
    },
    {
      title: "Beach Escape in Zanzibar",
      desc: "Relax on white sandy beaches and dive into turquoise waters.",
      img: "https://source.unsplash.com/400x300/?beach,travel",
    },
  ];

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">🌍 Our Signature Tours</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tours.map((tour, idx) => (
          <div
            key={idx}
            className="bg-gray-100 rounded-lg overflow-hidden shadow hover:shadow-lg transition"
          >
            <img src={tour.img} alt={tour.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{tour.title}</h3>
              <p className="text-gray-600 mb-4">{tour.desc}</p>
              <a
                href="/contact"
                className="text-black font-semibold hover:underline"
              >
                Book Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;
