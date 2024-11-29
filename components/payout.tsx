"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useOpenContactUs } from "@/hook/contact-open"

export default function PayOut() {
  // const [selectedOption, setSelectedOption] = useState("weekly")
  const [isAutoSwitching, setIsAutoSwitching] = useState(true)
  const { onOpen } = useOpenContactUs();

  // useEffect(() => {
  //   let interval: NodeJS.Timeout

  //   if (isAutoSwitching) {
  //     interval = setInterval(() => {
  //       setSelectedOption((prev) => (prev === "weekly" ? "twice" : "weekly"))
  //     }, 5000) // Switch every 5 seconds
  //   }

  //   return () => clearInterval(interval)
  // }, [isAutoSwitching])

  // const handleManualSelect = (option: string) => {
  //   setSelectedOption(option)
  //   setIsAutoSwitching(false)
    
  //   // Resume auto-switching after 10 seconds of inactivity
  //   setTimeout(() => setIsAutoSwitching(true), 10000)
  // }

  // const container = {
  //   hidden: { opacity: 0 },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.1
  //     }
  //   }
  // }

  // const item = {
  //   hidden: { opacity: 0, y: 20 },
  //   show: { opacity: 1, y: 0 }
  // }

  const [card, setCard] = useState(false)

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
              {/* <Button size="lg" className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6" onClick={()=> onOpen()}>Get Started</Button> */}
              <Button 
                onClick={() => onOpen()}
                size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                  Contact us
              </Button>
            </motion.div>
          </motion.div>

          <motion.div className="flex gap-2 bg-transparent">

            <motion.div className={`gap-2 py-4 border rounded-lg w-[14rem] h-[14rem] px-4 flex flex-col ${card ? "bg-white text-black" : "bg-gray-400 bg-opacity-30 backdrop-blur-md border text-white"}`}
              onHoverStart={()=> {setCard(true)}}
              onHoverEnd={()=>{setCard(false)}}
            >
              <h1 className="font-[600] text-xl">weekly</h1>
              <p className=" text-[15px]">Net 7: adbytehub&apos;s team pays weekly on Tuesdays when a publisher reaches the minimum payment amount.</p>
            </motion.div>

            <motion.div className={`gap-2 py-4 w-[14rem] h-[14rem] rounded-lg px-4  flex flex-col ${card ? "bg-gray-400 bg-opacity-30 backdrop-blur-md border text-white" : "bg-white text-black"} `}>
              <h1 className="font-[600] text-xl">twice</h1>
              <p className="text-[15px]">Net 7: (on the 7th and 22nd day of the month or the next business day, if the payout day falls on Holidays or Weekends)</p>
            </motion.div>
          </motion.div>

          {/* <motion.div 
        
          className="flex-1 w-full p-0">
            <Card className="bg-white shadow-lg rounded-xl overflow-hidden h-[210px] p-0 border-0">
              <CardContent className="">
                <div className="flex p-0">
                  <button
                   
                    className={`flex-1 py-4 px-6 text-left relative `}
                   
                    role="tab"
                  >
                    <h3 className="font-semibold text-lg mb-2">Weekly</h3>
                    <AnimatePresence mode="wait">
                      
                        <motion.p
                          key="weekly"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-md text-gray-600 font-[500]"
                        >
                          Net 7: adbytehub&apos;s team pays weekly on Tuesdays when a publisher reaches
                          the minimum payment amount.
                        </motion.p>
                     
                    </AnimatePresence>
                  </button>
                  <button
                   
                    className={`flex-1 py-0 px-6 text-left relative border-0
                      
                      `}
                    
                    role="tab"
                  >
                   
                      <motion.div
                        className="absolute left-0 top-0 py-0 w-4 -ml-4 h-[220px] bg-gradient-to-tl from-purple-600 to-emerald-600 "
                      />
                   
                    <h3 className="font-semibold text-lg mb-2">Twice a month</h3>
                    <AnimatePresence mode="wait">
                     
                        <motion.p
                          key="twice"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="text-md text-gray-600 font-[500]"
                        >
                          Net 7: (on the 7th and 22nd day of the month or the next business day, if the
                          payout day falls on Holidays or Weekends)
                        </motion.p>
                      
                    </AnimatePresence>
                  </button>
                </div>
              </CardContent>
            </Card>
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  )
}