"use client";

import React, { useEffect, useState } from "react";
import Modal from "../components/ui/Modal";
 
export default function RejectedPage() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const flag = sessionStorage.getItem("showRejectedModal");
      if (flag) {
        setShowModal(true);
        sessionStorage.removeItem("showRejectedModal");
      } else {
        // show modal anyway if they landed here manually
        setShowModal(true);
      }
    }
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Account Rejected</h1>

      <div className="bg-white p-6 rounded shadow">
        <p>
          Your account has been rejected — please contact support for details.
        </p>
      </div>

      {showModal && (
        <Modal title="Account Rejected" onClose={() => setShowModal(false)}>
          <p className="text-sm text-gray-700">
            Your company application was rejected. Please check your email or
            contact support for next steps.
          </p>
        </Modal>
      )}
    </div>
  );
}
