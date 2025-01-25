import { BiSolidMedal } from "react-icons/bi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import { HiChartPie } from "react-icons/hi2";
import Image from "next/image";
import PremiumText from "./ui/bold-latin-text";

 const text = [
    {
        text: "Why",
        color: "black"
    },
    {
        text: "AdByteHub",
        color: "gray-400"
    },
    {
        text: "?",
        color: "black"
    }
 ]
export const WhyMobiSaturn = () =>{
    const as = `'`;
    return(
        <motion.div 
        className="flex flex-col md:px-36 px-4 py-10 md:py-20 w-full">
           <h2 className="text-center text-4xl md:text-6xl font-bold text-gray-600 mb-4">
                    Why AdByteHub ?
                </h2>
            <p className="text-center text-gray-400 text-xl">Empowering businesses with innovative marketing techniques and solutions that get results.</p>
            {/* <h2 className="md:text-6xl text-3xl font-[700] md:max-w-md w-full leading-16">Empowering skills to help you</h2> */}
            <div className=" justify-center items-center flex flex-col max-w-screen-2xl mx-auto w-full ">
                <div className="w-full grid md:grid-cols-2 gap-y-8">
                <div className="overflow-hidden">
                        <motion.div
                            initial={{ opacity: 0, x: 300 }}
                            transition={{ duration: 0.5, ease: "easeIn" }}
                            whileInView={{ opacity: [0, 1], x: 0 }}
                            className="md:mt-4 w-full lg:justify-end flex items-center h-full"
                        >
                           <Image
                                src="/homepage/performance.png"
                                alt="performance"
                                height={1000}
                                width={1000}
                                className="w-[100rem] object-contain"
                           />
                        </motion.div>
                    </div>
                    <motion.div 
                    initial={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5, ease: "easeIn" }}
                    whileInView={{ opacity: [0,1], x:0 }}
                    className="flex flex-col gap-y-8 md:pt-16 pt-6 w-full items-center">


                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center group hover:scale-110 hover:shadow-md transition-all duration-300 rounded-lg hover:bg-gray-100 px-2 cursor-pointer">
                            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 items-center justify-center flex hover:scale-100 hover:shadow-md transition-all duration-300">
                                <HiChartPie className="transition-all duration-300 size-8 group-hover:size-10 "/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-[600] text-gray-600">Quality Traffic</h3>
                                <p className="w-[13rem] md:w-[20rem] text-md text-gray-400">We hand select publishers and partnerships to ensure brand safety.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center group hover:scale-110 hover:shadow-md transition-all duration-300 rounded-lg hover:bg-gray-100 px-2 cursor-pointer">
                            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 items-center justify-center flex hover:scale-100 hover:shadow-md transition-all duration-300">
                                <FaEye className="transition-all duration-300 size-8 group-hover:size-10 "/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-[600] text-gray-600">Transparency</h3>
                                <p className="w-[13rem] md:w-[20rem] text-md text-gray-400">We have nothing to hide. You can see where the traffic is deriving.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center  group hover:scale-110 hover:shadow-md transition-all duration-300 rounded-lg hover:bg-gray-100 px-2 cursor-pointer">
                            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 items-center justify-center flex hover:scale-100 hover:shadow-md transition-all duration-300">
                                <RiCustomerService2Fill className="transition-all duration-300 size-8 group-hover:size-10 "/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-[600] text-gray-600">Full Service</h3>
                                <p className="w-[13rem] md:w-[20rem] text-md text-gray-400">Account maintenance, optimization, and reporting are all covered.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center  group hover:scale-110 hover:shadow-md transition-all duration-300 rounded-lg hover:bg-gray-100 px-2 cursor-pointer">
                            <div className="w-20 h-20 rounded-full bg-red-100 text-red-600 items-center justify-center flex hover:scale-100 hover:shadow-md transition-all duration-300">
                                <FaHandshake className="transition-all duration-300 size-8 group-hover:size-10 "/>
                            </div>
                            <div>
                                <h3 className="text-2xl font-[600] text-gray-600">Our Promise</h3>
                                <p className="w-[13rem] md:w-[20rem] text-md text-gray-400">Your performance & satisfaction are our top priority.</p>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

