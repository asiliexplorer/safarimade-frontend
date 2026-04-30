// components/PackageListing.js
"use client";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaChevronLeft,
  FaChevronRight,
  FaMapMarkerAlt,
  FaCheck,
  FaGlobe,
} from "react-icons/fa";
import { slugifyPackageName } from "../../lib/packageSlug";
import PackageHeroBanner from "../_components/PackageHeroBanner";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:4000/api").replace(/\/+$/, "");

function normalizePackage(pkg, source) {
  const slug = pkg.slug || slugifyPackageName(pkg.name || "package");
  const destinationsDetailed = Array.isArray(pkg.destinationsDetailed) ? pkg.destinationsDetailed : [];

  return {
    ...pkg,
    id: pkg._id || pkg.id || slug,
    slug,
    category: pkg.category || "SAFARI",
    destinationsDetailed,
    highlights: Array.isArray(pkg.highlights) ? pkg.highlights : [],
    gallery: Array.isArray(pkg.gallery) ? pkg.gallery : [],
    bestFor: Array.isArray(pkg.bestFor) ? pkg.bestFor : [],
    themes: Array.isArray(pkg.themes) ? pkg.themes : [],
    source,
  };
}

function toOptionId(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");
}

function toOptionName(value) {
  return String(value || "")
    .replace(/[-_]/g, " ")
    .replace(/\w\S*/g, (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
}

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
    const newMin = parseInt(e.target.value, 10);
    if (newMin <= values.max) {
      onChange({ min: newMin, max: values.max });
    }
  };

  const handleMaxChange = (e) => {
    const newMax = parseInt(e.target.value, 10);
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

          <div className="absolute w-5 h-5 bg-[#8B6F47] border-2 border-white rounded-full shadow-md transition-all duration-200 z-50" style={{ left: `calc(${progressLeft}% - 0.625rem)`, top: "-6px" }} />
          <div className="absolute w-5 h-5 bg-[#8B6F47] border-2 border-white rounded-full shadow-md transition-all duration-200 z-50" style={{ left: `calc(${100 - progressRight}% - 0.625rem)`, top: "-6px" }} />
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

function deriveStartingFrom(pkg) {
  return (
    pkg.startingFrom ||
    pkg.startingPoint ||
    pkg.startFrom ||
    pkg.destinationsDetailed?.[0]?.place ||
    ""
  );
}

function deriveComfortLevel(pkg) {
  if (pkg.comfortLevel) return String(pkg.comfortLevel);

  const price = Number(pkg.priceFrom ?? pkg.price);
  if (!Number.isFinite(price)) return "";
  if (price < 1500) return "Budget";
  if (price < 3000) return "Mid-Range";
  if (price < 5000) return "Luxury";
  return "Luxury+";
}

function deriveSafariType(pkg) {
  const accommodationTypes = (pkg.destinationsDetailed || [])
    .map((item) => item?.accommodation?.type)
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  if (accommodationTypes.includes("tented camp")) return "Tented Camp";
  if (accommodationTypes.includes("hotel")) return "Hotel";
  if (accommodationTypes.includes("camp")) return "Camping";
  if (accommodationTypes.includes("lodge")) return "Lodge";
  return pkg.safariType || "";
}

function getPackageSearchText(pkg) {
  return [
    pkg.name,
    pkg.slug,
    pkg.travelStyle,
    pkg.shortDescription,
    pkg.experienceSummary,
    pkg.fullDescription,
    pkg.pricingNotes,
    pkg.gettingThere?.description,
    deriveStartingFrom(pkg),
    deriveComfortLevel(pkg),
    deriveSafariType(pkg),
    ...(pkg.bestFor || []),
    ...(pkg.themes || []),
    ...(pkg.highlights || []),
    ...(pkg.inclusions?.included || []),
    ...(pkg.inclusions?.excluded || []),
    ...(pkg.destinationsDetailed || []).map((item) => item?.place).filter(Boolean),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function matchesSelectedLabel(text, selected) {
  if (!selected || selected === "all") return true;
  const normalizedText = text.toLowerCase().replace(/[-_]/g, " ");
  const normalizedSelected = String(selected).toLowerCase().replace(/[-_]/g, " ");
  return normalizedText.includes(normalizedSelected);
}

const infoCards = [
  {
    title: "Why Tanzania safari",
    description:
      "Tanzania combines the Serengeti, Ngorongoro Crater, Tarangire, Lake Manyara, and Zanzibar in one destination. It is ideal for first-time safari travelers and repeat visitors who want variety.",
  },
  {
    title: "Best time to travel",
    description:
      "June to October is the dry season and works best for wildlife viewing. January to March is excellent for the Serengeti calving season, while November and April can be quieter and more flexible.",
  },
  {
    title: "What to expect",
    description:
      "Expect game drives, lodges and tented camps, early mornings, scenic drives, and a mix of adventure and comfort. Most safaris can be customized for families, couples, and private groups.",
  },
];

const faqItems = [
  {
    question: "How many days do I need for a Tanzania safari?",
    answer:
      "Most travelers choose 5 to 10 days. A 6-day safari is a strong option if you want to see the main highlights without rushing.",
  },
  {
    question: "Can I customize the itinerary?",
    answer:
      "Yes. Many Tanzania safari packages can be adjusted by travel style, budget, hotel level, or extra days in Zanzibar or the northern parks.",
  },
  {
    question: "What is usually included?",
    answer:
      "Safari packages often include park fees, accommodation, transport, a professional guide, and meals during the safari. Flights and personal expenses are usually separate.",
  },
  {
    question: "Is Tanzania good for families?",
    answer:
      "Yes. Many lodges and private trips are family-friendly, and itineraries can be adjusted for children, slower travel, or shorter game-drive days.",
  },
];

const PackageCard = ({ pkg }) => {
  const image = pkg.mainImage || pkg.image || "/images/placeholder-tour.jpg";
  const priceLabel = typeof pkg.priceFrom === "number" ? `$${pkg.priceFrom.toLocaleString()}` : "On request";
  const currencyLabel = pkg.currency || "USD";
  const locations = pkg.destinationsDetailed.map((item) => item?.place).filter(Boolean).slice(0, 3);
  const tagList = [...(pkg.bestFor || []), ...(pkg.themes || [])].filter(Boolean).slice(0, 3);
  const detailsHref = `/affordable-safari-tour-packages/${pkg.slug || slugifyPackageName(pkg.name)}`;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-gray-100 bg-white shadow-[0_10px_34px_rgba(17,24,39,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_48px_rgba(17,24,39,0.14)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={pkg.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        <div className="absolute left-4 right-4 top-4 flex items-start justify-between gap-3">
          <div className="rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-gray-900 shadow-lg backdrop-blur">
            {pkg.duration ? `${pkg.duration} Days` : "Safari"}
          </div>
          <div className="rounded-full border border-white/30 bg-black/30 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur">
            {pkg.category.toLowerCase()}
          </div>
        </div>

        {tagList.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex flex-wrap gap-2">
              {tagList.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="line-clamp-2 text-xl font-bold leading-tight text-gray-950 transition-colors group-hover:text-[#8B6F47]">
          {pkg.name}
        </h3>

        <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
          {pkg.shortDescription || pkg.experienceSummary || pkg.fullDescription || "Discover one of Tanzania's standout safari journeys."}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {locations.length > 0 ? (
            locations.map((location, index) => (
              <span
                key={`${location}-${index}`}
                className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700"
              >
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
              <span className="block text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                From
              </span>
              <span className="mt-1 block text-2xl font-bold text-[#8B6F47]">
                {priceLabel}
              </span>
              <span className="block text-xs text-gray-500">
                {currencyLabel === "USD" ? "per person" : currencyLabel}
              </span>
            </div>

            <Link
              href={detailsHref}
              className="inline-flex h-12 items-center rounded-full bg-[#465b2d] px-5 text-sm font-semibold text-white shadow-md transition-colors duration-300 hover:bg-[#324120]"
            >
              View details
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

const PackageListing = () => {
  const [backendPackages, setBackendPackages] = useState([]);
  const [loadingBackend, setLoadingBackend] = useState(true);
  const [fetchError, setFetchError] = useState("");
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
  const [currentPage, setCurrentPage] = useState(1);
  const packagesPerPage = 8;

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

  const minDuration = useMemo(() => Math.min(...backendPackages.map((pkg) => Number(pkg.duration) || 0).filter(Boolean), 1), [backendPackages]);
  const maxDuration = useMemo(() => Math.max(...backendPackages.map((pkg) => Number(pkg.duration) || 0).filter(Boolean), 21), [backendPackages]);
  const minPrice = useMemo(() => Math.min(...backendPackages.map((pkg) => Number(pkg.priceFrom ?? pkg.price) || 0).filter(Boolean), 100), [backendPackages]);
  const maxPrice = useMemo(() => Math.max(...backendPackages.map((pkg) => Number(pkg.priceFrom ?? pkg.price) || 0).filter(Boolean), 10000), [backendPackages]);

  useEffect(() => {
    const controller = new AbortController();

    async function loadBackendPackages() {
      try {
        setLoadingBackend(true);
        setFetchError("");
        const response = await fetch(
          `${API_BASE_URL}/packages?limit=100&isActive=true&sortBy=createdAt&sortOrder=desc`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`Backend request failed with status ${response.status}`);
        }

        const payload = await response.json();
        const items = Array.isArray(payload?.data?.items) ? payload.data.items : [];
        setBackendPackages(items.map((pkg) => normalizePackage(pkg, "backend")));
      } catch (error) {
        if (error.name !== "AbortError") {
          setFetchError("Backend packages could not be loaded right now.");
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

  const allPackages = useMemo(() => backendPackages, [backendPackages]);

  const filterOptions = useMemo(() => {
    const asOptions = (values, includeAll = true) => {
      const unique = Array.from(new Set(values.filter(Boolean).map((value) => String(value).trim()))).sort((a, b) => a.localeCompare(b));
      const mapped = unique.map((value) => ({ id: toOptionId(value), name: toOptionName(value) }));
      return includeAll ? [{ id: "all", name: "All" }, ...mapped] : mapped;
    };

    return {
      startingFrom: asOptions(allPackages.map((pkg) => deriveStartingFrom(pkg))),
      comfortLevels: asOptions(allPackages.map((pkg) => deriveComfortLevel(pkg))),
      tourTypes: asOptions(allPackages.map((pkg) => pkg.tourType || pkg.category)),
      safariTypes: asOptions(allPackages.map((pkg) => deriveSafariType(pkg))),
      specializedTours: asOptions(allPackages.flatMap((pkg) => pkg.themes || []), false),
      otherFeatures: [
        { id: "airport-transfer", name: "Airport Transfer" },
        { id: "customizable", name: "Customizable" },
        { id: "domestic-flight", name: "Domestic Flight" },
      ],
    };
  }, [allPackages]);

  const handleFilterChange = (filterType, value) => {
    setActiveFilters((prev) => {
      if (filterType === "specializedTours" || filterType === "otherFeatures") {
        const currentArray = prev[filterType];
        const newArray = currentArray.includes(value) ? currentArray.filter((item) => item !== value) : [...currentArray, value];
        return { ...prev, [filterType]: newArray };
      }

      return { ...prev, [filterType]: value };
    });
  };

  const handleRangeChange = (filterType, range) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterType]: range,
    }));
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const formatPrice = (price) => `$${price.toLocaleString()}`;
  const formatDays = (days) => `${days} day${days !== 1 ? "s" : ""}`;

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

  const filteredPackages = useMemo(() => {
    return allPackages.filter((pkg) => {
      const duration = Number(pkg.duration) || 0;
      const price = Number(pkg.priceFrom ?? pkg.price) || 0;
      const startingFrom = deriveStartingFrom(pkg).toLowerCase();
      const comfortLevel = deriveComfortLevel(pkg);
      const tourType = String(pkg.tourType || "").toLowerCase();
      const safariType = deriveSafariType(pkg).toLowerCase();
      const haystack = getPackageSearchText(pkg);

      const matchesDuration = duration >= activeFilters.tourLength.min && duration <= activeFilters.tourLength.max;
      const matchesPrice = price >= activeFilters.priceRange.min && price <= activeFilters.priceRange.max;
      const matchesStartingFrom = activeFilters.startingFrom === "all" || startingFrom.includes(String(activeFilters.startingFrom).replace("-", " ").toLowerCase());
      const matchesComfortLevel = activeFilters.comfortLevel === "all" || comfortLevel.toLowerCase() === String(activeFilters.comfortLevel).toLowerCase();
      const matchesTourType = activeFilters.tourType === "all" || matchesSelectedLabel(tourType, activeFilters.tourType);
      const matchesSafariType = activeFilters.safariType === "all" || matchesSelectedLabel(safariType, activeFilters.safariType);
      const matchesSpecializedTours = activeFilters.specializedTours.length === 0 || activeFilters.specializedTours.every((tour) => haystack.includes(String(tour).replace(/-/g, " ").toLowerCase()));
      const matchesOtherFeatures = activeFilters.otherFeatures.length === 0 || activeFilters.otherFeatures.every((feature) => {
        const featureText = String(feature).toLowerCase();
        if (featureText === "airport-transfer") return haystack.includes("airport transfer") || haystack.includes("airport-transfer");
        if (featureText === "customizable") return haystack.includes("customizable") || haystack.includes("customised") || haystack.includes("customized");
        if (featureText === "domestic-flight") return haystack.includes("domestic flight");
        return haystack.includes(featureText.replace(/-/g, " "));
      });

      return matchesDuration && matchesPrice && matchesStartingFrom && matchesComfortLevel && matchesTourType && matchesSafariType && matchesSpecializedTours && matchesOtherFeatures;
    });
  }, [allPackages, activeFilters]);

  const [currentPagePackages, totalPages, totalResults] = useMemo(() => {
    const total = filteredPackages.length;
    const pages = Math.max(1, Math.ceil(total / packagesPerPage));
    const safePage = Math.min(currentPage, pages);
    const start = (safePage - 1) * packagesPerPage;
    return [filteredPackages.slice(start, start + packagesPerPage), pages, total];
  }, [filteredPackages, currentPage]);

  useEffect(() => {
    setActiveFilters((prev) => ({
      ...prev,
      tourLength: { min: minDuration, max: maxDuration },
      priceRange: { min: minPrice, max: maxPrice },
    }));
  }, [minDuration, maxDuration, minPrice, maxPrice]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  useEffect(() => {
    setCurrentPage(1);
  }, [activeFilters]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {loadingBackend && backendPackages.length === 0 ? (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-[#8B6F47] border-t-transparent" />
        <p className="text-base font-medium text-gray-700">Loading packages...</p>
      </div>
    </div>
      ) : (
        <>
      <PackageHeroBanner
        badge="Signature Safaris"
        backgroundImage="https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        titlePrefix="TANZANIA"
        titleHighlight="SAFARI"
        subtitle="Untamed. Unforgettable. Tanzania Safari"
        description="Browse live package data directly from the backend API, normalized and displayed in one clean listing."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-6">
       

        {fetchError && (
          <div className="mb-6 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
            {fetchError}
          </div>
        )}

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          <aside className="w-full lg:w-80 xl:w-96">
            <div className="bg-white rounded-md shadow-xl border border-gray-200 p-6 sticky top-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-[#8B6F47]">FILTERS</h2>
                <button onClick={resetFilters} className="text-sm bg-[#8B6F47] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#6B5A3D] transition-colors duration-200">
                  Reset All
                </button>
              </div>

              <FilterSection title="Tour Length" isOpen={openSections.tourLength} onToggle={() => toggleSection("tourLength")}>
                <RangeSlider min={minDuration} max={maxDuration} values={activeFilters.tourLength} onChange={(range) => handleRangeChange("tourLength", range)} label="" formatValue={formatDays} />
              </FilterSection>

              <FilterSection title="Price Range (USD)" isOpen={openSections.priceRange} onToggle={() => toggleSection("priceRange")}>
                <p className="text-xs text-gray-500 mb-4">Per person, excluding international flights</p>
                <RangeSlider min={minPrice} max={maxPrice} values={activeFilters.priceRange} onChange={(range) => handleRangeChange("priceRange", range)} label="" formatValue={formatPrice} step={1} />
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
                  {filterOptions.comfortLevels.map((option, index) => (
                    <label key={`${option.id}-${index}`} className="flex items-center space-x-3 group cursor-pointer">
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
                  {filterOptions.tourTypes.map((option, index) => (
                    <label key={`${option.id}-${index}`} className="flex items-center space-x-3 group cursor-pointer">
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
                  {filterOptions.safariTypes.map((option, index) => (
                    <label key={`${option.id}-${index}`} className="flex items-center space-x-3 group cursor-pointer">
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
                  {filterOptions.specializedTours.map((option, index) => (
                    <label key={`${option.id}-${index}`} className="flex items-center space-x-3 group cursor-pointer">
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
                  {filterOptions.otherFeatures.map((option, index) => (
                    <label key={`${option.id}-${index}`} className="flex items-center space-x-3 group cursor-pointer">
                      <div className="relative">
                        <input type="checkbox" checked={activeFilters.otherFeatures.includes(option.id)} onChange={() => handleFilterChange("otherFeatures", option.id)} className="sr-only" />
                        <div className={`w-5 h-5 border-2 rounded flex items-center justify-center transition-all duration-200 ${activeFilters.otherFeatures.includes(option.id) ? "border-[#8B6F47] bg-[#8B6F47]" : "border-gray-300 group-hover:border-[#8B6F47]"}`}>{activeFilters.otherFeatures.includes(option.id) && <FaCheck className="w-3 h-3 text-white" />}</div>
                      </div>
                      <span className="text-gray-700 group-hover:text-gray-900 transition-colors">{option.name}</span>
                    </label>
                  ))}
                </div>
              </FilterSection>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8B6F47] mb-2">Our Safari Packages</h1>
                <p className="text-sm sm:text-base text-gray-600 max-w-2xl">
                  Loaded directly from the backend API using the package schema.
                </p>
              </div>
              <div className="hidden sm:inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-800">
                <FaGlobe />
                {totalResults} packages
              </div>
            </div>

            {currentPagePackages.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {currentPagePackages.map((pkg) => (
                    <PackageCard key={pkg.id} pkg={pkg} />
                  ))}
                </div>

                <div className="mt-10 flex items-center justify-center gap-2">
                  <button
                    onClick={prevPage}
                    disabled={currentPage === 1}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${currentPage === 1 ? "cursor-not-allowed border-gray-200 text-gray-300" : "border-gray-200 text-[#8B6F47] hover:bg-gray-100"}`}
                    aria-label="Previous page"
                  >
                    <FaChevronLeft />
                  </button>

                  {[...Array(totalPages)].map((_, index) => {
                    const pageNumber = index + 1;
                    const isActive = currentPage === pageNumber;
                    const withinRange = pageNumber === 1 || pageNumber === totalPages || (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1);

                    if (!withinRange) {
                      if (pageNumber === currentPage - 2 || pageNumber === currentPage + 2) {
                        return <span key={pageNumber} className="px-2 text-gray-500">...</span>;
                      }
                      return null;
                    }

                    return (
                      <button
                        key={pageNumber}
                        onClick={() => paginate(pageNumber)}
                        className={`h-10 w-10 rounded-full text-sm font-semibold transition-colors ${isActive ? "bg-[#8B6F47] text-white" : "text-[#8B6F47] hover:bg-gray-100"}`}
                        aria-label={`Go to page ${pageNumber}`}
                      >
                        {pageNumber}
                      </button>
                    );
                  })}

                  <button
                    onClick={nextPage}
                    disabled={currentPage === totalPages}
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${currentPage === totalPages ? "cursor-not-allowed border-gray-200 text-gray-300" : "border-gray-200 text-[#8B6F47] hover:bg-gray-100"}`}
                    aria-label="Next page"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </>
            ) : (
              <div className="rounded-3xl border border-gray-200 bg-white py-16 text-center shadow-lg">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <FaSearch className="text-2xl text-gray-400" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-700">No packages found</h3>
                <p className="mx-auto mb-6 max-w-md text-gray-500">
                  We couldn't find any safari packages matching your search. Try a different search term or reset the filters.
                </p>
                <button
                  onClick={resetFilters}
                  className="rounded-lg bg-[#8B6F47] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#6B5A3D]"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <section className="mt-8 space-y-10">
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B6F47]">More safari planning notes</p>
              <h2 className="mt-3 text-3xl font-bold text-gray-900">Helpful information before you choose a package</h2>
            </div>

            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {infoCards.map((card) => (
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

          <div className="">
            <section className="rounded-3xl bg-white border border-gray-200 p-6 shadow-lg sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#8B6F47]">FAQs</p>
              <h2 className="mt-3 text-2xl font-bold text-gray-900">Frequently asked questions</h2>
              <div className="mt-6 space-y-4">
                {faqItems.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-gray-200 bg-[#fbfaf7] p-4 open:bg-white">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-gray-900">
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
        </>
      )}
    </div>
  );
};

export default PackageListing;
