"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Link from "next/link";
import { FaTimes, FaSearch, FaStar, FaHeart, FaChevronLeft, FaChevronRight, FaMapMarkerAlt, FaCheck, FaGlobe } from "react-icons/fa";
import { filterOptions } from "../../lib/mockData";
import { slugifyPackageName } from "../../lib/packageSlug";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api").replace(/\/+$/, "");

function deriveComfortLevel(price) {
  if (!Number.isFinite(price)) return "";
  if (price < 1500) return "Budget";
  if (price < 3000) return "Mid-Range";
  if (price < 5000) return "Luxury";
  return "Luxury+";
}

function deriveSafariType(destinationsDetailed = []) {
  const text = destinationsDetailed
    .map((item) => item?.accommodation?.type)
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (text.includes("tented camp")) return "Tented Camp";
  if (text.includes("hotel")) return "Hotel";
  if (text.includes("camp")) return "Camping";
  if (text.includes("lodge")) return "Lodge";
  return "";
}

function normalizePackage(raw, source = "backend") {
  if (!raw) return null;
  const slug = raw.slug || slugifyPackageName(raw.name || "package");
  const destinationsDetailed = Array.isArray(raw.destinationsDetailed)
    ? raw.destinationsDetailed
    : Array.isArray(raw.destinations)
      ? raw.destinations.map((d) => (typeof d === "string" ? { place: d } : d))
      : [];
  const price = Number(raw.priceFrom ?? raw.price ?? 0);
  const gallery = Array.isArray(raw.gallery) ? raw.gallery.filter(Boolean) : [];
  const destinations = destinationsDetailed.map((item) => item?.place).filter(Boolean);
  return {
    ...raw,
    id: raw._id || raw.id || slug,
    slug,
    category: raw.category || "WILDEBEEST",
    destinationsDetailed,
    destinations,
    gallery,
    image: raw.mainImage || gallery[0] || "/images/placeholder-tour.jpg",
    mainImage: raw.mainImage || gallery[0] || "/images/placeholder-tour.jpg",
    price,
    tourOperator: raw.offeredBy || raw.tourOperator || "Asili Explorer Safaris",
    rating: Number(raw.rating ?? 4.8),
    reviewCount: Number(raw.reviewCount ?? 0),
    comfortLevel: raw.comfortLevel || deriveComfortLevel(price),
    tourType: raw.tourType || raw.travelStyle || raw.category || "Wildebeest Migration",
    safariType: raw.safariType || deriveSafariType(destinationsDetailed),
    highlights: Array.isArray(raw.highlights) ? raw.highlights : [],
    themes: Array.isArray(raw.themes) ? raw.themes : [],
    bestFor: Array.isArray(raw.bestFor) ? raw.bestFor : [],
    features: Array.isArray(raw.features) ? raw.features : [...(raw.highlights || []), ...(raw.themes || [])],
    source,
  };
}
import PackageHeroBanner from "../_components/PackageHeroBanner";

