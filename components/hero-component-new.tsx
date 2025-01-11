import { Check } from 'lucide-react'

export const  HeroComponentNew = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12 ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Illustration */}
          <div className="relative order-2 lg:order-1">
            <img
              src="/homepage/new.jpg"
              alt="Digital Marketing Illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Meet AdByteHub: Your Trusted Partner in Digital Marketing Excellence
              </h2>
              <p className="text-gray-600 text-lg">
              At AdByteHub, we don&apos;t just provide marketing services we create strategies that drive success. With a focus on innovation and measurable results, we help businesses grow their online presence and achieve their goals with ease.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Our Best Service Benefits :</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Pay Per Click",
                  "SEO Optimization",
                  "Marketing Agency",
                  "First Working Process",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-2">
                    <div className="rounded-full bg-emerald-100 p-1">
                      <Check className="w-4 h-4  text-emerald-600" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
)}
