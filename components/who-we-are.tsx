"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, Users, LineChart, BarChart, PieChart, TrendingUp, CheckCircle, Award } from 'lucide-react'
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function WhatWeAre() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  }

  const services = [
    {
      title: "Data-Driven Marketing",
      description: "Leverage advanced analytics and real-time data insights for precision targeting and optimal campaign performance.",
      icon: <LineChart className="h-6 w-6 text-primary" />,
      image: "/cardbg-1.webp"
    },
    {
      title: "Campaign Optimization",
      description: "Maximize ROI with strategic campaign management and continuous performance refinement.",
      icon: <Play className="h-6 w-6 text-primary" />,
      image: "/cardbg-2.png"
    },
    {
      title: "User Engagement",
      description: "Create meaningful connections with your audience through personalized, multi-channel marketing strategies.",
      icon: <Users className="h-6 w-6 text-primary" />,
      image: "/cardbg-3.jpg"
    }
  ]

  const stats = [
    { label: "Clients Served", value: "250+", icon: <Users className="h-6 w-6" /> },
    { label: "App Partners", value: "5,000+", icon: <CheckCircle className="h-6 w-6" /> },
    { label: "Avg. ROI Increase", value: "150%", icon: <TrendingUp className="h-6 w-6" /> },
    { label: "Industry Awards", value: "20+", icon: <Award className="h-6 w-6" /> },
  ]

  const testimonials = [
    {
      quote: "Their data-driven approach revolutionized our marketing strategy, leading to a 200% increase in user acquisition.",
      author: "Jane Doe",
      position: "CMO, Tech Innovators Inc."
    },
    {
      quote: "The team's expertise in campaign optimization helped us achieve record-breaking ROI within just three months.",
      author: "John Smith",
      position: "Marketing Director, Global Solutions Ltd."
    },
    {
      quote: "Their user engagement strategies have significantly improved our customer retention rates and lifetime value.",
      author: "Emily Brown",
      position: "Head of Growth, StartUp Sensation"
    }
  ]

  return (
    <section className="w-full bg-gradient-to-b from-background to-background/80 py-12 md:py-24 max-w-screen-2xl mx-auto">
      <div className="container px-4 md:px-6">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Elevate Your <span className="text-primary">Marketing</span> Strategy
          </h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Harness the power of data-driven insights and cutting-edge technology to transform your brand's performance.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0, transition: { delay: index * 0.2 } }
              }}
            >
              <Card className="group relative overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      fill
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                  </div>
                  <div className="space-y-2 p-6">
                    <div className="flex items-center gap-2">
                      {service.icon}
                      <h3 className="font-semibold">{service.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 grid gap-8 lg:grid-cols-2 lg:gap-12"
        >
          <div className="space-y-4">
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl"
            >
              Who we are
            </motion.h2>
            <motion.p variants={fadeInUp} className="mx-auto max-w-[700px] text-muted-foreground">
              We are a performance marketing company specializing in brand marketing, dedicated to driving exceptional results through innovative strategies and cutting-edge technology.
            </motion.p>
            <motion.div variants={fadeInUp} className="space-y-2 text-muted-foreground">
              <p>
                Our team excels in user acquisition, providing top-tier installs and post-install services to leading brands across industries. With a network of over 250 brand partnerships and collaborations with major agencies, we leverage our extensive reach to deliver unparalleled results.
              </p>
              <p>
                Our 5,000+ direct app partners enable us to connect with high-intent users, ensuring optimal engagement and conversion rates for our clients. By integrating verified demand sources with strategic traffic management, we consistently achieve impressive ROAS for our advertisers.
              </p>
              <p>
                Our specialized mobile marketing team employs a dynamic approach, initiating campaigns with rapid optimization and maintaining peak performance through quarterly reviews. This meticulous process allows us to minimize fraud rates while maximizing campaign effectiveness.
              </p>
            </motion.div>
          </div>
          <motion.div
            variants={{
              initial: { opacity: 0, scale: 0.8 },
              animate: { opacity: 1, scale: 1 }
            }}
            className="relative mx-auto aspect-square w-full max-w-xl lg:max-w-none"
          >
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Marketing Illustration"
              width={600}
              height={600}
              className="rounded-lg object-contain"
            />
          </motion.div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl">
            Our Impact by the Numbers
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                    className="mb-2 flex justify-center"
                  >
                    {stat.icon}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="text-2xl font-bold"
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-10">
            Our Expertise
          </h2>
          <Tabs defaultValue="analytics" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="analytics">Advanced Analytics</TabsTrigger>
              <TabsTrigger value="optimization">Campaign Optimization</TabsTrigger>
              <TabsTrigger value="engagement">User Engagement</TabsTrigger>
            </TabsList>
            <TabsContent value="analytics" className="mt-6">
              <Card>
                <CardContent className="flex items-center p-6">
                  <BarChart className="h-12 w-12 text-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Data-Driven Insights</h3>
                    <p className="text-muted-foreground">
                      Leverage our advanced analytics to gain deep insights into your audience behavior and campaign performance, enabling data-driven decision making for optimal results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="optimization" className="mt-6">
              <Card>
                <CardContent className="flex items-center p-6">
                  <PieChart className="h-12 w-12 text-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Strategic Optimization</h3>
                    <p className="text-muted-foreground">
                      Our expert team continuously refines your campaigns, employing cutting-edge optimization techniques to maximize ROI and achieve your marketing objectives.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="engagement" className="mt-6">
              <Card>
                <CardContent className="flex items-center p-6">
                  <Users className="h-12 w-12 text-primary mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold">Personalized Engagement</h3>
                    <p className="text-muted-foreground">
                      Create meaningful connections with your audience through tailored, multi-channel strategies that drive engagement, retention, and long-term customer value.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20"
        >
          <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl mb-10">
            What Our Clients Say
          </h2>
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <p className="text-xl italic mb-4">"{testimonials[activeTestimonial].quote}"</p>
                <p className="font-semibold">{testimonials[activeTestimonial].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].position}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  onClick={() => setActiveTestimonial(index)}
                  className={activeTestimonial === index ? "bg-primary text-primary-foreground" : ""}
                >
                  {index + 1}
                </Button>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Transform Your Marketing?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's collaborate to elevate your brand and achieve unprecedented growth.
          </p>
          <Button size="lg" className="text-lg">
            Get Started Today
          </Button>
        </motion.div> */}
      </div>
    </section>
  )
}