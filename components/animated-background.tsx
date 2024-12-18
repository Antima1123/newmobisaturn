"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function AnimatedBackground() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    function handleResize() {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full border-[2px] border-primary/20"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      <motion.div
        className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full border-[2px] border-primary/20"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/30"
          initial={{
            x: Math.random() * (windowSize.width || 1000),
            y: Math.random() * (windowSize.height || 1000),
          }}
          animate={{
            x: Math.random() * (windowSize.width || 1000),
            y: Math.random() * (windowSize.height || 1000),
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

