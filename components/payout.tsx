"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useOpenContactUs } from "@/hook/contact-open"
import PaymentSchedule from "./payout-card"

export default function PayOut() {
  const { onOpen } = useOpenContactUs();
  return (
    <div className="py-32 p-8 flex items-center justify-center">
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
            <h2 className="text-5xl font-bold">
              <span className="text-red-600">Pay</span>
              <span className="text-gray-600">out</span>
              <span className="text-gray-600"> schedule</span>
            </h2>
            <p className="text-gray-400 text-lg">
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
                size="lg" className="text-white bg-gradient-to-r from-red-600 to-red-800 hover:bg-white/90">
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