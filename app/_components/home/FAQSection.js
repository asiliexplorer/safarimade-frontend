// components/FAQSection.js
"use client"
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaSearch, FaQuestionCircle } from 'react-icons/fa';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const faqs = [
    {
      question: "What's Covered in Your Safari Packages?",
      answer: "Our safari packages include park entrance fees, game drives in 4x4 vehicles with expert guides, accommodation (lodge, tented camp, or hotel), and meals as described. Some packages also include domestic flights, airport transfers, and activities like hot air balloon safaris."
    },
    {
      question: "Do I Need a Visa to Travel to Tanzania?",
      answer: "Yes, most visitors require a visa. You can obtain a visa on arrival or apply online through the official Tanzanian e-Visa portal. We recommend applying for an e-Visa before your trip for smoother entry."
    },
    {
      question: "Can I Personalize My Safari Experience?",
      answer: "Absolutely! We specialize in customization. You can modify itineraries, choose accommodations, add/remove activities, or adjust trip duration to match your interests and budget."
    },
    {
      question: "What Should I Bring on a Tanzania Safari?",
      answer: "Pack light, practical clothing in neutral colors. Essentials include walking shoes, warm layers, sunscreen, insect repellent, hat, sunglasses, reusable water bottle, camera, and binoculars."
    },
    {
      question: "When's the Prime Time for a Tanzania Safari?",
      answer: "For the Great Migration: June-October. Dry season (June-October) offers best game viewing. Wet season (November-May) is ideal for birdwatching and newborn animals with fewer crowds."
    },
    {
      question: "Are Your Safaris Suitable for Families?",
      answer: "Yes, we offer family-friendly safaris with family rooms, kid activities, and experienced guides who engage younger travelers while ensuring safety for all."
    },
    {
      question: "Do You Provide Airport Pickup and Drop-Off?",
      answer: "Yes, airport transfers are included in most packages. We provide professional drivers at Kilimanjaro (JRO) or Dar es Salaam (DAR) airports for arrival and departure."
    },
    {
      question: "Will I Spot the Big Five on Your Safaris?",
      answer: "While we can't guarantee sightings, our itineraries maximize chances by focusing on parks like Serengeti, Ngorongoro Crater, and Tarangire where Big Five concentrations are high."
    },
    {
      question: "What's the Group Size for Your Safaris?",
      answer: "Group sizes vary by package. Private safaris are just your group. Shared safaris typically have 4-6 guests per vehicle for personalized attention and comfort."
    },
    {
      question: "Are Vaccinations Required for Tanzania?",
      answer: "Yellow fever vaccination is required if arriving from endemic areas. We recommend consulting your doctor for routine vaccines and malaria prophylaxis before travel."
    },
    {
      question: "What's Your Cancellation Policy?",
      answer: "Cancellation policies vary by package. Most offer full refunds 60+ days before departure, with decreasing refunds closer to travel dates. Travel insurance is recommended."
    },
    {
      question: "Do You Offer Payment Plans?",
      answer: "Yes, we offer flexible payment plans. Typically 30% deposit to secure booking, with balance due 60 days before departure. Custom payment schedules available."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Split FAQs into two columns
  const leftColumnFaqs = filteredFaqs.filter((_, index) => index % 2 === 0);
  const rightColumnFaqs = filteredFaqs.filter((_, index) => index % 2 === 1);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#465b2d]/10 text-[#465b2d] text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
            <FaQuestionCircle className="w-3 h-3" />
            FREQUENTLY ASKED QUESTIONS
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Safari Questions Answered
          </h1>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] rounded-full mx-auto mb-4"></div>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about booking your Tanzania safari adventure.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400 w-4 h-4" />
            </div>
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-[#465b2d] focus:border-[#465b2d] transition-all duration-200 text-sm"
            />
          </div>
        </div>

        {/* FAQ Grid - Two Columns */}
        <div className="max-w-6xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Left Column */}
              <div className="space-y-3">
                {leftColumnFaqs.map((faq, index) => {
                  const originalIndex = filteredFaqs.findIndex(f => f.question === faq.question);
                  return (
                    <div
                      key={originalIndex}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleFAQ(originalIndex)}
                        className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none group"
                        aria-expanded={openIndex === originalIndex}
                      >
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#465b2d] transition-colors duration-200 pr-3 leading-relaxed">
                          {faq.question}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#465b2d] to-[#5a7238] rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-105 ${
                          openIndex === originalIndex ? 'rotate-180 bg-[#465b2d]' : ''
                        }`}>
                          {openIndex === originalIndex ? (
                            <FaChevronUp className="text-white w-3 h-3" />
                          ) : (
                            <FaChevronDown className="text-white w-3 h-3" />
                          )}
                        </div>
                      </button>
                      
                      {/* Answer Dropdown */}
                      <div className={`border-t border-gray-100 transition-all duration-300 ease-in-out ${
                        openIndex === originalIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        <div className="px-4 py-3">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] rounded-full mb-3"></div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                {rightColumnFaqs.map((faq, index) => {
                  const originalIndex = filteredFaqs.findIndex(f => f.question === faq.question);
                  return (
                    <div
                      key={originalIndex}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleFAQ(originalIndex)}
                        className="w-full px-4 py-3 flex justify-between items-center text-left focus:outline-none group"
                        aria-expanded={openIndex === originalIndex}
                      >
                        <h3 className="text-sm font-semibold text-gray-800 group-hover:text-[#465b2d] transition-colors duration-200 pr-3 leading-relaxed">
                          {faq.question}
                        </h3>
                        <div className={`flex-shrink-0 w-8 h-8 bg-gradient-to-br from-[#465b2d] to-[#5a7238] rounded-full flex items-center justify-center transition-all duration-200 group-hover:scale-105 ${
                          openIndex === originalIndex ? 'rotate-180 bg-[#465b2d]' : ''
                        }`}>
                          {openIndex === originalIndex ? (
                            <FaChevronUp className="text-white w-3 h-3" />
                          ) : (
                            <FaChevronDown className="text-white w-3 h-3" />
                          )}
                        </div>
                      </button>
                      
                      {/* Answer Dropdown */}
                      <div className={`border-t border-gray-100 transition-all duration-300 ease-in-out ${
                        openIndex === originalIndex ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                      }`}>
                        <div className="px-4 py-3">
                          <div className="w-8 h-0.5 bg-gradient-to-r from-[#465b2d] to-[#8B5A4A] rounded-full mb-3"></div>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* No Results Message */
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaSearch className="text-xl text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">No matches found</h3>
              <p className="text-sm text-gray-500 mb-4">
                Try adjusting your search terms.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="bg-[#465b2d] text-white text-sm px-4 py-2 rounded font-medium hover:bg-[#3a4a24] transition-colors duration-200"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#465b2d] to-[#5a7238] rounded-xl p-6 max-w-4xl mx-auto shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
              <div className="text-left">
                <h3 className="text-lg font-bold text-white mb-2">
                  Still have questions?
                </h3>
                <p className="text-white/90 text-sm">
                  Our safari experts are here to help you plan the perfect Tanzania adventure.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
                <a
                  href="/contact"
                  className="bg-white text-[#465b2d] text-sm font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105 shadow-sm text-center"
                >
                  Contact Our Team
                </a>
                <a
                  href="tel:+255123456789"
                  className="border border-white text-white text-sm font-semibold py-2 px-6 rounded-lg hover:bg-white hover:text-[#465b2d] transition-all duration-200 transform hover:scale-105 text-center"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;