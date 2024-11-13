'use client'

import ContactForm from "@/components/contact-form"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useOpenContactUs } from "@/hook/contact-open"
import { ChartBar, Users, Target, Rocket, Trophy, Globe2, Briefcase, Utensils, ShoppingBag } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"


const industries = [
  { name: "Education", icon: <Globe2 className="w-12 h-12" />, color: "bg-blue-500", description: "Revolutionizing learning experiences through targeted digital strategies and EdTech solutions." },
  { name: "Gaming", icon: <Trophy className="w-12 h-12" />, color: "bg-purple-500", description: "Driving user acquisition and engagement for mobile and console games across diverse genres." },
  { name: "Finance", icon: <ChartBar className="w-12 h-12" />, color: "bg-green-500", description: "Enhancing digital banking experiences and promoting fintech solutions to tech-savvy audiences." },
  { name: "Social Media", icon: <Users className="w-12 h-12" />, color: "bg-pink-500", description: "Boosting platform growth and user retention through data-driven community building strategies." },
  { name: "Travel", icon: <Rocket className="w-12 h-12" />, color: "bg-yellow-500", description: "Inspiring wanderlust and driving bookings through immersive digital marketing campaigns." },
  { name: "Business", icon: <Briefcase className="w-12 h-12" />, color: "bg-red-500", description: "Empowering B2B growth through targeted lead generation and account-based marketing strategies." },
  { name: "Food & Beverage", icon: <Utensils className="w-12 h-12" />, color: "bg-orange-500", description: "Satisfying cravings and driving orders through mouth-watering digital content and local SEO." },
  { name: "E-commerce", icon: <ShoppingBag className="w-12 h-12" />, color: "bg-indigo-500", description: "Maximizing online sales through conversion optimization and personalized shopping experiences." },
]

export default function AboutUs() {
    const { onOpen, isOpen } = useOpenContactUs()
    const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
        {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-purple-600 p-6 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Driving Growth Through Data-Driven Marketing
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We&apos;re a performance marketing agency specializing in user acquisition and data-driven targeting, helping brands
              achieve exceptional growth across multiple verticals.
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
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "250+", label: "Brand Partners" },
              { number: "5000+", label: "Direct App Partners" },
              { number: "15M+", label: "Monthly Active Users" },
              { number: "98%", label: "Client Retention" },
            ].map((stat, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Specialties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Marketing Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ChartBar className="w-10 h-10 text-emerald-600" />,
                title: "Performance Marketing",
                description:
                  "Data-driven campaigns optimized for maximum ROI across multiple channels and platforms.",
              },
              {
                icon: <Users className="w-10 h-10 text-emerald-600" />,
                title: "User Acquisition",
                description: "Strategic user acquisition campaigns focused on quality and retention.",
              },
              {
                icon: <Target className="w-10 h-10 text-emerald-600" />,
                title: "Targeted Advertising",
                description: "Precision targeting using advanced data analytics and audience segmentation.",
              },
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

      {/* Industry Verticals */}
      <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className={`w-full h-32 flex flex-col items-center justify-center gap-2 ${
                  selectedIndustry === index ? 'ring-2 ring-offset-2 ring-emerald-500' : ''
                }`}
                onClick={() => setSelectedIndustry(index)}
              >
                <div className={`p-3 rounded-full ${industry.color}`}>
                  {industry.icon}
                </div>
                <span className="font-semibold">{industry.name}</span>
              </Button>
            </motion.div>
          ))}
        </div>
        <AnimatePresence mode="wait">
          {selectedIndustry !== null && (
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className={`${industries[selectedIndustry].color} p-8 flex items-center justify-center`}>
                      <motion.div
                        initial={{ scale: 0.8, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.5, type: "spring" }}
                      >
                        {industries[selectedIndustry].icon}
                      </motion.div>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-4">{industries[selectedIndustry].name}</h3>
                      <p className="text-gray-600 mb-6">{industries[selectedIndustry].description}</p>
                      {/* <Button>Learn More</Button> */}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>

      {/* Company Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">Our Approach</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Data-Driven Decision Making</h3>
                <p className="text-gray-600">
                  We leverage advanced analytics and real-time data to optimize campaigns and deliver measurable results for
                  our clients.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Transparent Partnership</h3>
                <p className="text-gray-600">
                  Our success is measured by your growth. We maintain complete transparency in our strategies and results.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Continuous Innovation</h3>
                <p className="text-gray-600">
                  We stay ahead of industry trends and continuously evolve our strategies to deliver cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-lg mb-8">
              Join our network of successful partners and take your marketing performance to the next level.
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
        </div>
      </section>
    </div>
  )
}