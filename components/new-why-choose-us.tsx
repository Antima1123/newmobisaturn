'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { BarChartIcon as ChartBar, Settings2, Headphones } from 'lucide-react'
import Image from 'next/image'

interface FeatureProps {
  icon: React.ReactNode
  title: string
  description: string
}

function Feature({ icon, title, description }: FeatureProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex items-start gap-4 p-6 rounded-lg bg-white hover:shadow-lg transition-shadow"
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
        {icon}
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}

export default function WhyChooseUs() {
  const titleRef = useRef(null)
  const isInView = useInView(titleRef, { once: true })

  const features = [
    {
      icon: <ChartBar className="w-6 h-6" />,
      title: "Proven Result",
      description: "We have a track record of delivering tangible results for our clients. From increasing website traffic and improving search."
    },
    {
      icon: <Settings2 className="w-6 h-6" />,
      title: "Customized Solutions",
      description: "We believe that one size does not fit all when it comes to digital marketing. That's why we take the time to understand your SEO."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Dedicated Support",
      description: "Your success is our top priority. That's why provide dedicated support and guidance every step of the way to running seo."
    }
  ]

  return (
    <section className=" bg-gray-100 w-full border-t border-white">
      <div className="grid lg:grid-cols-2 gap-12 items-center py-16 px-4  md:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <motion.div
              ref={titleRef}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Experience the Advantage
                <br />
                Why We&apos;re the Right Choice
              </h2>
            </motion.div>
            <p className="text-gray-600 text-lg">
              At AdByteHub we understand that you have many options when it comes to digital
              marketing services. So why should you choose us? Here are a few reasons
            </p>
          </div>
          
          <div className="space-y-6">
            {features.map((feature, index) => (
              <Feature key={index} {...feature} />
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-square">
            <Image
              src="/homepage/digitalimg.jpg"
              alt="Customer support representative"
              fill
              className="object-cover rounded-full"
            />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-600 rounded-lg transform rotate-45" />
          </div>
          <div className="absolute bottom-0 right-0 w-2/3 aspect-square">
            <Image
              src="/placeholder.svg"
              alt="Professional at work"
              fill
              className="object-cover rounded-full"
            />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 text-purple-600">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}