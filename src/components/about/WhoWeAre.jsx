const WhoWeAre = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Our Approach
        </h2>

        {/* Intro */}
        <p className="text-gray-400 max-w-3xl mx-auto mb-10">
          We believe great events are built on strong planning and clear communication.
        </p>

        {/* Points */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <div className="border border-gray-700 rounded-xl px-6 py-5 text-left hover:border-gray-500 transition">
            <p className="text-gray-200">
              Personalised planning based on your vision and needs
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl px-6 py-5 text-left hover:border-gray-500 transition">
            <p className="text-gray-200">
              Transparent timelines and budgets
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl px-6 py-5 text-left hover:border-gray-500 transition">
            <p className="text-gray-200">
              Curated aesthetics with trusted vendors
            </p>
          </div>

          <div className="border border-gray-700 rounded-xl px-6 py-5 text-left hover:border-gray-500 transition">
            <p className="text-gray-200">
              Complete on-ground coordination
            </p>
          </div>
        </div>

        {/* Closing Line */}
        <p className="text-lg md:text-xl font-medium text-gray-200">
          You celebrate. We manage everything else.
        </p>

      </div>
    </section>
  );
};

export default WhoWeAre;
