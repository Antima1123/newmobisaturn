import Link from "next/link"
import { ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react"
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className=" bg-black text-gray-300 py-6">
      <div className="container px-4 mx-auto max-w-screen-xl">
        <div className="grid  grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          {/* Company Info Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">adbytehub</h2>
            <div className="w-24 h-1 bg-white" />
            {/* <p className="text-white max-w-lg">
              We are a New Delhi-based Digital Advertising Agency, offering comprehensive 360-degree digital advertising solutions to brands worldwide across diverse industry verticals. By blending the art of advertising with cutting-edge technology, we strive to drive innovation and redefine the future of advertising, one step at a time.
            </p> */}
            {/* Contact Information */}
            <div className="grid grid-cols-1 gap-6 border-gray-800">
              <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-white" />
                <div>
                  <p className="font-[500] text-[14px] text-white"> +91 7409890416 </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-white" />
                <div>
                  <p className="font-[500] text-white text-[14px]">info@adbytehub.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                  <MapPin className="h-6 w-6 text-white" />
                <div className="flex w-full flex-col gap-2">
                  <p className="font-[500] text-white text-[14px]">RZ 202 Gali No 13 Sadh Nagar part II Palam colony New Delhi 110045</p>
                </div>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link href="https://www.facebook.com/profile.php?id=61569446252389" className="hover:text-blue-500 transition-colors">
                <FaFacebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://www.instagram.com/adbytehub/" className="hover:text-blue-400 transition-colors">
                <FaInstagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://in.linkedin.com/in/shweta-yadav-b7107633a" className="hover:text-blue-600 transition-colors">
                <FaLinkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* <Link href="#" className="hover:text-red-600 transition-colors">
                <Youtube className="h-6 w-6" />
                <span className="sr-only">YouTube</span>
              </Link> */}
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6 ">
            <h2 className="text-3xl font-bold text-white ">Company</h2>
            <div className="w-24 h-1 bg-white" />
            <div className="flex flex-col gap-4">
              <div className="space-y-4">
                <Link href="/" className="flex hover:text-teal-500 transition-colors items-center">
                  <ChevronRight size={16}/> Home
                </Link>
                <Link href="/about-us" className="flex items-center hover:text-teal-500 transition-colors">
                <ChevronRight size={16}/> About-us
                </Link>
                <Link href="/advertiser" className="flex items-center hover:text-teal-500 transition-colors">
                <ChevronRight size={16}/>Advertiser
                </Link>
                <Link href="/publisher" className="flex items-center hover:text-teal-500 transition-colors">
                <ChevronRight size={16}/>Publisher
                </Link>
                <Link href="/blogs" className="flex items-center hover:text-teal-500 transition-colors">
                <ChevronRight size={16}/> Blog
                </Link>
              </div>
            </div>  
          </div>
          <div>
          <div className="space-y-6 ">
            <h2 className="text-3xl font-bold text-white ">Business Hours</h2>
            <div className="w-24 h-1 bg-white" />
            <div className="flex flex-col gap-4">
              <div>
                <h1 className="font-[600] text-gray-500">Monday-Friday</h1>
                <p className="text-md font-[600]">09:00 am - 17:30 pm</p>
              </div>
              <div>
                <h1 className="font-[600] text-gray-500">Saturday</h1>
                <p className="text-md font-[600]">09:00 am - 14:00 pm</p>
              </div>
              <div>
                <h1 className="font-[600] text-gray-500">Sunday</h1>
                <p className="text-md font-[600]">Closed</p>
              </div>
            </div>  
          </div>
          </div>
          <div className="space-y-6 ">
            <h2 className="text-3xl font-bold text-white ">Quick Links</h2>
            <div className="w-24 h-1 bg-white" />
            <div className="flex flex-col gap-4">
              <div className="space-y-4">
                <div>
                    <h1 className="font-[600] text-gray-500">Careers</h1>
                    {/* <p className="text-md font-[600] cursor-pointer">Copyrigh@2024</p> */}
                </div>
                <div>
                    <h1 className="font-[600] text-gray-500">Terms of service</h1>
                    {/* <p className="text-md font-[600] cursor-pointer">Copyrigh@2024</p> */}
                </div>
                <div>
                    <h1 className="font-[600] text-gray-500">Privacy Policy</h1>
                    {/* <p className="text-md font-[600] cursor-pointer">Copyrigh@2024</p> */}
                </div>
                <div className=" h-full flex items-end">
                  <Link href={"/privacy_policy"} className="">
                    ©2024 adbytehub — All Rights Reserved
                  </Link>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
    </footer>
  )
}