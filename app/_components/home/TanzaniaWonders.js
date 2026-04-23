// components/TanzaniaWonders.js
"use client"
import { useState } from 'react';
import { mockPackages } from "../../../lib/mockData";

import Link from 'next/link';

const TanzaniaWonders = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

 const packages = mockPackages

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            YOUR GUIDE TO TANZANIA'S WONDERS
          </h2>
          <p className="text-xl text-[#465b2d] font-semibold mb-4">
            YOUR DREAM TRIP, OUR EXPERTISE
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] mx-auto rounded-full"></div>
        </div>

        {/* Packages Grid - Cleaner Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {packages.slice(0, 6).map((pkg) => (
            <Link href={`/packages/${pkg.id}`} key={pkg.id} passHref>
              <div className="group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-300 hover:shadow-xl">
                {/* Image Container */}
                <div className="relative h-80 w-full overflow-hidden bg-gray-200">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                  
                  {/* Enhanced Overlay Gradient for Better Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content Section */}
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  {/* Duration and Price */}
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="bg-[#465b2d] text-white text-xs font-semibold px-3 py-2 rounded-full whitespace-nowrap">
                      {pkg.duration} Days
                    </span>
                    <span className="text-xl font-bold text-white whitespace-nowrap">
                      ${pkg.price}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-3 leading-tight line-clamp-2">
                    {pkg.name}
                  </h3>

                  {/* Tags */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {['Safari', 'Adventure', 'Best Value'].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/80 bg-white/90 px-3 py-1 text-[11px] font-semibold text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description and Price */}
                  <div className="flex items-start gap-2">
                    <span className="text-sm text-gray-100 line-clamp-2">{pkg.shortDescription}</span>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-[#465b2d] transition-all duration-300 pointer-events-none" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default TanzaniaWonders;
