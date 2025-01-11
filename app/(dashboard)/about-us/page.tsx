'use client'

import { useState, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useOpenContactUs } from "@/hook/contact-open"
import { ChartBar, Users, Target, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import ContactForm from "@/components/contact-form"
import ServicesAll from "@/components/aboutus-services"
import HoverDevCards from "@/components/hover-cards"
import Head from "next/head"
import SocialMediaServices from "@/components/social-media-component"
import EmailMarketing from "@/components/emailmarketing"
import { IndustriesWeServe } from "@/components/aboutus/feature-card"

const AboutUs = () => {
  const { onOpen, isOpen } = useOpenContactUs()
  const [isExpand, setIsExpand] = useState(false)

  const text = useMemo(() => {
    return `At AdByteHub, we specialize in performance marketing that drives measurable growth for brands across various verticals. By combining data-driven targeting with innovative, results-focused strategies, we help you achieve exceptional outcomes through user acquisition and market expansion.
    
    Our verified demand sources empower advertisers to optimize their Return on Ad Spend (ROAS). We seamlessly integrate traffic sources with your marketing goals, ensuring every campaign is crafted to deliver maximum impact.
    
    What truly sets us apart is our unique blend of technology, creativity, and strategic insights. We don't just run ads – we amplify your brand's story through tailored campaigns that connect with your audience and drive engagement. Whether you're looking to optimize existing channels or unlock new opportunities, AdByteHub creates scalable, sustainable growth for your brand.
    
    Transform your marketing strategy with AdByteHub and experience the perfect fusion of creativity and data to accelerate your success.`
  }, [])

  const paragraph = useMemo(() => text.split('\n').filter((para) => para.trim() !== ''), [text])

  return (
    <>
      <Head>
        <title>About Us | AdByteHub</title>
        <meta name="description" content="We specialize in performance marketing to help brands grow with data-driven strategies and creative excellence." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="flex flex-col min-h-screen">
        {isOpen && (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]">
            <ContactForm />
          </div>
        )}

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-emerald-600 to-purple-600 p-6 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Fueling Growth with Data-Driven Marketing & Creative Excellence
              </h1>
              <div className={`relative mb-8 ${isExpand ? "" : "line-clamp-3"}`}>
                {paragraph.map((para, index) => (
                  <p key={index} onClick={() => setIsExpand(!isExpand)} className="cursor-pointer text-md md:text-lg text-start mb-4">
                    {para}
                  </p>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => onOpen()} size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                  Contact us
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marketing Specialties */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Marketing Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <ChartBar className="w-10 h-10 text-emerald-600" />, title: "Performance Marketing", description: "Data-driven campaigns optimized for maximum ROI across multiple channels and platforms." },
                { icon: <Users className="w-10 h-10 text-emerald-600" />, title: "User Acquisition", description: "Strategic user acquisition campaigns focused on quality and retention." },
                { icon: <Target className="w-10 h-10 text-emerald-600" />, title: "Targeted Advertising", description: "Precision targeting using advanced data analytics and audience segmentation." },
              ].map((specialty, index) => (
                <Card key={index} className="p-6">
                  <CardContent className="flex flex-col items-center text-center">
                    <div className="mb-4">{specialty.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{specialty.title}</h3>
                    <p className="text-gray-600">{specialty.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* <SocialMediaServices/> */}

        {/* Services and Hover Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ServicesAll />
            {/* <HoverDevCards /> */}
            <IndustriesWeServe/>
          </div>
        </section>

        {/* <EmailMarketing/> */}

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
              <p className="text-lg mb-8">
                Join our network of successful partners and take your marketing performance to the next level.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button onClick={() => onOpen()} size="lg" className="bg-white text-emerald-600 hover:bg-white/90">
                  Contact us
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutUs
