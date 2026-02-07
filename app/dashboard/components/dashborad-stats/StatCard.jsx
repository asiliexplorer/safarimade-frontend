"use client";
import React from "react";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  variant = "normal", // "normal" | "gauge" | "donut"
} ) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center border border-transparent hover:border-gray-100">
      {icon && <div className="mb-3 text-2xl">{icon}</div>}

      <div className="text-gray-400 text-sm">{title}</div>

      <div className="mt-3 text-3xl font-extrabold text-gray-900">{value}</div>

      {subtitle && <div className="text-sm text-gray-500 mt-2">{subtitle}</div>}

      {/* small help icon */}
      <div className="absolute -z-0" />
    </div>
  );
}
