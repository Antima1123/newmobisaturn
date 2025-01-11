'use client'

import { useState } from 'react'
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from "@/components/ui/button"

export const MarketingSolutions = () => {
    const [expandedSection, setExpandedSection] = useState<string | null>(null)

    const toggleSection = (section: string) => {
        setExpandedSection(expandedSection === section ? null : section)
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    }

    return (
        <section className="bg-gradient-to-b from-gray-50 to-white w-full py-24">
            <div className="max-w-7xl mx-auto flex flex-col gap-8 py-8 px-4">
                <motion.h2 
                    className="text-center text-4xl md:text-6xl font-bold text-gray-800"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    Elevate Your Brand with Innovative Marketing Solutions
                </motion.h2>
                <motion.h3 
                    className="text-center text-xl font-medium text-gray-600 md:max-w-4xl w-full mx-auto mb-12"
                    initial="hidden"
                    animate="visible"
                    variants={fadeInUp}
                >
                    Unlock Your Business&apos;s Full Potential with Our Tailored Strategies
                </motion.h3>
                <div className="md:grid md:grid-cols-2 flex flex-col-reverse gap-12 items-center">
                    <div className="col-span-1 space-y-8">
                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.02 }}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <button 
                                onClick={() => toggleSection('customized')}
                                className="w-full flex justify-between items-center"
                            >
                                <h3 className="font-bold text-2xl text-gray-800">Customized Marketing Plans</h3>
                                {expandedSection === 'customized' ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            {expandedSection === 'customized' && (
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    Our team crafts bespoke marketing strategies aligned with your unique business objectives. By meticulously analyzing your target audience, market trends, and competitive landscape, we design campaigns that resonate with your customers. From email marketing to social media management, every step is optimized to boost engagement, drive conversions, and deliver measurable growth. Our tailored approach ensures you stand out in a crowded market and achieve long-term success.
                                </p>
                            )}
                        </motion.div>

                        <motion.div 
                            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            whileHover={{ scale: 1.02 }}
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <button 
                                onClick={() => toggleSection('expert')}
                                className="w-full flex justify-between items-center"
                            >
                                <h3 className="font-bold text-2xl text-gray-800">Expert Support and Guidance</h3>
                                {expandedSection === 'expert' ? <ChevronUp /> : <ChevronDown />}
                            </button>
                            {expandedSection === 'expert' && (
                                <p className="mt-4 text-gray-600 leading-relaxed">
                                    Navigating the ever-evolving marketing landscape can be challenging, but with our expert team by your side, you&apos;ll have the insights you need. We provide ongoing support to help you overcome obstacles, implement innovative solutions, and adapt to market changes. Our goal is to empower your business with actionable advice and insights that drive results. Whether it&apos;s refining your brand message or optimizing your marketing initiatives, we&apos;re committed to your success every step of the way.
                                </p>
                            )}
                        </motion.div>

                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={fadeInUp}
                        >
                            <Button size="lg" className="w-full md:w-auto">
                                Get Your Free Consultation
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div 
                        className="md:col-span-1"
                        initial="hidden"
                        animate="visible"
                        variants={fadeInUp}
                    >
                        <Image
                            src="/homepage/bg.png"
                            alt="Innovative marketing solutions visualization"
                            width={1000}
                            height={1000}
                            className="w-full max-w-2xl mx-auto object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

