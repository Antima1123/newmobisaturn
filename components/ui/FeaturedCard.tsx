'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface Feature {
  title: string;
  description: string;
  date?: string;
  image: string;
}

export interface FeatureCardProps {
  features: Feature[];
  className?: string;
  variant?: 'light' | 'dark';
}

const GlareEffect = ({ className }: { className?: string }) => (
  <>
    {/* Moving shine effect */}
    <div 
      className={cn(
        "pointer-events-none absolute -inset-px opacity-0 transition-opacity z-50",
        "bg-gradient-to-r from-transparent via-white/10 to-transparent",
        "group-hover:opacity-100 group-hover:animate-shine",
        className
      )} 
    />
    
    {/* Corner shine */}
    <div className="absolute -left-20 -top-20 w-40 h-40 bg-white/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </>
);

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ features, variant = 'light', className }, ref) => {
    return (
      <section ref={ref} className={cn("py-16 md:py-24 md:pt-0 overflow-hidden", className)}>
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
          className="container px-4"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="relative"
              >
                <div 
                  className={cn(
                    "group overflow-hidden rounded-xl transition-all duration-500",
                    "shadow-[0_8px_30px_rgb(0,0,0,0.12)]",
                    "border border-slate-200/50 dark:border-slate-800/50",
                    variant === 'light' 
                      ? "bg-white/80 backdrop-blur-sm hover:bg-white" 
                      : "bg-slate-900 hover:bg-slate-800"
                  )}
                >
                  <div className="p-6 relative">
                    <GlareEffect />
                    <div className="aspect-video relative overflow-hidden rounded-lg mb-6 bg-slate-100 dark:bg-slate-800">
                      <motion.img
                        src={feature.image}
                        alt={feature.title}
                        className="object-cover w-full h-full"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                    <h3 
                      className={cn(
                        "text-xl font-semibold mb-2",
                        variant === 'light' 
                          ? "text-slate-900" 
                          : "text-white"
                      )}
                    >
                      {feature.title}
                    </h3>
                    <p 
                      className={cn(
                        "mb-4",
                        variant === 'light' 
                          ? "text-slate-600" 
                          : "text-slate-300"
                      )}
                    >
                      {feature.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span 
                        className={cn(
                          "text-sm",
                          variant === 'light' 
                            ? "text-slate-500" 
                            : "text-slate-400"
                        )}
                      >
                        {feature.date}
                      </span>
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                        className={cn(
                          "p-2 rounded-full",
                          variant === 'light'
                            ? "bg-slate-100 hover:bg-slate-200"
                            : "bg-slate-800 hover:bg-slate-700"
                        )}
                      >
                        <svg 
                          className={cn(
                            "w-5 h-5",
                            variant === 'light' 
                              ? "text-slate-700" 
                              : "text-white"
                          )}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14M12 5l7 7-7 7"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    );
  }
);

FeatureCard.displayName = 'FeatureCard'; 