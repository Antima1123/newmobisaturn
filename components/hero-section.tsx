"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "./animated-background"
import { useOpenContactUs } from "@/hook/contact-open"
import Image from "next/image"
import { Cover } from "./ui/cover"
import { useMemo, useState } from "react"

export function HeroSection() {

    const {onOpen} = useOpenContactUs();
    const [isExpand, setIsExpand] = useState(false);

    const text = useMemo(() => {
      return `At AdByteHub, we specialize in performance marketing designed to deliver measurable growth and lasting impact for brands across various industries. Our mission is to empower businesses with data-driven strategies and innovative solutions that drive user acquisition, brand engagement, and market expansion.

By leveraging advanced analytics and targeted campaigns, we help you connect with the right audience at the right time. Whether it’s optimizing your digital presence, scaling your operations, or entering new markets, our approach ensures maximum ROI and meaningful results.

At AdByteHub, we believe in building strong partnerships and crafting customized solutions that align with your business objectives. Let us help you unlock new growth opportunities and achieve marketing success that goes beyond expectations.`
    }, []);

    const paragraph = useMemo(() => text.split('\n').filter((para) => para.trim() !== ''), [text])
    
  return (
    <div className="relative min-h-screen overflow-hidden bg-background justify-center flex h-full items-center">
      <AnimatedBackground />
      {/* Hero Content */}
      <main className="relative z-10 mx-auto max-w-7xl md:px-6 px-2 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-6xl font-bold tracking-tight">
                We&apos;re A premier{""}<br/>
            <Cover>
              <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white">
               performance
              </span>
            </Cover> 
              <br />
              marketing company
            </h1>
              <button 
                onClick={() => setIsExpand(!isExpand)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
            <div className={`relative ${isExpand ? "" : "max-h-[120px] overflow-hidden"}`}>
              {paragraph.map((para, index) => (
                <p key={index} className="text-md md:text-lg text-start mb-4">
                  {para}
                </p>
              ))}
              {!isExpand && (
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-background to-transparent" />
              )}
            </div>
              
            </button>
            <div className="flex gap-4">
            <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button 
                      onClick={() => onOpen()}
                      className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6 text-[16px] font-[400] z-[110] "
                    >
                      Contact Us
                   </Button>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative md:ml-28 md:-mt-12 w-full items-center justify-center flex"
          >
            <Image
                src={"/bg-final.png"}
                alt="adbytehub"
                height={1000}
                width={1000}
                className=" md:w-[25rem] w-[20rem]"
            />
          </motion.div>
        </div>
      </main>
    </div>
  )}