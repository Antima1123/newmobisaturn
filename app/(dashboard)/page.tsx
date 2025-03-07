"use client"
import { BlockInText } from "@/components/block-in-text-card";
import ContactForm from "@/components/contact-form";
import { WhyMobiSaturn } from "@/components/why-mobisaturn";
import { useOpenContactUs } from "@/hook/contact-open";
import { motion } from "framer-motion";
import { MarketingSolutions } from "@/components/newcomponent";
import ContactUsPage from "@/components/contact-us";
import SuggestedBlogs from "@/components/blogs/suggestedBlogs";
import HeroPage2 from "@/components/hero-section-2";
import MetricsSection from "@/components/metrics-section";
import { IndustriesWeServe } from "@/components/aboutus/feature-card";
import { useEffect, useRef } from "react";
import AdsBanner from "@/components/adstera/banner/AdsBanner";

export default function Home() {
  const {isOpen} = useOpenContactUs()
  
  return (
    <motion.div className=" relative">
      
      {/* <HeroSection/> */}
      <HeroPage2/>
      <AdsBanner
          formate="iframe"
          width="728"
          height="90"
          key_id="32c7072e97a599a8adca0816881264df"
          src="//perkyexcitedlyscenario.com/32c7072e97a599a8adca0816881264df/invoke.js"
          type="text/javascript"
      />
      <MarketingSolutions/>
      <WhyMobiSaturn/>
      <MetricsSection/>
      <IndustriesWeServe/>
      {/* <WhoWeAre/> */}
      
      {/* <HeroComponentNew/> */}
      {/* <BouncyCardsFeatures/> */}
      {/* <FeatureSection/> */}
      {/* <SkillsSection/> */}
      {/* <EmailMarketing/> */}
      {/* <WhyChooseUs/> */}
      {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }

      <section className="w-full py-12 md:py-24 lg:py-32 pt-0 md:-mt-28">
                <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
                  <div className="grid gap-12 md:grid-cols-2 items-start justify-between">
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className=" justify-center flex w-full"
                      >
                      <ContactUsPage/>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8 }}
                      className="space-y-4 mt-6 "
                      >
                      <h2 className="text-4xl font-[600] md:text-3xl text-gray-600 mt-6">Your customer acquisition success <br/> story starts here. </h2>
                      <p className=' max-w-[1000px] mx-auto text-gray-500 mb-4 '>Get more customers, more installs, more leads, more calls - all by partnering with a growth partner that makes your KPI their deliverable. </p>
                      <div className="flex flex-col justify-center pt-8">
                        <div className="space-y-2">
                          <h3 className="text-2xl text-gray-600 font-[600]">Need help?</h3>
                          <p className="text-gray-500">
                            Please, visit our help center to discover complete functionalities
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl text-gray-600 font-[600]">Have some partnership offer?</h3>
                          <p className="text-gray-500">
                            Fill out the form, tell us more about you and contact with you as soon as possible.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-2xl text-gray-600 font-[600]">Don&apos;t miss news and tips</h3>
                          <p className="text-gray-500">
                            Our blog will help you find how to provide, save, analyze and tips
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
          {/* <FeaturesSection/> */}
          <SuggestedBlogs/>
          <BlockInText/>
    </motion.div>
  );
}