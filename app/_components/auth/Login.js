"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [login, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    try {
      const res = await login({ email, password }).unwrap();

      // Save token in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", res.data.token);
      }

      // Redirect based on role
      const role = res.data.user.role;
      if (role === "company") {
        router.push("/companyDashboard");
      } else if (role === "customer") {
        router.push("/customerDashboard");
      } else if (role === "admin") {
        router.push("/dashboard"); // optional admin dashboard
      } else {
        router.push("/"); // fallback
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error?.data?.message || "Login failed");
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#f7f4ee] px-4 py-10 sm:px-8 lg:px-16 flex items-center justify-center">
      <div className="pointer-events-none absolute -left-28 top-[-90px] h-72 w-72 rounded-full bg-[#8B6F47]/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-[-70px] h-80 w-80 rounded-full bg-[#8B6F47]/30 blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-4xl overflow-hidden rounded-3xl border border-[#e7dccb] bg-white/90 shadow-[0_20px_80px_rgba(64,45,20,0.15)] backdrop-blur-sm md:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-[#8B6F47] via-[#7b6140] to-[#6a5439] p-10 text-white md:flex md:flex-col md:justify-between">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-white/35 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase">
              SafariMade
            </p>
            <h2
              className="text-4xl font-black leading-tight"
              style={{ fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif' }}
            >
              Adventure starts with one secure login.
            </h2>
            <p className="mt-4 max-w-md text-sm text-white/90">
              Access your dashboard, manage trips, and keep every booking in one place.
            </p>
          </div>
          <div className="space-y-2 text-sm text-white/95">
            <p>Fast role-based access</p>
            <p>Protected customer and company areas</p>
            <p>One account for your full safari workflow</p>
          </div>
        </div>

        <div className="p-6 sm:p-10 md:p-12">
          <div className="mx-auto w-full max-w-md">
            <h1
              className="text-3xl font-black text-[#2a1a12] sm:text-4xl"
              style={{ fontFamily: '"Trebuchet MS", "Segoe UI", sans-serif' }}
            >
              Welcome Back
            </h1>
            <p className="mt-2 text-sm text-[#6e5347]">
              Login to continue your safari journey.
            </p>

            {errorMessage && (
              <p className="mt-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
                {errorMessage}
              </p>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4f3528]">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-xl border border-[#e7d8c4] bg-[#fffdf9] px-4 py-3 text-[#2b1c13] outline-none transition focus:border-[#8B6F47] focus:ring-4 focus:ring-[#8B6F47]/25"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#4f3528]">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full rounded-xl border border-[#e7d8c4] bg-[#fffdf9] px-4 py-3 pr-12 text-[#2b1c13] outline-none transition focus:border-[#8B6F47] focus:ring-4 focus:ring-[#8B6F47]/25"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute inset-y-0 right-3 inline-flex items-center text-[#8B6F47] hover:text-[#735a3b]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-xl bg-gradient-to-r from-[#8B6F47] to-[#7b6140] px-4 py-3 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#8B6F47]/35 transition hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Logging in..." : "Login to Dashboard"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
