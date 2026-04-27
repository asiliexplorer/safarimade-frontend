"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import Providers from "../providers";

export default function LayoutChrome({ children }) {
  const pathname = usePathname();
  const hideChrome =
    pathname?.startsWith("/dashboard") || pathname?.startsWith("/login");

  return (
    <>
      {!hideChrome && <Header />}
      <Providers>
        <main>{children}</main>
      </Providers>
      {!hideChrome && <Footer />}
    </>
  );
}
