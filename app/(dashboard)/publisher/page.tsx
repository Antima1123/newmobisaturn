'use client'

import ContactForm from "@/components/contact-form"
import ContactUsPage from "@/components/contact-us"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useOpenContactUs } from "@/hook/contact-open"
import { motion, AnimatePresence } from 'framer-motion'
import {   Clock, CreditCard, Globe2, LayoutGrid, Mail, MessageSquare, MonitorSmartphone, Play, PlusCircle } from "lucide-react"
import { MdSupportAgent } from "react-icons/md";
import { useState } from "react"
import { TbClockDollar } from "react-icons/tb"
import PayOut from "@/components/payout"
import WhyChooseUs from "@/components/new-why-choose-us"


export default function Component() {
    const {onOpen,isOpen} = useOpenContactUs();

    const [selectedAdvantage, setSelectedAdvantage] = useState<any>(null)
    const [selectedAdFormat, setSelectedAdFormat] = useState<any>(null)
 
    const advantages = [
      {
        icon: <Clock className="h-12 w-12" />,
        title: "Real-Time Performance Tracking",
        description: "Instant ROI insights with zero setup time. Watch your campaigns thrive in real-time."
      },
      {
        icon: <LayoutGrid className="h-12 w-12" />,
        title: "Revenue Maximization",
        description: "Leverage top-tier marketplace solutions to target high-value audiences and boost your earnings."
      },
      {
        icon: <TbClockDollar className="h-12 w-12" />,
        title: "Automated payouts",
        description: "Timely, accurate, and hassle-free payment processing for your earning."
      },
      {
        icon: <MdSupportAgent className="h-12 w-12" />,
        title: "Live Support ",
        description: "No stupid tickets and waiting - your personal manager is 100% responsible for your experience."
      },
      {
        icon: <Globe2 className="h-12 w-12" />,
        title: "Rapid Scaling Capabilities",
        description: "Expand your reach effortlessly with our comprehensive panel management solutions."
      }
    ]
  

  return (
    <div className="flex min-h-screen flex-col">
        {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-purple-600">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="container px-4 md:px-6 max-w-screen-2xl mx-auto"
          >
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Made for publishers
              </h1>
              <p className="mx-auto max-w-[700px] text-white/80">
                Our specialty at AdByteHub is assisting publishers in realizing their maximum income potential via effective digital marketing techniques. We provide customized solutions to increase audience engagement, improve ad effectiveness, and generate more revenue, regardless of the size of your media outlet—from small blogs to major media conglomerates. Our team of professionals collaborates closely with publishers to create tailored plans that optimize user experience, increase visibility, and expedite monetization initiatives. Allow us to assist you in turning your platform into an effective digital resource.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                onClick={() => onOpen()}
                size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                  Contact us
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <section className="max-w-7xl mx-auto mb-24">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-12"
        >
          Our Unparalleled Advantages
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full cursor-pointer transition-all duration-300 hover:shadow-xl"
                onClick={() => setSelectedAdvantage(advantage)}
              >
                <CardContent className="flex flex-col items-center p-6 text-center h-full">
                  <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 text-white">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
      <WhyChooseUs/>
 
      <AnimatePresence>
        {(selectedAdvantage || selectedAdFormat) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => {
              setSelectedAdvantage(null)
              setSelectedAdFormat(null)
            }}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="bg-white rounded-lg p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedAdvantage && (
                <>
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-emerald-400 to-blue-500 text-white">
                      {selectedAdvantage.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{selectedAdvantage.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{selectedAdvantage.description}</p>
                </>
              )}
              {selectedAdFormat && (
                <>
                  <div className="flex justify-center mb-6">
                    <div className="p-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                      {selectedAdFormat.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-center">{selectedAdFormat.title}</h3>
                  <p className="text-gray-600 mb-6 text-center">{selectedAdFormat.description}</p>
                </>
              )}
              <div className="flex justify-center">
                <Button 
                  onClick={() => {
                    setSelectedAdvantage(null)
                    setSelectedAdFormat(null)
                  }}
                  className="bg-gradient-to-r from-emerald-400 to-blue-500 text-white"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <PayOut/>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
            <div className="grid gap-12 md:grid-cols-2 items-center justify-between">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className=" justify-center flex w-full"
              >
                <ContactUsPage/>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Need help?</h3>
                  <p className="text-gray-500">
                    Please, visit our help center to discover complete functionalities
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Have some partnership offer?</h3>
                  <p className="text-gray-500">
                    Fill out the form, tell us more about you and contact with you as soon as possible.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Don&apos;t miss news and tips</h3>
                  <p className="text-gray-500">
                    Our blog will help you find how to provide, save, analyze and tips
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}