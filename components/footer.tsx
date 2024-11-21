import Link from "next/link"
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="container px-4 mx-auto max-w-screen-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Company Info Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">adbytehub</h2>
            <div className="w-24 h-1 bg-teal-500" />
            <p className="text-white max-w-lg">
              We are a Digital Advertising Agency based out of New Delhi, India. We are a
              360-Degree service provider of Digital Advertising for Brands across the globe and
              various Industry verticals. We are an integration of Advertising and technology, aiming
              to innovate advertising bit by bit.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-blue-500 transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-blue-600 transition-colors">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* <Link href="#" className="hover:text-red-600 transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link> */}
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[18px] font-semibold">Coperate Office</p>
              <iframe className="w-[200px] h-[200px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.314485898228!2d77.0847514!3d28.5001845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aacfcae61fb55c7%3A0xcd83e335f6d7218b!2sKibu%20-%20Cowork.%20Ideate.%20Innovate!5e0!3m2!1sen!2sin!4v1731953925680!5m2!1sen!2sin" width="600" height="450" loading="lazy"></iframe>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Services Provided</h2>
            <div className="w-24 h-1 bg-teal-500" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Digital Campaign Planning
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Digital Strategy Review
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Re-targeting & Remarketing
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Performance and Branding
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Mobile Optimisation
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Display conversions
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Customer Engagement
                </Link>
              </div>
              <div className="space-y-4">
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Whatsapp Communication
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  SMS communication
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Email Communication
                </Link>
                <Link href="#" className="block hover:text-teal-500 transition-colors">
                  Social Media Marketing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-800">
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 p-4 bg-black rounded-full border-2 border-yellow-500">
              <Phone className="h-6 w-6 text-yellow-500" />
            </div>
            <div>
              <p className="font-semibold text-white"> +91 7409890416 </p>
              <p className="text-sm text-gray-400">Available 24x7</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 p-4 bg-black rounded-full border-2 border-red-500">
              <Mail className="h-6 w-6 text-red-500" />
            </div>
            <div>
              <p className="font-semibold text-white">info@adbytehub.com</p>
              <p className="text-sm text-gray-400">online support</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 p-4 bg-black rounded-full border-2 border-green-500">
              <MapPin className="h-6 w-6 text-green-500" />
            </div>
            <div className="flex w-full flex-col gap-2">
              <p className="font-semibold text-white">Head Office</p>
              <p className="text-sm text-gray-400"> RZ 202 Gali No 13 Sadh Nagar part II Palam colony New Delhi 110045</p>
              {/* <div className=" text-white flex-wrap"> RZ 202 Gali No 13 Sadh Nagar part II Palam colony New Delhi 110045</div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}