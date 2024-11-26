import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter } from 'lucide-react'
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-purple-700 to-purple-700 text-white">
      {/* Wave-like top border */}
      <div className="absolute -top-[3.5rem] left-0 right-0 overflow-hidden">
        <svg
          className="relative block w-full h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#7e22ce]"
          ></path>
        </svg>
      </div>

      <div className="container px-4 mx-auto max-w-7xl pt-24 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Address Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-wide">ADDRESS</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 flex-shrink-0" />
                <p>RZ 202 Gali No 13 Sadh Nagar part II Palam colony New Delhi 110045</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <p>+91 7409890416</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <p>info@adbytehub.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-purple-200 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="hover:text-purple-200 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="hover:text-purple-200 transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="hover:text-purple-200 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-wide">QUICK LINK</h2>
            <div className="space-y-3">
              <Link href="#" className="block hover:text-purple-200 transition-colors">
                Digital Campaign Planning
              </Link>
              <Link href="#" className="block hover:text-purple-200 transition-colors">
                Digital Strategy Review
              </Link>
              <Link href="#" className="block hover:text-purple-200 transition-colors">
                Re-targeting & Remarketing
              </Link>
              <Link href="#" className="block hover:text-purple-200 transition-colors">
                Performance and Branding
              </Link>
              <Link href="#" className="block hover:text-purple-200 transition-colors">
                Mobile Optimisation
              </Link>
            </div>
          </div>

          {/* Gallery */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-wide">GALLERY</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="aspect-square bg-purple-800/50 rounded-lg overflow-hidden">
                  <img
                    src={`/placeholder.svg?height=100&width=100`}
                    alt={`Gallery image ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-wide">NEWSLETTER</h2>
            <p className="text-purple-100">
              Stay updated with our latest news and updates. Subscribe to our newsletter.
            </p>
            <div className="relative">
              <Input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-200 hover:text-white transition-colors">
                <Send className="h-5 w-5" />
                <span className="sr-only">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-purple-100">
            © 2024 adbytehub. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-purple-100">
            <Link href="#" className="hover:text-white transition-colors">Home</Link>
            <Link href="#" className="hover:text-white transition-colors">Cookies</Link>
            <Link href="#" className="hover:text-white transition-colors">Help</Link>
            <Link href="#" className="hover:text-white transition-colors">FAQs</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

