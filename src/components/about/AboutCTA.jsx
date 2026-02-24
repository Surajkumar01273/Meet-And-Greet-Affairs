const AboutCTA = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "9217017881";
    const message = "Hello! I would like to book an event.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="py-20 bg-[#926c0a] text-center text-white">
      <h2 className="text-3xl font-bold mb-4">
        Let’s Plan Your Next Event
      </h2>
      <p className="mb-6">
        Contact us today and make your celebration unforgettable.
      </p>
      <button
        onClick={handleWhatsAppClick}
        className="bg-white text-pink-600 px-6 py-3 cursor-pointer rounded-full font-semibold hover:bg-gray-100 transition"
      >
        Book Now
      </button>
    </section>
  );
};

export default AboutCTA;
