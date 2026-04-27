"use client";

export default function PackageHeroBanner({
  backgroundImage,
  titlePrefix,
  titleHighlight,
  subtitle,
  description,
  badge = "Tanzania Collection",
}) {
  return (
    <section className="relative h-[72vh] min-h-[460px] max-h-[760px] mb-16 overflow-hidden flex items-center justify-center text-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{
          backgroundImage: `url('${backgroundImage}')`,
        }}
      />

      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.16),transparent_55%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0f172acc] via-[#8B6F47]/30 to-[#0f172acc]" />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6">
        <p className="inline-flex items-center rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-[11px] sm:text-xs tracking-[0.24em] text-white/95 uppercase font-semibold">
          {badge}
        </p>

        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] text-white tracking-tight">
          {titlePrefix} <span className="text-[#f2d3a6]">{titleHighlight}</span>
        </h1>

        <p className="mt-5 text-xl md:text-2xl lg:text-3xl text-white/90 font-semibold max-w-4xl mx-auto leading-snug">
          {subtitle}
        </p>

        <div className="w-28 h-1 bg-gradient-to-r from-[#f2d3a6] via-[#8B6F47] to-[#8B5A4A] mx-auto rounded-full mt-7 mb-7" />

        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100/95 max-w-4xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}
