import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./styles.css";

const galano = localFont({
  src: [
    {
      path: "./font/galano-grotesque-alt/GalanoGrotesqueAltRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./font/galano-grotesque-alt/GalanoGrotesqueAltMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./font/galano-grotesque-alt/GalanoGrotesqueAltSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./font/galano-grotesque-alt/GalanoGrotesqueAltBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Verity | Premium Property Discovery",
  description: "Premium property discovery platform.",
};

import Footer from "./_components/Footer";

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${galano.variable} design-26 antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
