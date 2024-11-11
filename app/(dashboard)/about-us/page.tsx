'use client'

import ContactForm from "@/components/contact-form"
import { Card, CardContent } from "@/components/ui/card"
import { useOpenContactUs } from "@/hook/contact-open"
import { ChartBar, Users, Target, Rocket, Trophy, Globe2 } from "lucide-react"

export default function AboutUs() {
    const { onOpen, isOpen } = useOpenContactUs()
  return (
    <div className="flex flex-col min-h-screen">
        {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#D9083C] to-[#ff1f59] py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Driving Growth Through Data-Driven Marketing
            </h1>
            <p className="text-lg md:text-xl mb-8">
              We're a performance marketing agency specializing in user acquisition and data-driven targeting, helping brands
              achieve exceptional growth across multiple verticals.
            </p>
            <button onClick={() => onOpen()} className="w-[9rem]  mt-2 rounded-sm py-2 bg-[#fff] text-red-600 ">Contact us</button>
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
                  <div className="text-3xl font-bold text-[#D9083C] mb-2">{stat.number}</div>
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
                icon: <ChartBar className="w-10 h-10 text-[#D9083C]" />,
                title: "Performance Marketing",
                description:
                  "Data-driven campaigns optimized for maximum ROI across multiple channels and platforms.",
              },
              {
                icon: <Users className="w-10 h-10 text-[#D9083C]" />,
                title: "User Acquisition",
                description: "Strategic user acquisition campaigns focused on quality and retention.",
              },
              {
                icon: <Target className="w-10 h-10 text-[#D9083C]" />,
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
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Education", icon: <Globe2 className="w-8 h-8" /> },
              { name: "Gaming", icon: <Trophy className="w-8 h-8" /> },
              { name: "Finance", icon: <ChartBar className="w-8 h-8" /> },
              { name: "Social Media", icon: <Users className="w-8 h-8" /> },
              { name: "Travel", icon: <Globe2 className="w-8 h-8" /> },
              { name: "Entertainment", icon: <Trophy className="w-8 h-8" /> },
              { name: "Lifestyle", icon: <Users className="w-8 h-8" /> },
              { name: "Sports", icon: <Rocket className="w-8 h-8" /> },
            ].map((vertical, index) => (
              <Card key={index} className="p-6">
                <CardContent className="flex flex-col items-center text-center gap-2">
                  <div className="rounded-full bg-[#D9083C] p-4 text-white">{vertical.icon}</div>
                  <h3 className="font-semibold">{vertical.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
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
      <section className="bg-[#D9083C] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
            <p className="text-lg mb-8">
              Join our network of successful partners and take your marketing performance to the next level.
            </p>
            <button onClick={() => onOpen()} className="w-[9rem]  mt-2 rounded-sm py-2 bg-[#fff] text-red-600 ">Contact us</button>
          </div>
        </div>
      </section>
    </div>
  )
}