import React from "react";
import PackageCard from "../components/PackageCard";
 
export default function PackagesPage() {
  return (
    <>
      <h2 className="text-2xl font-bold">Packages</h2>
      <p className="text-sm text-gray-500 mt-1">All available tour packages</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <PackageCard
          title="7-Day Classic Serengeti & Ngorongoro Safari"
          days={7}
          price={1250}
          image="/hero1.png"
        />
        <PackageCard
          title="3-Day Zanzibar Beach Getaway"
          days={3}
          price={850}
          image="/hero2.png"
        />
        <PackageCard
          title="10-Day Epic Tanzania & Kenya Safari"
          days={10}
          price={2890}
          image="/hero3.png"
        />
      </div>
    </>
  );
}
