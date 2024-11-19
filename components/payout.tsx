"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PayOut() {
  const [selectedOption, setSelectedOption] = useState("weekly")
  const [isAutoSwitching, setIsAutoSwitching] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoSwitching) {
      interval = setInterval(() => {
        setSelectedOption((prev) => (prev === "weekly" ? "twice" : "weekly"))
      }, 5000) // Switch every 5 seconds
    }

    return () => clearInterval(interval)
  }, [isAutoSwitching])

  const handleManualSelect = (option: string) => {
    setSelectedOption(option)
    setIsAutoSwitching(false)
    
    // Resume auto-switching after 10 seconds of inactivity
    setTimeout(() => setIsAutoSwitching(true), 10000)
  }

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  }

  return (
    <div className="py-32 bg-gradient-to-br from-blue-50 to-white p-8 flex items-center justify-center">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full max-w-6xl"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <motion.div variants={item} className="space-y-4 flex-1">
            <h1 className="text-5xl font-bold">
              <span className="text-sky-400">Pay</span>
              <span className="text-gray-800">out</span>
              <span className="text-gray-900"> schedule</span>
            </h1>
            <p className="text-gray-600 text-lg">
              Clickadu will pay the Publisher&apos;s revenue on a weekly,
              twice a month, or monthly basis by agreement of the
              parties. Min Payout starts from $50!
            </p>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full"
              >
                Earn with Clickadu
              </Button>
            </motion.div>
          </motion.div>

          <motion.div variants={item} className="flex-1 w-full">
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden">
              <CardContent className="p-0">
                <div className="flex">
                  <button
                    onClick={() => handleManualSelect("weekly")}
                    className={`flex-1 py-4 px-6 text-left relative ${selectedOption === "weekly" ? "bg-sky-50" : "bg-white"}`}
                    aria-selected={selectedOption === "weekly"}
                    role="tab"
                  >
                    {selectedOption === "weekly" && (
                      <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-sky-400"
                        layoutId="activeIndicator"
                      />
                    )}
                    <h3 className="font-semibold text-lg mb-2">Weekly</h3>
                    <AnimatePresence mode="wait">
                      {selectedOption === "weekly" && (
                        <motion.p
                          key="weekly"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-gray-600"
                        >
                          Net 7: Clickadu&apos;s team pays weekly on Tuesdays when a publisher reaches
                          the minimum payment amount.
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                  <button
                    onClick={() => handleManualSelect("twice")}
                    className={`flex-1 py-4 px-6 text-left relative ${selectedOption === "twice" ? "bg-sky-50" : "bg-white"}`}
                    aria-selected={selectedOption === "twice"}
                    role="tab"
                  >
                    {selectedOption === "twice" && (
                      <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-sky-400"
                        layoutId="activeIndicator"
                      />
                    )}
                    <h3 className="font-semibold text-lg mb-2">Twice a month</h3>
                    <AnimatePresence mode="wait">
                      {selectedOption === "twice" && (
                        <motion.p
                          key="twice"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-sm text-gray-600"
                        >
                          Net 7: (on the 7th and 22nd day of the month or the next business day, if the
                          payout day falls on Holidays or Weekends)
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}