"use client";
import { useGetReviewsQuery } from "../../redux/features/siteSetiing/review/ReviewApi";
import React, { useState, useEffect, useRef } from "react";

const TestimonialSlider = () => {
  // fetch public & enabled reviews (frontend carousel)
  const {
    data: apiResp,
    isLoading,
    isFetching,
    isError,
  } = useGetReviewsQuery({
    enabled: "true",
    featured: undefined,
    limit: 12,
    sort: "-featured,-date",
  });
console.log(apiResp);
  // API might return { success: true, data: [...] } or directly an array depending on backend.
  const reviews =
    (apiResp && (Array.isArray(apiResp) ? apiResp : apiResp.data)) || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedCard, setExpandedCard] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const intervalRef = useRef(null);

  // autoplay: advance by 1 card every 3s (pause on hover)
  useEffect(() => {
    if (isHovered) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    // clear existing
    if (intervalRef.current) clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(reviews.length || 1, 1));
      setExpandedCard(null);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered, reviews.length]);

  // next / prev
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(reviews.length || 1, 1));
    setExpandedCard(null);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + reviews.length) % Math.max(reviews.length || 1, 1)
    );
    setExpandedCard(null);
  };

  const toggleReadMore = (id) =>
    setExpandedCard((prev) => (prev === id ? null : id));

  // compute transform:
  // We present 4 items per full row on large screens (same as original layout).
  // For transform we base on currentIndex and card width fraction (25%).
  const transformPercent = currentIndex * 25; // 25% per card for 4-col layout
  const sliderTransform = `translateX(-${transformPercent}%)`;

  // fallback testimonials (in case API empty) — keeps UX consistent
  const fallback = [
    {
      _id: "fallback-1",
      author: "terenceb480",
      date: "19 October 2025",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=100&h=100&fit=crop",
      content:
        "My wife and I had an amazing experience with Tanzania Specialist from start to finish, their team went above and beyond to make our safari unforgettable.",
    },
    // ... you can copy a few of your static items if desired
  ];

  const items = reviews.length > 0 ? reviews : fallback;

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#465b2d] mb-4">
            WHAT TRAVELLERS SAY
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-[#8B5A4A] mb-6">
            GENUINE REVIEWS FROM OUR GUESTS
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] rounded-full mx-auto" />
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Loading / Error */}
          {isLoading && (
            <div className="text-center py-12">Loading reviews...</div>
          )}
          {isError && (
            <div className="text-center py-12 text-red-500">
              Failed to load reviews.
            </div>
          )}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: sliderTransform }}
            >
              {items.map((r) => {
                const id = r._id || r.id || r.author + (r.date ?? "");
                const avatar =
                  r.avatarUrl ||
                  r.image ||
                  "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop";
                const username = r.author || r.username || "Guest";
                const reviewText = r.content || r.review || "";

                return (
                  <div
                    key={id}
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 px-2"
                  >
                    <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 h-full hover:shadow-lg transition-shadow duration-300">
                      {/* User Info */}
                      <div className="flex items-start gap-3 mb-3">
                        <img
                          src={avatar}
                          alt={username}
                          className="w-12 h-12 rounded-full object-cover border-2 border-[#465b2d]"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="text-base font-bold text-[#465b2d] truncate">
                              {username}
                            </h3>
                            <span className="text-xs text-slate-500 whitespace-nowrap ml-2">
                              {r.date
                                ? new Date(r.date).toLocaleDateString()
                                : ""}
                            </span>
                          </div>

                          {/* Star Rating */}
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < (r.rating ?? 5)
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Review Text */}
                      <div className="mb-3">
                        <p className="text-slate-700 text-sm leading-relaxed">
                          {expandedCard === id
                            ? reviewText
                            : `${reviewText.substring(0, 120)}${
                                reviewText.length > 120 ? "..." : ""
                              }`}
                        </p>
                      </div>

                      {/* Read More */}
                      {reviewText.length > 120 && (
                        <button
                          onClick={() => toggleReadMore(id)}
                          className="text-xs text-[#465b2d] font-semibold hover:text-[#3a4a24] transition-colors duration-200 flex items-center gap-1"
                        >
                          {expandedCard === id ? "Read less" : "Read more"}
                          <svg
                            className={`w-3 h-3 transition-transform duration-200 ${
                              expandedCard === id ? "rotate-180" : ""
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 border border-slate-200 hover:bg-white shadow-md transition-all duration-300 z-10"
          >
            <svg
              className="w-5 h-5 text-slate-700"
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
            aria-label="Next"
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 border border-slate-200 hover:bg-white shadow-md transition-all duration-300 z-10"
          >
            <svg
              className="w-5 h-5 text-slate-700"
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

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setExpandedCard(null);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] scale-125"
                    : "bg-slate-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
