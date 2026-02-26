import React, { useState } from 'react';
import ServiceBanner from '../components/ServiceBanner';
import Enquiry from '../components/Enquiry';

const ContactUs = () => {
  const bannerImage = '/banner/banner1.jpg';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ SEND DATA TO WHATSAPP
  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "9217017881";

    const message = `📩 *New Contact Form Message*  
---------------------------  
👤 *Name:* ${formData.firstName} ${formData.lastName}
📞 *Phone:* ${formData.phone}
💬 *Message:* ${formData.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");

    setStatus("Opening WhatsApp...");

    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="mt-40 bg-[#161717]">
      <ServiceBanner
        title="CONTACT US"
        subtitle="Home › Contact Us"
        backgroundImage={bannerImage}
      />

      <div className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-center px-4 lg:px-20 py-16 gap-10 bg-black text-white">

        {/* LEFT FORM */}
        <div className="w-full lg:w-1/2 bg-[#161717] text-[#daaf65] p-4 md:p-8 rounded-2xl shadow-xl border border-gray-800">
          <h2 className="text-3xl font-bold text-gold mb-6">
            Get in Touch With Us
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block mb-1 text-[#daaf65] font-semibold">First Name*</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#161717]border border-[#daaf65] text-white rounded-md px-4 py-2 focus:outline-none"
                  placeholder="Enter first name"
                />
              </div>

              <div>
                <label className="block mb-1 text-[#daaf65] font-semibold">Last Name*</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#161717] border border-[#daaf65] text-white rounded-md px-4 py-2 focus:outline-none"
                  placeholder="Enter last name"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-[#daaf65] font-semibold">Phone Number*</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full bg-[#161717] border border-[#daaf65] text-white rounded-md px-4 py-2 focus:outline-none"
                placeholder="Enter phone number"
              />
            </div>

            <div>
              <label className="block mb-1 text-[#daaf65] font-semibold">Message*</label>
              <textarea
                name="message"
                rows="5"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-[#161717] border border-[#daaf65] text-white rounded-md px-4 py-2 focus:outline-none"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gold ml-18 text-[#daaf65] hover:text-[#161717] border-2 font-semibold px-6 py-3 rounded-md hover:bg-[#daaf65] transition"
            >
              Submit
            </button>

            {status && (
              <p className="text-center text-sm text-gold mt-2">{status}</p>
            )}
          </form>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 rounded-2xl overflow-hidden shadow-xl border border-gray-800">
          <img
            src="/gallery/contact.jpeg"
            alt="Contact"
            className="w-full h-[400px] md:h-[550px] object-center"
          />
        </div>
      </div>

      <Enquiry />
    </div>
  );
};

export default ContactUs;
