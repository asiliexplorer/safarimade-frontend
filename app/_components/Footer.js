// components/Footer.js
"use client";
import Image from "next/image";
import { useState } from "react";
import logo from "../../public/safari-trip-booking.png";

const Footer = () => {
  return (
    <footer className="bg-white text-[#333333] py-12 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Column - Logo, Contact, Awards */}
        <div>
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/safari-trip-booking.png"
              alt="Safari Trip Booking"
              width={62}
              height={64}
              className="w-28 h-auto"
            />
          </div>


          {/* Phone Number */}
          <div className="flex items-center mb-6">
            <svg
              className="w-6 h-6 mr-2 text-[#333333]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502.95l-1.498 4.493a1 1 0 01-.502.95m9.188-3.21c-.778.347-1.352.977-1.684 1.768a4.2 4.2 0 00-.224.268m1.98 5.508a12.063 12.063 0 01-4.474-4.474 12.063 12.063 0 014.474 4.474z"
              />
            </svg>
            {/* <span className="text-xl font-bold">+255 0767140150</span> */}
          </div>

          {/* Awards */}
          <div className="flex space-x-4 mb-6">
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" // Replace with SGR logo
              alt="SGR"
              className="w-16 h-16"
            />
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" // Replace with ANVR logo
              alt="ANVR"
              className="w-16 h-16"
            />
            <img
              src="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&q=80" // Replace with Tripadvisor logo
              alt="Tripadvisor Travellers' Choice Awards 2025"
              className="w-16 h-16"
            />
          </div>

          {/* Copyright */}
          <div className="mb-4">
            <p className="text-sm">© 2025 Safari Trip Booking</p>
          </div>

          {/* Links */}
          <div className="space-y-2">
            <a href="#" className="block text-sm hover:underline">
              Terms and conditions
            </a>
            <a href="#" className="block text-sm hover:underline">
              Privacy policy
            </a>
            <a href="#" className="block text-sm hover:underline">
              Contact
            </a>
          </div>
        </div>

        {/* Middle Left Column - Sample Itineraries */}
        <div>
          <h3 className="text-lg font-bold mb-4">SAMPLE ITINERARIES</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Tanzania Safari
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Safari + Zanzibar
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Zanzibar holiday
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Kilimanjaro
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Honeymoon Tanzania Zanzibar
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                View all sample itineraries
              </a>
            </li>
          </ul>
        </div>

        {/* Middle Right Column - Travel Information */}
        <div>
          <h3 className="text-lg font-bold mb-4">TRAVEL INFORMATION</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-sm hover:underline">
                Tanzania Travel Advice
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Tanzania Yellow Fever Requirements
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Tanzania weather
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                When to visit Tanzania?
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Flying Doctors Services
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Responsible Travel
              </a>
            </li>
            <li>
              <a href="#" className="text-sm hover:underline">
                Travelife Partner Status
              </a>
            </li>
          </ul>
        </div>

        {/* Right Column - Newsletter & Social Media */}
        <div>
          <h3 className="text-lg font-bold mb-4">SIGN UP FOR OUR NEWSLETTER</h3>
          <p className="mb-4 text-sm">
            Receive travel ideas, destination guides, and inspiration directly
            in your inbox.
          </p>

          {/* Newsletter Form */}
          <form className="mb-6">
            <div className="flex flex-col sm:flex-row gap-2 mb-4">
              <input
                type="text"
                placeholder="Your name"
                className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/2"
              />
              <input
                type="email"
                placeholder="Your e-mail"
                className="px-4 py-2 border border-gray-300 rounded-md w-full sm:w-1/2"
              />
            </div>
            <button
              type="submit"
              className="bg-[#465b2d] text-white font-semibold py-2 px-6 rounded-md w-full hover:bg-[#3a4a24] transition-colors duration-300"
            >
              SIGN UP
            </button>
          </form>

          <p className="text-xs mb-4">
            By signing up for our mailing list, you agree to our{" "}
            <a href="#" className="underline">
              privacy policy
            </a>
            .
          </p>

          {/* Social Media */}
          <h3 className="text-lg font-bold mb-4">SOCIAL MEDIA</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-[#F47D54] rounded-full flex items-center justify-center hover:bg-[#E8704C] transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.246-15.23 0C2.903 3.209 2 3.872 2 5.006v13.994c0 1.134.903 1.797 2.387 1.822 3.604.246 11.631.246 15.23 0C21.097 20.791 22 20.128 22 18.994V5.006c0-1.134-.903-1.797-2.387-1.822zm-12.5 11.625c-1.086 0-1.964-.878-1.964-1.964s.878-1.964 1.964-1.964 1.964.878 1.964 1.964-.878 1.964-1.964 1.964zm11.5 1.964c0 1.086-.878 1.964-1.964 1.964s-1.964-.878-1.964-1.964.878-1.964 1.964-1.964 1.964.878 1.964 1.964z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F47D54] rounded-full flex items-center justify-center hover:bg-[#E8704C] transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-2.67 0-5.18-.86-7.18-2.28L7 15.18c1.87 1.19 4.09 1.88 6.5 1.88 2.41 0 4.63-.69 6.5-1.88l2.18 2.56c-2 1.42-4.51 2.28-7.18 2.28zm0-12c-2.67 0-5.18.86-7.18 2.28L7 12.82c1.87-1.19 4.09-1.88 6.5-1.88 2.41 0 4.63.69 6.5 1.88l2.18-2.56c-2-1.42-4.51-2.28-7.18-2.28z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F47D54] rounded-full flex items-center justify-center hover:bg-[#E8704C] transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-2.67 0-5.18-.86-7.18-2.28L7 15.18c1.87 1.19 4.09 1.88 6.5 1.88 2.41 0 4.63-.69 6.5-1.88l2.18 2.56c-2 1.42-4.51 2.28-7.18 2.28zm0-12c-2.67 0-5.18.86-7.18 2.28L7 12.82c1.87-1.19 4.09-1.88 6.5-1.88 2.41 0 4.63.69 6.5 1.88l2.18-2.56c-2-1.42-4.51-2.28-7.18-2.28z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F47D54] rounded-full flex items-center justify-center hover:bg-[#E8704C] transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-2.67 0-5.18-.86-7.18-2.28L7 15.18c1.87 1.19 4.09 1.88 6.5 1.88 2.41 0 4.63-.69 6.5-1.88l2.18 2.56c-2 1.42-4.51 2.28-7.18 2.28zm0-12c-2.67 0-5.18.86-7.18 2.28L7 12.82c1.87-1.19 4.09-1.88 6.5-1.88 2.41 0 4.63.69 6.5 1.88l2.18-2.56c-2-1.42-4.51-2.28-7.18-2.28z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-[#F47D54] rounded-full flex items-center justify-center hover:bg-[#E8704C] transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-2.67 0-5.18-.86-7.18-2.28L7 15.18c1.87 1.19 4.09 1.88 6.5 1.88 2.41 0 4.63-.69 6.5-1.88l2.18 2.56c-2 1.42-4.51 2.28-7.18 2.28zm0-12c-2.67 0-5.18.86-7.18 2.28L7 12.82c1.87-1.19 4.09-1.88 6.5-1.88 2.41 0 4.63.69 6.5 1.88l2.18-2.56c-2-1.42-4.51-2.28-7.18-2.28z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
