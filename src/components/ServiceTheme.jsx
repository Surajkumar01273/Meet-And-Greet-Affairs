import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ServiceTheme({ title, desc, services }) {
  return (
    <section className="relative bg-[#161717] py-6 overflow-hidden mt-10">
      {/* 🎊 Soft Confetti Pattern Background */}
      {/* <div className="absolute inset-0 opacity-10 bg-[url('/confetti.png')] bg-repeat bg-[length:180px_180px] pointer-events-none"></div> */}

      {/* 🎉 Section Heading */}
      <div className="relative text-center mb-14">
        <h2 className="text-2xl md:text-5xl font-extrabold text-[#daaf65] drop-shadow-md">
          {title}
        </h2>
        <div className="flex items-center justify-center gap-4 py-6">
          <div className="w-40 h-1 bg-[#daaf65]"></div>
          <div className="w-6 h-2 bg-[#0B2154]"></div>
          <div className="w-40 h-1 bg-[#daaf65]"></div>
        </div>
        <p className="text-gray-700 mt-3 text-sm md:text-base max-w-3xl mx-auto">
          {services.desc}
        </p>
      </div>

      {/* 🎁 Card Grid */}
      <div className="relative grid gap-6 px-4 md:px-20 lg:grid-cols-4 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative rounded-3xl overflow-hidden bg-[#daaf65] backdrop-blur-md shadow-lg border border-pink-100 hover:border-yellow-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
          >
            {/* 🖼️ Image */}
            <div className="overflow-hidden rounded-t-3xl relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-80 md:h-90 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            </div>

            {/* 📋 Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-center text-black mb-2 group-hover:text-[#daaf65] transition">
                  {service.title}
                </h3>
                {/* <p className="text-gray-700 text-sm leading-relaxed">
                  {service.desc}
                </p> */}
              </div>

              {/* 🔘 Buttons */}
              <div className="mt-5">
                <div className="flex justify-between gap-3">
                  <a
                    href="tel:+919217017881"
                    className="bg-[#161717] p-5 rounded-full hover:scale-110 transition"
                  >
                    <FaPhoneAlt className="text-white text-lg" />
                  </a>
                  <a
                    href={`https://wa.me/919217017881?text=${encodeURIComponent(
                      "Hello! I'm interested in your decoration services. Please share more details."
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#daaf65] py-3 text-xl px-4 text-[#161717] font-semibold rounded-full hover:scale-110 transition"
                  >
                    {/* <FaWhatsapp className="text-white text-lg" /> */}
                    Get in touch
                  </a>
                </div>
              </div>
            </div>

            {/* ✨ Glow Border Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl pointer-events-none bg-gradient-to-br from-[#ff9a8b]/20 to-[#ffd36f]/20 blur-xl"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
