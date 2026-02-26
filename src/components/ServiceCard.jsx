import React from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function ServiceCard({ title, desc, services, link }) {
  return (
    <section className="relative bg-[#161717] py-6 pb-10 overflow-hidden px-4 lg:px-20">

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Autoplay]}
        className="px-4"
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <div
              className="relative rounded-3xl overflow-hidden bg-[#daaf65] shadow-lg border border-pink-100 hover:border-yellow-300 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl group"
            >
              <div className="overflow-hidden rounded-t-3xl relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-100 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 rounded-3xl pointer-events-none bg-gradient-to-br from-[#ff9a8b]/20 to-[#ffd36f]/20 blur-xl"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}
