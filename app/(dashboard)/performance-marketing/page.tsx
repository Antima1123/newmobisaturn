"use client"

import { useOpenContactUs } from "@/hook/contact-open"
import DashPerformance from "./components/dash-front"
import ContactForm from "@/components/contact-form";
import { ServiceCard } from "./components/service-card";
import { ImBook, ImLocation2 } from "react-icons/im";
import { TbTargetArrow } from "react-icons/tb";
import { FaDatabase, FaTrafficLight } from "react-icons/fa";
import { MdCardTravel, MdOutlineLaptopChromebook, MdOutlineRocketLaunch } from "react-icons/md";
import { AiOutlineMonitor, AiOutlineSolution } from "react-icons/ai";
import { PromoteApp } from "./components/promote-app";
import { IoGameController } from "react-icons/io5";
import { HiOutlineCurrencyRupee } from "react-icons/hi";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { PiAlignBottomBold } from "react-icons/pi";
import { TrafficSource } from "./components/trafic-source";


const Services = [
    {
        icon: <TbTargetArrow size={40}/>,
        heading: " Define your goals  with the app.",
        para: "We consult you in your mobile strategy and performance."
    },
    {
        icon: <ImLocation2 size={40}/>,
        heading: "Select GEO and target audience",
        para: "Choose target market for your applications."
    },
    {
        icon: <FaTrafficLight size={40}/>,
        heading: " Define traffic sources",
        para: "Choose the right traffic Let us select right partners for your campaigns who proved their success already.."
    },
    {
        icon: <FaDatabase size={40}/>,
        heading: "Select mobile-first  partners",
        para: "Let us select right partners for your campaigns who proved their success already."
    },
    {
        icon: <MdOutlineRocketLaunch size={40}/>,
        heading: "Launch campaign ",
        para: "Start your own dedicated campaign with MobiSaturn."
    },
    {
        icon: <AiOutlineMonitor size={40}/>,
        heading: "Evaluate your  performance",
        para: "Monitor and track your performance data."
    },
    
]

const promote =[
    {
        icon: <ImBook size={40}/>,
        heading: "Education"
    },
    {
        icon: <IoGameController size={40}/>,
        heading: "Games"
    },
    {
        icon: <HiOutlineCurrencyRupee size={40}/>,
        heading: "Finance"
    },
    {
        icon: <TiSocialYoutubeCircular size={40}/>,
        heading: "Social Media"
    },
    {
        icon: <MdCardTravel size={40}/>,
        heading: "Travel"
    },
    {
        icon: <MdOutlineLaptopChromebook size={40}/>,
        heading: "Entertaiment"
    },
    {
        icon: <AiOutlineSolution size={40}/>,
        heading: "Utilities"
    },
    {
        icon: <PiAlignBottomBold size={40}/>,
        heading: "Statics"
    },
]
const PerformanceMarketing = () =>{
    const {isOpen} = useOpenContactUs();
    return(
        <div>
            <DashPerformance/>
            <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto mt-20" >
                <div className="mb-16 flex flex-col justify-center items-center gap-2 md:w-[40rem] w-[20rem]">
                    <h1 className="text-md text-[#D9083C]">Our Services</h1>
                    <h2 className="text-2xl font-[600] text-center ">Perfect Solution For Your Business</h2>
                    <p className="text-sm text-gray-400  text-center">We are proud to be associated with 250+ Brands and all the major agencies. Moreover, the 5,000+ direct app partners assist us to get high-intent users for our partners.</p>
                </div>
                <div className="grid md:grid-cols-3 max-w-screen-lg mx-auto gap-8">
                    {Services.map((service,index)=>(
                        <ServiceCard
                            icon={service.icon}
                            heading={service.heading}
                            para={service.para}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
            </div>

            <div className="flex flex-col bg-[#1e0108] py-8 items-center justify-center w-full mt-20">
                <div className="mb-8 flex flex-col justify-center items-center gap-2 md:w-[40rem] w-[20rem]">
                    <h1 className="text-2xl font-[600] text-white text-center">We promote apps of several verticals.</h1>       
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 max-w-screen-lg mx-auto gap-4">
                    {promote.map((promote,index)=>(
                        <PromoteApp
                            key={index}
                            icon={promote.icon}
                            heading={promote.heading}
                        />
                    ))}
                </div>
            </div>

            <TrafficSource/>


            {isOpen && 
            (
                <div className="w-screen h-screen fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex"><ContactForm/></div>
            )
             }

        </div>
    )
}

export default PerformanceMarketing