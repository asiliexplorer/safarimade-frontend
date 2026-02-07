"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 px-4">
      <div className="max-w-3xl w-full text-center">
        <div className="inline-flex items-center justify-center w-36 h-36 mx-auto mb-6 rounded-full bg-indigo-50 shadow-sm">
          {/* Friendly SVG */}
          <svg
            className="w-20 h-20 text-indigo-600"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M10 14l-2-2 2-2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 10l2 2-2 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
          Oops — page not found
        </h1>

        <p className="text-sm sm:text-base text-slate-600 mb-6">
          The page you’re looking for doesn’t exist or has been moved. Try one
          of the options below.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <button
            onClick={() => router.back()}
            className="px-4 py-2 rounded-md border border-gray-200 bg-white text-sm hover:shadow-sm"
          >
            ← Go back
          </button>

          <Link
            href="/"
            className="px-4 py-2 rounded-md bg-indigo-600 text-white text-sm hover:bg-indigo-700"
          >
            Go to Homepage
          </Link>

          <Link
            href="/login"
            className="px-4 py-2 rounded-md bg-white text-indigo-600 border border-indigo-100 text-sm hover:bg-indigo-50"
          >
            Sign in
          </Link>

          <Link
            href="/dashboard"
            className="px-4 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700"
          >
            Dashboard
          </Link>
        </div>

        <div className="mt-8 bg-white border border-gray-100 rounded-lg shadow-sm p-4">
          <p className="text-sm text-slate-500 mb-2">
            Looking for something specific?
          </p>

          <div className="flex gap-2">
            <input
              type="search"
              placeholder="Search the site..."
              className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100"
            />
            <button className="px-4 py-2 rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
              Search
            </button>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          If you think this is an error,{" "}
          <Link href="/contact" className="text-indigo-600 hover:underline">
            contact support
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
