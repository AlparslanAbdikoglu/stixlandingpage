import React from "react";
import Link from "next/link";
import SparklesPreview from "@/components/sparklesmain";
import CenteredButton from "@/components/button"; // Import CenteredButton component

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    <SparklesPreview />
    {/* Use Link component to make the button act as a link */}
    <Link href="/">
      
        <CenteredButton>Go back to Home Page</CenteredButton>
     
    </Link>
    <main>{children}</main>
  </div>
);
}
