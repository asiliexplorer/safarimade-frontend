"use client";
import { useGetReviewsQuery } from "../../redux/features/siteSetiing/review/ReviewApi";
import React, { useState, useEffect, useRef, useMemo } from "react";

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
  const [windowWidth, setWindowWidth] = useState(0);

  const intervalRef = useRef(null);

  // Track window width for responsive calculations
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate cards per view based on window width
  const getCardsPerView = () => {
    if (windowWidth < 640) return 1; // mobile
    if (windowWidth < 768) return 2; // sm
    if (windowWidth < 1024) return 3; // md
    return 4; // lg
  };

  const cardsPerView = useMemo(() => getCardsPerView(), [windowWidth]);
  const cardPercentage = useMemo(() => 100 / cardsPerView, [cardsPerView]);

  // autoplay: advance by cardsPerView every 3s (pause on hover)
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
      setCurrentIndex((prev) => (prev + cardsPerView) % Math.max(reviews.length || 1, 1));
      setExpandedCard(null);
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isHovered, reviews.length, cardsPerView]);

  // next / prev - advance by cardsPerView items
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + cardsPerView) % Math.max(reviews.length || 1, 1));
    setExpandedCard(null);
  };
  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - cardsPerView + reviews.length) % Math.max(reviews.length || 1, 1)
    );
    setExpandedCard(null);
  };

  const toggleReadMore = (id) =>
    setExpandedCard((prev) => (prev === id ? null : id));

  // compute transform based on responsive card width
  const transformPercent = currentIndex * cardPercentage;
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
    {
      _id: "fallback-2",
      author: "sarahm92",
      date: "15 November 2025",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      content:
        "The Kilimanjaro trek was an absolute highlight of my life! Professional guides, excellent accommodations, and breathtaking views. Highly recommended!",
    },
    {
      _id: "fallback-3",
      author: "johnsmith85",
      date: "8 November 2025",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content:
        "Outstanding safari experience! Saw all the Big Five and the team made every moment special. This company truly cares about their clients.",
    },
    {
      _id: "fallback-4",
      author: "emilyjones",
      date: "2 November 2025",
      rating: 4,
      avatarUrl:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content:
        "Amazing Zanzibar vacation! Beautiful beaches, great food, and wonderful local guides. The team organized everything perfectly.",
    },
    {
      _id: "fallback-5",
      author: "davidwilson",
      date: "25 October 2025",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      content:
        "First time on safari and it was incredible! The guides knew so much about wildlife. Every day brought new adventures and amazing photos.",
    },
    {
      _id: "fallback-6",
      author: "alessiamiller",
      date: "18 October 2025",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1519452575417-564c1401ecc0?w=100&h=100&fit=crop",
      content:
        "Fantastic family safari! Our kids had the time of their lives. The accommodations were perfect and the staff was incredibly accommodating.",
    },
    {
      _id: "fallback-7",
      author: "marcuschen",
      date: "12 October 2025",
      rating: 4,
      avatarUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      content:
        "Professional, organized, and knowledgeable. This company delivered exactly what they promised. The Serengeti migration was unforgettable.",
    },
    {
      _id: "fallback-8",
      author: "christinataylor",
      date: "5 October 2025",
      rating: 5,
      avatarUrl:
        "https://images.unsplash.com/photo-1534528741775-253ff2f8499a?w=100&h=100&fit=crop",
      content:
        "Best decision ever! The customized itinerary was perfect for our group. Every detail was thought through. Tanzania is now my favorite destination!",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 to-slate-100 py-8 sm:py-12 md:py-16 px-3 sm:px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#8B6F47] mb-2 sm:mb-3 md:mb-4">
            WHAT TRAVELLERS SAY
          </h1>
          <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#8B5A4A] mb-4 md:mb-6">
            GENUINE REVIEWS FROM OUR GUESTS
          </h2>
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-[#8B6F47] to-[#8B5A4A] rounded-full mx-auto" />
        </div>

        {/* Slider */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Loading / Error */}
          {isLoading && (
            <div className="text-center py-8 sm:py-12">Loading reviews...</div>
          )}
          {/* {isError && (
            <div className="text-center py-8 sm:py-12 text-red-500">
              Failed to load reviews.
            </div>
          )} */}

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: sliderTransform }}
            >
              {reviews.length > 0 ? reviews.map((r) => {
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
                    <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-slate-200 p-3 sm:p-4 md:p-5 h-full hover:shadow-lg transition-shadow duration-300">
                      {/* User Info */}
                      <div className="flex items-start gap-2 sm:gap-3 mb-3">
                        <img
                          src={avatar}
                          alt={username}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#8B6F47] flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                            <h3 className="text-sm sm:text-base font-bold text-[#8B6F47] truncate">
                              {username}
                            </h3>
                            <span className="text-xs text-slate-500 whitespace-nowrap">
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
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${
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
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
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
                          className="text-xs text-[#8B6F47] font-semibold hover:text-[#6B5A3D] transition-colors duration-200 flex items-center gap-1 active:scale-95"
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
              }) : fallback.map((r) => {
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
                    <div className="bg-white rounded-lg sm:rounded-xl shadow-md border border-slate-200 p-3 sm:p-4 md:p-5 h-full hover:shadow-lg transition-shadow duration-300">
                      {/* User Info */}
                      <div className="flex items-start gap-2 sm:gap-3 mb-3">
                        <img
                          src={avatar}
                          alt={username}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-[#8B6F47] flex-shrink-0"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                            <h3 className="text-sm sm:text-base font-bold text-[#8B6F47] truncate">
                              {username}
                            </h3>
                            <span className="text-xs text-slate-500 whitespace-nowrap">
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
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${
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
                        <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
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
                          className="text-xs text-[#8B6F47] font-semibold hover:text-[#6B5A3D] transition-colors duration-200 flex items-center gap-1 active:scale-95"
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

          {/* Navigation Arrows - Hidden on mobile */}
          <button
            onClick={prevSlide}
            aria-label="Previous"
            className="hidden sm:flex absolute left-0 sm:left-1 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 border border-slate-200 hover:bg-white shadow-md transition-all duration-300 z-10"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-slate-700"
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
            className="hidden sm:flex absolute right-0 sm:right-1 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 md:p-3 border border-slate-200 hover:bg-white shadow-md transition-all duration-300 z-10"
          >
            <svg
              className="w-4 h-4 md:w-5 md:h-5 text-slate-700"
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
          <div className="flex justify-center gap-1 sm:gap-2 mt-6 sm:mt-8 overflow-x-auto pb-2">
            {(reviews.length > 0 ? reviews : fallback).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setExpandedCard(null);
                }}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 flex-shrink-0 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-[#8B6F47] to-[#8B5A4A] scale-125"
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
