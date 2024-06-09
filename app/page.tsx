import SparklesPreview from "@/components/sparklesmain";
import React from "react";
import Phone from "@/components/FloatingPhone";
import BouncyCardsFeatures from "@/components/BouncyFancyCards";
import Link from 'next/link';
import Waitlist from "@/components/waitlist";
import { StickyScroll } from "@/components/sticky-scroll-reveal";



export default function HomePage() {
  return (
    <main>
      <SparklesPreview />
      <Phone />
      <BouncyCardsFeatures />
      <Waitlist />
      
      
    </main>
  );
}
