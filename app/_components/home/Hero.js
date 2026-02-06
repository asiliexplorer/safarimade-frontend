"use client"
import Link from 'next/link';
import { useState, useRef } from 'react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    adults: 2,
    children: 0,
    arrivalDate: '2025-11-22'
  });

  const videoRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Trip planning form submitted:', formData);
  };

  const features = [
    "All trips are 100% tailor-made",
    "8-star customer reviews", 
    "Best value & free quotation",
    "Experts in Tanzania travel"
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
        >
          <source src='https://videos.pexels.com/video-files/11760783/11760783-uhd_2732_1440_30fps.mp4' type="video/mp4" />
        </video>

        {/* Optional overlay */}
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>

      {/* Main Content */}
      <div className=" z-10 w-full  px-4 md:px-6 py-18 md:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          
          {/* Left Content */}
          <div className="flex-1 text-center  lg:text-left text-white">
            <h1 className="text-4xl md:text-5xl w-[60%] lg:text-6xl font-bold leading-tight">
              Plan Your Dream Trip to{' '}
              <span className="bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] bg-clip-text text-transparent">
                Tanzania
              </span>
            </h1>
          </div>

          {/* Right Content - Form */}
          <div className="w-full max-w-md bg-white/15 mr-5 backdrop-blur-md rounded-xl border border-white/25 shadow-2xl p-5 sm:p-6">
            <h2 className="text-lg md:text-xl font-bold text-center text-white mb-4 tracking-wide">
              LET'S PLAN YOUR DREAM TRIP TOGETHER!
            </h2>

            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Adults */}
              <div>
                <label htmlFor="adults" className="block text-sm font-semibold text-white mb-1 uppercase tracking-wide">
                  ADULTS
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  value={formData.adults}
                  onChange={handleChange}
                  min="1"
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#465b2d]"
                />
              </div>

              {/* Arrival Date */}
              <div>
                <label htmlFor="arrivalDate" className="block text-sm font-semibold text-white mb-1 uppercase tracking-wide">
                  ESTIMATED ARRIVAL DATE
                </label>
                <input
                  type="date"
                  id="arrivalDate"
                  name="arrivalDate"
                  value={formData.arrivalDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-[#465b2d]"
                />
              </div>

              {/* Children */}
              <div>
                <label htmlFor="children" className="block text-sm font-semibold text-white mb-1 uppercase tracking-wide">
                  CHILDREN
                </label>
                <input
                  type="number"
                  id="children"
                  name="children"
                  value={formData.children}
                  onChange={handleChange}
                  min="0"
                  className="w-full px-3 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#465b2d]"
                />
              </div>

              {/* Submit */}
              <Link                 href='/travel-proposal'
>
              <button
                // type="submit"
                className="w-full bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white font-bold py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide mt-3"
              >
                START CUSTOMIZING
                </button>
              </Link>
            </form>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-10 absolute bottom-1 md:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-center  p-3 "
              >
                <div className="w-5 h-5 bg-[#465b2d] rounded-full flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white text-sm font-medium text-center">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
