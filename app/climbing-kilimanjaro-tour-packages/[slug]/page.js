"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { FaArrowLeft, FaCheck, FaGlobe, FaHeart, FaInfoCircle } from "react-icons/fa";
import { useGetPackageBySlugQuery } from "../../redux/features/admin/PackageApi";
import { slugifyPackageName } from "../../../lib/packageSlug";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "journey", label: "Journey" },
  { id: "pricing", label: "Pricing" },
  { id: "inclusions", label: "Inclusions" },
  { id: "travel", label: "Travel info" },
];

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

function uniqueImages(images) {
  return Array.from(new Set(safeArray(images).filter(Boolean)));
}

function formatPrice(price, currency = "USD") {
  if (price === null || price === undefined || price === "") return "Price on request";
  return `${currency === "USD" ? "$" : currency + " "}${Number(price).toLocaleString()}`;
}

function truncateText(text, maxLength = 240) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trimEnd()}...`;
}

function normalizePackage(raw) {
  if (!raw) return null;

  const itinerarySummary =
    raw.itinerarySummary ||
    safeArray(raw?.route?.days).map((day, index) => ({
      title: `Day ${day.day || index + 1}`,
      location: day.location || "Destination",
      nights: 1,
      description: day.description || "",
    }));

  const destinationsDetailed =
    raw.destinationsDetailed ||
    safeArray(raw.destinations).map((place) => ({
      place,
      nights: 1,
      description: "",
    }));

  return {
    name: raw.name || "Untitled package",
    slug: raw.slug || slugifyPackageName(raw.name || ""),
    category: raw.category || "SAFARI",
    duration: raw.duration || itinerarySummary.length || safeArray(raw.dayByDay).length || 0,
    nights: raw.nights || itinerarySummary.reduce((sum, item) => sum + Number(item.nights || 0), 0) || undefined,
    travelStyle: raw.travelStyle || raw.tourType || raw.safariType || "Tailored safari",
    themes: safeArray(raw.themes || raw.specializedTours),
    bestFor: safeArray(raw.bestFor),
    experienceSummary: raw.experienceSummary || raw.shortDescription || raw.fullDescription || "",
    shortDescription: raw.shortDescription || "",
    fullDescription: raw.fullDescription || raw.experienceSummary || raw.shortDescription || "",
    destinationsDetailed,
    itinerarySummary,
    dayByDay: safeArray(raw.dayByDay),
    accommodations: safeArray(raw.accommodations || raw.accommodationMeals?.schedule).map((item) =>
      item?.name
        ? item
        : {
            name: item?.accommodation || "Accommodation",
            location: item?.day ? `Day ${item.day}` : "",
            type: item?.accommodationType || "Stay",
            description: item?.meals || "",
            amenities: [],
            images: [],
          },
    ),
    highlights: safeArray(raw.highlights || raw.features),
    mainImage: raw.mainImage || raw.image || safeArray(raw.gallery)[0] || "/logo.png",
    gallery: safeArray(raw.gallery),
    priceType: raw.priceType || (raw.price || raw.priceFrom ? "FIXED" : "CUSTOM"),
    priceFrom: raw.priceFrom || raw.price || undefined,
    currency: raw.currency || "USD",
    pricingNotes: raw.pricingNotes || raw.rates?.disclaimer || "",
    inclusions: raw.inclusions || { included: [], excluded: [] },
    gettingThere: raw.gettingThere || { description: "", details: [] },
    isCustomizable: raw.isCustomizable ?? true,
    customizationNote: raw.customizationNote || "",
    isActive: raw.isActive ?? true,
  };
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9f7f53]">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-semibold text-[#30261d] sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-[#6f6355]">{description}</p> : null}
    </div>
  );
}

export default function PackageDetailsPage() {
  const params = useParams();
  const slug = params?.slug;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [dragState, setDragState] = useState(null);

  const { data, isLoading, isFetching } = useGetPackageBySlugQuery(slug, {
    skip: !slug,
  });

  const packageData = useMemo(() => normalizePackage(data?.data), [data]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [slug]);

  const goToImage = (nextIndex, total) => {
    if (!total) return;
    setCurrentImageIndex((nextIndex + total) % total);
  };

  const handlePointerDown = (event) => {
    if (event.button !== undefined && event.button !== 0) return;
    setDragState({ startX: event.clientX, lastX: event.clientX });
  };

  const handlePointerMove = (event) => {
    if (!dragState) return;
    setDragState((prev) => (prev ? { ...prev, lastX: event.clientX } : prev));
  };

  const finishDrag = (totalImages) => {
    if (!dragState) return;

    const deltaX = dragState.lastX - dragState.startX;
    const threshold = 40;

    if (Math.abs(deltaX) > threshold && totalImages > 1) {
      goToImage(currentImageIndex + (deltaX < 0 ? 1 : -1), totalImages);
    }

    setDragState(null);
  };

  if ((isLoading || isFetching) && !packageData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f7f1e6] via-[#fcfaf5] to-[#eef3e9] flex items-center justify-center">
        <div className="text-center text-[#4c4033]">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-2 border-[#465b2d] border-t-transparent" />
          <p className="mt-4">Loading package details...</p>
        </div>
      </div>
    );
  }

  if (!packageData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#f6f1e8] via-white to-[#ecf0e6] px-4 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-[#e8dccd] bg-white p-10 text-center shadow-[0_20px_70px_rgba(42,34,25,0.08)]">
          <h1 className="text-3xl font-semibold text-[#2f261d]">Package not found</h1>
          <p className="mt-3 text-[#6e6254]">We could not find the tour you are looking for.</p>
          <Link href="/climbing-kilimanjaro-tour-packages" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#465b2d] px-5 py-3 font-semibold text-white transition hover:bg-[#324120]">
            <FaArrowLeft />
            Back to packages
          </Link>
        </div>
      </div>
    );
  }

  const destinations = safeArray(packageData.destinationsDetailed);
  const accommodationImages = destinations.flatMap((destination) => {
    const directImages = safeArray(destination?.images);
    const nestedImages = safeArray(destination?.accommodation?.images);
    return uniqueImages([...directImages, ...nestedImages]);
  });
  const imageSlides = uniqueImages([packageData.mainImage, ...safeArray(packageData.gallery), ...accommodationImages]);
  const heroImage = imageSlides[currentImageIndex] || packageData.mainImage || "/logo.png";
  const summaryLine = [packageData.duration ? `${packageData.duration} days` : null, packageData.nights ? `${packageData.nights} nights` : null, packageData.travelStyle, packageData.category].filter(Boolean).join(" · ");

  const itinerary = safeArray(packageData.itinerarySummary);
  const accommodations = safeArray(packageData.accommodations);
  const highlights = safeArray(packageData.highlights);
  const included = safeArray(packageData.inclusions?.included);
  const excluded = safeArray(packageData.inclusions?.excluded);
  const travelDetails = safeArray(packageData.gettingThere?.details);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f1e6] via-[#fcfaf5] to-[#eef3e9] text-[#241c15]">
      <div className="relative h-[70vh] overflow-hidden bg-[#1f2a17]">
        <div className="absolute inset-0 bg-cover bg-center " style={{ backgroundImage: `url(${heroImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1f2a17]/95 via-[#1f2a17]/75 to-[#1f2a17]/55" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 py-6 text-center sm:px-6 lg:px-8 lg:py-8">
          <Link href="/climbing-kilimanjaro-tour-packages" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur-md transition hover:bg-white/15">
            <FaArrowLeft />
            Back to packages
          </Link>

          <div className="mx-auto mt-12 max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/80 backdrop-blur-md">Tanzania tour</div>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">{packageData.name}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">{packageData.experienceSummary || packageData.shortDescription || packageData.fullDescription}</p>
            <p className="mt-4 text-sm uppercase tracking-[0.24em] text-white/65">{summaryLine}</p>
          </div>

          <div className="mt-10 grid w-full max-w-5xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90 backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">Duration</div>
              <div className="mt-2 text-sm font-semibold">{packageData.duration || "-"} days</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90 backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">Start</div>
              <div className="mt-2 text-sm font-semibold">{destinations[0]?.place || packageData.travelStyle || "Arusha"}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90 backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">Style</div>
              <div className="mt-2 text-sm font-semibold">{packageData.travelStyle || "Safari"}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-white/90 backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.22em] text-white/55">Category</div>
              <div className="mt-2 text-sm font-semibold">{packageData.category}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto widthclass px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr] lg:items-start">
          <aside className="lg:sticky lg:top-8 lg:order-1">
            <div className="space-y-6 rounded-[2rem] border border-[#e7dbc9] bg-white p-5 shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:p-6">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9f7f53]">Navigation</div>
                <div className="mt-4 space-y-2">
                  {tabs.map((tab) => (
                    <a key={tab.id} href={`#${tab.id}`} className="block rounded-2xl border border-[#eadfce] px-4 py-3 text-sm font-medium text-[#433627] transition hover:border-[#cdb793] hover:bg-[#fff9f1]">
                      {tab.label}
                    </a>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.6rem] bg-[#f8f4eb] p-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#3a2d20]">
                  <FaGlobe className="text-[#465b2d]" />
                  At a glance
                </div>
                <div className="mt-4 space-y-3 text-sm text-[#665949]">
                  <div className="flex items-center justify-between gap-4 border-b border-[#e8dcc9] pb-2">
                    <span>Days</span>
                    <span className="font-semibold text-[#34291f]">{packageData.duration || "-"}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#e8dcc9] pb-2">
                    <span>Nights</span>
                    <span className="font-semibold text-[#34291f]">{packageData.nights || "-"}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#e8dcc9] pb-2">
                    <span>Style</span>
                    <span className="font-semibold text-[#34291f]">{packageData.travelStyle || "Safari"}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Price</span>
                    <span className="font-semibold text-[#34291f]">{packageData.priceType === "CUSTOM" ? "Custom" : formatPrice(packageData.priceFrom, packageData.currency)}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[1.6rem] bg-[#2f3b23] p-5 text-white">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Quick contact</div>
                <p className="mt-3 text-sm leading-7 text-white/80">Share your preferred dates, group size, and budget and we will shape a similar trip for you.</p>
                <Link href="/travel-proposal" className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-4 py-3 font-semibold text-[#2f3b23] transition hover:bg-[#f5f0e7]">
                  Start planning now
                </Link>
              </div>
            </div>
          </aside>

          <main className="space-y-8 lg:order-2">
            {highlights.length > 0 && (
              <section id="overview" className="border-t border-[#e7dbc9] p-8 bg-white/[0.8] shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:pt-10 mx-auto">
                <SectionTitle eyebrow="Highlights" title="What makes this trip stand out" description="A short list of the most important selling points for the tour." />
                <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {highlights.slice(0, 6).map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#ebe0d1] bg-[#fffaf2] p-4">
                      <div className=" flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#465b2d] text-white">
                        <FaCheck className="text-xs" />
                      </div>
                      <div className="text-sm  font-medium text-[#4d4132]">{item}</div>
                    </div>
                  ))}
                </div>
              </section>
            )}
            <section className="border-t border-[#e7dbc9] p-8 bg-white/[0.8] shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:pt-10 mx-auto">
              <div className="relative overflow-hidden rounded-[0.7rem] select-none" onPointerDown={handlePointerDown} onPointerMove={handlePointerMove} onPointerUp={() => finishDrag(imageSlides.length)} onPointerCancel={() => finishDrag(imageSlides.length)} onPointerLeave={() => finishDrag(imageSlides.length)}>
                <img src={heroImage} alt={packageData.name} draggable={false} className="h-[360px] w-full object-cover sm:h-[590px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                {imageSlides.length > 1 ? (
                  <>
                    <button type="button" aria-label="Previous image" onClick={() => goToImage(currentImageIndex - 1, imageSlides.length)} className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/15 p-3 text-white backdrop-blur-md transition hover:bg-white/25">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button type="button" aria-label="Next image" onClick={() => goToImage(currentImageIndex + 1, imageSlides.length)} className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-white/15 p-3 text-white backdrop-blur-md transition hover:bg-white/25">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                ) : null}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">Overview</span>
                    {packageData.priceType === "FIXED" && packageData.priceFrom ? <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">From {formatPrice(packageData.priceFrom, packageData.currency)}</span> : null}
                  </div>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-white/90 sm:text-base">{packageData.fullDescription || packageData.shortDescription || packageData.experienceSummary}</p>
                </div>
              </div>

              {imageSlides.length > 1 && (
                <div className="mt-4 grid grid-cols-4 gap-3 sm:grid-cols-6 lg:grid-cols-8">
                  {imageSlides.map((image, index) => (
                    <button key={image + index} type="button" onClick={() => setCurrentImageIndex(index)} className={`overflow-hidden rounded-2xl border-2 transition ${index === currentImageIndex ? "border-[#465b2d] ring-2 ring-[#465b2d]/15" : "border-transparent hover:border-[#e2d3bc]"}`}>
                      <img src={image} alt={`Gallery ${index + 1}`} className="h-20 w-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </section>
            <section className="border-t border-[#e7dbc9] p-8 bg-white/[0.8] shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:pt-10 mx-auto">
              <div>
                <SectionTitle eyebrow="Trip story" title="A clean, editorial summary" description="A lighter, text-led presentation that feels more like a luxury travel magazine and less like a dashboard." />

                <p className="mt-6 max-w-4xl text-base leading-8 text-[#5f5345] sm:text-lg sm:leading-9">{packageData.experienceSummary || packageData.fullDescription || packageData.shortDescription}</p>

                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#6d604d]">
                  <div>
                    <span className="uppercase tracking-[0.22em] text-[#9f7f53]">Travel style</span>
                    <div className="mt-1 font-semibold text-[#34291f]">{packageData.travelStyle || "Safari"}</div>
                  </div>
                  <div className="hidden h-10 w-px bg-[#e7dbc9] sm:block" />
                  <div>
                    <span className="uppercase tracking-[0.22em] text-[#9f7f53]">Themes</span>
                    <div className="mt-1 font-semibold text-[#34291f]">{packageData.themes?.join(", ") || "—"}</div>
                  </div>
                  <div className="hidden h-10 w-px bg-[#e7dbc9] sm:block" />
                  <div>
                    <span className="uppercase tracking-[0.22em] text-[#9f7f53]">Best for</span>
                    <div className="mt-1 font-semibold text-[#34291f]">{packageData.bestFor?.join(", ") || "—"}</div>
                  </div>
                  <div className="hidden h-10 w-px bg-[#e7dbc9] xl:block" />
                </div>
              </div>
            </section>

            
            {accommodations.length > 0 && (
              <section className="rounded-[2rem] border border-[#e7dbc9] bg-white p-6 shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:p-8">
                <SectionTitle eyebrow="Accommodation" title="Where you stay" description="A compact view of the camps, lodges, or hotels used in the package." />
                <div className="mt-8 grid gap-4 lg:grid-cols-2">
                  {accommodations.map((item) => (
                    <div key={`${item.name}-${item.location}`} className="rounded-[1.6rem] border border-[#eadfce] bg-[#fffdfa] p-5">
                      <h3 className="text-xl font-semibold text-[#2f261d]">{item.name}</h3>
                      <p className="mt-1 text-sm text-[#6f6355]">
                        {item.location} · {item.type}
                      </p>
                      {item.description ? <p className="mt-4 text-sm leading-7 text-[#6f6355]">{item.description}</p> : null}
                    </div>
                  ))}
                </div>
              </section>
            )}

            <section id="inclusions" className="border-t border-[#e7dbc9] p-8 bg-white/[0.8] shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:pt-10 mx-auto">
              <SectionTitle eyebrow="Inclusions" title="What is included and excluded" description="A simple split view so travelers can scan what they get and what is not covered." />

              <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:gap-10">
                <div>
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#2f6b3f]">Included</div>
                  <div className="space-y-3">
                    {included.map((item) => (
                      <div key={item} className="flex items-start gap-3 border-b border-[#edf1e7] pb-3 text-sm leading-7 text-[#4d4132] last:border-b-0 last:pb-0">
                        <FaCheck className="mt-1 text-[#2f6b3f]" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {included.length === 0 && <div className="text-sm text-[#756858]">Included items will appear here.</div>}
                  </div>
                </div>

                <div className="lg:border-l lg:border-[#e7dbc9] lg:pl-10">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[#9f5b5b]">Excluded</div>
                  <div className="space-y-3">
                    {excluded.map((item) => (
                      <div key={item} className="flex items-start gap-3 border-b border-[#f2e4e4] pb-3 text-sm leading-7 text-[#5f5345] last:border-b-0 last:pb-0">
                        <FaInfoCircle className="mt-1 text-[#c56a6a]" />
                        <span>{item}</span>
                      </div>
                    ))}
                    {excluded.length === 0 && <div className="text-sm text-[#756858]">Excluded items will appear here.</div>}
                  </div>
                </div>
              </div>
            </section>
            <section id="journey" className="border-t border-[#e7dbc9] p-8 bg-white/[0.8] shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:pt-10 mx-auto">
              <SectionTitle eyebrow="Journey" title="Your adventure begins" description="Follow the route destination by destination, including where you stay at each stop." />

              {destinations.length > 0 ? (
                <div className="mt-8 space-y-8">
                  {destinations.map((destination, index) => {
                    const accommodation = destination?.accommodation || {};
                    const destinationImages = uniqueImages([
                      ...safeArray(destination?.images),
                      ...safeArray(accommodation?.images),
                    ]);
                    const destinationImage = destinationImages[0] || packageData.mainImage || "/logo.png";
                    const accommodationImage = safeArray(accommodation?.images)[0] || destinationImage;
                    const facilities = safeArray(accommodation?.highlights);

                    return (
                      <div key={`${destination.place || "destination"}-${index}`}>
                        <article className="rounded-[1.6rem] border border-[#e4d8c8] bg-white p-4 sm:p-6">
                          <div className="grid gap-5 lg:grid-cols-[340px_1fr] lg:gap-7">
                            <div className="overflow-hidden rounded-2xl border border-[#e6dbc9] bg-[#f8f4eb]">
                              <img src={destinationImage} alt={destination.place || "Destination"} className="h-56 w-full object-cover lg:h-full" />
                            </div>

                            <div>
                              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f7f53]">Destination {index + 1}</p>
                              <h3 className="mt-2 text-2xl font-semibold text-[#2f261d]">{destination.place || "Destination"}</h3>
                              <p className="mt-2 text-sm text-[#6f6355]">{destination.nights || 0} Night{Number(destination.nights || 0) > 1 ? "s" : ""}</p>

                              <p className="mt-4 text-sm leading-7 text-[#5f5345]">{truncateText(destination.description || "No description provided yet for this destination.", 300)}</p>

                              <div className="mt-6 rounded-2xl border border-[#e8dccd] bg-[#fffaf2] p-4">
                                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#9f7f53]">Stay at</p>
                                <h4 className="mt-2 text-lg font-semibold text-[#2f261d]">{accommodation.name || "Accommodation details coming soon"}</h4>
                                <p className="mt-1 text-sm text-[#6f6355]">{accommodation.type || "Camp / Lodge"}</p>

                                <div className="mt-4 grid gap-4 sm:grid-cols-[190px_1fr]">
                                  <div className="overflow-hidden rounded-xl border border-[#e5d8c7] bg-white">
                                    <img src={accommodationImage} alt={accommodation.name || "Accommodation"} className="h-32 w-full object-cover" />
                                  </div>

                                  <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9f7f53]">Popular facilities</p>
                                    {facilities.length > 0 ? (
                                      <div className="mt-2 flex flex-wrap gap-2">
                                        {facilities.slice(0, 8).map((facility) => (
                                          <span key={facility} className="rounded-full border border-[#d8c8b2] bg-white px-3 py-1 text-xs font-medium text-[#4e4335]">
                                            {facility}
                                          </span>
                                        ))}
                                      </div>
                                    ) : (
                                      <p className="mt-2 text-sm text-[#756858]">Facilities will be shown here once added in dashboard.</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>

                        {index < destinations.length - 1 ? (
                          <div className="mt-5 text-center text-sm font-medium text-[#8d7555]">Continue your journey to</div>
                        ) : (
                          <div className="mt-5 text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#8d7555]">You have reached the end of your adventure</div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="mt-8 rounded-[1.2rem] border border-dashed border-[#d8c9b6] bg-white p-6 text-sm text-[#756858]">Journey details will appear here when destinations and accommodation are added in dashboard.</div>
              )}
            </section>


            <section id="travel" className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-[2rem] border border-[#e7dbc9] bg-white p-6 shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:p-8">
                <SectionTitle eyebrow="Pricing" title={packageData.priceType === "CUSTOM" ? "Custom quote" : "Starting price"} description={packageData.pricingNotes || "Clear pricing information for the package."} />
                <div className="mt-6 rounded-[1.6rem] bg-gradient-to-br from-[#465b2d] to-[#2f3b23] p-6 text-white">
                  <div className="text-xs uppercase tracking-[0.2em] text-white/60">Starting from</div>
                  <div className="mt-2 text-4xl font-semibold">{packageData.priceType === "CUSTOM" ? "Custom quote" : formatPrice(packageData.priceFrom, packageData.currency)}</div>
                  <div className="mt-1 text-sm text-white/75">per person</div>
                </div>

                <div className="mt-6 grid gap-3 text-sm text-[#5f5345]">
                  <div className="flex items-center justify-between gap-4 border-b border-[#ebe0d1] pb-3">
                    <span>Price type</span>
                    <span className="font-semibold text-[#34291f]">{packageData.priceType || "FIXED"}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4 border-b border-[#ebe0d1] pb-3">
                    <span>Currency</span>
                    <span className="font-semibold text-[#34291f]">{packageData.currency || "USD"}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Package status</span>
                    <span className="font-semibold text-[#34291f]">{packageData.isActive ? "Available" : "Hidden"}</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#e7dbc9] bg-white p-6 shadow-[0_18px_60px_rgba(65,47,23,0.08)] sm:p-8">
                <SectionTitle eyebrow="Book now" title="Like what you see? Let's make it happen" description="A clean premium booking card that matches the new tour detail feel." />
                <div className="mt-6 rounded-[1.6rem] bg-gradient-to-br from-[#465b2d] to-[#2f3b23] p-6 text-white">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/60">Package</div>
                      <div className="mt-2 text-3xl font-semibold">{packageData.name}</div>
                    </div>
                    
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <Link href="/travel-proposal" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-[#2f3b23] transition hover:bg-[#f6f1e8]">
                      Start planning
                    </Link>
                    <button type="button" onClick={() => setIsFavorite((value) => !value)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15">
                      <FaHeart className={isFavorite ? "text-rose-300" : "text-white"} />
                      {isFavorite ? "Saved" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

