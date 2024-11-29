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

  const CetoCard = [
    {
      title: "abc",
      url: "/bg-1.jpg"
    },
    {
      title: "abc",
      url: "/bg-2.jpg"
    },
    {
      title: "abc",
      url: "/bg-3.jpg"
    }
  ]

  const {isOpen} = useOpenContactUs()
  return (
    <motion.div className=" relative">
      {/* <Carousel/> */}
      {/* <DashFront/> */}
      <HeroSection/>
      {/* <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: [0,1] }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid md:grid-cols-3 mx-auto w-full max-w-screen-2xl py-10">
        {CetoCard.map((item,index) => (
          <CategoryCard key={index} title={item.title} url={item.url}/>
        ))}
      </motion.div> */}
      {/* <ServeClients/> */}
      <WhoWeAre/>
      <BouncyCardsFeatures/>
      <FeatureSection/>
      <WhyMobiSaturn/>
      {/* <MMPPartners/> */}
      {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
      <BlockInText/>
    </motion.div>
  );
}
 