const RangeSlider = ({
  min = 100,
  max = 10000,
  values,
  onChange,
  label,
  formatValue = (val) => val,
  step = 1,
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

  const handleMouseDown = (e) => {
    setIsDragging(true);
    lastMouseX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const delta = e.clientX - lastMouseX.current;
    lastMouseX.current = e.clientX;

    const range = max - min;
    const sliderWidth = e.currentTarget.offsetWidth;
    const deltaValue = Math.round((delta / sliderWidth) * range);

    let newMin = values.min + deltaValue;
    let newMax = values.max + deltaValue;

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
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base font-semibold text-gray-800">{label}</h3>
      </div>

      <div className="relative pt-8 pb-3">
        <div className="absolute top-0 left-0 right-0 flex justify-between text-xs font-medium text-gray-700 px-1">
          <span className="bg-white px-2 py-0.5 rounded shadow-sm">{formatValue(values.min)}</span>
          <span className="bg-white px-2 py-0.5 rounded shadow-sm">{formatValue(values.max)}</span>
        </div>

        <div className="relative h-2 bg-gray-200 rounded-full overflow-visible" onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
          <div
            className="absolute h-2 bg-gradient-to-r from-[#8B6F47] to-[#5a7238] rounded-full transition-all duration-150 z-10 cursor-grab active:cursor-grabbing"
            style={{
              left: `${progressLeft}%`,
              right: `${progressRight}%`,
            }}
            onMouseDown={handleMouseDown}
          />

          <input type="range" min={min} max={max} value={values.min} onChange={handleMinChange} step={step} className="absolute w-full h-2 opacity-0 cursor-pointer z-40 top-0" />
          <input type="range" min={min} max={max} value={values.max} onChange={handleMaxChange} step={step} className="absolute w-full h-2 opacity-0 cursor-pointer z-40 top-0" />

          <div
            className="absolute w-5 h-5 bg-[#8B6F47] border-2 border-white rounded-full shadow-md transition-all duration-200 z-50"
            style={{
              left: `calc(${progressLeft}% - 0.625rem)`,
              top: "-6px",
            }}
          />
          <div
            className="absolute w-5 h-5 bg-[#8B6F47] border-2 border-white rounded-full shadow-md transition-all duration-200 z-50"
            style={{
              left: `calc(${100 - progressRight}% - 0.625rem)`,
              top: "-6px",
            }}
          />
        </div>

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
    <button onClick={onToggle} className="w-full py-4 flex justify-between items-center text-left hover:text-[#8B6F47] transition-colors duration-200">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <svg className={`w-4 h-4 transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </button>
    {isOpen && <div className="pb-4">{children}</div>}
  </div>
);

const PackageCard = ({ pkg }) => {
  const [isLiked, setIsLiked] = useState(false);
  const image = pkg.mainImage || pkg.image || "/images/placeholder-tour.jpg";
  const priceLabel = typeof pkg.priceFrom === "number" ? `$${pkg.priceFrom.toLocaleString()}` : typeof pkg.price === "number" ? `$${pkg.price.toLocaleString()}` : "On request";
  const currencyLabel = pkg.currency || "USD";
  const locations = (pkg.destinationsDetailed || []).map((item) => item?.place).filter(Boolean).slice(0, 3);
  const tagList = [...(pkg.bestFor || []), ...(pkg.themes || [])].filter(Boolean).slice(0, 3);
  const detailsHref = `/wildebeest-migration-safari-packages/${pkg.slug || slugifyPackageName(pkg.name)}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-[0_10px_34px_rgba(17,24,39,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(17,24,39,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={image} alt={pkg.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <button onClick={() => setIsLiked(!isLiked)} className="absolute right-4 top-4 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur transition-transform hover:scale-110">
          <FaHeart className={`h-5 w-5 ${isLiked ? "fill-current text-red-500" : "text-gray-400"}`} />
        </button>

        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
          <div className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gray-900 shadow-lg backdrop-blur">
            {pkg.duration ? `${pkg.duration} Days` : "Safari"}
          </div>
          <div className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            {String(pkg.category || "WILDEBEEST").toLowerCase()}
          </div>
        </div>

        {tagList.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex flex-wrap gap-2">
              {tagList.map((tag) => (
                <span key={tag} className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-xl font-bold leading-tight text-gray-950 transition-colors group-hover:text-[#8B6F47]">{pkg.name}</h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {pkg.shortDescription || pkg.experienceSummary || pkg.fullDescription || "Discover one of Tanzania's standout safari journeys."}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {locations.length > 0 ? (
            locations.map((location, index) => (
              <span key={`${location}-${index}`} className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                <FaMapMarkerAlt className="text-[#8B6F47]" />
                {location}
              </span>
            ))
          ) : (
            <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
              <FaMapMarkerAlt className="text-[#8B6F47]" />
              Flexible route
            </span>
          )}
        </div>

        <div className="mt-auto pt-5">
          <div className="flex items-end justify-between gap-4 border-t border-gray-100 pt-4">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">From</span>
              <span className="mt-1 block text-2xl font-bold text-[#8B6F47]">{priceLabel}</span>
              <span className="block text-xs text-gray-500">{currencyLabel === "USD" ? "per person" : currencyLabel}</span>
            </div>

            <Link href={detailsHref} className="inline-flex h-12 items-center rounded-full bg-[#465b2d] px-5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#324120]">
              View details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

const migrationInfoCards = [
  {
    title: "Why migration safari",
    description:
      "The Great Migration is one of the most dramatic wildlife events on earth, with massive wildebeest and zebra herds moving through Serengeti ecosystems.",
  },
  {
    title: "Best months to visit",
    description:
      "December to March is great for calving in the southern plains, while June to October is popular for river crossing action in the north.",
  },
  {
    title: "What to expect",
    description:
      "Expect long scenic game drives, expert tracking, changing landscapes, and opportunities to combine migration routes with Ngorongoro or Tarangire.",
  },
];

const migrationFaqItems = [
  {
    question: "When is the best time to see river crossings?",
    answer:
      "River crossings are typically most likely between July and October, especially in northern Serengeti areas close to the Mara River.",
  },
  {
    question: "Can migration routes be customized?",
    answer:
      "Yes. Most migration itineraries are designed around travel dates, so camps and routes can be adjusted to improve chances of sightings.",
  },
  {
    question: "Are migration safaris suitable for families?",
    answer:
      "Yes, with the right pacing. Private itineraries can include shorter drives, family-friendly lodges, and balanced travel days.",
  },
  {
    question: "How many days are ideal for migration safari?",
    answer:
      "A 6 to 9 day safari is a strong balance for tracking migration movement while still enjoying relaxed game-viewing time.",
  },
];

export default function WildebeestMigrationSafariPackagesPage() {
  const [backendPackages, setBackendPackages] = useState([]);
  const [loadingBackend, setLoadingBackend] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadBackendPackages() {
      try {
        setLoadingBackend(true);
        const response = await fetch(`${API_BASE_URL}/packages?limit=100&isActive=true&sortBy=createdAt&sortOrder=desc`, { signal: controller.signal });

        if (!response.ok) {
          throw new Error(`Backend request failed with status ${response.status}`);
        }

        const payload = await response.json();
        const items = Array.isArray(payload?.data?.items) ? payload.data.items : [];
        setBackendPackages(
          items
            .map((pkg) => normalizePackage(pkg, "backend"))
            .filter((pkg) => pkg && String(pkg.category || "").toUpperCase() === "WILDEBEEST"),
        );
      } catch (error) {
        if (error.name !== "AbortError") {
          setBackendPackages([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoadingBackend(false);
        }
      }
    }

    loadBackendPackages();
    return () => controller.abort();
  }, []);

  const migrationPackages = useMemo(() => backendPackages, [backendPackages]);

  const [activeFilters, setActiveFilters] = useState({
    tourLength: { min: 1, max: 21 },
    priceRange: { min: 100, max: 10000 },
    startingFrom: "all",
    comfortLevel: "all",
    tourType: "all",
    safariType: "all",
    specializedTours: [],
    otherFeatures: [],
  });

  const [filteredPackages, setFilteredPackages] = useState(migrationPackages);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
    tourLength: true,
    priceRange: true,
    startingFrom: true,
    comfortLevel: true,
    tourType: true,
    safariType: true,
    specializedTours: false,
    otherFeatures: false,
  });

  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 10;

  const minDuration = migrationPackages.length ? Math.min(...migrationPackages.map((pkg) => Number(pkg.duration) || 0)) : 1;
  const maxDuration = migrationPackages.length ? Math.max(...migrationPackages.map((pkg) => Number(pkg.duration) || 0)) : 21;
  const minPrice = migrationPackages.length ? Math.min(...migrationPackages.map((pkg) => Number(pkg.price ?? pkg.priceFrom) || 0)) : 100;
  const maxPrice = migrationPackages.length ? Math.max(...migrationPackages.map((pkg) => Number(pkg.price ?? pkg.priceFrom) || 0)) : 10000;

  useEffect(() => {
    let result = [...migrationPackages];

    result = result.filter((pkg) => Number(pkg.duration) >= activeFilters.tourLength.min && Number(pkg.duration) <= activeFilters.tourLength.max);

    result = result.filter((pkg) => Number(pkg.price ?? pkg.priceFrom) >= activeFilters.priceRange.min && Number(pkg.price ?? pkg.priceFrom) <= activeFilters.priceRange.max);

    if (activeFilters.startingFrom !== "all") {
      result = result.filter((pkg) => (pkg.startingFrom || "").toLowerCase() === activeFilters.startingFrom.replace("-", " "));
    }

    if (activeFilters.comfortLevel !== "all") {
      result = result.filter((pkg) => pkg.comfortLevel === activeFilters.comfortLevel);
    }

    if (activeFilters.tourType !== "all") {
      result = result.filter((pkg) => pkg.tourType === activeFilters.tourType);
    }

    if (activeFilters.safariType !== "all") {
      result = result.filter((pkg) => pkg.safariType === activeFilters.safariType);
    }

    if (activeFilters.specializedTours.length > 0) {
      result = result.filter((pkg) => activeFilters.specializedTours.every((tour) => (pkg.specializedTours || []).includes(tour.replace("-", " "))));
    }

    if (activeFilters.otherFeatures.length > 0) {
      result = result.filter((pkg) =>
        activeFilters.otherFeatures.every((feature) => {
          if (feature === "airport-transfer") {
            return (pkg.features || []).includes("airport transfer included");
          }
          if (feature === "customizable") {
            return (pkg.features || []).includes("itinerary customizable");
          }
          return true;
        }),
      );
    }

    setFilteredPackages(result);
    setCurrentPage(1);
  }, [activeFilters, migrationPackages]);

  const handleFilterChange = useCallback((filterType, value) => {
    setActiveFilters((prev) => {
      if (filterType === "specializedTours" || filterType === "otherFeatures") {
        const currentArray = prev[filterType];
        let newArray;
        if (currentArray.includes(value)) {
          newArray = currentArray.filter((item) => item !== value);
        } else {
          newArray = [...currentArray, value];
        }
        return { ...prev, [filterType]: newArray };
      }
      return { ...prev, [filterType]: value };
    });
  }, []);

  const handleRangeChange = useCallback((filterType, range) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: range,
    }));
  }, []);

  const resetFilters = () => {
    setActiveFilters({
      tourLength: { min: minDuration, max: maxDuration },
      priceRange: { min: minPrice, max: maxPrice },
      startingFrom: "all",
      comfortLevel: "all",
      tourType: "all",
      safariType: "all",
      specializedTours: [],
      otherFeatures: [],
    });
    setCurrentPage(1);
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const formatPrice = (price) => `$${price.toLocaleString()}`;
  const formatDays = (days) => `${days} day${days !== 1 ? "s" : ""}`;

  const indexOfLastPackage = currentPage * packagesPerPage;
  const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
  const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage);
  const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 ">
      <PackageHeroBanner
        badge="Great Migration Journeys"
        backgroundImage="https://images.unsplash.com/photo-1532199286643-4b8e3f4a2fd9?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        titlePrefix="WILDEBEEST"
        titleHighlight="MIGRATION"
        subtitle="Follow the Great Migration Through Tanzania's Wildest Plains"
        description="Find migration-focused safaris timed for calving season, river crossings, and prime predator encounters with experienced guides and quality camps."
      />

      <div className="max-w-7xl mx-auto py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:hidden mb-6">
          <button onClick={() => setMobileFiltersOpen(true)} className="w-full bg-white border border-gray-200 rounded-md p-4 flex items-center justify-center space-x-3 shadow-md hover:shadow-lg transition-all duration-300">
            <FaSearch className="text-[#8B6F47]" />
            <span className="text-lg font-semibold text-gray-800">Filter Packages</span>
          </button>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <div className={`w-full lg:w-80 xl:w-96 ${mobileFiltersOpen ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto" : "hidden lg:block"}`}>
            <div className="bg-white rounded-md shadow-xl border border-gray-200 p-6 sticky top-6">
              {mobileFiltersOpen && (
                <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200 lg:hidden">
                  <h2 className="text-2xl font-bold text-[#8B6F47]">FILTERS</h2>
                  <button onClick={() => setMobileFiltersOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                    <FaTimes className="text-xl text-gray-600" />
                  </button>
                </div>
              )}

              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#8B6F47] hidden lg:block">FILTERS</h2>
                <button onClick={resetFilters} className="text-sm bg-[#8B6F47] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#6B5A3D] transition-colors duration-200">
                  Reset All
                </button>
              </div>

              <FilterSection title="Tour Length" isOpen={openSections.tourLength} onToggle={() => toggleSection("tourLength")}>
                <RangeSlider min={1} max={21} values={activeFilters.tourLength} onChange={(range) => handleRangeChange("tourLength", range)} label="" formatValue={formatDays} />
              </FilterSection>

              <FilterSection title="Price Range (USD)" isOpen={openSections.priceRange} onToggle={() => toggleSection("priceRange")}>
                <p className="text-xs text-gray-500 mb-4">Per person, excluding international flights</p>
                <RangeSlider min={100} max={10000} values={activeFilters.priceRange} onChange={(range) => handleRangeChange("priceRange", range)} label="" formatValue={formatPrice} step={1} />
              </FilterSection>

              <FilterSection title="Starting From" isOpen={openSections.startingFrom} onToggle={() => toggleSection("startingFrom")}>
                <div className="space-y-3">
                  {filterOptions.startingFrom?.map((option) => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input type="radio" name="startingFrom" checked={activeFilters.startingFrom === option.id} onChange={() => handleFilterChange("startingFrom", option.id)} className="sr-only" />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${activeFilters.startingFrom === option.id ? "border-[#8B6F47] bg-[#8B6F47]" : "border-gray-300 group-hover:border-[#8B6F47]"}`}>{activeFilters.startingFrom === option.id && <div className="w-2 h-2 bg-white rounded-full" />}</div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Comfort Level" isOpen={openSections.comfortLevel} onToggle={() => toggleSection("comfortLevel")}>
                <div className="space-y-3">
                  {filterOptions.comfortLevels.map((option) => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input type="radio" name="comfortLevel" checked={activeFilters.comfortLevel === option.id} onChange={() => handleFilterChange("comfortLevel", option.id)} className="sr-only" />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${activeFilters.comfortLevel === option.id ? "border-[#8B6F47] bg-[#8B6F47]" : "border-gray-300 group-hover:border-[#8B6F47]"}`}>{activeFilters.comfortLevel === option.id && <div className="w-2 h-2 bg-white rounded-full" />}</div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Tour Type" isOpen={openSections.tourType} onToggle={() => toggleSection("tourType")}>
                <div className="space-y-3">
                  {filterOptions.tourTypes.map((option) => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input type="radio" name="tourType" checked={activeFilters.tourType === option.id} onChange={() => handleFilterChange("tourType", option.id)} className="sr-only" />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${activeFilters.tourType === option.id ? "border-[#8B6F47] bg-[#8B6F47]" : "border-gray-300 group-hover:border-[#8B6F47]"}`}>{activeFilters.tourType === option.id && <div className="w-2 h-2 bg-white rounded-full" />}</div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Safari Type" isOpen={openSections.safariType} onToggle={() => toggleSection("safariType")}>
                <div className="space-y-3">
                  {filterOptions.safariTypes.map((option) => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input type="radio" name="safariType" checked={activeFilters.safariType === option.id} onChange={() => handleFilterChange("safariType", option.id)} className="sr-only" />
                        <div className={`w-5 h-5 border-2 rounded-full flex items-center justify-center transition-all duration-200 ${activeFilters.safariType === option.id ? "border-[#8B6F47] bg-[#8B6F47]" : "border-gray-300 group-hover:border-[#8B6F47]"}`}>{activeFilters.safariType === option.id && <div className="w-2 h-2 bg-white rounded-full" />}</div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Specialized Tours" isOpen={openSections.specializedTours} onToggle={() => toggleSection("specializedTours")}>
                <div className="space-y-3">
                  {filterOptions.specializedTours.map((option) => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" checked={activeFilters.specializedTours.includes(option.id)} onChange={() => handleFilterChange("specializedTours", option.id)} className="sr-only" />
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${activeFilters.specializedTours.includes(option.id) ? "border-[#8B6F47] bg-[#8B6F47]" : "border-gray-300 group-hover:border-[#8B6F47]"}`}>{activeFilters.specializedTours.includes(option.id) && <FaCheck className="w-3 h-3 text-white" />}</div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              <FilterSection title="Other Features" isOpen={openSections.otherFeatures} onToggle={() => toggleSection("otherFeatures")}>
                <div className="space-y-3">
                  {filterOptions.otherFeatures.map((option) => (
                    <label key={option.id} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" checked={activeFilters.otherFeatures.includes(option.id)} onChange={() => handleFilterChange("otherFeatures", option.id)} className="sr-only" />
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${activeFilters.otherFeatures.includes(option.id) ? "border-[#8B6F47] bg-[#8B6F47]" : "border-gray-300 group-hover:border-[#8B6F47]"}`}>{activeFilters.otherFeatures.includes(option.id) && <FaCheck className="w-3 h-3 text-white" />}</div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>

              {mobileFiltersOpen && (
                <button onClick={() => setMobileFiltersOpen(false)} className="w-full mt-6 bg-[#8B6F47] text-white py-3 rounded-lg font-semibold hover:bg-[#6B5A3D] transition-colors duration-200 lg:hidden">
                  Apply Filters
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="mb-6 sm:mb-8">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8B6F47] mb-3">Wildebeest Migration Safari Packages</h1>
              <div className="inline-flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-3 py-1.5 rounded-full font-medium">{filteredPackages.length} packages found</span>
              </div>
            </div>

            {filteredPackages.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 sm:gap-6">
                  {currentPackages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>

                <div className="flex justify-center items-center mt-12 space-x-2">
                  <button onClick={prevPage} disabled={currentPage === 1} className={`p-2 rounded-full ${currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-[#8B6F47] hover:bg-gray-200"}`} aria-label="Previous page">
                    <FaChevronLeft />
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    if (pageNumber === 1 || pageNumber === totalPages || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)) {
                      return (
                        <button key={index} onClick={() => paginate(pageNumber)} className={`w-10 h-10 rounded-full ${currentPage === pageNumber ? "bg-[#8B6F47] text-white" : "text-[#8B6F47] hover:bg-gray-200"}`} aria-label={`Go to page ${pageNumber}`}>
                          {pageNumber}
                        </button>
                      );
                    }

                    if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                      return (
                        <span key={index} className="px-2 text-gray-500">
                          ...
                        </span>
                      );
                    }

                    return null;
                  })}

                  <button onClick={nextPage} disabled={currentPage === totalPages} className={`p-2 rounded-full ${currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-[#8B6F47] hover:bg-gray-200"}`} aria-label="Next page">
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
                <p className="text-gray-500 mb-6 max-w-md mx-auto">We couldn't find any packages matching your current filters. Try adjusting your criteria to see more options.</p>
                <button onClick={resetFilters} className="bg-[#8B6F47] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6B5A3D] transition-colors duration-200">
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <section className="mt-16 space-y-10">
          <div className="rounded-3xl bg-white border border-gray-200 shadow-lg p-6 sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B6F47]">Migration guide</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">Plan around herd movement for the best sightings</h2>
              <p className="mt-4 text-base sm:text-lg leading-8 text-gray-600">
                Migration safaris are timing-sensitive. The best experience comes from matching your travel dates with herd movement zones, camp locations, and local guide insight. This page helps you compare packages, then understand how to choose the right route.
              </p>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {migrationInfoCards.map((card) => (
                <article key={card.title} className="rounded-2xl border border-gray-200 bg-[#faf8f3] p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#8B6F47] text-white shadow-md">
                    <FaGlobe />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{card.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-3xl bg-[#11210f] px-6 py-8 sm:px-8 sm:py-10 text-white shadow-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-white/60">Migration tips</p>
              <h2 className="mt-3 text-3xl font-bold">How to get the most from your trip</h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Book early for prime migration camps",
                  "Stay flexible with exact park zones",
                  "Prioritize guide quality over checklist itineraries",
                  "Combine migration with crater or beach extension",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <FaCheck className="mt-1 text-[#c9d8ab]" />
                      <p className="text-sm leading-7 text-white/85">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-3xl bg-white border border-gray-200 shadow-lg p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B6F47]">FAQs</p>
              <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-gray-900">Migration safari questions</h2>
              <div className="mt-6 space-y-4">
                {migrationFaqItems.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-[#fbfaf7] p-4 open:bg-white">
                    <summary className="cursor-pointer list-none text-base font-semibold text-gray-900 flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-[#8B6F47] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
