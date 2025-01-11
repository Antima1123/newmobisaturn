'use client'

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from 'lucide-react'
import { useState } from "react"

interface ContactItem {
  icon: typeof MapPin | typeof Phone | typeof Mail
  title: string
  content: string
  href?: string
}

export function ContactInfo() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const contactItems: ContactItem[] = [
    {
      icon: MapPin,
      title: "Our Location",
      content: "RZ 202 Gali No 13 Sadh Nagar part II Palam colony New Delhi 110045",
      href: "https://maps.google.com/?q=8708 Technology Forest Pl Suite 125 -G, The Woodlands, TX 773"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "+91 7409890416",
      href: "tel:+91 7409890416"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "info@adbytehub.com",
      href: "mailto:info@adbytehub.com"
    }
  ]

  return (
    <div className="w-full h-full max-w-md rounded-xl bg-gradient-to-br from-emerald-600 to-purple-600 p-8 text-white">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-4 text-3xl font-bold"
      >
        Contact Info
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8 text-teal-100"
      >
        We&apos;re here to help!
      </motion.p>

      <div className="space-y-6">
        {contactItems.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.2 }}
            onHoverStart={() => setHoveredIndex(index)}
            onHoverEnd={() => setHoveredIndex(null)}
          >
            <a
              href={item.href}
              className="group flex items-start gap-4"
              target={item.icon === MapPin ? "_blank" : undefined}
              rel={item.icon === MapPin ? "noopener noreferrer" : undefined}
            >
              <div className="relative mt-1">
                <div className="absolute -inset-2 rounded-full  opacity-0 transition-opacity group-hover:opacity-100" />
                <item.icon 
                  className={`h-6 w-6 transition-transform duration-300 ${
                    hoveredIndex === index ? 'scale-110' : 'scale-100'
                  }`} 
                />
              </div>
              <div>
                <h3 className="font-semibold text-teal-100">{item.title}</h3>
                <p className="mt-1 text-teal-50 transition-colors group-hover:text-white">
                  {item.content}
                </p>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  )
}