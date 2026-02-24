const Founder = () => {
  return (
    <section className='bg-black pt-10 lg:pt-30 pb-10'>
      <div className='max-w-8xl mx-auto px-4 lg:px-16'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-14 items-center'>
          {/* IMAGE */}
          <div className='relative group order-2 lg:order-1'>
            <img
              src='/founder/founder1.jpeg'
              alt='Founder - Suwi Aggarwal'
              className='w-full h-[420px] object-cover rounded-3xl shadow-xl transition-transform duration-500 group-hover:scale-[1.02]'
            />
            <div className='absolute inset-0 rounded-3xl ring-1 ring-black/10' />
          </div>

          {/* CONTENT */}
          <div className='order-1 lg:order-2'>
            <span className='text-sm uppercase tracking-widest text-zinc-300 font-semibold'>
              Meet the Visionary
            </span>

            <h2 className='mt-3 text-3xl md:text-4xl font-bold text-[#D4A017] leading-tight'>
              Meet Our Founder
            </h2>

            <h4 className='mt-2 text-lg font-semibold text-[#D4A017]'>
              Founder & Event Director —{' '}
              <span className='text-zinc-300'>Suwi Aggarwal</span>
            </h4>

            <p className='mt-6 text-[#f5e7c3] leading-relaxed text-lg'>
              Meet & Greet Affairs was founded by Suwi Aggarwal, who brings over
              15 years of rich client service experience, including a decade in
              the banking industry, into the world of celebrations. Her journey
              shaped a deep understanding of unspoken expectations, calm
              execution, and refined attention to detail.
            </p>

            <p className='mt-4 text-[#f5e7c3] leading-relaxed text-lg'>
              What began as a passion for meaningful gatherings evolved into a
              professional calling — transforming moments into lasting memories
              through thoughtful planning and elegant design. Suwi believes true luxury is intentional, personal, and
              beautifully effortless — a philosophy reflected in every
              experience curated by Meet & Greet Affairs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
