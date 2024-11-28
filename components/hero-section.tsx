"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "./animated-background"
import { useOpenContactUs } from "@/hook/contact-open"
import Image from "next/image"
import { Cover } from "./ui/cover"

export function HeroSection() {

    const {onOpen} = useOpenContactUs()
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
            <p className="text-xl text-muted-foreground">
            At AdByteHub, we specialize in performance marketing that drives measurable growth for brands across various verticals. By combining data-driven targeting with innovative, results-focused strategies, we help you achieve exceptional outcomes through user acquisition and market expansion.
            </p>
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