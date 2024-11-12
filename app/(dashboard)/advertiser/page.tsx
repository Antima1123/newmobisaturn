"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, Globe, Target, TrendingUp } from "lucide-react"
import Link from "next/link"
import Cardunique from "@/app/(dashboard)/advertiser/components/unique-card"
import { useOpenContactUs } from "@/hook/contact-open"
import ContactForm from "@/components/contact-form"
import { motion } from "framer-motion"

const uniqueCard = [
    {
      title : "Advertising Agencies and Brands",
      points : [
        {
          icon: "🌐",
          text: "Find your audiences across two billion smartphone users globally.",
        },
        {
          icon: "📱",
          text: "Drive active engagement with smart ad experiences.",
        },
        {
          icon: "📈",
          text: "Foster responsible growth through sustainability, supply path optimization, and transparency.",
        },
      ],
      buttonText : "Grow Your Brand",
      imageUrl : "/adv-6.png",
      imageOnRight : true,
    },
    
    {
      title : "Advertising Agencies and Brands",
      points : [
        {
          icon: "🌐",
          text: "Find your audiences across two billion smartphone users globally.",
        },
        {
          icon: "📱",
          text: "Drive active engagement with smart ad experiences.",
        },
        {
          icon: "📈",
          text: "Foster responsible growth through sustainability, supply path optimization, and transparency.",
        },
      ],
      buttonText : "Grow Your Brand",
      imageUrl : "/adv-3.png",
      imageOnRight : false,
    },

    {
        title : "Advertising Agencies and Brands",
        points : [
          {
            icon: "🌐",
            text: "Find your audiences across two billion smartphone users globally.",
          },
          {
            icon: "📱",
            text: "Drive active engagement with smart ad experiences.",
          },
          {
            icon: "📈",
            text: "Foster responsible growth through sustainability, supply path optimization, and transparency.",
          },
        ],
        buttonText : "Grow Your Brand",
        imageUrl : "/adv-4.jpg",
        imageOnRight : true,
      },

      {
        title : "Advertising Agencies and Brands",
        points : [
          {
            icon: "🌐",
            text: "Find your audiences across two billion smartphone users globally.",
          },
          {
            icon: "📱",
            text: "Drive active engagement with smart ad experiences.",
          },
          {
            icon: "📈",
            text: "Foster responsible growth through sustainability, supply path optimization, and transparency.",
          },
        ],
        buttonText : "Grow Your Brand",
        imageUrl : "/adv-5.jpg",
        imageOnRight : false,
      }
  ]

export default function AdvertiserPage() {
    const {onOpen,isOpen} = useOpenContactUs();
  return (
    <div className="flex flex-col min-h-screen items-center">
      <main className="flex-1 relative">
      {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
        <section className="max-w-screen-2xl mx-auto w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-emerald-600">
                  Reach Your Perfect Audience
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Unlock the power of targeted advertising. Connect with billions of users worldwide and drive your brand&apos;s growth.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6" onClick={()=> onOpen()}>Get Started</Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-screen py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-purple-600 p-6">
          <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Why Choose Us</h2>
            <div className="grid gap-6 lg:grid-cols-3 ">
              <Card className="flex flex-col items-center text-center p-6">
                <Globe className="h-12 w-12 mb-4 text-primary text-emerald-600" />
                <h3 className="text-xl font-bold mb-2 text-emerald-600">Global Reach</h3>
                <p className="text-gray-500 dark:text-gray-400">Access a diverse audience of over two billion users across the globe.</p>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <Target className="h-12 w-12 mb-4 text-primary text-emerald-600" />
                <h3 className="text-xl font-bold mb-2 text-emerald-600">Precision Targeting</h3>
                <p className="text-gray-500 dark:text-gray-400">Reach the right audience with our advanced targeting capabilities.</p>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <TrendingUp className="h-12 w-12 mb-4 text-primary text-emerald-600" />
                <h3 className="text-xl font-bold mb-2 text-emerald-600">Performance Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">Monitor and optimize your campaigns with real-time analytics.</p>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-20">
          <div className="max-w-screen-2xl mx-auto container px-4 md:px-6 flex flex-col w-full items-center gap-8">
            {uniqueCard.map((card,index)=>(
                <Cardunique
                key={index}
                  title={card.title}
                  points={card.points}
                  buttonText={card.buttonText}
                  imageUrl={card.imageUrl}
                  imageOnRight={card.imageOnRight}
                />
              ))}
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-screen-2xl mx-auto container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Our Clients Say</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card className="p-6">
                <blockquote className="text-lg mb-4">&quot;Our ROI has increased by 150% since we started using this platform. The targeting capabilities are unmatched.&quot;</blockquote>
                <cite className="flex items-center">
                  <Image src="/placeholder.svg?height=40&width=40" alt="Jane Doe" width={40} height={40} className="rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">Jane Doe</div>
                    <div className="text-sm text-gray-500">Marketing Director, Tech Co.</div>
                  </div>
                </cite>
              </Card>
              <Card className="p-6">
                <blockquote className="text-lg mb-4">&quot;The global reach and precision targeting have helped us expand into new markets we never thought possible.&quot;</blockquote>
                <cite className="flex items-center">
                  <Image src="/placeholder.svg?height=40&width=40" alt="John Smith" width={40} height={40} className="rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">John Smith</div>
                    <div className="text-sm text-gray-500">CEO, Global Brands Inc.</div>
                  </div>
                </cite>
              </Card>
            </div>
          </div>
        </section> */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="max-w-screen-2xl mx-auto container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-emerald-600">Ready to Get Started?</h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join thousands of successful advertisers and start growing your business today.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
              <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button 
                            onClick={() => onOpen()}
                            className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6 text-[16px] font-[400] z-[110] "
                    >
                            Contact Us
                   </Button>
              </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}