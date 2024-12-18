"use client"

import { motion } from "framer-motion"
import { Layout, Smartphone, Globe, Layers, Box, Crown } from 'lucide-react'
import { BiSolidUserVoice } from "react-icons/bi"
import { TbDeviceMobileMessage } from "react-icons/tb"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Search Engine Optimization",
    description: "Boost your website's visibility on search engines to attract more organic traffic and improve rankings."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Social Media Marketing",
    description: "Engage with your audience, build your brand, and drive sales through strategic social media campaigns."
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Pay Per Click (PPC)",
    description: "Generate instant traffic with targeted ads that deliver measurable results on platforms like Google and Facebook."
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Content Development and Marketing",
    description: "Craft compelling content to educate, engage, and convert your audience across blogs, videos, and more.r"
  },
  {
    icon: <Box className="h-6 w-6" />,
    title: "Website Design and Development",
    description: "Create stunning, user-friendly websites that deliver seamless experiences and reflect your brand identity."
  },
  {
    icon: <Crown className="h-6 w-6" />,
    title: "E-commerce Marketing",
    description: "Grow your online store with tailored strategies that drive sales and enhance customer loyalty."
  },
  {
    icon: <BiSolidUserVoice className="h-6 w-6" />,
    title: "Mobile Marketing",
    description: "Engage your audience on-the-go with targeted, effective mobile strategies designed to boost conversions"
  },
  {
    icon: <TbDeviceMobileMessage className="h-6 w-6" />,
    title: "Affiliates Marketing",
    description: "we specialize in creating and managing impactful affiliate marketing programs that drive measurable results."
  },

]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
}

export default function ServicesAll() {
  return (
    <section className="pb-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-navy-900"
          >
            <h2>What We Provide?</h2>
          </motion.h2>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-white rounded-full p-3 shadow-md">
                  <div className="text-blue-600">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
