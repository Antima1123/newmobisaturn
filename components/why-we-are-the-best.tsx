'use client'

import { motion } from "framer-motion"
import { ArrowRight, Cloud, Settings } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { IoGameController } from "react-icons/io5"

export default function FeatureSection() {
  const features = [
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "User Acquisition",
      description: "Using customized strategies to attract and engage new users, fostering the growth of a loyal customer base for sustained success.",
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Retargeting",
      description: "We assist brands in boosting conversions by strategically targeting potential customers who have already demonstrated interest.",
    },
    {
      icon: <IoGameController className="h-8 w-8" />,
      title: "Gaming",
      description: "Leveraging Strategic Approaches to Attract, Engage, and Retain Players, Driving Growth and Sustaining the Vitality of the Gaming Ecosystem.",
    }
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

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why We Are The Best</h2>
          <div className="w-24 h-1 bg-primary mx-auto" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Card 
                className="h-full shadow-md transition-all duration-300 hover:-translate-y-2 group bg-white hover:bg-gradient-to-r from-emerald-600 to-purple-600"
              >
                <CardHeader>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-white/10 group-hover:text-white"
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-white">{feature.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground group-hover:text-white/90">
                    {feature.description}
                  </p>
                </CardContent>
                {/* <CardFooter>
                  <Button 
                    variant="default"
                    className="bg-primary text-primary-foreground group-hover:bg-white group-hover:text-primary"
                  >
                    About us
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                  </Button>
                </CardFooter> */}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

