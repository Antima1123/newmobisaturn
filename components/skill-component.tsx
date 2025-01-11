"use client"
import CountUp from 'react-countup'
import { useEffect, useState } from "react"
import PremiumText from "@/components/ui/bold-latin-text"

export const SkillsSection = () => {
    const skills = [
      { name: 'CPI', percentage: 58 },
      { name: 'PPC', percentage: 48 },
      { name: 'CPA', percentage: 40 },
      { name: 'CPR', percentage: 70 },
    ]
  const item = [
    {
      text: "Our ",
      color: "black",
    },
    {
      text: "Skills",
      color: "gray-400",
    },
    {
      text: "Revolutionizing ",
      color: "gray-400",
    },
    {
      text: " Digital ",
      color: "black",
    },
    {
      text: "Experiences",
      color: "black",
    }
  ]

  const [isVisible, setIsVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 }
    )

    const target = document.querySelector('#skills-section')
    if (target) observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [])
    return (
      <div id="skills-section" className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-1/4 -top-1/4 w-1/2 h-1/2 rounded-full bg-gray-100 blur-3xl" />
          <div className="absolute -right-1/4 -bottom-1/4 w-1/2 h-1/2 rounded-full bg-gray-100 blur-3xl" />
        </div>
  
        {/* Bottom left circles */}
        <div className="absolute bottom-0 left-0 opacity-20">
          <div className="relative">
            <div className="w-[400px] h-[400px] border-[60px] border-gray-200 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[60px] border-gray-300 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-[60px] border-gray-200 rounded-full" />
          </div>
        </div>
  
        {/* Top right circles */}
        <div className="absolute top-0 right-0 opacity-20">
          <div className="relative">
            <div className="w-[400px] h-[400px] border-[60px] border-gray-200 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-[60px] border-gray-300 rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border-[60px] border-gray-200 rounded-full" />
          </div>
        </div>
  
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center mb-20 space-y-4">
            <PremiumText
              items={item}
            />
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center p-6 rounded-2xl bg-white shadow-lg border border-gray-100 hover:border-gray-300 transition-all duration-500"
            >
              <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent group-hover:from-gray-800 group-hover:to-gray-600 transition-all duration-500">
                {isVisible && (
                  <CountUp
                    end={skill.percentage}
                    duration={2.5}
                    suffix="%"
                    useEasing={true}
                    useGrouping={true}
                    separator=" "
                  />
                )}
              </div>
              <div className="text-xl font-[700] text-gray-400">
                {skill.name}
              </div>
              <div 
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-gray-400 to-gray-600 transition-all duration-500 rounded-full" 
                // style={{ width: ${skill.percentage}% }} 
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    )
  }