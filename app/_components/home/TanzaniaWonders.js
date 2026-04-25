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
      <div className="mx-auto  px-4 sm:px-6 lg:px-8 widthclass" >
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
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {packages.slice(0, 6).map((pkg) => (
            <Link href={`/packages/${pkg.id}`} key={pkg.id} passHref>
              <div className="group bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
                <div className="relative h-76 sm:h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-center hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                  />
                

                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="relative w-full h-full object-cover  group-hover:scale-105 transition-transform duration-700"
                  />

                  
                </div>

                <div className="p-5 flex-grow flex flex-col bg-white">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="bg-[#8B6F47] text-white text-lg font-semibold px-3 py-2 rounded-full whitespace-nowrap">
                      {pkg.duration} Days
                    </span>
                    <span className="rounded-full bg-white px-3 py-2 text-lg font-semibold text-[#8B6F47] whitespace-nowrap border border-gray-200">
                      ${pkg.price}
                    </span>
                  </div>

                  <div >
                    <h3 className="text-gray-700 text-xl sm:text-2xl font-bold leading-tight mb-2 line-clamp-2">
                      {pkg.name}
                    </h3>
                  </div>
                  <div className="mb-4 space-y-2">
                    {/* <p className="text-sm text-gray-700">
                      <span className="font-semibold text-gray-900">Tanzania:</span> {pkg.tourType} • {pkg.comfortLevel} • Lodge & Tented Camp
                    </p> */}
                    <p className="text-lg text-gray-600 line-clamp-2">
                      {pkg.shortDescription}
                    </p>
                  </div>
                   <div className="flex mb-2 flex-wrap gap-2">
                          {['Mid Range Luxury', 'Private'].map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-[1rem] font-semibold text-gray-700"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                  

                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between gap-3 flex-wrap">
                      <div>
                       
                        <p className="text-sm font-bold text-gray-900 mb-1 truncate">by Asili Explorer Safaris</p>
                        
                      </div>
                      <div className="w-8 h-8 bg-[#465b2d] rounded-full flex items-center justify-center hover:bg-[#3a4a24] transition-colors duration-300 shadow-md flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
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
