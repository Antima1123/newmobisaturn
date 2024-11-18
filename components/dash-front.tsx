import { useOpenContactUs } from "@/hook/contact-open"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "./ui/button";

const DashFront = () =>{
    const {onOpen} = useOpenContactUs();

    return(
        <div className="flex flex-col px-4 mt-4 lg:px-28 w-full ">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileInView={{ opacity: [0,1] }}
            >
            <section id="home">
                <div className="grid md:grid-cols-2 w-full items-center max-w-screen-2xl mx-auto ">
                    
                    <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    whileInView={{ opacity: [0,1] }}
                    className="lg:w-[32rem] w-full lg:text-start  lg:items-start gap-8 flex flex-col font-[600]">
                        <h1 className="text-xl text-emerald-600 ">A Trusted Performance Marketing Agency</h1>
                        <h1 className="text-4xl font-[600]">We&apos;re A premier performance marketing company</h1>
                        <p className="text-[#b9b5c9] text-md w-full lg:w-[90%]">Drive your brand's growth with our performance marketing team, delivering high-performance campaigns optimized for success and safeguarded against fraud.</p>
                        <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                >
                                <Button 
                                        onClick={() => onOpen()}
                                        className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6 text-[16px] font-[400] z-[110] "
                                        >
                                        Contact Us
                            </Button>
                        </motion.div>           
                    </motion.div>
 
                    <motion.div 
                        className="mt-4 w-full"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        whileInView={{ opacity: [0,1] }}
                    >
                        <Image src='/bg.png' height={1000} width={1000} alt="pageimg" className="lg:w-[600px] w-[0px] object-contain"/>
                    </motion.div>
                </div>
            </section>
            </motion.div>
        </div>
    )}

export default DashFront