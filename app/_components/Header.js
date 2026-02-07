// frontend/components/Header.js

"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import {
  FaBars,
  FaTimes,
  FaSearch,
  FaChevronDown,
  FaGlobe,
  FaStar,
  FaPhone,
} from "react-icons/fa";
import logo from "../../public/safari-trip-booking.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [showItineraryPanel, setShowItineraryPanel] = useState(false);
  const [showDiscoverPanel, setShowDiscoverPanel] = useState(false);
  const dropdownRef = useRef(null);
  const itineraryPanelRef = useRef(null);
  const discoverPanelRef = useRef(null);

  // Handle scroll effect for main navigation only
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (
        itineraryPanelRef.current &&
        !itineraryPanelRef.current.contains(event.target)
      ) {
        setShowItineraryPanel(false);
      }
      if (
        discoverPanelRef.current &&
        !discoverPanelRef.current.contains(event.target)
      ) {
        setShowDiscoverPanel(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when search is open
  useEffect(() => {
    if (isSearchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSearchOpen]);

  // Simplified dropdown toggling for mobile
  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsMenuOpen(false);
    setShowItineraryPanel(false);
    setShowDiscoverPanel(false);
  };

  // Sample Itineraries Panel Component - Compact Version
  //   const SampleItinerariesPanel = () => {
  //      const destinations = [
  //       {
  //         id: 1,
  //         name: "Serengeti National Park",
  //         image: "https://plus.unsplash.com/premium_photo-1661962430536-117f0fead8b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1013",
  //         type: "National Park",
  //         highlights: ["Great Migration", "Big Five", "Wildlife"]
  //       },
  //       {
  //         id: 2,
  //         name: "Ngorongoro Crater",
  //         image: "https://plus.unsplash.com/premium_photo-1661923846360-62f8754cdd06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=901",
  //         type: "Conservation Area",
  //         highlights: ["Crater Safari", "Dense Wildlife", "UNESCO"]
  //       },
  //       {
  //         id: 3,
  //         name: "Lake Manyara",
  //         image: "https://images.unsplash.com/photo-1660638401389-1afc53689a1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=835",
  //         type: "National Park",
  //         highlights: ["Tree Lions", "Flamingos", "Lake Views"]
  //       },
  //       {
  //         id: 4,
  //         name: "Tarangire National Park",
  //         image: "https://images.unsplash.com/photo-1700221824708-012001e5ccb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  //         type: "National Park",
  //         highlights: ["Elephants", "Baobabs", "Birding"]
  //       },
  //       {
  //         id: 5,
  //         name: "Arusha National Park",
  //         image: "https://images.unsplash.com/photo-1707410437019-40c82e3a417f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  //         type: "National Park",
  //         highlights: ["Mount Meru", "Canopy Walk", "Easy Access"]
  //       },
  //       {
  //         id: 6,
  //         name: "Mount Kilimanjaro",
  //         image: "https://plus.unsplash.com/premium_photo-1661895052895-c7163da980cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  //         type: "Mountain",
  //         highlights: ["Summit", "Climbing Routes", "Views"]
  //       }
  //     ];

  //     return (
  //       // <div
  //       //   ref={discoverPanelRef}
  //       //   className="absolute top-full -right-5 w-[950px] bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 rounded-2xl z-50"
  //       //   onMouseLeave={() => setShowDiscoverPanel(false)}
  //       //   style={{
  //       //     background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
  //       //     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
  //       //   }}
  //       // >

  // <div
  // ref={discoverPanelRef}
  // className="absolute top-full -left-50 w-[950px] mt-8 rounded-xl z-50
  //            bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl"
  // onMouseLeave={() => setShowItineraryPanel(false)}

  // >
  //         <div className="p-6">
  //           {/* Header */}
  //           <div className="flex justify-between items-center mb-6">
  //             <div>
  //               <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#465b2d] bg-clip-text text-transparent mb-2">
  //                 View all sample itineraries
  //               </h2>
  //               <p className="text-gray-600 text-sm font-light">Explore Africa's most breathtaking destinations</p>
  //             </div>
  //             <Link
  //               href="/tanzania"
  //               className="bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105 transform"
  //               onClick={closeAllDropdowns}
  //             >
  //               View All →
  //             </Link>
  //           </div>

  //           {/* Destination Cards Grid - 3 columns */}
  //           <div className="grid grid-cols-3 gap-4">
  //             {destinations.map((destination) => (
  //               <Link
  //                 key={destination.id}
  //                 href={`/destinations/${destination.id}`}
  //                 className="group relative block rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03]"
  //                 onClick={closeAllDropdowns}
  //               >
  //                 {/* Background Image with Overlay */}
  //                 <div className="relative h-40 overflow-hidden">
  //                   <img
  //                     src={destination.image}
  //                     alt={destination.name}
  //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  //                   />

  //                   {/* Gradient Overlay */}
  //                   <div className="absolute"></div>

  //                   {/* Content Overlay */}
  //                   <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
  //                     {/* Type Badge */}
  //                     <div className="mb-2">
  //                       <span className="bg-[#465b2d] text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
  //                         {destination.type}
  //                       </span>
  //                     </div>

  //                     {/* Destination Name */}
  //                     <h3 className="text-lg font-bold leading-tight">
  //                       {destination.name}
  //                     </h3>

  //                     {/* Highlights - Show on hover */}
  //                     {/* <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
  //                       {destination.highlights.slice(0, 2).map((highlight, index) => (
  //                         <span
  //                           key={index}
  //                           className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium"
  //                         >
  //                           {highlight}
  //                         </span>
  //                       ))}
  //                     </div> */}
  //                   </div>

  //                   {/* Hover Arrow */}
  //                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 delay-200">
  //                     <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
  //                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  //                       </svg>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 {/* Bottom Glow Effect */}
  //                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#465b2d] to-[#3a4a24] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  //               </Link>
  //             ))}
  //           </div>

  //           {/* Bottom CTA */}

  //         </div>
  //       </div>
  //     );
  //   };
  const SampleItinerariesPanel = () => {
    const destinations = [
      {
        id: 1,
        name: "Safaris",
        image:
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        type: "Safari",
        slug: "/packages",
      },
      {
        id: 2,
        name: "Safari + Zanzibar",
        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        type: "Combo",
        slug: "/packages",
      },
      {
        id: 3,
        name: "Zanzibar",
        image:
          "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        type: "Beach",
        slug: "/zanzibar",
      },
      {
        id: 4,
        name: "Kilimanjaro",
        image:
          "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        type: "Mountain",
        slug: "/kilimanjaro",
      },
      {
        id: 5,
        name: "Honeymoon Trips",
        image:
          "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        type: "Romantic",
        slug: "/packages",
      },
      {
        id: 6,
        name: "Family-Friendly Tours",
        image:
          "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        type: "Family",
        slug: "/packages",
      },
    ];

    return (
      <div
        ref={discoverPanelRef}
        className="absolute top-full -left-50 w-[950px] mt-8 rounded-xl z-50 
                 bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl"
        onMouseLeave={() => setShowItineraryPanel(false)}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#465b2d] bg-clip-text text-transparent mb-2">
                View all sample itineraries
              </h2>
              <p className="text-gray-600 text-sm font-light">
                Explore Africa's most breathtaking destinations
              </p>
            </div>
            <Link
              href="/tanzania"
              className="bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105 transform"
              onClick={closeAllDropdowns}
            >
              View All →
            </Link>
          </div>

          {/* Destination Cards Grid - 3 columns (will show 8 items: 3 + 3 + 2) */}
          <div className="grid grid-cols-3 gap-4">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={destination.slug}
                className="group relative block rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03]"
                onClick={closeAllDropdowns}
              >
                {/* Background Image with Overlay */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={destination.image.trim()}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    {/* Type Badge */}
                    <div className="mb-2">
                      <span className="bg-[#465b2d] text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {destination.type}
                      </span>
                    </div>

                    {/* Destination Name */}
                    <h3 className="text-lg font-bold leading-tight">
                      {destination.name}
                    </h3>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 delay-200">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#465b2d] to-[#3a4a24] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // const DiscoverTanzaniaPanel = () => {
  //     const destinations = [
  //       {
  //         id: 1,
  //         name: "Serengeti National Park",
  //         image: "https://plus.unsplash.com/premium_photo-1661962430536-117f0fead8b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1013",
  //         type: "National Park",
  //         highlights: ["Great Migration", "Big Five", "Wildlife"]
  //       },
  //       {
  //         id: 2,
  //         name: "Ngorongoro Crater",
  //         image: "https://plus.unsplash.com/premium_photo-1661923846360-62f8754cdd06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=901",
  //         type: "Conservation Area",
  //         highlights: ["Crater Safari", "Dense Wildlife", "UNESCO"]
  //       },
  //       {
  //         id: 3,
  //         name: "Lake Manyara",
  //         image: "https://images.unsplash.com/photo-1660638401389-1afc53689a1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=835",
  //         type: "National Park",
  //         highlights: ["Tree Lions", "Flamingos", "Lake Views"]
  //       },
  //       {
  //         id: 4,
  //         name: "Tarangire National Park",
  //         image: "https://images.unsplash.com/photo-1700221824708-012001e5ccb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  //         type: "National Park",
  //         highlights: ["Elephants", "Baobabs", "Birding"]
  //       },
  //       {
  //         id: 5,
  //         name: "Arusha National Park",
  //         image: "https://images.unsplash.com/photo-1707410437019-40c82e3a417f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  //         type: "National Park",
  //         highlights: ["Mount Meru", "Canopy Walk", "Easy Access"]
  //       },
  //       {
  //         id: 6,
  //         name: "Mount Kilimanjaro",
  //         image: "https://plus.unsplash.com/premium_photo-1661895052895-c7163da980cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  //         type: "Mountain",
  //         highlights: ["Summit", "Climbing Routes", "Views"]
  //       }
  //     ];

  //     return (

  //       // <div
  //       //   ref={discoverPanelRef}
  //       //   className="absolute top-full -right-5 w-[950px] bg-white/95 backdrop-blur-xl shadow-2xl border border-white/20 rounded-2xl z-50"
  //       //   onMouseLeave={() => setShowDiscoverPanel(false)}
  //       //   style={{
  //       //     background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
  //       //     boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
  //       //   }}
  //       // >

  // <div
  //   ref={discoverPanelRef}
  // className="absolute top-full -right-50 w-[950px] mt-8 rounded-xl z-50
  //            bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl"
  // onMouseLeave={() => setShowDiscoverPanel(false)}
  // >
  //         <div className="p-6">
  //           {/* Header */}
  //           <div className="flex justify-between items-center mb-6">
  //             <div>
  //               <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#465b2d] bg-clip-text text-transparent mb-2">
  //                 Discover Tanzania
  //               </h2>
  //               <p className="text-gray-600 text-sm font-light">Explore Africa's most breathtaking destinations</p>
  //             </div>
  //             <Link
  //               href="/tanzania"
  //               className="bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105 transform"
  //               onClick={closeAllDropdowns}
  //             >
  //               View All →
  //             </Link>
  //           </div>

  //           {/* Destination Cards Grid - 3 columns */}
  //           <div className="grid grid-cols-3 gap-4">
  //             {destinations.map((destination) => (
  //               <Link
  //                 key={destination.id}
  //                 href={`/destinations/${destination.id}`}
  //                 className="group relative block rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03]"
  //                 onClick={closeAllDropdowns}
  //               >
  //                 {/* Background Image with Overlay */}
  //                 <div className="relative h-40 overflow-hidden">
  //                   <img
  //                     src={destination.image}
  //                     alt={destination.name}
  //                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
  //                   />

  //                   {/* Gradient Overlay */}
  //                   <div className="absolute"></div>

  //                   {/* Content Overlay */}
  //                   <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
  //                     {/* Type Badge */}
  //                     <div className="mb-2">
  //                       <span className="bg-[#465b2d] text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
  //                         {destination.type}
  //                       </span>
  //                     </div>

  //                     {/* Destination Name */}
  //                     <h3 className="text-lg font-bold leading-tight">
  //                       {destination.name}
  //                     </h3>

  //                     {/* Highlights - Show on hover */}
  //                     {/* <div className="flex flex-wrap gap-1 mt-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
  //                       {destination.highlights.slice(0, 2).map((highlight, index) => (
  //                         <span
  //                           key={index}
  //                           className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium"
  //                         >
  //                           {highlight}
  //                         </span>
  //                       ))}
  //                     </div> */}
  //                   </div>

  //                   {/* Hover Arrow */}
  //                   <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 delay-200">
  //                     <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
  //                       <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
  //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  //                       </svg>
  //                     </div>
  //                   </div>
  //                 </div>

  //                 {/* Bottom Glow Effect */}
  //                 <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#465b2d] to-[#3a4a24] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  //               </Link>
  //             ))}
  //           </div>

  //           {/* Bottom CTA */}

  //         </div>
  //       </div>
  //     );
  //   };
  const DiscoverTanzaniaPanel = () => {
    const destinations = [
      {
        id: 1,
        name: "Serengeti National Park",
        image:
          "https://plus.unsplash.com/premium_photo-1661962430536-117f0fead8b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1013",
        type: "National Park",
        slug: "/parks/serengeti-national-park",
      },
      {
        id: 2,
        name: "Ngorongoro Crater",
        image:
          "https://plus.unsplash.com/premium_photo-1661923846360-62f8754cdd06?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=901",
        type: "Conservation Area",
        slug: "/parks/ngorongoro-crater",
      },
      {
        id: 3,
        name: "Lake Manyara",
        image:
          "https://images.unsplash.com/photo-1660638401389-1afc53689a1a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=835",
        type: "National Park",
        slug: "/parks/lake-manyara-national-park",
      },
      {
        id: 4,
        name: "Tarangire National Park",
        image:
          "https://images.unsplash.com/photo-1700221824708-012001e5ccb8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        type: "National Park",
        slug: "/parks/tarangire-national-park",
      },
      {
        id: 5,
        name: "Arusha National Park",
        image:
          "https://images.unsplash.com/photo-1707410437019-40c82e3a417f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        type: "National Park",
        slug: "/parks/arusha-national-park",
      },
      {
        id: 6,
        name: "Ruaha National Park",
        image:
          "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
        type: "National Park",
        slug: "/parks/ruaha-national-park",
      },
    ];

    return (
      <div
        ref={discoverPanelRef}
        className="absolute top-full -right-50 w-[950px] mt-8 rounded-xl z-50 
                 bg-white/60 backdrop-blur-xl border border-white/50 shadow-2xl"
        onMouseLeave={() => setShowDiscoverPanel(false)}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-[#465b2d] bg-clip-text text-transparent mb-2">
                Discover Tanzania
              </h2>
              <p className="text-gray-600 text-sm font-light">
                Explore Africa's most breathtaking destinations
              </p>
            </div>
            <Link
              href="/parks"
              className="bg-gradient-to-r from-[#465b2d] to-[#3a4a24] text-white px-4 py-2 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold hover:scale-105 transform"
              onClick={closeAllDropdowns}
            >
              View All →
            </Link>
          </div>

          {/* Destination Cards Grid - 3 columns */}
          <div className="grid grid-cols-3 gap-4">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                href={destination.slug}
                className="group relative block rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500 transform hover:scale-[1.03]"
                onClick={closeAllDropdowns}
              >
                {/* Background Image with Overlay */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={destination.image.trim()}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src =
                        "https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                    }}
                  />

                  {/* Content Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    {/* Type Badge */}
                    <div className="mb-2">
                      <span className="bg-[#465b2d] text-white px-2 py-1 rounded-full text-xs font-semibold shadow-lg">
                        {destination.type}
                      </span>
                    </div>

                    {/* Destination Name */}
                    <h3 className="text-lg font-bold leading-tight">
                      {destination.name}
                    </h3>
                  </div>

                  {/* Hover Arrow */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 delay-200">
                    <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Bottom Glow Effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#465b2d] to-[#3a4a24] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  };
  const mainNavItems = [
    {
      name: "SAMPLE ITINERARIES",
      type: "panel",
    },
    { name: "SAFARIS", href: "/packages" },
    { name: "KILIMANJARO", href: "/kilimanjaro" },
    { name: "ZANZIBAR", href: "/zanzibar" },
    {
      name: "DISCOVER TANZANIA",
      type: "panel",
    },
  ];

  const topNavItems = [
    { name: "Blog", href: "/blog" },
    {
      name: "Practical Information",
      dropdown: [
        { name: "Visa Requirements", href: "/practical-info/visa" },
        { name: "Health & Safety", href: "/practical-info/health" },
        { name: "Packing List", href: "/practical-info/packing" },
        { name: "Travel Tips", href: "/practical-info/tips" },
      ],
    },
    {
      name: "About Us",
      dropdown: [
        { name: "Our Team", href: "/about/team" },
        { name: "Our Mission", href: "/about/mission" },
        { name: "Testimonials", href: "/about/testimonials" },
        { name: "Sustainability", href: "/about/sustainability" },
      ],
    },
  ];

  // Mega Dropdown Component (Desktop Only)
  const MegaDropdown = ({ items, title }) => {
    // Close dropdowns if viewport becomes mobile
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 1024) {
          setActiveDropdown(null);
        }
      };

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
      <div className="absolute left-0 right-0 mt-1 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 transform origin-top">
        <div className="max-w-7xl mx-auto p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {items.map((section, sectionIndex) => (
              <div key={sectionIndex} className="space-y-4">
                <h4 className="font-semibold text-lg text-[#465b2d] border-b border-[#465b2d]/20 pb-2">
                  {section.title}
                </h4>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <Link
                      key={itemIndex}
                      href={item.href}
                      className="block text-gray-700 hover:text-[#465b2d] transition-colors duration-200 group/item"
                      onClick={closeAllDropdowns}
                    >
                      <span className="group-hover/item:ml-2 transition-all duration-200">
                        {item.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Need help choosing?</span>
              <Link
                href="/contact"
                className="bg-[#465b2d] text-white px-6 py-2 rounded-lg hover:bg-[#3a4a24] transition-colors duration-200"
                onClick={closeAllDropdowns}
              >
                Contact Our Experts
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Search Popup Component with Blur Background
  const SearchPopup = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const searchRef = useRef(null);

    // Close search when clicking outside
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
          setIsSearchOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className="fixed inset-0 z-60 flex items-start justify-center pt-20">
        {/* Refined Blur Background */}
        <div className="absolute inset-0 bg-opacity-40 backdrop-blur-sm" />

        {/* Search Content */}
        <div
          ref={searchRef}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 transform transition-all duration-300 scale-100 border border-gray-200"
        >
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                Search Our Website
              </h3>
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <FaTimes className="text-gray-600 text-lg" />
              </button>
            </div>
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                placeholder="Search for safaris, destinations, itineraries..."
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#465b2d] focus:border-transparent text-lg placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <div className="p-6 max-h-96 overflow-y-auto">
            <div className="space-y-4">
              <h4 className="font-semibold text-gray-700">Popular Searches</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "Safari Packages",
                  "Kilimanjaro Trek",
                  "Zanzibar Beach",
                  "Serengeti Migration",
                  "Luxury Safari",
                  "Family Safari",
                  "Budget Tours",
                  "Wildlife Photography",
                ].map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(term)}
                    className="px-4 py-2 bg-gray-100 hover:bg-[#465b2d] hover:text-white text-gray-700 rounded-full transition-colors duration-200 text-sm"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
            {searchQuery && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-4">
                  Search Results for "{searchQuery}"
                </h4>
                <div className="space-y-3">
                  <Link
                    href="/safaris"
                    className="block p-3 hover:bg-[#465b2d]/10 rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-800">
                      Safari Packages
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Explore our range of safari experiences in Tanzania's best
                      national parks
                    </div>
                  </Link>
                  <Link
                    href="/kilimanjaro"
                    className="block p-3 hover:bg-[#465b2d]/10 rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-800">
                      Kilimanjaro Climbing Routes
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Choose your path to the roof of Africa with expert guides
                    </div>
                  </Link>
                  <Link
                    href="/itineraries/7-day-safari"
                    className="block p-3 hover:bg-[#465b2d]/10 rounded-lg cursor-pointer transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-800">
                      7-Day Classic Safari
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      Perfect introduction to Tanzania's wildlife and landscapes
                    </div>
                  </Link>
                </div>
              </div>
            )}
            {!searchQuery && (
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-700 mb-4">
                  Quick Links
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    href="/safaris"
                    className="p-3 bg-gray-50 hover:bg-[#465b2d]/10 rounded-lg transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-800">All Safaris</div>
                  </Link>
                  <Link
                    href="/kilimanjaro"
                    className="p-3 bg-gray-50 hover:bg-[#465b2d]/10 rounded-lg transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-800">Kilimanjaro</div>
                  </Link>
                  <Link
                    href="/zanzibar"
                    className="p-3 bg-gray-50 hover:bg-[#465b2d]/10 rounded-lg transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-800">Zanzibar</div>
                  </Link>
                  <Link
                    href="/contact"
                    className="p-3 bg-gray-50 hover:bg-[#465b2d]/10 rounded-lg transition-colors duration-200"
                  >
                    <div className="font-medium text-gray-800">Contact Us</div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Top Bar - Normal Scrolling (NOT sticky) */}
      <div className="bg-[#465b2d] text-white border-b border-[#3a4a24]">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            {/* Currency and Language */}

            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1.5">
                <FaGlobe className="text-sm text-white" />
                <select className="bg-transparent border-none outline-none text-white cursor-pointer text-sm">
                  <option value="en">EN</option>
                  <option value="sw">SW</option>
                  <option value="fr">FR</option>
                </select>
              </div>
            </div>

            <div className="flex items-center space-x-4 md:space-x-6">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm">
                {/* Phone Number */}
                {/* <div className="flex items-center space-x-2">
                <FaPhone className="text-yellow-300 text-sm" />
                <span className="font-medium">+255 0767140150</span>
              </div> */}

                {/* Email */}
                <div className="flex items-center space-x-2">
                  <span className="font-medium">
                    info@safaritripbooking.com
                  </span>
                </div>
              </div>
            </div>

            {/* Ratings */}
            <div className="flex items-center space-x-4 md:space-x-8">
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-1.5">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-yellow-300 text-sm" />
                  <span className="font-semibold text-white">4.9/5</span>
                </div>
                <span className="text-xs text-white/90 hidden sm:block">
                  Based on 3,395+ reviews
                </span>
              </div>

              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-1.5">
                <div className="flex items-center space-x-1">
                  <FaStar className="text-yellow-300 text-sm" />
                  <span className="font-semibold text-white">4.7/5</span>
                </div>
                <span className="text-xs text-white/90 hidden sm:block">
                  Based on 808+ reviews
                </span>
              </div>
            </div>

            {/* Top Navigation Links (Hidden on Mobile) */}
            <div className="hidden lg:flex items-center space-x-6">
              {topNavItems.map((item, index) => (
                <div key={index} className="relative group" ref={dropdownRef}>
                  {item.dropdown ? (
                    <>
                      <button
                        className="flex items-center space-x-1 text-sm font-medium text-white hover:text-yellow-200 transition-colors duration-200"
                        onClick={() => toggleDropdown(`top-${index}`)}
                        onMouseEnter={() => toggleDropdown(`top-${index}`)}
                      >
                        <span>{item.name}</span>
                        <FaChevronDown className="text-xs transition-transform duration-200" />
                      </button>
                      <div
                        className={`absolute left-0 z-70 mt-2 w-56 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform origin-top ${
                          activeDropdown === `top-${index}`
                            ? "scale-100 opacity-100"
                            : "scale-95 opacity-0 pointer-events-none"
                        }`}
                      >
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-3 hover:bg-[#465b2d]/10 transition-colors duration-200 first:rounded-t-xl last:rounded-b-xl border-b border-gray-100 last:border-b-0"
                            onClick={closeAllDropdowns}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-white hover:text-yellow-200 transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation - Sticky Header */}
      <header
        className={`font-sans transition-all duration-300 sticky top-0 z-50 ${
          isScrolled ? "shadow-xl" : "shadow-md"
        } bg-white`}
      >
        <div
          className={`bg-white transition-all duration-300 border-b border-gray-200 ${
            isScrolled ? "py-2" : "py-4"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="flex items-center justify-between">
              {/* Logo Section */}
              <Link
                href="/"
                className="flex items-center space-x-3 group"
                onClick={closeAllDropdowns}
              >
                <div className="relative ">
                  <div className="w-26 h-16 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={logo}
                      alt="Safari Trip Booking Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                {/* <div className="flex flex-col  pr-8" >
                  <span className="text-xl md:text-2xl font-bold text-[#465b2d] tracking-tight leading-6">ASILI EXPLORER</span>
                  <span className="text-lg font-semibold text-[#8B5A4A] tracking-wide">SAFARIS</span>
                </div> */}
              </Link>

              {/* Desktop Navigation (Hidden on Mobile) */}
              <nav
                className="hidden xl:flex items-center space-x-8"
                ref={dropdownRef}
              >
                {mainNavItems.map((item, index) => (
                  <div key={index} className="relative group">
                    {item.type === "panel" &&
                    item.name === "SAMPLE ITINERARIES" ? (
                      // SAMPLE ITINERARIES - Panel Trigger
                      <div
                        onMouseEnter={() => {
                          setShowItineraryPanel(true);
                          setShowDiscoverPanel(false);
                        }}
                      >
                        <button className="flex items-center space-x-1 text-gray-700 hover:text-[#465b2d] font-semibold text-sm uppercase tracking-wide transition-all duration-200 py-2">
                          <span>{item.name}</span>
                          <FaChevronDown className="text-xs transition-transform duration-200" />
                        </button>
                        {showItineraryPanel && <SampleItinerariesPanel />}
                      </div>
                    ) : item.type === "panel" &&
                      item.name === "DISCOVER TANZANIA" ? (
                      // DISCOVER TANZANIA - Panel Trigger
                      <div
                        onMouseEnter={() => {
                          setShowDiscoverPanel(true);
                          setShowItineraryPanel(false);
                        }}
                        // onMouseEnter={() => setShowItineraryPanel(false)}

                        // onMouseLeave={() => setShowDiscoverPanel(false)}
                      >
                        <button className="flex items-center space-x-1 text-gray-700 hover:text-[#465b2d] font-semibold text-sm uppercase tracking-wide transition-all duration-200 py-2">
                          <span>{item.name}</span>
                          <FaChevronDown className="text-xs transition-transform duration-200" />
                        </button>
                        {showDiscoverPanel && <DiscoverTanzaniaPanel />}
                      </div>
                    ) : item.dropdown ? (
                      // Other dropdown items
                      <>
                        <button
                          className="flex items-center space-x-1 text-gray-700 hover:text-[#465b2d] font-semibold text-sm uppercase tracking-wide transition-all duration-200 py-2"
                          onClick={() => toggleDropdown(`main-${index}`)}
                          onMouseEnter={() =>
                            setActiveDropdown(`main-${index}`)
                          }
                        >
                          <span>{item.name}</span>
                          <FaChevronDown className="text-xs transition-transform duration-200" />
                        </button>
                        {item.type === "mega" &&
                          activeDropdown === `main-${index}` && (
                            <MegaDropdown
                              items={item.dropdown}
                              title={item.name}
                            />
                          )}
                      </>
                    ) : (
                      // Regular navigation items
                      <Link
                        href={item.href}
                        className="text-gray-700 hover:text-[#465b2d] font-semibold text-sm uppercase tracking-wide transition-all duration-200 py-2"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Action Buttons (Hidden on Mobile) */}
              <div className="hidden lg:flex items-center space-x-6">
                {/* Search Button */}
                <button
                  className="p-3 text-gray-600 hover:text-[#465b2d] transition-colors duration-200 rounded-full hover:bg-gray-100"
                  onClick={() => setIsSearchOpen(true)}
                >
                  <FaSearch className="text-lg" />
                </button>

                {/* CTA Button */}
                <a
                  href="/travel-proposal"
                  className="bg-[#465b2d] text-white px-6 py-3 rounded-xl font-semibold text-sm uppercase tracking-wide hover:shadow-lg transform hover:scale-105 transition-all duration-200 shadow-md hover:bg-[#3a4a24]"
                >
                  MAKE A REQUEST
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-3 text-gray-700 hover:text-[#465b2d] transition-colors duration-200 rounded-lg hover:bg-gray-100"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <FaTimes className="text-xl" />
                ) : (
                  <FaBars className="text-xl" />
                )}
              </button>
            </div>

            {/* Mobile Navigation (Full Overlay) */}
            {isMenuOpen && (
              <div className="lg:hidden fixed inset-0 bg-white z-50 pt-20 overflow-y-auto">
                <div className="p-6">
                  {/* Close Button */}
                  <div className="flex justify-end mb-6">
                    <button
                      className="p-3 text-gray-700 hover:text-[#465b2d] transition-colors duration-200 rounded-lg hover:bg-gray-100"
                      onClick={closeAllDropdowns}
                    >
                      <FaTimes className="text-xl" />
                    </button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="space-y-6">
                    {/* Main Navigation Items */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        Main Menu
                      </h3>
                      {mainNavItems.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                        >
                          {item.dropdown ? (
                            <div>
                              <button
                                className="flex items-center justify-between w-full text-gray-800 font-semibold text-sm uppercase tracking-wide py-2"
                                onClick={() =>
                                  toggleDropdown(`mobile-main-${index}`)
                                }
                              >
                                <span>{item.name}</span>
                                <FaChevronDown
                                  className={`text-xs transition-transform duration-200 ${
                                    activeDropdown === `mobile-main-${index}`
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                              <div
                                className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                                  activeDropdown === `mobile-main-${index}`
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                {item.dropdown.flatMap((section) =>
                                  section.items.map((subItem, subIndex) => (
                                    <Link
                                      key={subIndex}
                                      href={subItem.href}
                                      className="block py-2 text-gray-600 hover:text-[#465b2d] transition-colors duration-200 pl-2 border-l-2 border-gray-200 hover:border-[#465b2d]"
                                      onClick={closeAllDropdowns}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))
                                )}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href || "#"}
                              className="block text-gray-800 font-semibold text-sm uppercase tracking-wide py-2"
                              onClick={closeAllDropdowns}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Top Navigation Items for Mobile */}
                    <div className="pt-4 space-y-4">
                      <h3 className="text-lg font-semibold text-gray-800 border-b border-gray-200 pb-2">
                        More
                      </h3>
                      {topNavItems.map((item, index) => (
                        <div
                          key={index}
                          className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                        >
                          {item.dropdown ? (
                            <div>
                              <button
                                className="flex items-center justify-between w-full text-gray-700 font-medium py-2"
                                onClick={() =>
                                  toggleDropdown(`mobile-top-${index}`)
                                }
                              >
                                <span>{item.name}</span>
                                <FaChevronDown
                                  className={`text-xs transition-transform duration-200 ${
                                    activeDropdown === `mobile-top-${index}`
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                              <div
                                className={`pl-4 mt-2 space-y-2 transition-all duration-300 ${
                                  activeDropdown === `mobile-top-${index}`
                                    ? "block"
                                    : "hidden"
                                }`}
                              >
                                {item.dropdown.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block py-2 text-gray-600 hover:text-[#465b2d] transition-colors duration-200 pl-2 border-l-2 border-gray-200 hover:border-[#465b2d]"
                                    onClick={closeAllDropdowns}
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className="block text-gray-700 font-medium py-2"
                              onClick={closeAllDropdowns}
                            >
                              {item.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Mobile Action Buttons */}
                    <div className="pt-6 border-t border-gray-200 flex flex-col space-y-4">
                      <button
                        className="p-3 text-gray-600 border border-gray-300 rounded-xl hover:border-[#465b2d] transition-colors duration-200 flex items-center justify-center space-x-2"
                        onClick={() => {
                          setIsSearchOpen(true);
                          setIsMenuOpen(false);
                        }}
                      >
                        <FaSearch />
                        <span>Search</span>
                      </button>
                      <button className="bg-[#465b2d] text-white py-3 rounded-xl font-semibold text-sm uppercase tracking-wide hover:shadow-lg transition-all duration-200 hover:bg-[#3a4a24]">
                        MAKE REQUEST
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Backdrop for mobile menu */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={closeAllDropdowns}
          />
        )}

        {/* Search Popup with Blur Background */}
        {isSearchOpen && <SearchPopup />}
      </header>
    </>
  );
};

export default Header;
  