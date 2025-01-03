"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, LayoutGrid, MessageSquare, MonitorSmartphone, Play, Target, TrendingUp } from "lucide-react"
import Cardunique from "@/app/(dashboard)/advertiser/components/unique-card"
import { useOpenContactUs } from "@/hook/contact-open"
import ContactForm from "@/components/contact-form"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import GetStartedSection from "@/components/payment-carousel"

const LearMore = [
  {
    title: `1. Leverage Data Analytics:`,
    descriptiom: `Use data from social media platforms, search engines, and websites to understand consumer behavior and interests. This will help tailor your advertising to a specific audience, ensuring it resonates with them.
                  Tools like Google Analytics, Facebook Insights, and other advertising platforms provide detailed demographic information to help create targeted ads.`
  },
  {
    title: `2. Segmentation and Personalization:`,
    descriptiom: `Segment your audience based on factors such as age, location, gender, interests, behaviors, and buying patterns.
Personalize your ads to cater to these segments. For example, personalized product recommendations or localized promotions can increase engagement and conversions.`
  },
  {
    title: `3. Platform Selection:`,
    descriptiom: `Social Media Advertising: Platforms like Facebook, Instagram, LinkedIn, and TikTok offer highly customizable ad targeting. You can reach users based on their activity, interests, and online behavior.${<div><br/><br/></div>}Search Engine Ads (Google Ads): Display your ads to users actively searching for relevant keywords, increasing the likelihood of conversions.
Programmatic Advertising: This automated process uses algorithms to buy ad space in real-time, optimizing where and when your ad appears, ensuring maximum exposure to your target audience.`
  },
  {
    title: `4. Retargeting:`,
    descriptiom: `Retargeting allows you to re-engage users who have interacted with your brand but did not convert. By displaying tailored ads to these users, you increase the chances of turning them into customers.`
  },
  {
    title: `5. A/B Testing:`,
    descriptiom: `Constantly test and optimize your ads. A/B testing different variations of your ad copy, design, and call to action helps determine which version is most effective in driving engagement and conversions.`
  },
  {
    title: `6. Global Reach with Local Focus:`,
    descriptiom: `With the ability to connect with billions of users worldwide, you can target specific regions or countries based on language preferences, regional trends, and purchasing power.
Localized advertising can make your brand more relatable, which is key when expanding into new markets.`
  },
  {
    title: `7. Measure, Adjust, and Scale:`,
    descriptiom: `Continuously measure the performance of your campaigns. Use key metrics like click-through rate (CTR), conversion rate, and return on investment (ROI) to gauge success.
Based on the data, adjust your strategy for greater impact and scalability. Whether you’re adjusting budgets or changing targeting parameters, continual optimization is crucial.`
  },
]
const adFormats = [
  {
    icon: <LayoutGrid className="h-12 w-12" />,
    title: "Pop-under Mastery",
    description: "Unleash a torrent of traffic with strategically placed click-triggered pop-unders."
  },
  {
    icon: <MonitorSmartphone className="h-12 w-12" />,
    title: "Web Push Wizardry",
    description: "Build and nurture a loyal subscriber base across desktop platforms with ease."
  },
  {
    icon: <Play className="h-12 w-12" />,
    title: "Immersive In-stream Video",
    description: "Seamlessly integrate full video ads or video-rolls into your existing player."
  },
  {
    icon: <MessageSquare className="h-12 w-12" />,
    title: "Dynamic In-page Solutions",
    description: "Craft attention-grabbing banners that seamlessly blend with your webpage's design."
  }
]

