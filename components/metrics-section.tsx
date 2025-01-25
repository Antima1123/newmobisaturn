"use client"

import { DollarSign, Target, Filter } from "lucide-react"
import { motion } from "framer-motion"

interface MetricCardProps {
  title: string
  value: string
  description: string
  icon: React.ReactNode
  bgColor: string
  iconColor: string
}

const MetricCard = ({ title, value, description, icon, bgColor, iconColor }: MetricCardProps) => (
  <motion.div
    className={`p-6 rounded-xl ${bgColor}`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <div className="space-y-4">
      <div className={`w-12 h-12 rounded-full ${iconColor} flex items-center justify-center bg-white`}>{icon}</div>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="text-4xl font-bold">{value}</p>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </motion.div>
)

export default function MetricsSection() {
  const metrics = [
    {
      title: "MORE ROAS",
      value: "52.4%",
      description: "Average ROAS Growth, 5x Industry Average",
      icon: <DollarSign className="w-6 h-6 text-emerald-500" />,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      title: "MORE CUSTOMERS",
      value: "39%",
      description: "Customer Acquisition Growth Rate, 2.7x Industry Average",
      icon: <Target className="w-6 h-6 text-amber-500" />,
      bgColor: "bg-amber-50",
      iconColor: "text-amber-500",
    },
    {
      title: "MORE CONVERSIONS",
      value: "Up to 7x",
      description: "Increase in Conversion Rate using PerformSense AI",
      icon: <Filter className="w-6 h-6 text-pink-500" />,
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500",
    },
  ]

  return (
    <section className="py-12 px-4 md:py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-4xl text-gray-600 font-bold text-center mb-12 md:mb-16">
            Uncommon Results That Are Common To Our Clients
            </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>
      </div>
    </section>
  )
}