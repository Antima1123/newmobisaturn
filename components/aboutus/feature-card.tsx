"use client"

import { FeatureCard } from '@/components/ui/FeaturedCard'
import { motion } from "framer-motion"

const features = [
  {
    title: "Banking and Financial Services",
    description: "Empowering financial institutions with innovative solutions for seamless and enhanced customer experiences.",
    image: "/about/linkedin.svg",
  },
  {
    title: "Travel, Logistics and Hospitality",
    description: "Revolutionizing travel and logistics with smart tools to streamline operations and deliver better experiences.",
    image: "/about/tech.webp",
  },
  {
    title: "Retail and E-commerce",
    description: "Driving growth in retail with cutting-edge e-commerce solutions to boost sales & customer satisfaction.",
    image: "/about/ecom.png",
  },
  {
    title: "HealthCare",
    description: "Healthcare delivery with advanced technologies to improve patient care and streamline processes.",
    image: "/about/health.jpg",
  },
  {
    title: "Telecommunication, Media and Technology",
    description: "Innovating in telecommunications and media with solutions designed to enhance connectivity.",
    image: "/about/tele.jpeg",
  },
  {
    title: "Public Sector and Government",
    description: "Transforming public services with digital solutions that enhance efficiency and transparency.",
    image: "/about/gov.webp",
  },
];


export const IndustriesWeServe = () => {
  return (
    <div>
        <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-navy-900 text-center mb-8"
          >
            <h2>Industries Served</h2>
          </motion.h2>
        <FeatureCard features={features} />
    </div>
  )
}