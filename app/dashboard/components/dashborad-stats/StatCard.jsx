"use client";
import React from "react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  tone = "default",
}) {
  const toneClasses = {
    default: "bg-[#f3efe7] text-[#8B6F47]",
    green: "bg-[#e9f6ef] text-[#2f8f58]",
    blue: "bg-[#ebf3ff] text-[#2f6fcf]",
    amber: "bg-[#fff4e8] text-[#c96b1a]",
  };

  return (
    <div className="group rounded-2xl border border-[#ebe2d4] bg-white p-6 shadow-[0_10px_30px_rgba(51,40,25,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(51,40,25,0.12)]">
      {icon && (
        <div
          className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
            toneClasses[tone] || toneClasses.default
          }`}
        >
          {icon}
        </div>
      )}

      <div className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8a7a65]">
        {title}
      </div>

      <div className="mt-3 text-3xl font-black text-[#2b2218]">{value}</div>

      {subtitle && <div className="mt-2 text-sm leading-6 text-[#756754]">{subtitle}</div>}
    </div>
  );
}
