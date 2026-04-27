"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { mockPackages, wildebeestMigrationPackages } from "../../lib/mockData";
import { slugifyPackageName } from "../../lib/packageSlug";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1800&q=80",
    title: "Serengeti Plains",
    caption: "Golden savannah moments in Tanzania's most iconic safari landscape.",
  },
  {
    src: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1800&q=80",
    title: "Ngorongoro Morning",
    caption: "Early light over crater valleys with incredible wildlife views.",
  },
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1800&q=80",
    title: "Kilimanjaro Horizons",
    caption: "Snow-capped summit and dramatic skies above Tanzania.",
  },
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80",
    title: "Zanzibar Coast",
    caption: "Turquoise water, white sand, and warm Indian Ocean breeze.",
  },
  {
    src: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?auto=format&fit=crop&w=1800&q=80",
    title: "Tarangire Wildlife",
    caption: "Elephants and baobab silhouettes in unforgettable light.",
  },
  {
    src: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?auto=format&fit=crop&w=1800&q=80",
    title: "Lake Manyara Colors",
    caption: "A peaceful blend of water, forest, and panoramic escarpments.",
  },
];

const tanzaniaGridImages = [
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=1200&q=80",
    title: "Serengeti Sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1542367592-8849eb950fd8?auto=format&fit=crop&w=1200&q=80",
    title: "Safari Wildlife",
  },
  {
    src: "https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=1200&q=80",
    title: "Ngorongoro Views",
  },
  {
    src: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?auto=format&fit=crop&w=1200&q=80",
    title: "Big Cats of Tanzania",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    title: "Kilimanjaro Range",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    title: "Remote Landscapes",
  },
  {
    src: "https://images.unsplash.com/photo-1535406208535-1429839cfd13?auto=format&fit=crop&w=1200&q=80",
    title: "Zanzibar Escape",
  },
  {
    src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1200&q=80",
    title: "Savannah Light",
  },
];

const tanzaniaHighlights = [
  {
    heading: "Why Tanzania Stands Out",
    text: "Tanzania combines world-famous game viewing with dramatic geography. You can experience classic safari plains, volcanic highlands, and tropical coastlines in one country.",
  },
  {
    heading: "Top Safari Regions",
    text: "Serengeti and Ngorongoro are iconic for first-time visitors, while Tarangire, Lake Manyara, Ruaha, and Nyerere offer quieter and deeply rewarding wildlife experiences.",
  },
  {
    heading: "Best Time to Visit",
    text: "June to October is excellent for dry-season game viewing. January to March offers green scenery and calving season in key migration areas.",
  },
  {
    heading: "Complete Your Journey",
    text: "Many travelers pair a mainland safari with Zanzibar for beach time, making Tanzania perfect for family trips, honeymoons, and milestone adventures.",
  },
];

