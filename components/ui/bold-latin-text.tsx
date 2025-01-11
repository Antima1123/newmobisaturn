'use client'

import { Inter } from 'next/font/google'
import { motion, Variants } from "framer-motion"
import { useEffect, useState } from 'react'

const inter = Inter({
  subsets: ['latin'],
  weight: ['900'],
  variable: '--font-inter',
})

interface Props {
    text: string;
    color: string;
}

interface TextProps {
    items: Props[]
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const wordVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03
    }
  }
}

const letterVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    rotate: -20
  },
  visible: { 
    opacity: 1, 
    y: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200
    }
  }
}



export default function PremiumText({ items }: TextProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 500)
        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        },
        { threshold: 0.1 }
      )
  
      const target = document.querySelector('#skills-section')
      if (target) observer.observe(target)
  
      return () => {
        if (target) observer.unobserve(target)
      }
    }, [])
    
    return (
        <div className={`max-w-4xl mx-auto px-4 py-8 overflow-hidden ${inter.variable} font-sans`}>
            <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-tight flex flex-wrap justify-center"
                variants={containerVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
            >
                {items.map((item, index) => (
                    <motion.span
                        key={index}
                        variants={wordVariants}
                        className={`inline-block text-${item.color} mx-2 my-1`}
                    >
                        {item.text.split('').map((char, charIndex) => (
                            <motion.span
                                key={charIndex}
                                variants={letterVariants}
                                className="inline-block"
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    )
}