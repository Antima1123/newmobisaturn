'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe2, Trophy, BarChart2, Users, Rocket, Briefcase, Utensils, ShoppingBag, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const industries = [
  { name: "Education", icon: <Globe2 className="w-8 h-8" />, color: "bg-emerald-500", description: "Revolutionizing learning experiences through targeted digital strategies and EdTech solutions.", benefits: ["Increased student engagement", "Improved learning outcomes", "Enhanced administrative efficiency"] },
  { name: "Gaming", icon: <Trophy className="w-8 h-8" />, color: "bg-purple-500", description: "Driving user acquisition and engagement for mobile and console games across diverse genres.", benefits: ["Higher player retention", "Increased in-game purchases", "Improved game analytics"] },
  { name: "Finance", icon: <BarChart2 className="w-8 h-8" />, color: "bg-emerald-500", description: "Enhancing digital banking experiences and promoting fintech solutions to tech-savvy audiences.", benefits: ["Streamlined online banking", "Improved security measures", "Personalized financial advice"] },
  { name: "Social Media", icon: <Users className="w-8 h-8" />, color: "bg-purple-500", description: "Boosting platform growth and user retention through data-driven community building strategies.", benefits: ["Increased user engagement", "Enhanced content discovery", "Improved ad targeting"] },
  { name: "Travel", icon: <Rocket className="w-8 h-8" />, color: "bg-emerald-500", description: "Inspiring wanderlust and driving bookings through immersive digital marketing campaigns.", benefits: ["Personalized travel recommendations", "Seamless booking experiences", "Increased customer loyalty"] },
  { name: "Business", icon: <Briefcase className="w-8 h-8" />, color: "bg-purple-500", description: "Empowering B2B growth through targeted lead generation and account-based marketing strategies.", benefits: ["Higher quality leads", "Improved sales conversion rates", "Enhanced customer relationships"] },
  { name: "Food & Beverage", icon: <Utensils className="w-8 h-8" />, color: "bg-emerald-500", description: "Satisfying cravings and driving orders through mouth-watering digital content and local SEO.", benefits: ["Increased online orders", "Improved customer reviews", "Enhanced brand loyalty"] },
  { name: "E-commerce", icon: <ShoppingBag className="w-8 h-8" />, color: "bg-purple-500", description: "Maximizing online sales through conversion optimization and personalized shopping experiences.", benefits: ["Higher conversion rates", "Reduced cart abandonment", "Improved customer lifetime value"] },
]

const caseStudies = [
  { title: "EdTech Revolution", industry: "Education", result: "200% increase in student engagement" },
  { title: "Mobile Gaming Boom", industry: "Gaming", result: "5 million new users acquired in 3 months" },
  { title: "FinTech Disruption", industry: "Finance", result: "50% reduction in customer churn rate" },
  { title: "Social Media Growth Hack", industry: "Social Media", result: "10x increase in daily active users" },
]

export default function Component() {
  const [selectedIndustry, setSelectedIndustry] = useState(0)
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-md">
        <h2 className="text-lg font-bold mb-2">An error occurred:</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-emerald-50 to-purple-50">
      <ErrorBoundary onError={(error) => setError(error)}>
      <section className="py-16">
        <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-emerald-600">Industries We Serve</h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant={selectedIndustry === index ? "default" : "outline"}
                  className={`w-full h-32 flex flex-col items-center justify-center gap-2 ${
                    selectedIndustry === index ? 'ring-2 ring-offset-2 ring-emerald-500' : ''
                  }`}
                  onClick={() => setSelectedIndustry(index)}
                >
                  <div className={`p-4 rounded-full text-white ${industry.color}`}>
                    {industry.icon}
                  </div>
                  <span className="font-semibold">{industry.name}</span>
                </Button>
              </motion.div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-purple-600">{industries[selectedIndustry].name}</h2>
                  <p className="text-gray-700 mb-4">{industries[selectedIndustry].description}</p>
                  <h3 className="text-lg font-semibold mb-2 text-emerald-600">Key Benefits</h3>
                  <ul className="list-none space-y-2">
                    {industries[selectedIndustry].benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-emerald-500 mr-2" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-600">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Analyze', 'Strategize', 'Optimize'].map((step, index) => (
              <Card key={index} className="bg-gradient-to-br from-emerald-50 to-purple-50">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-600">{index + 1}. {step}</h3>
                  <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-600">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-600">{study.title}</h3>
                  <p className="text-gray-600 mb-4">Industry: {study.industry}</p>
                  <p className="text-emerald-600 font-semibold">{study.result}</p>
                  <Button variant="link" className="mt-4 text-purple-600">
                    Read more <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 md:px-8 max-w-screen-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-emerald-600">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-700 mb-8">Let&apos;s discuss how we can help you achieve your goals.</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
            Get Started
          </Button>
        </div>
      </section>
      </ErrorBoundary>
    </div>
  )
}

class ErrorBoundary extends React.Component<
  { children: React.ReactNode; onError: (error: Error) => void },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    this.props.onError(error);
  }

  render() {
    if (this.state.hasError) {
      return null;
    }

    return this.props.children;
  }
}