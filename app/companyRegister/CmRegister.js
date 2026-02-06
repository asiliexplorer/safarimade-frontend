"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRegisterCompanyMutation } from "../redux/features/auth/authApi";

export default function CmRegister() {
  const router = useRouter();
  const [registerCompany, { isLoading }] = useRegisterCompanyMutation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!name.trim() || !email.trim() || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      await registerCompany({ name, email, password }).unwrap();
      setSuccess("Company registered successfully. You will be redirected to login.");
      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch (err) {
      console.error("Register error:", err);
      const msg =
        (err && err.data && (err.data.error || err.data.message)) ||
        err?.error ||
        err?.message ||
        "Registration failed";
      setError(String(msg));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">Register Company</h2>
        <p className="text-sm text-gray-500 mb-4">
          Create your company account. It will be submitted for admin approval.
        </p>

        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
        {success && <div className="mb-4 text-sm text-green-600">{success}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100"
              placeholder="My Company Ltd"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100"
              placeholder="company@gmail.com"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100"
                placeholder="Enter password"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm
              </label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-100"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white ${
              isLoading ? "bg-indigo-400 cursor-wait" : "bg-indigo-600 hover:bg-indigo-700"
            }`}
          >
            {isLoading ? (
              <svg
                className="w-4 h-4 animate-spin text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
              </svg>
            ) : null}
            <span>{isLoading ? "Registering..." : "Register Company"}</span>
          </button>

          <div className="text-xs text-gray-500 text-center">
            Already registered?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-indigo-600 hover:underline"
            >
              Login here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
