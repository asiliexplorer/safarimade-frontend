"use client";

export default function PackageCard({ title, days, price, image }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      <div className="relative h-44 bg-gray-100">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute left-3 top-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold">
          {days} Days
        </div>
        <div className="absolute right-3 top-3 bg-emerald-800 text-white px-3 py-1 rounded-full text-xs">
          Private
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">
          Arusha • Serengeti • Ngorongoro
        </p>
        <div className="flex items-center justify-between mt-4">
          <div className="text-lg font-extrabold text-emerald-700">
            ${price}
          </div>
          <button className="bg-[#8a3f2c] text-white px-4 py-2 rounded-full text-sm">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
