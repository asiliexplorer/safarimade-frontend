"use client";
 
import { useGetProfileQuery } from "../../redux/features/auth/authApi";

import { useRouter } from "next/router";

export default function CompanyRouteGuard({ children }) {
  const router = useRouter();
  const { data, isLoading } = useGetProfileQuery();

  useEffect(() => {
    if (!isLoading && data?.companyStatus) {
      if (data.companyStatus === "pending") {
        if (router.pathname !== "/companyDashboard/submit-company-data") {
          router.push("/companyDashboard/submit-company-data");
        }
      } else if (data.companyStatus === "rejected") {
        router.push("/companyDashboard/rejected"); // optional rejected page
      }
    }
  }, [isLoading, data, router]);

  if (isLoading) return null;

  return children;
}
