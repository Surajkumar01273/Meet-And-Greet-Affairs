import React from "react";
import { motion } from "framer-motion";

export default function PlanningEvents() {
  return (
    <div className="w-full text-[#daaf65] bg-[#161717] flex flex-col md:flex-row px-4 py-10 lg:px-20 gap-10">

      {/* LEFT PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          bg-gray-100 
          w-full md:w-1/2 
          min-h-[60vh] 
          md:min-h-[70vh] 
          lg:min-h-[75vh] 
          flex flex-col justify-center 
          px-6 sm:px-10 py-10 
          rounded-2xl transition-all duration-700 hover:scale-90
        "
      >
        <h1 className="text-4xl lg:text-4xl xl:text-5xl font-extrabold leading-tight mb-6">
          Plan & Book Your Event Online
        </h1>

        <p className="text-xl sm:text-2xl md:text-2xl mb-4">
          Let's talk NOW and get in touch.
        </p>

        <p className="text-xl sm:text-2xl md:text-2xl mb-1 font-medium">
          Call us on
        </p>

        <p className="text-2xl sm:text-3xl md:text-5xl font-extrabold">
          +91-9217017881
        </p>
      </motion.div>

      {/* RIGHT IMAGE PANEL */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="
          w-full md:w-1/2 
          min-h-[20vh] 
          md:min-h-[70vh] 
          lg:min-h-[75vh] 
          rounded-2xl 
          overflow-hidden
          transition-all duration-700 hover:scale-90
        "
      >
        <img
          src="/banner/banner4.jpg"
          alt="Event Decoration"
          className="w-full h-[320px] md:h-full object-cover"
        />
      </motion.div>

    </div>
  );
}
