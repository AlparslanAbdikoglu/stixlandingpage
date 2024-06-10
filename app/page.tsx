import SparklesPreview from "@/components/sparklesmain";
import React from "react";
import Phone from "@/components/FloatingPhone";
import BouncyCardsFeatures from "@/components/BouncyFancyCards";
import Waitlist from "@/components/waitlist";
import Footer from "@/components/footer";
import storebutton from "@/components/storebuttons";
import StoreButtons from "@/components/storebuttons";


export default function HomePage() {
  return (
    <main>
      <SparklesPreview />
      <Phone />
      <StoreButtons />
      <BouncyCardsFeatures />
      <Waitlist />
      <Footer />
    </main>
  );
}
