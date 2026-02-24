const HeroAbout = () => {
  return (
    <section className="relative h-[70vh] flex items-center justify-center text-center bg-[url('/about/hero.jpg')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          About Our Event Company
        </h1>
        <p className="text-gray-200 text-lg">
          Creating unforgettable moments with creativity, passion & perfection.
        </p>
      </div>
    </section>
  );
};

export default HeroAbout;
