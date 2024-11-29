"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useOpenContactUs } from "@/hook/contact-open"
import PaymentSchedule from "./payout-card"

export default function PayOut() {
  const { onOpen } = useOpenContactUs();
  return (
    <div className="py-32 bg-gradient-to-br from-emerald-600 to-purple-600 p-8 flex items-center justify-center">
      <motion.div
        // variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div
          //  variants={item} 
           className="space-y-4 flex-1">
            <h1 className="text-5xl font-bold">
              <span className="text-sky-400">Pay</span>
              <span className="text-white">out</span>
              <span className="text-white"> schedule</span>
            </h1>
            <p className="text-white text-lg">
            AdByteHub offers flexible payment options for Publishers, 
            allowing payouts to be made weekly, twice a month, or monthly,
            based on mutual agreement. The minimum payout threshold is just $250!
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                onClick={() => onOpen()}
                size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                  Contact us
              </Button>
            </motion.div>
          </motion.div>
          <PaymentSchedule/>
        </div>
      </motion.div>
    </div>
  )
}