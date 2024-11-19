'use client'

import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function PaymentCarousel() {
  const paymentMethods = [
    {
      name: "PayPal",
      logo: "/payment/paypal.png"
    },
    {
      name: "Wire Transfer",
      logo: "/payment/wire-transfer.png"
    },
    {
      name: "Credit card",
      logo: "/payment/visa.png"
    },
    {
      name: "Payoneer",
      logo: "/payment/payoneer.svg"
    }
  ]

  return (
    <div className="w-full py-24 bg-gradient-to-br p-4 flex items-center justify-center">
      <Card className="w-full max-w-4xl bg-white/80 backdrop-blur-sm p-8 bg-gradient-to-br from-emerald-100 to-purple-200">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Payment
              </span>
              <br />
              <span className="text-gray-800">methods</span>
            </h2>
          </div>

          <div className="relative w-full md:w-2/3">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {paymentMethods.map((method, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card className="px-4 border-0 shadow-none bg-transparent">
                        <div className="aspect-[3/1] flex items-center justify-center  rounded-lg">
                          <img
                            src={method.logo}
                            alt={`${method.name} logo`}
                            className="h-12 w-auto object-contain md:grayscale hover:grayscale-0"
                          />
                        </div>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="absolute md:-left-10 md:top-1/2 left-1/2 mt-2 md:mt-0 -translate-y-1/2">
                <CarouselPrevious className="h-8 w-8 border-gray-200 bg-white/80 backdrop-blur-sm" />
              </div>
              <div className="absolute md:-left-12 md:top-1/2 left-1/2 mt-2 md:mt-0 -translate-y-1/2">
                <CarouselNext className="h-8 w-8 border-gray-200 bg-white/80 backdrop-blur-sm" />
              </div>  
            </Carousel>
          </div>
        </div>
      </Card>
    </div>
  )
}