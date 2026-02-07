"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useRegisterCustomerMutation } from "../redux/features/auth/authApi";

export default function CustomerRegister() {
  const router = useRouter();
  const [registerCustomer, { isLoading }] = useRegisterCustomerMutation();

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
      setError("Please fill in all fields.");
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
      await registerCustomer({ name, email, password }).unwrap();
      setSuccess("Customer registered successfully. Redirecting to login...");

      setTimeout(() => {
        router.push("/login");
      }, 1200);
    } catch (err) {
      const msg =
        err?.data?.error ||
        err?.data?.message ||
        err?.error ||
        "Registration failed";

      setError(String(msg));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-2">Create Customer Account</h2>
        <p className="text-sm text-gray-500 mb-4">
          Register as a new customer to access your dashboard.
        </p>

        {error && <div className="mb-4 text-sm text-red-600">{error}</div>}
        {success && (
          <div className="mb-4 text-sm text-green-600">{success}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
              placeholder="customer@example.com"
              required
            />
          </div>

          {/* Password Fields */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
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
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Confirm password"
                required
              />
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-white ${
              isLoading
                ? "bg-blue-400 cursor-wait"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Registering..." : "Register"}
          </button>

          <div className="text-xs text-gray-500 text-center pt-2">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => router.push("/login")}
              className="text-blue-600 hover:underline"
            >
              Login here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
