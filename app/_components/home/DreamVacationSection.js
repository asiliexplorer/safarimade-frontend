"use client"
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Rocket, Users, Package, Award } from 'lucide-react';

const TanzaniaVacation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Wildlife Safari',
      description: 'Experience the Great Migration'
    },
    {
      image: 'https://images.unsplash.com/photo-1723643750330-c868b56af36f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTl8fHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=500',
      title: 'Zanzibar Beaches',
      description: 'Pristine white sand beaches'
    },
    {
      image: 'https://plus.unsplash.com/premium_photo-1661870399335-f5efe423b78d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
      title: 'Kilimanjaro',
      description: 'Conquer the Roof of Africa'
    }
  ];

  // Faster auto slide effect (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12 md:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 items-center">
          
          {/* Left Side - Text Content */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-3 bg-[#8B6F47]/10 px-5 py-3 rounded-full border border-[#8B6F47]/20 backdrop-blur-sm">
                <div className="w-3 h-3 bg-[#8B6F47] rounded-full animate-pulse"></div>
                <span className="text-[#8B6F47] text-sm md:text-base font-bold tracking-wide">SAFARI TRIP BOOKING</span>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-4 leading-tight">
                  BOOK YOUR DREAM
                  <span className="block text-[#8B6F47] text-5xl md:text-6xl lg:text-7xl mt-2">
                    TANZANIAN VACATION
                  </span>
                </h1>
                <div className="flex gap-2">
                  <div className="w-20 h-1.5 bg-[#8B6F47] rounded-full"></div>
                  <div className="w-10 h-1.5 bg-[#8B6F47]/30 rounded-full"></div>
                </div>
              </div>

              {/* Main Description with better styling */}
              <div className="space-y-5 text-slate-700">
                <p className="text-lg md:text-xl leading-relaxed">
                  Tanzania is the <span className="font-bold text-[#8B6F47]">ultimate destination</span> for an unforgettable adventure. Experience world-class <span className="font-semibold">wildlife safaris</span>, pristine <span className="font-semibold">Zanzibar beaches</span>, and the iconic <span className="font-semibold">Mount Kilimanjaro</span>.
                </p>
                <p className="text-lg md:text-xl leading-relaxed">
                  We are <span className="font-black text-slate-900">Tanzania Specialists</span> with an extensive range of carefully curated vacation packages designed for every traveler.
                </p>
              </div>

              {/* Highlighted Features
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: '🦁', label: 'Safari Tours', desc: '8,000+ Packages' },
                  { icon: '⛱️', label: 'Beach Resorts', desc: 'Premium Stays' },
                  { icon: '⛰️', label: 'Kilimanjaro', desc: 'Expert Guides' }
                ].map((feature, idx) => (
                  <div key={idx} className="bg-white/60 backdrop-blur-md rounded-xl p-4 border border-white/40 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <div className="text-3xl mb-2">{feature.icon}</div>
                    <h3 className="font-bold text-slate-900 text-sm">{feature.label}</h3>
                    <p className="text-xs text-slate-600">{feature.desc}</p>
                  </div>
                ))}
              </div> */}

              {/* Custom Trip Section - Enhanced */}
              {/* <div className="bg-[#8B6F47]/10 rounded-2xl p-7 border-2 border-[#8B6F47]/30 backdrop-blur-sm">
                <h3 className="text-lg font-bold text-slate-900 mb-3">✨ Customize Your Journey</h3>
                <p className="text-slate-700 leading-relaxed">
                  Choose from our popular itineraries or build your perfect trip. Tell us which parks, mountains, and islands you want to explore, and we'll design your ideal Tanzania vacation.
                </p>
              </div> */}

              {/* CTA Buttons - More Prominent */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/packages" className="bg-[#8B6F47] text-white font-bold py-4 px-8 rounded-xl hover:shadow-2xl hover:scale-105 transform transition-all duration-300 flex-1 text-center text-lg shadow-lg">
                  EXPLORE ITINERARIES
                </Link>
                <Link href="/travel-proposal" className="bg-white text-[#8B6F47] font-bold py-4 px-8 rounded-xl hover:bg-[#8B6F47] hover:text-white border-2 border-[#8B6F47] transform transition-all duration-300 flex-1 text-center text-lg">
                  CREATE CUSTOM TRIP
                </Link>
              </div>


            </div>
          </div>

          {/* Right Side - Image Slider - Enhanced */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              {/* Main Slider */}
              <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl overflow-hidden">
                <div className="relative h-[350px] md:h-[450px] lg:h-[520px] group">
                  {/* Slides */}
                  {slides.map((slide, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-all duration-1000 ${
                        index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                      }`}
                    >
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Enhanced Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                      
                      {/* Slide Text */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                        <h3 className="text-3xl md:text-4xl font-black mb-2">{slide.title}</h3>
                        <p className="text-base md:text-lg font-medium text-white/90">{slide.description}</p>
                      </div>
                    </div>
                  ))}

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 backdrop-blur-md rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/30 hover:bg-white/60 backdrop-blur-md rounded-full p-3 transition-all duration-300 opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Slide Indicators - Enhanced */}
                  <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentSlide 
                            ? 'bg-white w-10 h-3' 
                            : 'bg-white/50 w-3 h-3 hover:bg-white/70'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Us Section - Redesigned */}
              <div className="bg-[#8B6F47]/10 backdrop-blur-md rounded-2xl border border-[#8B6F47]/20 p-8 shadow-lg">
                <div className="flex items-start gap-4 mb-6">
                  <Award className="w-8 h-8 text-[#8B6F47] flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                      EXPLORE TANZANIA THE RIGHT WAY
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#8B6F47] rounded-full flex-shrink-0"></div>
                    <p className="text-slate-700 text-base leading-relaxed">
                      <span className="font-bold text-[#8B6F47]">50,000+ travelers</span> have created unforgettable memories with us. Read their stories on Tripadvisor and see photos from their Tanzania adventures.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#8B6F47] rounded-full flex-shrink-0"></div>
                    <p className="text-slate-700 text-base leading-relaxed">
                      Our <span className="font-bold text-[#8B6F47]">local team</span> in Arusha knows Tanzania inside and out. We oversee every detail of your journey from start to finish.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-1 bg-[#8B6F47] rounded-full flex-shrink-0"></div>
                    <p className="text-slate-700 text-base leading-relaxed">
                      <span className="font-bold text-[#8B6F47]">Best prices guaranteed</span> with premium quality experiences. Your Tanzania adventure awaits!
                    </p>
                  </div>
                </div>

                {/* Trust Stats - Moved to right side */}
                <div className="mt-8 pt-8 border-t border-[#8B6F47]/20">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <Users className="w-8 h-8 text-[#8B6F47] mx-auto mb-2" />
                      <div className="text-3xl font-black text-[#8B6F47]">50K+</div>
                      <p className="text-sm text-slate-600 font-medium mt-2">Happy Travelers</p>
                    </div>
                    <div className="text-center">
                      <Package className="w-8 h-8 text-[#8B6F47] mx-auto mb-2" />
                      <div className="text-3xl font-black text-[#8B6F47]">150+</div>
                      <p className="text-sm text-slate-600 font-medium mt-2">Safari Packages</p>
                    </div>
                    <div className="text-center">
                      <Award className="w-8 h-8 text-[#8B6F47] mx-auto mb-2" />
                      <div className="text-3xl font-black text-[#8B6F47]">20+</div>
                      <p className="text-sm text-slate-600 font-medium mt-2">Years Experience</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center gap-2 text-[#8B6F47] font-bold text-lg">
                    <span>Ready to start your adventure? Let's go!</span>
                    <Rocket className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanzaniaVacation;
