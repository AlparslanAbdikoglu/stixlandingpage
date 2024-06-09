import SparklesPreview from "@/components/sparklesmain";
import React from "react";
import Phone from "@/components/FloatingPhone";
import BouncyCardsFeatures from "@/components/BouncyFancyCards";
import Link from 'next/link';


export default function HomePage() {
  return (
    <main>
      <SparklesPreview />
      <Phone />
      <BouncyCardsFeatures />
    </main>
  );
}
