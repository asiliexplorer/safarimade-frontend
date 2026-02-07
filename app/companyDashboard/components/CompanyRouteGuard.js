"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetProfileQuery } from "../../redux/features/auth/authApi";

export default function CompanyRouteGuard({ children }) {
  const router = useRouter();
  const { data, isLoading } = useGetProfileQuery();

  useEffect(() => {
    if (!isLoading && data?.companyStatus) {
      const status = data.companyStatus;
      if (status === "pending") {
        // set a flag so the submit page can show the modal once
        if (typeof window !== "undefined") {
          sessionStorage.setItem("showPendingModal", "1");
        }
        // redirect to submit page
        router.replace("/companyDashboard/submit-company-data");
      } else if (status === "rejected") {
        if (typeof window !== "undefined") {
          sessionStorage.setItem("showRejectedModal", "1");
        }
        router.replace("/companyDashboard/rejected");
      }
      // if approved, do nothing (children will render)
    }
  }, [isLoading, data, router]);

  if (isLoading) return null;

  // Render children only when approved
  if (!data?.companyStatus) return null;
  if (data.companyStatus !== "approved") return null;

  return <>{children}</>;
}
