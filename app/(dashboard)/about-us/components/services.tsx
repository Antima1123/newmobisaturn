'use client'

import { motion } from 'framer-motion'
import { ChevronRight, Building2, Globe, Building, Hospital, Radio, Landmark } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"

const services = [
  "Search engine optimization",
  "Social media marketing",
  "Pay per click",
  "Content development & marketing",
  "Website design & development",
  "Ecommerce marketing",
]

const industries = [
  { icon: Building2, name: "Banking and Financial Services" },
  { icon: Globe, name: "Travel, Logistics, and Hospitality" },
  { icon: Building, name: "Retail and E-commerce" },
  { icon: Hospital, name: "Healthcare" },
  { icon: Radio, name: "Telecommunications, Media, and Technology" },
  { icon: Landmark, name: "Public Sector and Government" },
]

export function CombinedSection() {
  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-white to-purple-50">
      <div className="container px-4 md:px-6 max-w-screen-2xl">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <Card className="relative overflow-hidden md:ml-24">
            <CardContent className="p-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-pink-600 mb-8">Services & Solutions</h2>
                <div className="space-y-6">
                  {services.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center group"
                    >
                      <div className="relative">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="w-3 h-3 bg-pink-400 rounded-full"
                        />
                        {index < services.length - 1 && (
                          <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: '2rem' }}
                            transition={{ delay: index * 0.1 + 0.3 }}
                            className="absolute top-3 left-1.5 w-0.5 bg-pink-200"
                          />
                        )}
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="ml-6 text-gray-600 hover:text-pink-600 transition-colors flex items-center"
                      >
                        {service}
                        <ChevronRight className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </CardContent>
          </Card>

          <Card className="relative overflow-hidden">
            <CardContent className="p-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-purple-600 mb-8">Industries Served</h2>
                <div className="relative mt-12">
                  <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-purple-200 -translate-y-1/2" />
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                    {industries.map((industry, index) => (
                      <motion.div
                        key={industry.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative flex flex-col items-center"
                      >
                        <motion.div
                          whileHover={{ 
                            y: -10, 
                            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                            transition: { duration: 0.2 }
                          }}
                          className="w-16 h-16 bg-white rounded-lg shadow-md flex items-center justify-center relative z-10 cursor-pointer"
                        >
                          <industry.icon className="w-8 h-8 text-purple-600" />
                          <motion.div
                            className="absolute inset-0 bg-purple-100 rounded-lg"
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            transition={{ duration: 0.2 }}
                          />
                          <industry.icon className="w-8 h-8 text-purple-600 absolute" />
                        </motion.div>
                        <motion.p 
                          className="text-sm text-center text-gray-600 mt-4 font-medium"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                        >
                          {industry.name}
                        </motion.p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

