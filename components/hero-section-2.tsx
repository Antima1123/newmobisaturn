"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {motion } from "framer-motion"
import Image from "next/image"
import { useOpenContactUs } from "@/hook/contact-open"

export default function HeroPage2() {
  const words = ["Mobile Marketing", "Affiliate Marketing", "Pay Per Click (PPC)", "E-commerce Marketing" , "Social Media Marketing" ,"Search Engine Optimization", ]
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
   const {onOpen} = useOpenContactUs();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length)
        setIsAnimating(false)
      }, 200)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex pb-0 flex-col md:flex-row min-h-screen max-w-screen-2xl mx-auto items-center justify-between px-4 md:py-0 mt-0 md:-mt-24 py-12 md:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className=" leading-24 mb-6 text-4xl font-bold tracking-tight text-gray-600 md:text-6xl">
        Empower Your Online Business With{" "}
          <span
            className={`inline-block text-red-600 transition-all duration-200 ${
              isAnimating ? "translate-y-2 opacity-0" : "translate-y-0 opacity-100"
            }`}
          >
            {words[currentWordIndex]}
          </span>
        </h1>
        <p className="mb-8 text-xl text-gray-400">
          Performance-based user acquisition that complements your current agency/partner strategies and unlocks new
          opportunities – no risk, all reward.
        </p>
        <Button 
            onClick={() => onOpen()}
            className="bg-gradient-to-r from-red-500  to-red-800 rounded-3xl p-6 text-[16px] font-[400] z-[110] hover:scale-110 transition-all duration-300 ease-in-out "
        >
            Contact Us
        </Button>
             
      </div>
      <div className=" md:block mt-8 md:mt-0">
        <Image
          src="/Optimize.webp"
          height={500}
          width={500}
          quality={75}
          priority
          alt="Lead generation illustration"
          className="w-[500px]"
        />
      </div>
    </div>
  )
}

