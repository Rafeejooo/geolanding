import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "BSK Geospatial | Next-Gen Geospatial Platform",
  description: "The ultimate platform for geospatial management, AI analysis, and live monitoring. Manage your satellite imagery, basemaps, and raster files seamlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth h-full">
      <body className={`${inter.variable} font-sans antialiased min-h-full flex flex-col bg-[#030305] text-slate-200`}>
        {children}
      </body>
    </html>
  );
}
