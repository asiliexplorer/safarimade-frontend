// // frontend/app/layout.js
// import { Roboto } from "next/font/google";
// import "./globals.css";
// import Header from "@/app/_components/Header";
// import Footer from "@/app/_components/Footer";

// const roboto = Roboto({
//   weight: ["100", "300", "400", "500", "700", "900"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
//   variable: "--font-roboto",
// });

// export const metadata = {
//   title: "Asili Explorer",
//   description: "Your premier destination for unforgettable Tanzania adventures.",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body className={`${roboto.variable} antialiased`}>
//         <Header />
//         <main>{children}</main>
//         <Footer />
//       </body>
//     </html>
//   );
// }
// app/layout.js
import "./globals.css";
import { Roboto } from "next/font/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Providers from "./providers";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Safari Trip Booking",
  description:
    "Your premier destination for unforgettable Tanzania adventures.",
};




export default function RootLayout({ children }) {
  return (
    // Add suppressHydrationWarning to html and body
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${roboto.variable} antialiased`}
        suppressHydrationWarning // Add suppressHydrationWarning to body
      >
        <Header />
        <Providers>
          <main>{children}</main>
        </Providers>

        <Footer />
      </body>
    </html>
  );
}
