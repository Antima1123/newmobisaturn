'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { useOpenContactUs } from '@/hook/contact-open'
import Image from 'next/image'

const paymentMethods = [
  { name: 'Payoneer', icon: "/payment/payoneer.svg" },
  { name: 'PayPal', icon: "/payment/paypal.png" },
  { name: 'Credit Card', icon: "/payment/visa.png" },
  { name: 'Wire Transfer', icon: "/payment/wire-transfer.png" },
]

export default function GetStartedSection() {
  const [hoveredMethod, setHoveredMethod] = useState<string | null>(null)
  const {onOpen} = useOpenContactUs()

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-600 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-400">Join thousands of successful advertisers and start growing your business today.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {paymentMethods.map((method) => (
            <motion.div
              key={method.name}
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredMethod(method.name)}
              onHoverEnd={() => setHoveredMethod(null)}
              className=" p-4 group rounded-lg shadow-md bg-white flex flex-col items-center transition-all duration-300 ease-in-out"
              style={{
                width: '150px',
                height: '150px',
                justifyContent: 'center',
              }}
            >
              <Image
                src={method.icon}
                alt='methods'
                height={100}
                width={100}
                className=' aspect-auto object-contain group-hover:grayscale-0 '
              />
              <h3 className="text-sm font-semibold text-gray-800">{method.name}</h3>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center"
        >
          <Button 
            onClick={() => onOpen()}
            size="lg" className="text-white bg-gradient-to-r from-red-600 to-red-800 hover:bg-red-800">
              Contact us
          </Button>
        </motion.div>
      </div>
    </section>
  )
}