import { motion,  } from "framer-motion"
import { Play, Users, LineChart, TrendingUp, CheckCircle, Award } from 'lucide-react'
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"

export default function WhatWeAre() {

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      title: "Data-Driven Marketing",
      description: "Leverage advanced analytics and real-time data insights for precision targeting and optimal campaign performance.",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      image: "/cardbg-1.webp"
    },
    {
      title: "Campaign Optimization",
      description: "Maximize ROI with strategic campaign management and continuous performance refinement.",
      icon: <Play className="h-6 w-6 text-primary" />,
      image: "/cardbg-2.png"
    },
    {
      title: "User Engagement",
      description: "Create meaningful connections with your audience through personalized, multi-channel marketing strategies.",
      icon: <Users className="h-6 w-6 text-primary" />,
      image: "/cardbg-3.jpg"
    }
  ]

  const stats = [
    { label: "Clients Served", value: "250+", icon: <Users className="h-6 w-6" /> },
    { label: "App Partners", value: "5,000+", icon: <CheckCircle className="h-6 w-6" /> },
    { label: "Avg. ROI Increase", value: "150%", icon: <TrendingUp className="h-6 w-6" /> },
    { label: "Industry Awards", value: "20+", icon: <Award className="h-6 w-6" /> },
  ]

  return (
    <section className="w-full bg-gradient-to-b from-background to-background/80 pb-12 -mt-24 md:py-24 max-w-screen-2xl mx-auto">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your <span className="text-primary">Marketing</span> Strategy
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Harness the power of data-driven insights and cutting-edge technology to transform your brand&apos;s performance.
          </p>
        </motion.div>

        <motion.div
         initial={{ scale: 0.9 }}
         transition={{ duration: 0.5, ease: "easeInOut", opacity: 0 }}
         whileInView={{ scale: 1, opacity: [0,1] }}
        className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
            >
              <Card className="group relative overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                  </div>
                  <div className="space-y-2 p-6">
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <h3 className="font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}