import Image from "next/image"
import { BiSolidMedal } from "react-icons/bi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import ContactUsPage from "./contact-us";
import { BlockInText } from "./block-in-text-card";


export const WhyMobiSaturn = () =>{
    const as = `'`;
    return(
        <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: [0,1] }}
        className="flex flex-col md:px-28  px-4 mt-8 py-20 w-full">
            <div className=" justify-center items-center flex flex-col max-w-screen-2xl mx-auto w-full ">
                <h1 className="text-4xl font-[700] mb-4 ">Why adbytehub?</h1>
                <p className="text-center md:w-[50rem] w-[20rem] text-gray-400 mb-8">Our verified demand sources assist advertisers to achieve an effective ROAS, we thereby work on the integration between the traffic/demand sources and the advertisers.</p>

                <div className="w-full grid md:grid-cols-2 gap-y-8">
                    <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: [0,1] }}
                    className="flex flex-col gap-y-8 md:pt-16 w-full items-center">


                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center">
                            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center flex">
                                <BiSolidMedal size={45}/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-[600]">Quality Traffic</h1>
                                <p className="w-[13rem] md:w-[20rem] text-md">We hand select publishers and partnerships to ensure brand safety.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center">
                            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center flex">
                                <FaEye size={45}/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-[600]">Transparency</h1>
                                <p className="w-[13rem] md:w-[20rem] text-md">We have nothing to hide. You can see where the traffic is deriving.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center ">
                            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center flex">
                                <RiCustomerService2Fill size={45}/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-[600]">Full Service</h1>
                                <p className="w-[13rem] md:w-[20rem] text-md">Account maintenance, optimization, and reporting are all covered.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center ">
                            <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 items-center justify-center flex">
                                <FaHandshake size={45}/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-[600]">Our Promise</h1>
                                <p className="w-[13rem] md:w-[20rem] text-md">Your performance & satisfaction are our top priority.</p>
                            </div>
                        </div>

                    </motion.div>


                    <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: [0,1] }}
                    className=" mt-4 w-full lg:justify-end flex justify-center ">
                        <ContactUsPage/>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}

