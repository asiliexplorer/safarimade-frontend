// components/TanzaniaToursSlider.js
"use client";
import { useEffect, useState } from "react";
import { safariPackages, kilimanjaroPackages, wildebeestMigrationPackages, zanzibarPackages } from "../../../lib/mockData";

import Link from "next/link";

const TanzaniaToursSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  const tourPackages = [safariPackages, kilimanjaroPackages, wildebeestMigrationPackages, zanzibarPackages].flat();

  const getTourLocations = (tour) => {
    if (Array.isArray(tour?.destinations) && tour.destinations.length) {
      return tour.destinations;
    }

    if (Array.isArray(tour?.destinationsDetailed) && tour.destinationsDetailed.length) {
      return tour.destinationsDetailed
        .map((item) => item?.place)
        .filter(Boolean);
    }

    return [];
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % tourPackages.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + tourPackages.length) % tourPackages.length
    );
  };

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  // Calculate visible cards based on screen size
  useEffect(() => {
    const getVisibleCards = () => {
      if (typeof window === "undefined") return 3;
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    };

    const handleResize = () => {
      setVisibleCards(getVisibleCards());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getVisiblePackages = () => {
    const packages = [];
    for (let i = 0; i < visibleCards; i++) {
      const index = (currentSlide + i) % tourPackages.length;
      packages.push(tourPackages[index]);
    }
    return packages;
  };

  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-25 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Professional Header with View All */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-4">
          <div className="mb-6 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-50 border border-green-100 mb-4">
              <span className="w-2 h-2 bg-[#8B6F47] rounded-full mr-2"></span>
              <span className="text-sm font-medium text-[#8B6F47]">
                POPULAR TOURS
              </span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-4">
              Tanzania <span className="text-[#8B6F47]">Safari</span> Packages
            </h2>
            <p className="text-xl  w-full  text-gray-600 max-w-4xl">
              Experience the ultimate African adventure with our carefully curated safari packages
            </p>
          </div>
          <a
            href="/packages"
            className="group flex items-center text-[#8B6F47] font-semibold text-lg hover:text-[#6B5A3D] transition-colors"
          >
            View All Packages
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>

        {/* Slider Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-6 z-10 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-6 z-10 w-14 h-14 bg-white rounded-2xl shadow-2xl flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-100 hover:scale-110"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {getVisiblePackages().map((tour, index) => {
              const locations = getTourLocations(tour);
              const packagePrice = tour.priceFrom || tour.price || "On request";
              const packageCurrency = tour.currency || "USD";

              return (
                <Link href={`/packages/${tour.id}`} key={tour.id ?? tour.slug ?? index}>
                  <div
                    className="group bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-3"
                  >
                    {/* Image Section with Overlay */}
                    <div className="relative h-60 overflow-hidden">
                      <img
                        src={tour.mainImage || tour.image || "/images/placeholder-tour.jpg"}
                        alt={tour.name}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                        <div className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-2xl shadow-lg">
                          <span className="font-bold text-gray-900 text-md">
                            {tour.duration} Days
                          </span>
                        </div>
                        {tour.category && (
                          <div className="bg-gradient-to-r from-[#8B6F47] to-[#6B5A3D] text-white px-2 py-1 rounded-2xl shadow-lg">
                            <span className="font-semibold text-sm">
                            {tour.category.toLowerCase()}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-2">
                      <h3 className="text-xl font-bold text-gray-900  leading-tight line-clamp-2">
                        {tour.name}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600">
                        {tour.shortDescription || tour.experienceSummary || tour.fullDescription || "Discover one of Tanzania's standout journeys."}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-2 text-gray-600 text-sm mb-5">
                        {locations.slice(0, 3).map((location, locIndex) => (
                          <span
                            key={`${location}-${locIndex}`}
                            className="flex bg-green-100 backdrop-blur-sm p-2 border border-white/100 rounded-md  text-black items-center px-2 py-1"
                          >
                            {location}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between items-center pt-2 border-t border-gray-200">
                        <div>
                          <span className="text-xl font-bold text-[#8B6F47]">
                            {typeof packagePrice === "number" ? `$${packagePrice}` : packagePrice}
                          </span>
                          <span className="block text-sm text-gray-500">
                            {packageCurrency === "USD" ? "per person" : packageCurrency}
                          </span>
                        </div>
                        <button className="group relative bg-gradient-to-r from-[#8B6F47] to-[#6B5A3D] text-white px-8 py-2 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden">
                          <span className="relative z-10">Read More</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#6B5A3D] to-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({
              length: Math.ceil(tourPackages.length / visibleCards),
            }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index * visibleCards)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  Math.floor(currentSlide / visibleCards) === index
                    ? "bg-gradient-to-r from-[#8B6F47] to-[#6B5A3D] w-12"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Additional Information */}
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default TanzaniaToursSlider;
