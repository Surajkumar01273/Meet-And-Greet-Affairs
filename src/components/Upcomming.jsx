import React from "react";
import { motion } from "framer-motion";

export default function UpcomingEvents() {
  const events = [
    {
      title: "Haldi",
      img: "/haldi/haldi6.jpeg",
    },
    {
      title: "Baby Shower",
      img: "/baby/baby9.jpeg",
    },
    {
      title: "Anniversary",
      img: "/gallery/anniversary.jpg",
    },
  ];

  return (
    <div className="w-full bg-black py-16 px-4 lg:px-20 -z-50">
      {/* Title */}
      <h2 className="text-center text-[#D4A017] text-2xl  font-[Playfair_Display] md:text-5xl font-semibold tracking-widest mb-20">
        UPCOMING EVENTS
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-8xl mx-auto">
        {events.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="relative w-full overflow-hidden transform skew-y-6 shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-72 lg:h-120 object-cover transition-all duration-700 hover:scale-120 hover:rotate-6"
              />
            </div>
            <p className="text-[#f5e7c3] text-xl sm:text-2xl tracking-widest mt-6">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
