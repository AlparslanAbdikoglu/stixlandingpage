import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"; // Import the SpeedInsights component
import "./globals.css";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "StixPix",
  description: "cool app for your pictures",
  icons: {
    icon:'/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <SpeedInsights /> {/* Add the SpeedInsights component */}
        {children}
        </body>
    </html>
  );
}
