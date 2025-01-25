'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ScheduleCardProps {
  title: string
  description: string
  isActive: boolean
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ title, description, isActive }) => {
  return (
    <motion.div
      className={`gap-2 py-4 border rounded-lg w-full h-full px-4 flex flex-col ${
        isActive
        ? "bg-gray-500 text-white bg-opacity-30 backdrop-blur-md border"
        : "bg-red-200 text-gray-600"
      }`}
    >
      <h2 className="font-semibold text-xl capitalize">{title}</h2>
      <p className="text-sm">{description}</p>
    </motion.div>
  )
}

export default function PaymentSchedule() {
  const [activeCard, setActiveCard] = useState<'weekly' | 'twice'>('weekly')

  return (
    <div className="grid md:grid-cols-2 gap-4 bg-transparent max-w-xl mx-auto">
      <motion.div
        onHoverStart={() => setActiveCard('weekly')}
        onHoverEnd={() => setActiveCard('twice')}
      >
        <ScheduleCard
          title="weekly"
          description="adbytehub's team pays weekly on Tuesdays when a publisher reaches the minimum payment amount."
          isActive={activeCard === 'weekly'}
        />
      </motion.div>
      <motion.div
        onHoverStart={() => setActiveCard('twice')}
        onHoverEnd={() => setActiveCard('weekly')}
      >
        <ScheduleCard
          title="twice"
          description="On the 7th and 22nd day of the month or the next business day, if the payout day falls on Holidays or Weekends."
          isActive={activeCard === 'twice'}
        />
      </motion.div>
    </div>
  )
}

