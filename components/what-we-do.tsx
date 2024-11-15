import { FaRegUserCircle } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { motion } from "framer-motion";

const WhatWeDo = () => {
    return (
        <div className="overflow-hidden">
            <motion.div
                initial={{ opacity: 0, x: 500 }}
                transition={{ duration: 0.5, ease: "easeIn" }}
                whileInView={{ opacity: [0,1], x:0 }}
            className="max-w-screen-2xl mx-auto w-full flex flex-col relative">
                <section className="w-full flex flex-col items-center gap-10 py-10">
                    <div className="w-full flex flex-col items-center gap-4 text-center">
                        <p className="text-4xl font-[700]">What we do ?</p>
                    </div>
                        {/* cards */}
                    <motion.div 
                    className="grid md:grid-cols-3 mx-auto gap-24 mt-4 px-2 md:px-0">
                        <div className="flex flex-col  items-center w-72">
                        <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                            <FaRegUserCircle size={40}/>
                        </div>
                            <div className="text-xl font-[600] text-center text-emerald-600">
                                User Acquisition  
                            </div>

                            <p className="text-center mt-6 text-[17px]">
                                employing tailored approaches to attract and engage new users, driving the expansion of the customer base for long-term growth and success                       
                            </p>
                        </div>

                        <div className="flex flex-col items-center w-72">
                            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                                <TbTargetArrow size={40}/>
                            </div>
                            <div className="text-xl font-[600] text-center text-emerald-600">
                                Retargeting  
                            </div>

                            <p className="text-center mt-6 text-[17px]">
                            We help brands in maximizing conversions by strategically reaching out to potential customers who have previously shown interest.                      
                            </p>
                        </div>

                        <div className="flex flex-col items-center w-72">
                            <div className="p-3 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                            <IoGameControllerOutline size={40}/>
                            </div>
                            <div className="text-xl font-[600] text-center text-emerald-600">
                                Gaming    
                            </div>

                            <p className="text-center mt-6 text-[17px]">
                                utilizing strategic methods to acquire and engage new gamers, fueling the growth and vitality of the gaming ecosystem               
                            </p>
                        </div>
                    </motion.div>
                </section>
            </motion.div>
        </div>
    )
}

export default WhatWeDo