export default function GalleryPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = galleryImages.length;

  const featuredPackages = useMemo(() => {
    const safariPackage = mockPackages.find(
      (pkg) => !pkg?.Mount && !pkg?.Island && !pkg?.island
    );
    const kilimanjaroPackage = mockPackages.find((pkg) => pkg?.Mount);
    const zanzibarPackage = mockPackages.find((pkg) => pkg?.Island || pkg?.island);
    const wildebeestPackage = wildebeestMigrationPackages?.[0];

    return [
      safariPackage && { ...safariPackage, categoryLabel: "Safari" },
      kilimanjaroPackage && { ...kilimanjaroPackage, categoryLabel: "Kilimanjaro" },
      wildebeestPackage && { ...wildebeestPackage, categoryLabel: "Wildebeest Migration" },
      zanzibarPackage && { ...zanzibarPackage, categoryLabel: "Zanzibar" },
    ].filter(Boolean);
  }, []);

  const currentSlide = useMemo(
    () => galleryImages[currentIndex],
    [currentIndex]
  );

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#f5efe6] via-[#f8f7f2] to-white text-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-10">
          <p className="inline-flex rounded-full border border-[#8B6F47]/30 bg-[#8B6F47]/10 px-4 py-1.5 text-xs md:text-sm font-semibold tracking-wide text-[#8B6F47] uppercase">
            Tanzania Gallery
          </p>
          <h1 className="text-4xl md:text-6xl font-black mt-4 mb-4 leading-tight">
            Tanzania Country Photo Gallery
          </h1>
          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto">
            Slide through unforgettable Tanzania scenes, from safari wilderness
            to mountain views and Zanzibar beaches.
          </p>
        </div> */}

        <section className="relative rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-white">
          <div className="relative h-[320px] sm:h-[430px] md:h-[560px]">
            <img
              src={currentSlide.src}
              alt={currentSlide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

            <button
              type="button"
              onClick={goToPrevious}
              aria-label="Previous slide"
              className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/90 text-slate-900 text-2xl font-bold shadow-lg hover:bg-white transition"
            >
              &lt;
            </button>

            <button
              type="button"
              onClick={goToNext}
              aria-label="Next slide"
              className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 h-12 w-12 md:h-14 md:w-14 rounded-full bg-white/90 text-slate-900 text-2xl font-bold shadow-lg hover:bg-white transition"
            >
              &gt;
            </button>

            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-8 text-white">
              <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-white/85 mb-2">
                Slide {currentIndex + 1} of {totalSlides}
              </p>
              <h2 className="text-2xl md:text-4xl font-bold mb-2">
                {currentSlide.title}
              </h2>
              <p className="text-sm md:text-base text-white/90 max-w-3xl">
                {currentSlide.caption}
              </p>
            </div>
          </div>
        </section>

        <div className="mt-6 flex justify-center gap-2.5 flex-wrap">
          {galleryImages.map((image, index) => (
            <button
              key={image.title}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Go to ${image.title}`}
              className={`h-3.5 rounded-full transition-all ${
                currentIndex === index
                  ? "w-10 bg-[#8B6F47]"
                  : "w-3.5 bg-[#8B6F47]/30 hover:bg-[#8B6F47]/60"
              }`}
            />
          ))}
        </div>

        

        <section className="mt-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#8B6F47] mb-2">
                Travel Packages
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Explore Tanzania Packages
              </h2>
              <p className="text-slate-600 mt-2 max-w-2xl">
                Scroll from gallery to real trip options: Safari, Kilimanjaro,
                Wildebeest Migration, and Zanzibar packages.
              </p>
            </div>

            <Link
              href="/affordable-safari-tour-packages"
              className="inline-flex items-center justify-center rounded-xl bg-[#8B6F47] px-6 py-3 text-white font-semibold hover:bg-[#6B5A3D] transition"
            >
              Explore More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            {featuredPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/affordable-safari-tour-packages/${slugifyPackageName(pkg.name)}`}
                className="group block rounded-2xl overflow-hidden bg-white border border-black/5 shadow-md hover:shadow-xl transition"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-white/90 text-[#8B6F47] text-xs font-bold uppercase tracking-wide px-3 py-1">
                    {pkg.categoryLabel}
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="text-lg font-bold text-slate-900 leading-snug min-h-[3.5rem]">
                    {pkg.name}
                  </h3>
                  <p className="text-sm text-slate-600 mt-2 line-clamp-2">
                    {pkg.shortDescription}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-[#8B6F47] font-bold text-lg">
                      ${pkg.price?.toLocaleString()}
                    </span>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">
                      {pkg.duration} Days
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900">
              Tanzania Photo Grid
            </h2>
            <p className="text-slate-600 mt-3 max-w-3xl mx-auto">
              A curated visual grid from Tanzania landscapes, wildlife moments,
              and coastal escapes.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {tanzaniaGridImages.map((item) => (
              <figure
                key={item.title}
                className="group relative overflow-hidden rounded-2xl border border-black/5 shadow-md bg-white"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="h-40 md:h-52 w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm md:text-base text-white font-semibold tracking-wide">
                  {item.title}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-20 rounded-3xl bg-white border border-black/5 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-xs md:text-sm uppercase tracking-[0.2em] font-bold text-[#8B6F47] mb-3">
                Discover Tanzania
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
                Safari Energy, Mountain Drama, and Island Calm
              </h2>
              <p className="text-slate-600 mb-8">
                Tanzania is one of East Africa's most complete travel
                destinations. From migration action in the north to remote wild
                parks in the south and Zanzibar's beaches, the variety is what
                makes every itinerary feel unique.
              </p>

              <div className="space-y-5">
                {tanzaniaHighlights.map((item) => (
                  <article
                    key={item.heading}
                    className="rounded-xl border border-[#8B6F47]/15 bg-[#f8f4ed] p-4"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-1.5">
                      {item.heading}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600">
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/packages"
                  className="inline-block rounded-xl bg-[#8B6F47] px-5 py-2.5 text-white font-semibold hover:bg-[#6B5A3D] transition"
                >
                  View Safari Packages
                </Link>
                <Link
                  href="/travel-proposal"
                  className="inline-block rounded-xl border border-[#8B6F47] px-5 py-2.5 text-[#8B6F47] font-semibold hover:bg-[#8B6F47] hover:text-white transition"
                >
                  Plan My Tanzania Trip
                </Link>
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-full bg-[#efe5d8] p-4 md:p-6 lg:p-8">
              <div className="grid grid-cols-2 gap-4 h-full">
                <img
                  src="https://images.unsplash.com/photo-1598439210625-5067c578f3f6?auto=format&fit=crop&w=1200&q=80"
                  alt="Tanzania safari jeep journey"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1576485290814-1c72aa4bbb8e?auto=format&fit=crop&w=1200&q=80"
                  alt="Zanzibar ocean and beach"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80"
                  alt="Wildlife photography in Tanzania"
                  className="h-full w-full object-cover rounded-2xl"
                />
                <img
                  src="https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=1200&q=80"
                  alt="Tanzania wildlife close-up"
                  className="h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        
      </div>
    </main>
  );
}
