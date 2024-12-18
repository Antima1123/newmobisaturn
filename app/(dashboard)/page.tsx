"use client"
import { BlockInText } from "@/components/block-in-text-card";
import { BouncyCardsFeatures } from "@/components/bouncy-card-features";
import ContactForm from "@/components/contact-form";
import { HeroSection } from "@/components/hero-section";
import FeatureSection from "@/components/why-we-are-the-best";
import  WhoWeAre  from "@/components/who-we-are";
import { WhyMobiSaturn } from "@/components/why-mobisaturn";
import { useOpenContactUs } from "@/hook/contact-open";
import { motion } from "framer-motion";

export default function Home() {
  const {isOpen} = useOpenContactUs()
  return (
    <motion.div className=" relative">
      <HeroSection/>
      <WhoWeAre/>
      <BouncyCardsFeatures/>
      <FeatureSection/>
      <WhyMobiSaturn/>
      {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
      <BlockInText/>
    </motion.div>
  );
}
 