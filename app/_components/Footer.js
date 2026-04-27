// components/Footer.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../public/safari-trip-booking.png";

const Footer = () => {
  return (
    <>
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#8B6F47]  to-[#16856e] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start Your Safari Adventure?
          </h2>
          <p className="text-white text-lg mb-8 opacity-90">
            Browse hundreds of safari packages and curated trips from trusted safari companies
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/packages" className="bg-[#F47D54] text-white font-semibold py-3 px-8 rounded-md hover:bg-[#E8704C] transition-colors duration-300 inline-block text-center">
              Explore Packages
            </Link>
            <Link href="/travel-proposal" className="border-2 border-white text-white font-semibold py-3 px-8 rounded-md hover:bg-white hover:text-[#1b9b8f] transition-colors duration-300 inline-block text-center">
              Get Proposals
            </Link>
          </div>
        </div>
      </section>

      {/* Main Footer */}
      <footer className="bg-[#1a1a1a] text-gray-300 py-16 px-4">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8">
          {/* Top Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
            {/* Logo & Company Info */}
            <div>
              <div className="mb-6">
                <Image
                  src="/safari-trip-booking.png"
                  alt="Safari Trip Booking"
                  width={62}
                  height={64}
                  className="w-24 h-auto"
                />
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                Your trusted partner for unforgettable African safari experiences since 2020.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F47D54] rounded-full flex items-center justify-center hover:bg-[#E8704C] transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F47D54] rounded-full flex items-center justify-center hover:bg-[#E8704C] transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 002.856-3.51 10 10 0 01-2.956 1.745 4.993 4.993 0 00-8.604 4.585c-4.15-.325-7.85-2.135-10.322-5.565a4.992 4.992 0 001.546 6.656 4.936 4.936 0 01-2.261-.567v.06a4.993 4.993 0 004.009 4.900 4.993 4.993 0 01-2.254.085 4.994 4.994 0 004.659 3.467A10.025 10.025 0 012 18.847a14.998 14.998 0 008.134 2.383c9.795 0 15.342-8.223 15.342-15.342 0-.234-.006-.467-.02-.7a10.983 10.983 0 002.686-2.804z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#F47D54] rounded-full flex items-center justify-center hover:bg-[#E8704C] transition-colors duration-300"
                >
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.246-15.23 0C2.903 3.209 2 3.872 2 5.006v13.994c0 1.134.903 1.797 2.387 1.822 3.604.246 11.631.246 15.23 0C21.097 20.791 22 20.128 22 18.994V5.006c0-1.134-.903-1.797-2.387-1.822zm-12.5 11.625c-1.086 0-1.964-.878-1.964-1.964s.878-1.964 1.964-1.964 1.964.878 1.964 1.964-.878 1.964-1.964 1.964zm11.5 1.964c0 1.086-.878 1.964-1.964 1.964s-1.964-.878-1.964-1.964.878-1.964 1.964-1.964 1.964.878 1.964 1.964z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Popular Destinations */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">DESTINATIONS</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/parks" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Tanzania Safari
                  </Link>
                </li>
                <li>
                  <Link href="/kilimanjaro" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Mount Kilimanjaro
                  </Link>
                </li>
                <li>
                  <Link href="/zanzibar" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Zanzibar Island
                  </Link>
                </li>
                <li>
                  <Link href="/parks" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    National Parks
                  </Link>
                </li>
                <li>
                  <Link href="/packages" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Combine Trips
                  </Link>
                </li>
                <li>
                  <Link href="/wildebeest-migration-safari-packages" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Wildebeest Migration
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Tanzania Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Travel Information */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">INFORMATION</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Travel Advice
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Visa Requirements
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Best Time to Visit
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Weather Guide
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Safety Tips
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Photo Gallery
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">COMPANY</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-sm hover:text-[#F47D54] transition-colors duration-300">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-bold text-lg mb-6">NEWSLETTER</h4>
              <p className="text-sm mb-4">
                Subscribe to get travel tips and safari inspiration.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-md text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F47D54]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#F47D54] text-white font-semibold py-2 rounded-md hover:bg-[#E8704C] transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 my-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2025 SafariFind. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/" className="text-sm text-gray-400 hover:text-[#F47D54] transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/" className="text-sm text-gray-400 hover:text-[#F47D54] transition-colors duration-300">
                Terms of Service
              </Link>
              <Link href="/" className="text-sm text-gray-400 hover:text-[#F47D54] transition-colors duration-300">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
