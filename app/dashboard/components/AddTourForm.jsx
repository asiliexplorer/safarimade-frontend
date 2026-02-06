"use client";
import React, { useState } from "react";

export default function AddTourForm() {
  const [title, setTitle] = useState("");
  const [days, setDays] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [countries, setCountries] = useState([]);
  const maxTitle = 50;
  const maxDesc = 500;

  function toggleCountry(c) {
    setCountries((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    );
  }

  return (
    <form className="bg-white rounded-lg shadow-sm p-6 space-y-8">
      <div>
        <h2 className="text-xl font-semibold">Add a new tour</h2>
        <p className="text-sm text-gray-500 mt-1">
          All requested info and editorial guidelines are required
        </p>
      </div>

      <section>
        <h3 className="font-semibold">Tour title</h3>
        <div className="mt-2 flex gap-3">
          <select
            value={days}
            onChange={(e) => setDays(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="">-- Select days --</option>
            <option value="1">1 Day</option>
            <option value="3">3 Days</option>
            <option value="7">7 Days</option>
            <option value="10">10 Days</option>
          </select>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter tour title"
            className="flex-1 border p-2 rounded"
          />
        </div>
        <div className="text-sm text-orange-600 mt-1">
          You typed {title.length} characters and have {maxTitle - title.length}{" "}
          left (min. 10 max. 50 characters)
        </div>
      </section>

      <section>
        <h3 className="font-semibold">Short tour description</h3>
        <div className="mt-2">
          <textarea
            value={shortDesc}
            onChange={(e) => setShortDesc(e.target.value)}
            rows={6}
            className="w-full border p-3 rounded"
          />
          <div className="text-sm text-orange-600 mt-1">
            You typed {shortDesc.length} characters and have{" "}
            {maxDesc - shortDesc.length} left (min. 250 max. 500 characters)
          </div>
        </div>
      </section>

      <section>
        <h3 className="font-semibold">
          What countries will be visited on this tour
        </h3>
        <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          {[
            "Botswana",
            "Madagascar",
            "South Africa",
            "Tanzania",
            "Kenya",
            "Namibia",
            "Uganda",
            "Zambia",
            "Zimbabwe",
            "Malawi",
            "Rwanda",
          ].map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={countries.includes(c)}
                onChange={() => toggleCountry(c)}
              />
              <span>{c}</span>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-semibold">Main focus</h3>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2">
          {[
            "Game drive safari",
            "Fly-in safari",
            "Walking safari",
            "Boat trip",
            "Photo safari",
            "Cycling safari",
          ].map((opt) => (
            <label key={opt} className="flex items-center gap-2">
              <input type="radio" name="focus" />
              <span>{opt}</span>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h3 className="font-semibold">
          Is this a private or shared group tour
        </h3>
        <div className="mt-3 space-y-2">
          <label className="flex items-center gap-2">
            <input type="radio" name="groupType" /> Private tour
          </label>
          <label className="flex items-center gap-2">
            <input type="radio" name="groupType" /> Shared group tour
            <select className="ml-4 border p-1 rounded">
              <option>-- Select --</option>
              <option>4</option>
              <option>8</option>
            </select>
          </label>
        </div>
      </section>

      <div className="flex items-center gap-3">
        <button
          type="button"
          className="bg-red-600 text-white px-5 py-2 rounded"
        >
          Preview Tour
        </button>
        <button
          type="submit"
          className="bg-emerald-700 text-white px-5 py-2 rounded"
        >
          Submit Tour
        </button>
        <button type="button" className="border px-4 py-2 rounded">
          Save to continue later
        </button>
      </div>
    </form>
  );
}
