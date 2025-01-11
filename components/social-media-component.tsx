import { Pencil, Monitor, Search, Layout } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: "Performance",
    icon: '/homepage/seo.png',
    bgColor: "bg-pink-100",
    iconBgColor: "bg-pink-500",
    content: "AdByteHub provides a range of digital marketing solutions that will help you run a thriving and successful business in today's tough competition."
  },
  {
    title: "Digital Media",
    icon: '/homepage/ppc.png',
    bgColor: "bg-purple-100",
    iconBgColor: "bg-pink-500",
    content: "Whether you want to generate brand loyalty or increase the traffic rate on your website, Branmark offers services to meet your every type of digital marketing requirements."

  },
  {
    title: "Design & Development",
    icon: '/homepage/social.png',
    bgColor: "bg-yellow-100",
    iconBgColor: "bg-pink-500",
    content: "Realise your company’s full online potential with a website design that offers exceptional UX design and conversation rates. Website Design that Drive Growth and Improve Visibility"

  },
  {
    title: "Ad-Network",
    icon: '/homepage/web.png',
    bgColor: "bg-green-100",
    iconBgColor: "bg-pink-500",
    content: "With A Variety Of Advertising Channels, The Scope Of Brand Promotion Has Expanded And With This Expansion The Process Of Advertising Has Become Strenuous."

  },
]

export default function SocialMediaServices() {
  return (
    <div className=" py-16 bg-background ">
      <div className='mb-16 flex flex-col text-center '>
        <h2 className="text-4xl md:text-5xl  font-[700] text-center mb-4 ">
          Social Media Service
        </h2>
        <p className='max-w-4xl mx-auto text-xl text-gray-400'>
          We help brands thrive by creating meaningful connections, 
          enhancing visibility, and driving success through expertly crafted social media campaigns.
        </p>
      </div>

      <div className="grid grid-cols-1  mx-auto max-w-screen-2xl md:grid-cols-2 px-4  lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} hover:shadow-lg hover:scale-105 transition-all duration-300  group p-8 rounded-lg flex flex-col items-center text-center space-y-6`}
          >
            <h3 className="font-bold text-3xl">{service.title}</h3>
            <div className={` p-4 rounded-lg text-white group-hover:scale-110 transition-all duration:300`}>
             <Image
                src={service.icon}
                alt={service.title}
                height={1000}
                width={1000}
                className='w-[20rem]  object-contain'
             />
            </div>
            <p className="text-gray-700">
             {service.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