const uniqueCard = [
    {
      title : "Advertising Agencies and Brands",
      points : [
        {
          icon: "🌐",
          text: " Reach a global audience of over two billion smartphone users.",
        },
        {
          icon: "📱",
          text: "Boost engagement with innovative and interactive ad experiences.",
        },
        {
          icon: "📈",
          text: "Promote sustainable growth with optimized supply paths and full transparency.",
        },
      ],
      buttonText : "Grow Your Brand",
      imageUrl : "/adv-6.png",
      imageOnRight : true,
    },
    {
        title : "Game Developers",
        points : [
          {
            icon: "🌐",
            text: "Effortlessly monetize your mobile game with our lightweight SDK.",
          },
          {
            icon: "📱",
            text: " Deliver engaging and rewarding ad experiences tailored to your gameplay.",
          },
          {
            icon: "📈",
            text: "Boost your revenue with privacy-focused solutions, consent management, and more.",
          },
        ],
        buttonText : "Grow Your Brand",
        imageUrl : "/adv-4.jpg",
        imageOnRight : true,
      },

      {
        title : "App Growth Marketers and Agencies",
        points : [
          {
            icon: "🌐",
            text: "Attract high-quality users affordably while ensuring sustainable growth.",
          },
          {
            icon: "📱",
            text: "Increase customer lifetime value through effective re-engagement strategies.",
          },
          {
            icon: "📈",
            text: "Drive app growth with privacy-focused, future-ready solutions.",
          },
        ],
        buttonText : "Grow Your Brand",
        imageUrl : "/adv-5.jpg",
        imageOnRight : false,
      }
  ]

export default function AdvertiserPage() {

    const {onOpen,isOpen} = useOpenContactUs();
    const [selectedAdFormat, setSelectedAdFormat] = useState<any>(null)
    const [learnMore,setLearMore] = useState<boolean>(false);

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
                Tap into the power of targeted advertising to engage with billions of users worldwide and accelerate your brand’s growth                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6" onClick={()=> onOpen()}>Get Started</Button>
                <Button variant="outline" size="lg" onClick={() => setLearMore(true)}>
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        <AnimatePresence>
        {learnMore && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 mt-16 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setLearMore(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="bg-gradient-to-br from-emerald-600 to-purple-600 rounded-lg overflow-hidden shadow-xl max-w-7xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 flex flex-col gap-6">
                {/* main content */}
                <div className=" py-8 overflow-y-auto overflow-hidden max-h-[32rem]">
                  {LearMore.map((learn,index)=> (
                    <div className="flex flex-col gap-3 mb-6" key={index}>
                      <h2 className="text-[22px] font-[600] text-white">{learn.title}</h2>
                      <p className="text-gray-100">{learn.descriptiom}</p>
                    </div>
                  ))}
                </div>
                <Button onClick={() => setLearMore(false)} className="w-full bg-white text-black">Close</Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        <section className="w-screen py-12 md:py-24 lg:py-32 bg-gradient-to-br from-emerald-600 to-purple-600 p-6">
          <div className="container px-4 md:px-6 max-w-screen-2xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-white">Why Choose Us</h2>
            <div className="grid gap-6 lg:grid-cols-3 ">
              <Card className="flex flex-col items-center text-center p-6">
                <Globe className="h-12 w-12 mb-4 text-primary " color="rgb(5 150 105)" />
                <h3 className="text-xl font-bold mb-2 text-emerald-600">Global Reach</h3>
                <p className="text-gray-500 dark:text-gray-400">Access a diverse audience of over two billion users across the globe.</p>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <Target color="rgb(5 150 105)" className="h-12 w-12 mb-4 text-primary"  />
                <h3 className="text-xl font-bold mb-2 text-emerald-600">Precision Targeting</h3>
                <p className="text-gray-500 dark:text-gray-400">Reach the right audience with our advanced targeting capabilities.</p>
              </Card>
              <Card className="flex flex-col items-center text-center p-6">
                <TrendingUp className="h-12 w-12 mb-4 text-primary" color="rgb(5 150 105)" />
                <h3 className="text-xl font-bold mb-2 text-emerald-600">Performance Tracking</h3>
                <p className="text-gray-500 dark:text-gray-400">Monitor and optimize your campaigns with real-time analytics.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-gray-900 mb-12 py-20"
        >
          Cutting-Edge Ad Formats
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {adFormats.map((format, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full bg-gray-100 shadow-md cursor-pointer transition-all duration-300 hover:shadow-xl"
                onClick={() => setSelectedAdFormat(format)}
              >
                <CardContent className="flex flex-col items-center p-6 text-center h-full">
                  <div className="mb-4 p-3 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 text-white">
                    {format.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{format.title}</h3>
                  <p className="text-gray-600">{format.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
        {(selectedAdFormat) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => {
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
        <GetStartedSection/>
      </main>
    </div>
  )
}