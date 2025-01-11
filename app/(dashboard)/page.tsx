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
import { MarketingSolutions } from "@/components/newcomponent";
import { HeroComponentNew } from "@/components/hero-component-new";
import SocialMediaServices from "@/components/social-media-component";
import { SkillsSection } from "@/components/skill-component";
import EmailMarketing from "@/components/emailmarketing";
import { FeaturesSection } from "@/components/feature-section";
import WhyChooseUs from "@/components/new-why-choose-us";
import ContactUsPage from "@/components/contact-us";

export default function Home() {
  const {isOpen} = useOpenContactUs()
  return (
    <motion.div className=" relative">
      <HeroSection/>
      <WhoWeAre/>
      {/* <HeroComponentNew/> */}
      <BouncyCardsFeatures/>
      <FeatureSection/>
      <SkillsSection/>
      {/* <EmailMarketing/> */}
      <MarketingSolutions/>
      <WhyMobiSaturn/>
      {/* <WhyChooseUs/> */}
      {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
                <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
                  <div className="grid gap-12 md:grid-cols-2 items-center justify-between">
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
                      className="space-y-4"
                      >
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Need help?</h3>
                        <p className="text-gray-500">
                          Please, visit our help center to discover complete functionalities
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Have some partnership offer?</h3>
                        <p className="text-gray-500">
                          Fill out the form, tell us more about you and contact with you as soon as possible.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold">Don&apos;t miss news and tips</h3>
                        <p className="text-gray-500">
                          Our blog will help you find how to provide, save, analyze and tips
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </section>
          {/* <FeaturesSection/> */}
          <BlockInText/>
    </motion.div>
  );
}
 