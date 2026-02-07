// components/PackageListing.js
"use client"
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaSearch, FaChevronDown, FaGlobe, FaStar, FaHeart, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';
import { mockPackages, filterOptions } from '../../lib/mockData';

const RangeSlider = ({ 
  min = 100,        // updated minimum value
  max = 10000, 
  values, 
  onChange, 
  label, 
  formatValue = (val) => val,
  step = 1 
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const lastMouseX = useRef(0);

  const handleMinChange = (e) => {
    const newMin = parseInt(e.target.value);
    if (newMin <= values.max) {
      onChange({ min: newMin, max: values.max });
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value);
    if (newMax >= values.min) {
      onChange({ min: values.min, max: newMax });
    }
  };

  // --- handle dragging of the selected range bar ---
  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastMouseX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - lastMouseX.current;
    lastMouseX.current = e.clientX;

    // Calculate delta in value terms
    const range = max - min;
    const sliderWidth = e.currentTarget.offsetWidth;
    const deltaValue = Math.round((delta / sliderWidth) * range);

    let newMin = values.min + deltaValue;
    let newMax = values.max + deltaValue;

    // Clamp values so they don't go outside min/max
    if (newMin < min) {
      newMax += min - newMin;
      newMin = min;
    }
    if (newMax > max) {
      newMin -= newMax - max;
      newMax = max;
    }

    onChange({ min: newMin, max: newMax });
  };

  const handleMouseUp = () => setIsDragging(false);

  const progressLeft = ((values.min - min) / (max - min)) * 100;
  const progressRight = 100 - ((values.max - min) / (max - min)) * 100;

  return (
    <div className="mb-6 w-full select-none">
      {/* Label */}
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-semibold text-gray-800">{label}</h3>
      </div>
      
      <div className="relative pt-8 pb-3">
        {/* Value labels */}
        <div className="absolute top-0 left-0 right-0 flex justify-between text-xs font-medium text-gray-700 px-1">
          <span className="bg-white px-2 py-0.5 rounded shadow-sm">{formatValue(values.min)}</span>
          <span className="bg-white px-2 py-0.5 rounded shadow-sm">{formatValue(values.max)}</span>
        </div>

        {/* Track container */}
        <div
          className="relative h-2 bg-gray-200 rounded-full overflow-visible"
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {/* Active range (draggable area) */}
          <div
            className="absolute h-2 bg-gradient-to-r from-[#465b2d] to-[#5a7238] rounded-full transition-all duration-150 z-10 cursor-grab active:cursor-grabbing"
            style={{
              left: `${progressLeft}%`,
              right: `${progressRight}%`,
            }}
            onMouseDown={handleMouseDown}
          />

          {/* Range inputs */}
          <input
            type="range"
            min={min}
            max={max}
            value={values.min}
            onChange={handleMinChange}
            step={step}
            className="absolute w-full h-2 opacity-0 cursor-pointer z-40 top-0"
          />
          <input
            type="range"
            min={min}
            max={max}
            value={values.max}
            onChange={handleMaxChange}
            step={step}
            className="absolute w-full h-2 opacity-0 cursor-pointer z-40 top-0"
          />

          {/* Thumbs */}
          <div
            className="absolute w-5 h-5 bg-[#465b2d] border-2 border-white rounded-full shadow-md transition-all duration-200 z-50"
            style={{
              left: `calc(${progressLeft}% - 0.625rem)`,
              top: '-6px',
            }}
          />
          <div
            className="absolute w-5 h-5 bg-[#465b2d] border-2 border-white rounded-full shadow-md transition-all duration-200 z-50"
            style={{
              left: `calc(${100 - progressRight}% - 0.625rem)`,
              top: '-6px',
            }}
          />
        </div>

        {/* Min / Max labels */}
        <div className="flex justify-between text-xs text-gray-400 mt-3">
          <span>{formatValue(min)}</span>
          <span>{formatValue(max)}</span>
        </div>
      </div>
    </div>
  );
};


