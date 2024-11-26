"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "./animated-background"
import { useOpenContactUs } from "@/hook/contact-open"
import Image from "next/image"
import { Cover } from "./ui/cover"

export function HeroSection() {

    const {onOpen} = useOpenContactUs()
  return (
    <div className="relative min-h-[calc(100vh-100px)] overflow-hidden bg-background">
      <AnimatedBackground />
      
      {/* Navigation */}
      {/* <header className="relative z-10 flex items-center justify-between p-6">
        <div className="flex items-center gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-8 w-8 rounded-lg bg-primary" />
          </motion.div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get started</Button>
        </div>
      </header> */}

      {/* Hero Content */}
      <main className="relative z-10 mx-auto max-w-7xl md:px-6 px-2 py-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-8"
          >
            <h1 className="text-6xl font-bold tracking-tight">
                We&apos;re A premier{""}<br/>
            <Cover>
              <span className="bg-gradient-to-r from-emerald-600 to-purple-600 bg-clip-text text-transparent group-hover:text-white">
               performance
              </span>
            </Cover> 
              <br />
              marketing company
            </h1>
            <p className="text-xl text-muted-foreground">
                Drive your brand&apos;s growth with our performance marketing team, delivering high-performance campaigns optimized for success and safeguarded against fraud.
            </p>
            <div className="flex gap-4">
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
            {/* <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>No need for tools like</span>
              <div className="flex gap-4">
                <span className="line-through opacity-50">Tool One</span>
                <span className="line-through opacity-50">Tool Two</span>
              </div>
            </div> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <Image
                src={"/bg-final.png"}
                alt="adbytehub"
                height={420}
                width={420}
            />
          </motion.div>
        </div>
      </main>
    </div>
  )
}

