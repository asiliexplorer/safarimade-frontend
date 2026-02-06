"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  console.error("App Error:", error);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-4">
      <div className="max-w-lg w-full bg-white rounded-xl shadow-lg p-7 text-center border border-red-100">
        {/* Icon */}
        <div className="flex items-center justify-center mb-4">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center text-red-600">
            <svg
              className="w-12 h-12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 9v4" />
              <path d="M12 17h.01" />
              <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-bold text-red-700 mb-2">
          Oops! Something went wrong.
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          An unexpected error occurred. You may try again or return to home.
        </p>

        {/* OPTIONAL: Show error message (for debugging) */}
        <p className="text-xs bg-red-50 text-red-700 px-3 py-2 rounded-md border border-red-100 mb-5">
          {error?.message || "Unknown error occurred"}
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-4 py-2 bg-white border border-gray-200 rounded-md text-gray-700 hover:bg-gray-100"
          >
            Go to Homepage
          </Link>

          <Link
            href="/dashboard"
            className="px-4 py-2 bg-red-100 text-red-700 border border-red-200 rounded-md hover:bg-red-200"
          >
            Back to Dashboard
          </Link>
        </div>

        <p className="text-xs text-gray-400 mt-6">
          If the issue continues, please contact support.
        </p>
      </div>
    </div>
  );
}
