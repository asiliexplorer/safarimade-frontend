"use client"
import { useState, useEffect } from 'react';

const TwoCardLayout = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Card */}
        <div className={`transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Side - Text & Button */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#465b2d]/10 px-4 py-2 rounded-full mb-4">
                    <div className="w-2 h-2 bg-[#465b2d] rounded-full animate-pulse"></div>
                    <span className="text-[#465b2d] text-sm font-bold">Safari Trip Booking</span>
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-[#465b2d] mb-4 leading-tight">
                    LET US CREATE YOUR{' '}
                    <span className="bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] bg-clip-text text-transparent">
                      TAILOR—MADE TRIP
                    </span>
                  </h1>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] rounded-full mb-4"></div>
                  <p className="text-lg text-slate-700 mb-2 font-semibold">
                    RECEIVE A FREE, NO OBLIGATION QUOTE
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-semibold text-slate-800">
                    START PLANNING YOUR DREAM TRIP
                  </h2>
                  <p className="text-slate-600 leading-relaxed">
                    Experience the ultimate personalized journey with our expert travel planners. 
                    We create bespoke itineraries that match your dreams and preferences perfectly.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button className="bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white font-bold py-4 px-8 rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex-1 text-center">
                      GET FREE QUOTE
                    </button>
                    <button className="border-2 border-[#465b2d] text-[#465b2d] font-bold py-4 px-8 rounded-xl hover:bg-[#465b2d] hover:text-white transition-all duration-300 flex-1 text-center">
                      VIEW ITINERARIES
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="flex-1">
                <div className="h-60 lg:h-100 min-h-[100%] relative overflow-hidden">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1661847607482-8f90730de7e5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387"
                    alt="Tailor-made trip"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:bg-gradient-to-l"></div>
                  
                  {/* Image Overlay Text */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <p className="text-sm opacity-90">Personalized Journeys</p>
                    <p className="text-xl font-bold">Your Dream Vacation Awaits</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/60 shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              
              {/* Left Side - Image */}
              <div className="flex-1 order-2 lg:order-1">
                <div className="h-64 lg:h-full min-h-[400px] relative overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                    alt="Contact expert"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-transparent lg:bg-gradient-to-r"></div>
                  
                  {/* Image Overlay Text */}
                  <div className="absolute bottom-6 right-6 text-white text-right">
                    <p className="text-sm opacity-90">24/7 Support</p>
                    <p className="text-xl font-bold">We're Here to Help</p>
                  </div>
                </div>
              </div>

              {/* Right Side - Contact Info */}
              <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 bg-[#8B5A4A]/10 px-4 py-2 rounded-full mb-4">
                    <div className="w-2 h-2 bg-[#8B5A4A] rounded-full animate-pulse"></div>
                    <span className="text-[#8B5A4A] text-sm font-bold">Contact Us</span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-4">
                    CALL AN EXPERT
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#8B5A4A] to-amber-600 rounded-full mb-4"></div>
                  <p className="text-slate-600 font-medium">
                    OUR SPECIALISTS ARE HERE TO ASSIST YOU
                  </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-6">
                  <div className="bg-slate-50/80 rounded-xl p-6 border border-slate-200/60">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between group hover:bg-white/60 p-3 rounded-lg transition-all duration-300">
                        <span className="font-bold text-slate-700 text-lg">USA:</span>
                        {/* <span className="text-xl font-semibold text-[#465b2d] group-hover:text-[#3a4a24] transition-colors duration-300">
                          +255 0767140150

                        </span> */}
                      </div>
                      <div className="flex items-center justify-between group hover:bg-white/60 p-3 rounded-lg transition-all duration-300">
                        <span className="font-bold text-slate-700 text-lg">UK:</span>
                        {/* <span className="text-xl font-semibold text-[#465b2d] group-hover:text-[#3a4a24] transition-colors duration-300">
                          +255 0767140150
                        </span> */}
                      </div>
                    </div>
                  </div>

                  {/* Other Countries */}
                  <div className="text-center pt-4">
                    <div className="inline-block bg-amber-100/50 px-6 py-3 rounded-full border border-amber-200/50">
                      <span className="text-lg font-bold text-[#8B5A4A]">OTHER COUNTRIES</span>
                    </div>
                    <p className="text-slate-600 mt-3 text-sm">
                      Contact us for international numbers and local representatives in your region.
                    </p>
                  </div>

                  {/* Additional Contact Info */}
                  <div className="flex flex-wrap gap-4 justify-center pt-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                      </svg>
                      <span>info@safaritripbooking.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                      </svg>
                      <span>Arusha, Tanzania</span>
                    </div>
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

export default TwoCardLayout;