const FilterSection = ({ title, children, isOpen = true, onToggle }) => (
  <div className="border-b border-gray-200 last:border-b-0">
    <button
      onClick={onToggle}
      className="w-full py-4 flex justify-between items-center text-left hover:text-[#465b2d] transition-colors duration-200"
    >
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <svg
        className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && (
      <div className="pb-4">
        {children}
      </div>
    )}
  </div>
);

const PackageCard = ({ pkg }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="group bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative h-56 sm:h-64 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center filter blur-sm scale-110"
          style={{ backgroundImage: `url(${pkg.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <img
          src={pkg.image}
          alt={pkg.name}
          className="relative w-full h-full object-cover mix-blend-overlay opacity-90 group-hover:scale-105 transition-transform duration-700"
        />
        
        <button 
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform shadow-lg z-10"
        >
          <FaHeart className={`w-5 h-5 ${isLiked ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
        </button>

        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
          <h3 className="text-white text-xl sm:text-2xl font-bold leading-tight mb-2">
            {pkg.name}
          </h3>
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <div className="mb-4">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-2xl sm:text-3xl font-bold text-[#465b2d]">
              ${pkg.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500">to</span>
            <span className="text-xl sm:text-2xl font-semibold text-gray-700">
              ${Math.round(pkg.price * 1.2).toLocaleString()}
            </span>
            <span className="text-xs text-gray-500">pp (USD)</span>
          </div>
        </div>

        <div className="mb-4 space-y-2">
          <p className="text-sm text-gray-700">
            <span className="font-semibold text-gray-900">Tanzania:</span> {pkg.tourType} • {pkg.comfortLevel} • Lodge & Tented Camp
          </p>
          
          {/* <div className="flex items-start gap-2 text-sm text-gray-700">
            <FaStar className="text-[#465b2d] mt-0.5 flex-shrink-0" /> */}
            <div className="mb-4">
  <div className="flex items-start gap-2 text-sm text-gray-700">
    <FaMapMarkerAlt className="text-[#465b2d] mt-0.5 flex-shrink-0" />
    <div>
      <span className="font-semibold text-gray-900">You Visit: </span>
      <span className="text-gray-600">
        {/* Join the first few destinations for brevity */}
        {pkg.destinations?.slice(0, 3).join(', ')}
        {pkg.destinations?.length > 3 && ` +${pkg.destinations.length - 3} more`}
      </span>
    </div>
  </div>
{/* </div> */}
            {/* <div>
              <span className="font-semibold text-gray-900">You Visit: </span>
              <span className="text-gray-600">
                {pkg.startingFrom} (Start), {pkg.duration}-day tour
              </span>
            </div> */}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-100">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex-grow min-w-0">
              <p className="text-sm font-bold text-gray-900 mb-1 truncate">
                {pkg.tourOperator}
              </p>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={`w-3.5 h-3.5 ${i < Math.floor(pkg.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-xs font-semibold text-gray-900">
                  {pkg.rating}
                </span>
                <span className="text-xs text-gray-500">
                  - {pkg.reviewCount} Reviews
                </span>
              </div>
            </div>
            
            <Link
              href={`/packages/${pkg.id}`}
              className="bg-[#465b2d] text-white text-xs font-semibold py-2 px-4 rounded-lg hover:bg-[#3a4a24] transition-colors duration-200 whitespace-nowrap shadow-md hover:shadow-lg flex-shrink-0"
            >
              VIEW DETAILS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const PackageListing = () => {
  const [activeFilters, setActiveFilters] = useState({
    tourLength: { min: 1, max: 21 },
    priceRange: { min: 100, max: 10000 },
    startingFrom: 'all',
    comfortLevel: 'all',
    tourType: 'all',
    safariType: 'all',
    specializedTours: [],
    otherFeatures: []
  });

  const [filteredPackages, setFilteredPackages] = useState(mockPackages);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    tourLength: true,
    priceRange: true,
    startingFrom: true,
    comfortLevel: true,
    tourType: true,
    safariType: true,
    specializedTours: false,
    otherFeatures: false
  });
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 10;

  // const minDuration = Math.min(...mockPackages.map(pkg => pkg.duration));
  const maxDuration = Math.max(...mockPackages.map(pkg => pkg.duration));
  // const minPrice = Math.min(...mockPackages.map(pkg => pkg.price));
  const maxPrice = Math.max(...mockPackages.map(pkg => pkg.price));

  useEffect(() => {
    let result = [...mockPackages];

    result = result.filter(pkg => 
      pkg.duration >= activeFilters.tourLength.min && 
      pkg.duration <= activeFilters.tourLength.max
    );

    result = result.filter(pkg => 
      pkg.price >= activeFilters.priceRange.min && 
      pkg.price <= activeFilters.priceRange.max
    );

    if (activeFilters.startingFrom !== 'all') {
      result = result.filter(pkg => 
        pkg.startingFrom.toLowerCase() === activeFilters.startingFrom.replace('-', ' ')
      );
    }

    if (activeFilters.comfortLevel !== 'all') {
      result = result.filter(pkg => pkg.comfortLevel === activeFilters.comfortLevel);
    }

    if (activeFilters.tourType !== 'all') {
      result = result.filter(pkg => pkg.tourType === activeFilters.tourType);
    }

    if (activeFilters.safariType !== 'all') {
      result = result.filter(pkg => pkg.safariType === activeFilters.safariType);
    }

    if (activeFilters.specializedTours.length > 0) {
      result = result.filter(pkg => 
        activeFilters.specializedTours.every(tour => 
          pkg.specializedTours.includes(tour.replace('-', ' '))
        )
      );
    }

    if (activeFilters.otherFeatures.length > 0) {
      result = result.filter(pkg => 
        activeFilters.otherFeatures.every(feature => {
          if (feature === 'airport-transfer') {
            return pkg.features.includes('airport transfer included');
          }
          if (feature === 'customizable') {
            return pkg.features.includes('itinerary customizable');
          }
          return true;
        })
      );
    }

    setFilteredPackages(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [activeFilters]);

  const handleFilterChange = useCallback((filterType, value) => {
    setActiveFilters(prev => {
      if (filterType === 'specializedTours' || filterType === 'otherFeatures') {
        const currentArray = prev[filterType];
        let newArray;
        if (currentArray.includes(value)) {
          newArray = currentArray.filter(item => item !== value);
        } else {
          newArray = [...currentArray, value];
        }
        return { ...prev, [filterType]: newArray };
      } else {
        return { ...prev, [filterType]: value };
      }
    });
  }, []);

  const handleRangeChange = useCallback((filterType, range) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: range
    }));
  }, []);

  const resetFilters = () => {
    setActiveFilters({
      tourLength: { min: minDuration, max: maxDuration },
      priceRange: { min: minPrice, max: maxPrice },
      startingFrom: 'all',
      comfortLevel: 'all',
      tourType: 'all',
      safariType: 'all',
      specializedTours: [],
      otherFeatures: []
    });
    setCurrentPage(1);
  };

  const toggleSection = (section) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const formatPrice = (price) => `$${price.toLocaleString()}`;
  const formatDays = (days) => `${days} day${days !== 1 ? 's' : ''}`;

  // Pagination logic
  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage);
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing pages
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ">
     <div
  className="relative min-h-[50vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
  style={{
    backgroundImage: "url('https://cdn-ajfhi.nitrocdn.com/KGztweKcUtUgsFQkUHxObgZRMXOaBfJI/assets/images/optimized/rev-e4b7f67/tanzania-specialist.com/wp-content/uploads/2025/02/DSC_1116-1960x800.jpg')", // replace with your image path
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

  {/* Text content */}
  <div className="relative z-10 max-w-3xl px-6">
    <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-wide">
      TANZANIA SAFARI
    </h1>
    <p className="text-white/90 text-sm md:text-lg leading-relaxed">
      A Tanzania safari is a once-in-a-lifetime experience. From the wild
      natural landscapes to the magnificent animals that roam the land,
      Tanzania is a destination for those looking for adventure like no other.
      Our tailor-made safaris allow you to enjoy every moment. Get in touch
      with our travel consultants.They’ll be happy to customize your trip!
    </p>
  </div>

  {/* Icons on right side */}
</div>

     
      <div className="max-w-7xl mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="w-full bg-white border border-gray-200 rounded-md p-4 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <FaSearch className="text-[#465b2d]" />
            <span className="text-lg font-semibold text-gray-800">Filter Packages</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className={`w-full lg:w-80 xl:w-96 ${mobileFiltersOpen ? 'fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-md shadow-xl border border-gray-200 p-6 sticky top-6">
              {mobileFiltersOpen && (
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200 lg:hidden">
                  <h2 className="text-2xl font-bold text-[#465b2d]">FILTERS</h2>
                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <FaTimes className="text-xl text-gray-600" />
                  </button>
                </div>
              )}

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#465b2d] hidden lg:block">FILTERS</h2>
                <button
                  onClick={resetFilters}
                  className="text-sm bg-[#465b2d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#3a4a24] transition-colors duration-200"
                >
                  Reset All
                </button>
              </div>

              <FilterSection 
                title="Tour Length" 
                isOpen={openSections.tourLength}
                onToggle={() => toggleSection('tourLength')}
              >
                <RangeSlider
                  min={1}
                  max={21}
                  values={activeFilters.tourLength}
                  onChange={(range) => handleRangeChange('tourLength', range)}
                  label=""
                  formatValue={formatDays}
                />
              </FilterSection>

              <FilterSection 
                title="Price Range (USD)" 
                isOpen={openSections.priceRange}
                onToggle={() => toggleSection('priceRange')}
              >
                <p className="text-xs text-gray-500 mb-4">Per person, excluding international flights</p>
                <RangeSlider
                  min={100}
                  max={10000}
                  values={activeFilters.priceRange}
                  onChange={(range) => handleRangeChange('priceRange', range)}
                  label=""
                  formatValue={formatPrice}
                  step={1}
                />
              </FilterSection>

              <FilterSection 
                title="Starting From" 
                isOpen={openSections.startingFrom}
                onToggle={() => toggleSection('startingFrom')}
              >
                <div className="space-y-3">
                  {filterOptions.startingFrom?.map(option => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="startingFrom"
                          checked={activeFilters.startingFrom === option.id}
                          onChange={() => handleFilterChange('startingFrom', option.id)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                          activeFilters.startingFrom === option.id 
                            ? 'border-[#465b2d] bg-[#465b2d]' 
                            : 'border-gray-300 group-hover:border-[#465b2d]'
                        }`}>
                          {activeFilters.startingFrom === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection 
                title="Comfort Level" 
                isOpen={openSections.comfortLevel}
                onToggle={() => toggleSection('comfortLevel')}
              >
                <div className="space-y-3">
                  {filterOptions.comfortLevels.map(option => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="comfortLevel"
                          checked={activeFilters.comfortLevel === option.id}
                          onChange={() => handleFilterChange('comfortLevel', option.id)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                          activeFilters.comfortLevel === option.id 
                            ? 'border-[#465b2d] bg-[#465b2d]' 
                            : 'border-gray-300 group-hover:border-[#465b2d]'
                        }`}>
                          {activeFilters.comfortLevel === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection 
                title="Tour Type" 
                isOpen={openSections.tourType}
                onToggle={() => toggleSection('tourType')}
              >
                <div className="space-y-3">
                  {filterOptions.tourTypes.map(option => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="tourType"
                          checked={activeFilters.tourType === option.id}
                          onChange={() => handleFilterChange('tourType', option.id)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                          activeFilters.tourType === option.id 
                            ? 'border-[#465b2d] bg-[#465b2d]' 
                            : 'border-gray-300 group-hover:border-[#465b2d]'
                        }`}>
                          {activeFilters.tourType === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection 
                title="Safari Type" 
                isOpen={openSections.safariType}
                onToggle={() => toggleSection('safariType')}
              >
                <div className="space-y-3">
                  {filterOptions.safariTypes.map(option => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="safariType"
                          checked={activeFilters.safariType === option.id}
                          onChange={() => handleFilterChange('safariType', option.id)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${
                          activeFilters.safariType === option.id 
                            ? 'border-[#465b2d] bg-[#465b2d]' 
                            : 'border-gray-300 group-hover:border-[#465b2d]'
                        }`}>
                          {activeFilters.safariType === option.id && (
                            <div className="w-2 h-2 bg-white rounded-full" />
                          )}
                        </div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection 
                title="Specialized Tours" 
                isOpen={openSections.specializedTours}
                onToggle={() => toggleSection('specializedTours')}
              >
                <div className="space-y-3">
                  {filterOptions.specializedTours.map(option => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={activeFilters.specializedTours.includes(option.id)}
                          onChange={() => handleFilterChange('specializedTours', option.id)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                          activeFilters.specializedTours.includes(option.id)
                            ? 'border-[#465b2d] bg-[#465b2d]' 
                            : 'border-gray-300 group-hover:border-[#465b2d]'
                        }`}>
                          {activeFilters.specializedTours.includes(option.id) && (
                            <FaCheck className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection 
                title="Other Features" 
                isOpen={openSections.otherFeatures}
                onToggle={() => toggleSection('otherFeatures')}
              >
                <div className="space-y-3">
                  {filterOptions.otherFeatures.map(option => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={activeFilters.otherFeatures.includes(option.id)}
                          onChange={() => handleFilterChange('otherFeatures', option.id)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                          activeFilters.otherFeatures.includes(option.id)
                            ? 'border-[#465b2d] bg-[#465b2d]' 
                            : 'border-gray-300 group-hover:border-[#465b2d]'
                        }`}>
                          {activeFilters.otherFeatures.includes(option.id) && (
                            <FaCheck className="w-3 h-3 text-white" />
                          )}
                        </div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {mobileFiltersOpen && (
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full mt-6 bg-[#465b2d] text-white py-3 rounded-lg font-semibold hover:bg-[#3a4a24] transition-colors duration-200 lg:hidden"
                >
                  Apply Filters
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#465b2d] mb-3">Our Safari Packages</h1>
              {/* <p className="text-sm sm:text-base text-gray-600 mb-4">
                Discover our range of meticulously crafted Tanzania safari experiences
              </p> */}
              <div className="inline-flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">
                  {filteredPackages.length} packages found
                </span>
              </div>
            </div>

            {filteredPackages.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 sm:gap-6">
                  {currentPackages.map(pkg => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center items-center mt-12 space-x-2">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`p-2 rounded-full ${
                      currentPage === 1 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-[#465b2d] hover:bg-gray-200'
                    }`}
                    aria-label="Previous page"
                  >
                    <FaChevronLeft />
                  </button>
                  
                  {/* Page Numbers */}
                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    // Show first, last, current, and nearby pages
                    if (
                      pageNumber === 1 ||
                      pageNumber === totalPages ||
                      (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                    ) {
                      return (
                        <button
                          key={index}
                          onClick={() => paginate(pageNumber)}
                          className={`w-10 h-10 rounded-full ${
                            currentPage === pageNumber
                              ? 'bg-[#465b2d] text-white'
                              : 'text-[#465b2d] hover:bg-gray-200'
                          }`}
                          aria-label={`Go to page ${pageNumber}`}
                        >
                          {pageNumber}
                        </button>
                      );
                    }
                    
                    // Show ellipsis for skipped pages
                    if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                      return (
                        <span key={index} className="px-2 text-gray-500">
                          ...
                        </span>
                      );
                    }
                    
                    return null;
                  })}
                  
                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`p-2 rounded-full ${
                      currentPage === totalPages 
                        ? 'text-gray-400 cursor-not-allowed' 
                        : 'text-[#465b2d] hover:bg-gray-200'
                    }`}
                    aria-label="Next page"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl shadow-lg border border-gray-200">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FaSearch className="text-2xl text-gray-400" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-700 mb-3">No packages found</h3>
                <p className="text-gray-500 mb-6 max-w-md mx-auto">
                  We couldn't find any packages matching your current filters. Try adjusting your criteria to see more options.
                </p>
                <button
                  onClick={resetFilters}
                  className="bg-[#465b2d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#3a4a24] transition-colors duration-200"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageListing;  