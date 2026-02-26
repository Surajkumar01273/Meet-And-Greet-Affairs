import React from "react";
import { TiTick } from "react-icons/ti";

const strengths = [
  "Experienced leadership with a professional edge",
  "Thoughtful planning with refined execution",
  "Premium styling and trusted vendor network",
  "Calm, confident, and complete event management",
  "Personal attention to every event",
  "Customized planning — never templates",
  "Trusted vendor partnerships",
  "Women-led, passion-driven team",
];

const WhyChooseUs = () => {
  return (
    <section
      className="relative py-16 lg:py-16 text-[#daaf65] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/service/sociel1.jpg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 max-w-8xl mx-auto px-4 lg:px-20">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#d4af37]">
            Why Clients Choose Us
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            Professional planning, refined execution, and an experience built entirely around you.
          </p>
        </div>

        {/* STRENGTHS */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {strengths.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-black/60 backdrop-blur-sm border border-neutral-700 rounded-xl p-6 hover:border-[#d4af37] transition"
            >
              <TiTick className="text-[#d4af37] text-2xl mt-1 flex-shrink-0" />
              <p className="text-[#daaf65] text-lg md:text-xl">{item}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#d4af37] mb-4">
            Let’s Create Something Beautiful
          </h3>
          <p className="text-gray-300 leading-relaxed">
            Whether it’s a milestone celebration, corporate gathering, or luxury
            event, we ensure your experience is stress-free, elegant, and unforgettable.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
