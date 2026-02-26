import React from "react";
import { motion } from "framer-motion";

const ConceptMood = () => {
  return (
    <section className="w-full bg-[#161717] text-white py-10 px-4 lg:px-20 font-[Inter]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT TEXT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-3xl text-[#daaf65] md:text-5xl font-[Playfair_Display] mb-12 tracking-wide"
            style={{ letterSpacing: "1px" }}
          >
            Concept & Mood
          </h1>

          <p className="text-lg lg:text-2xl leading-[1.8] text-[#f5e7c3] font-light md:max-w-[90%]">
            Meet & Greet Affairs specializes in crafting memorable experiences that blend creativity, style, and heartfelt hospitality. Each event is thoughtfully designed to reflect the perfect mood—whether elegant, festive, or intimate. With seamless planning, curated themes, and attention to every detail, we transform ordinary gatherings into meaningful moments. Our goal is to create atmospheres where people connect, celebrate, and feel truly inspired.
          </p>
        </motion.div>

        {/* RIGHT MOODBOARD SECTION */}
        <motion.div
          className="bg-white text-black rounded-lg shadow-lg relative"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mt-6 overflow-hidden">
            <motion.img
              src="/home-img/concept2.png"
              className="w-full h-80 lg:h-98 object-cover rounded shadow"
              alt=""
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ConceptMood;
