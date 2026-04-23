"use client"
import Link from 'next/link';
import { useState, useRef } from 'react';

const HeroSection = () => {
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '2025-11-22',
    checkOut: '2025-11-28',
    travelers: 2
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

  const stats = [
    { number: "69+", label: "Destinations" },
    { number: "150+", label: "Safari Packages" },
    { number: "22+", label: "Years Experience" },
    { number: "5820+", label: "Happy Travelers" }
  ];

  return (
    <section className="relative h-130 flex flex-col justify-between overflow-hidden py-20 ">
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
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Main Content */}
      <div className="z-10 w-full px-4 md:px-6 flex flex-col items-center">
        {/* Title */}
        <div className="text-center mb-8 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-3">
            Discover Your Dream{' '}
            <span className="text-[#FF6B4A]">
              African Safari
            </span>
          </h1>
          <p className="text-gray-200 text-lg">Find and book incredible safari experiences across Tanzania</p>
        </div>

        {/* Search Form */}
        <div className="w-full max-w-5xl bg-white/15 backdrop-blur-md rounded-xl border border-white/25 shadow-2xl p-6 md:p-8 mb-12">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Location */}
            <div className="flex flex-col">
              <label htmlFor="location" className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                Where
              </label>
              <input
                type="text"
                id="location"
                name="location"
                placeholder="Select destination"
                value={formData.location}
                onChange={handleChange}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
              />
            </div>

            {/* Check In Date */}
            <div className="flex flex-col">
              <label htmlFor="checkIn" className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                Check In
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
              />
            </div>

            {/* Check Out Date */}
            <div className="flex flex-col">
              <label htmlFor="checkOut" className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                Check Out
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                min={new Date().toISOString().split('T')[0]}
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white [color-scheme:dark] focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
              />
            </div>

            {/* Travelers */}
            <div className="flex flex-col">
              <label htmlFor="travelers" className="text-sm font-semibold text-white mb-2 uppercase tracking-wide">
                Travelers
              </label>
              <input
                type="number"
                id="travelers"
                name="travelers"
                value={formData.travelers}
                onChange={handleChange}
                min="1"
                className="px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#8B6F47]"
              />
            </div>

            {/* Search Button */}
            <div className="flex flex-col justify-end">
              <Link href='/travel-proposal'>
                <button
                  className="w-full bg-[#8B6F47] text-white font-bold py-3 rounded-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 uppercase tracking-wide"
                >
                  Search
                </button>
              </Link>
            </div>
          </form>
        </div>

        {/* Stats Section */}
        <div className="w-full max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 md:p-6 text-center hover:bg-white/15 transition-all duration-300"
              >
                <p className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</p>
                <p className="text-sm md:text-base text-gray-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
