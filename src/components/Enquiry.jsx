import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function Enquiry() {
  const [openForm, setOpenForm] = useState(false);

  // FORM STATES
  const [form, setForm] = useState({
    first: '',
    last: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SEND TO WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = '919217017881';

    const text = `
Enquiry Details:
------------------
First Name: ${form.first}
Last Name: ${form.last}
Phone: ${form.phone}
Message: ${form.message}
    `;

    const url =
      'https://wa.me/' + whatsappNumber + '?text=' + encodeURIComponent(text);

    window.open(url, '_blank');
  };

  return (
    <div className='relative bg-[#F4E8C1] mb-10 md:mb-0'>
      {/* MAIN SECTION */}
      <div className='text-center py-10 md:py-20'>
        <h1 className='text-2xl md:text-5xl font-serif text-[#926c0a]'>
          If Interested, Let's Talk
        </h1>

        <button
          onClick={() => setOpenForm(true)}
          className='mt-10 bg-[#b89034] text-white px-10 py-4 text-lg tracking-wide 
                     uppercase hover:bg-[#9d792c] transition-all cursor-pointer font-semibold rounded-lg'
        >
          Click Here
        </button>
      </div>

      {/* MODAL FORM */}
      <AnimatePresence>
        {openForm && (
          <>
            {/* BACKDROP */}
            <motion.div
              className='fixed inset-0 bg-black/40 z-40'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpenForm(false)}
            />

            {/* CENTER POPUP FORM */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ type: 'spring', stiffness: 120 }}
              className='
                fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                bg-white w-[92%] max-w-lg p-6 md:p-8 
                rounded-xl shadow-xl z-50
              '
            >
              {/* CLOSE BUTTON */}
              <div className='flex justify-end'>
                <button
                  onClick={() => setOpenForm(false)}
                  className='text-gray-600 hover:text-black'
                >
                  <X size={24} />
                </button>
              </div>

              {/* TITLE */}
              <h2 className='text-2xl md:text-3xl font-light mb-6 text-[#222] text-center md:text-left pr-0'>
                Enquire Now
              </h2>

              {/* FORM */}
              <form
                onSubmit={handleSubmit}
                className='flex flex-col gap-5 md:gap-6'
              >
                {/* FIRST NAME */}
                <div>
                  <label className='text-xs md:text-sm text-gray-600'>
                    FIRST NAME*
                  </label>
                  <input
                    type='text'
                    name='first'
                    value={form.first}
                    onChange={handleChange}
                    required
                    className='
                      w-full border border-gray-300 md:border-b md:border-gray-300 
                      p-3 md:p-2 rounded-lg md:rounded-none 
                      text-sm md:text-base 
                      focus:outline-none focus:border-black
                    '
                  />
                </div>

                {/* LAST NAME */}
                <div>
                  <label className='text-xs md:text-sm text-gray-600'>
                    LAST NAME*
                  </label>
                  <input
                    type='text'
                    name='last'
                    value={form.last}
                    onChange={handleChange}
                    required
                    className='
                      w-full border border-gray-300 md:border-b 
                      p-3 md:p-2 rounded-lg md:rounded-none 
                      text-sm md:text-base 
                      focus:outline-none focus:border-black
                    '
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className='text-xs md:text-sm text-gray-600'>
                    PHONE NUMBER*
                  </label>
                  <input
                    type='text'
                    name='phone'
                    value={form.phone}
                    onChange={handleChange}
                    required
                    className='
                      w-full border border-gray-300 md:border-b 
                      p-3 md:p-2 rounded-lg md:rounded-none 
                      text-sm md:text-base 
                      focus:outline-none focus:border-black
                    '
                  />
                </div>

                {/* MESSAGE */}
                <div>
                  <label className='text-xs md:text-sm text-gray-600'>
                    MESSAGE
                  </label>
                  <textarea
                    rows='3'
                    name='message'
                    value={form.message}
                    onChange={handleChange}
                    className='
                      w-full border border-gray-300 md:border-b 
                      p-3 md:p-2 rounded-lg md:rounded-none 
                      text-sm md:text-base resize-none 
                      focus:outline-none focus:border-black
                    '
                  ></textarea>
                </div>

                {/* SUBMIT */}
                <button
                  type='submit'
                  className='
                    bg-black text-white py-3 rounded-lg md:rounded 
                    text-sm md:text-base uppercase tracking-wide 
                    hover:bg-gray-800 transition-all
                  '
                >
                  Enquire Now
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
