import React from "react";
import { motion } from "framer-motion";
import { TiTick } from "react-icons/ti";

const SocielTheme = ({ anniversaryThemeData }) => {
  return (
    <section className="bg-black pb-12 lg:py-24">
      <div className="max-w-8xl mx-auto space-y-24 px-4 lg:px-20">
        {anniversaryThemeData.map((item, index) => {
          const isReverse = index % 2 !== 0;
          const { content, image } = item;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12"
            >
              {/* CONTENT - Mobile First */}
              <div
                className={`
                  order-1 
                  ${isReverse ? "md:order-1" : "md:order-2"} 
                  space-y-4 lg:ml-24
                `}
              >
                <h2 className="text-2xl md:text-4xl font-semibold text-[#D4A017]">
                  {content.title}
                </h2>

                <p className="text-xl text-[#D4A017] font-medium">
                  {content.introText}
                </p>

                <p className="text-[#f5e7c3] leading-relaxed max-w-xl text-lg">
                  {content.description}
                </p>

                <div>
                  <h4 className="font-semibold text-[#D4A017] mb-3 text-xl">
                    {content.offerTitle}
                  </h4>
                  <ul className="space-y-2 text-[#f5e7c3] list-disc list-inside">
                    {content.offers.map((offer, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <TiTick className="text-[#D4A017] mt-1" />
                        <span className="text-[#f5e7c3] text-lg">{offer}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* IMAGE */}
              <div
                className={`
                  order-2 
                  ${isReverse ? "md:order-2" : "md:order-1"}
                `}
              >
                <img
                  src={image}
                  alt={content.title}
                  className="w-full h-90 md:h-150 rounded-xl shadow-lg object-center transition-all duration-700 hover:scale-90"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SocielTheme;
