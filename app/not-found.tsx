'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { BugIcon as QuestionMark } from 'lucide-react'

export default function Custom404() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex flex-col items-center justify-center max-h-screen bg-red-50 relative overflow-hidden">
      {/* Background Question Marks */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-20 text-red-200">
          <QuestionMark size={100} />
        </div>
        <div className="absolute right-10 top-40 text-red-200">
          <QuestionMark size={60} />
        </div>
        <div className="absolute left-1/4 bottom-20 text-red-200">
          <QuestionMark size={80} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          className="text-[10rem] mt-16 font-bold text-red-500 leading-none "
        >
          404
        </motion.div>
        
        <h1 className="text-4xl font-bold text-red-700 mb-8">
          Oops...page not found!
        </h1>

        <div className="relative mb-12">
          <Image
            src="/penguin.png"
            alt="Confused cat"
            width={400}
            height={400}
            className="select-none pointer-events-none mx-auto"
            priority
          />
        </div>

        <Link 
          href="/" 
          className="px-8 mb-16 py-4 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 text-lg font-medium inline-block"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}