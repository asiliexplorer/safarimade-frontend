// components/TanzaniaWonders.js
"use client"
import { useState } from 'react';
import { safariPackages, kilimanjaroPackages, wildebeestMigrationPackages, zanzibarPackages } from "../../../lib/mockData";

import Link from 'next/link';

const TanzaniaWonders = () => {
  const [activeSlides, setActiveSlides] = useState({});
  const [dragState, setDragState] = useState(null);

 const allPackages = [...safariPackages, ...kilimanjaroPackages, ...wildebeestMigrationPackages, ...zanzibarPackages];

  const getImages = (pkg) => {
    if (!pkg) return ["/images/placeholder-tour.jpg"];
    const mainImage = pkg.mainImage;
    const gallery = Array.isArray(pkg.gallery) ? pkg.gallery.filter(Boolean) : [];
    const uniqueGallery = gallery.filter((g) => g !== mainImage);
    const otherImages = uniqueGallery.slice(0, 3);
    return [mainImage, ...otherImages];
  };

  const getBestFor = (pkg) => (Array.isArray(pkg?.bestFor) ? pkg.bestFor : []);

  const setSlide = (pkgId, nextIndex, images) => {
    const total = images.length;
    if (!total) return;
    setActiveSlides((prev) => ({
      ...prev,
      [pkgId]: (nextIndex + total) % total,
    }));
  };

  const goPrev = (event, pkgId, images) => {
    event.preventDefault();
    event.stopPropagation();
    setSlide(pkgId, (activeSlides[pkgId] ?? 0) - 1, images);
  };

  const goNext = (event, pkgId, images) => {
    event.preventDefault();
    event.stopPropagation();
    setSlide(pkgId, (activeSlides[pkgId] ?? 0) + 1, images);
  };

  const handlePointerDown = (event, pkgId) => {
    if (event.button !== undefined && event.button !== 0) return;
    setDragState({ pkgId, startX: event.clientX, lastX: event.clientX });
  };

  const handlePointerMove = (event) => {
    if (!dragState) return;
    setDragState((prev) => (prev ? { ...prev, lastX: event.clientX } : prev));
  };

  const finishDrag = () => {
    if (!dragState) return;

    const deltaX = dragState.lastX - dragState.startX;
    const threshold = 40;
    const images = getImages(allPackages.find((item) => item.id === dragState.pkgId));

    if (Math.abs(deltaX) > threshold && images.length > 1) {
      setSlide(dragState.pkgId, (activeSlides[dragState.pkgId] ?? 0) + (deltaX < 0 ? 1 : -1), images);
    }

    setDragState(null);
  };

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
            {allPackages.slice(0, 6).map((pkg, index) => (
              <div key={pkg.id ?? pkg.slug ?? index} className="group bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer">
              {(() => {
                const images = getImages(pkg);
                const currentSlide = activeSlides[pkg.id] ?? 0;
                  const currentImage = images[currentSlide] || pkg.mainImage || pkg.image || "/images/placeholder-tour.jpg";

                return (
                  <div
                    className="relative h-[19rem] sm:h-64 overflow-hidden select-none"
                    onPointerDown={(event) => handlePointerDown(event, pkg.id)}
                    onPointerMove={handlePointerMove}
                    onPointerUp={finishDrag}
                    onPointerCancel={finishDrag}
                    onPointerLeave={finishDrag}
                  >
                    <img
                      src={currentImage}
                      alt={pkg.name}
                      draggable={false}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {images.length > 1 ? (
                      <>
                        <button
                          type="button"
                          aria-label="Previous image"
                          onClick={(event) => goPrev(event, pkg.id, images)}
                          className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#465b2d] shadow-lg backdrop-blur transition hover:bg-white"
                        >
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                          </svg>
                        </button>
                        <button
                          type="button"
                          aria-label="Next image"
                          onClick={(event) => goNext(event, pkg.id, images)}
                          className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-2 text-[#465b2d] shadow-lg backdrop-blur transition hover:bg-white"
                        >
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </>
                    ) : null}

                    <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/35 px-3 py-2 backdrop-blur-sm">
                      {images.map((_, index) => (
                        <span
                          key={`${pkg.id}-${index}`}
                          className={`h-2 w-2 rounded-full transition-all ${
                            index === currentSlide ? 'w-5 bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>

                    <div className="absolute left-3 top-3 rounded-full bg-[#8B6F47] px-3 py-1.5 text-sm font-semibold text-white shadow-md">
                      {currentSlide + 1}/{images.length || 1}
                    </div>
                  </div>
                );
              })()}

                <div className="p-5 flex-grow flex flex-col bg-white">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <span className="bg-[#8B6F47] text-white text-lg font-semibold px-3 py-2 rounded-full whitespace-nowrap">
                      {pkg.duration} Days
                    </span>
                    <span className="rounded-full bg-white px-3 py-2 text-lg font-semibold text-[#8B6F47] whitespace-nowrap border border-gray-200">
                      ${pkg.priceFrom ?? pkg.price ?? "On request"} {pkg.currency ?? "USD"}
                    </span>
                  </div>

                  <div >
                    <Link href={`/packages/${pkg.id}`} className="block">
                      <h3 className="text-gray-700 text-xl sm:text-2xl font-bold leading-tight mb-2 line-clamp-2 hover:text-[#465b2d] transition-colors">
                        {pkg.name}
                      </h3>
                    </Link>
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
                          {getBestFor(pkg).map((tag) => (
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
                       
                        <p className="text-sm font-bold text-gray-900 mb-1 truncate">by {pkg.offeredBy || "Asili Explorer Safaris"}</p>
                        {/* <Link href={`/packages/${pkg.id}`} className="text-sm font-semibold text-[#465b2d] hover:text-[#324120] transition-colors">
                          View details
                        </Link> */}
                        
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
            
          ))}
        </div>

        {/* CTA Section */}
        
      </div>
    </section>
  );
};

export default TanzaniaWonders;
