// components/GetInspiredSection.js
"use client";

import Link from "next/link";
import { Star, MapPin, Zap, Home, Target, Trophy, Heart, Mountain, Leaf } from "lucide-react";

const GetInspiredSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#ff6b4a]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B6F47]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-[#ff6b4a]/10 px-4 py-2 rounded-full border border-[#ff6b4a]/20 mb-6">
            <Zap className="w-4 h-4 text-[#ff6b4a]" />
            <span className="text-sm font-bold text-[#ff6b4a] uppercase">Get Inspired</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
            Discover & Explore <span className="text-[#8B6F47]">Tanzania</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Embark on an unforgettable journey through Tanzania. From safari adventures to stunning Zanzibar beaches, explore everything this beautiful country has to offer.
          </p>
        </div>

        {/* Cards Grid - 2x2 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Card 1: Customer Experiences */}
          <div className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Happy travelers in Tanzania"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1">
                <Star className="w-3 h-3 text-[#8B6F47] fill-[#8B6F47]" />
                <span className="text-xs font-bold text-[#8B6F47]">TOP RATED</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-start gap-3 mb-4">
                <Star className="w-6 h-6 text-[#ff6b4a] flex-shrink-0" />
                <h3 className="text-2xl font-bold text-slate-900">Customer Experiences</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Join thousands of travelers who've experienced Tanzania with us. Discover authentic stories and create unforgettable memories.
              </p>
              
              {/* Ratings */}
              <div className="grid grid-cols-2 gap-4 mb-6 pb-6 border-b border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-black text-[#8B6F47]">4.9/5</div>
                  <div className="flex justify-center gap-0.5 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">3455+ reviews</span>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-[#8B6F47]">4.7/5</div>
                  <div className="flex justify-center gap-0.5 my-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">828+ reviews</span>
                </div>
              </div>

              <Link href="/blog" className="inline-flex items-center gap-2 bg-[#8B6F47] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6B5A3D] transition duration-300 transform hover:scale-105">
                Read Stories
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 2: National Parks */}
          <div className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1661894578639-e8c257a7fe4e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tanzania National Parks"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1">
                <Trophy className="w-3 h-3 text-[#8B6F47]" />
                <span className="text-xs font-bold text-[#8B6F47]">WILDLIFE</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-start gap-3 mb-4">
                <MapPin className="w-6 h-6 text-[#ff6b4a] flex-shrink-0" />
                <h3 className="text-2xl font-bold text-slate-900">National Parks</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Experience the wonders of Serengeti, Ngorongoro, and beyond. Witness the Great Migration and extraordinary wildlife with our expert guides.
              </p>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-black text-[#8B6F47]">15+</div>
                    <span className="text-xs text-gray-500">Parks</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#8B6F47]">500K</div>
                    <span className="text-xs text-gray-500">Wildlife</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#8B6F47]">Endless</div>
                    <span className="text-xs text-gray-500">Views</span>
                  </div>
                </div>
              </div>

              <Link href="/parks" className="inline-flex items-center gap-2 bg-[#8B6F47] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6B5A3D] transition duration-300 transform hover:scale-105">
                Explore Parks
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Card 3: Activities */}
          <div className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1709402606682-400133d92ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tanzania Activities"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1">
                <Target className="w-3 h-3 text-[#8B6F47]" />
                <span className="text-xs font-bold text-[#8B6F47]">ADVENTURE</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-start gap-3 mb-4">
                <Zap className="w-6 h-6 text-[#ff6b4a] flex-shrink-0" />
                <h3 className="text-2xl font-bold text-slate-900">Activities</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hot air balloon rides, hiking, cultural tours, and more. Experience the thrill of adventure in the heart of Africa.
              </p>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Excitement Level</span>
                    <span className="font-bold text-[#8B6F47]">⭐⭐⭐⭐⭐</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-bold text-[#8B6F47]">Full Day</span>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 bg-[#8B6F47] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6B5A3D] transition duration-300 transform hover:scale-105">
                Discover Activities
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Card 4: Accommodations */}
          <div className="group bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2">
            <div className="relative h-80 overflow-hidden">
              <img
                src="https://plus.unsplash.com/premium_photo-1664303913205-edadd765441f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Tanzania Accommodations"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1 flex items-center gap-1">
                <Home className="w-3 h-3 text-[#8B6F47]" />
                <span className="text-xs font-bold text-[#8B6F47]">LUXURY</span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-start gap-3 mb-4">
                <Home className="w-6 h-6 text-[#ff6b4a] flex-shrink-0" />
                <h3 className="text-2xl font-bold text-slate-900">Accommodations</h3>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From luxury lodges to authentic camps, find your perfect retreat. Every accommodation is handpicked for comfort and authenticity.
              </p>
              <div className="mb-6 pb-6 border-b border-gray-200">
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div>
                    <div className="text-2xl font-black text-[#8B6F47]">50+</div>
                    <span className="text-xs text-gray-500">Lodges</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#8B6F47]">24/7</div>
                    <span className="text-xs text-gray-500">Service</span>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-[#8B6F47]">⭐⭐⭐⭐</div>
                    <span className="text-xs text-gray-500">Quality</span>
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center gap-2 bg-[#8B6F47] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6B5A3D] transition duration-300 transform hover:scale-105">
                View Options
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-20 pt-12 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-center text-slate-900 mb-12">Explore by Interest</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { label: "SAFARIS", href: "/packages", icon: Trophy },
              { label: "KILIMANJARO", href: "/kilimanjaro", icon: Mountain },
              { label: "ZANZIBAR", href: "/zanzibar", icon: MapPin },
              { label: "NATIONAL PARKS", href: "/parks", icon: Leaf },
              { label: "HONEYMOON", href: "/", icon: Heart },
            ].map((item, i) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={i}
                  href={item.href}
                  className="group relative bg-white border-2 border-[#8B6F47] text-[#8B6F47] px-4 py-4 rounded-xl font-semibold text-center transition-all duration-300 hover:bg-[#8B6F47] hover:text-white hover:shadow-lg hover:-translate-y-1 overflow-hidden"
                >
                  <IconComponent className="w-6 h-6 mx-auto mb-2 group-hover:text-white text-[#8B6F47]" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInspiredSection;
