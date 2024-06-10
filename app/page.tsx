import SparklesPreview from "@/components/sparklesmain";
import React from "react";
import Phone from "@/components/FloatingPhone";
import BouncyCardsFeatures from "@/components/BouncyFancyCards";
import Waitlist from "@/components/waitlist";
import Footer from "@/components/footer";
import StoreButtons from "@/components/storebuttons";
import Bulletpoints from "@/components/bulletpoints";


export default function HomePage() {
  return (
    <main>
      <SparklesPreview />
      <Phone />
      <Bulletpoints />
      <StoreButtons />
      <BouncyCardsFeatures />
      <Waitlist />
      <Footer />
    </main>
  );
}
