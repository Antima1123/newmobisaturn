'use client'

import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useOpenContactUs } from "@/hook/contact-open"

export default function EmailMarketing() {
  const floatingTags = [
    { text: "Dedicated IP", color: "bg-emerald-100 text-emerald-700", top: "10%", left: "60%" },
    { text: "Email Warm up", color: "bg-purple-100 text-purple-700", top: "30%", right: "55%" },
    { text: "Health Monitoring", color: "bg-blue-100 text-blue-700", top: "45%", left: "65%" },
    { text: "Inbox Rotation", color: "bg-red-100 text-red-700", top: "60%", right: "60%" },
    { text: "Spintax", color: "bg-pink-100 text-pink-700", top: "75%", left: "58%" },
  ]

  const { onOpen } = useOpenContactUs()

  return (
    <div className="">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Phone with floating tags */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Phone Frame */}
            <motion.div 
              className="bg-gray-50 rounded-3xl p-4 shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="space-y-4">
                {/* Email Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-gray-200" />
                  <div>
                    <div className="font-semibold">Sudan</div>
                    <div className="text-sm text-gray-500">12,8392</div>
                  </div>
                </div>

                {/* Email Content */}
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Primary</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="font-medium">Promotions</div>
                    <div className="text-sm text-gray-500">Temu, Kwame from Bolt, Temu, A...</div>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <div className="font-medium">LinkedIn Job Alerts</div>
                    <div className="text-sm text-gray-500">"Real estate manager": Starbucks - r...</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Tags */}
            {floatingTags.map((tag, index) => (
              <motion.div
                key={tag.text}
                className={`absolute ${tag.color} px-3 py-1.5 rounded-full text-sm font-medium shadow-lg`}
                style={{ top: tag.top, [tag.left ? "left" : "right"]: tag.left || tag.right }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  x: [0, 10, 0],
                  // y: [0, -10, 0]
                }}
                transition={{
                  delay: index * 0.2,
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                {tag.text}
              </motion.div>
            ))}
          </motion.div>

          {/* Right side - Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Email Marketing Services
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Email marketing with a high return on investment (ROI) and the ability to deliver
              personalized content directly to your customers' inboxes, email marketing is
              essential for building lasting relationships and driving business growth.
            </p>
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
          </motion.div>
        </div>
      </div>
    </div>
  )
}