"use client"
import { motion } from 'framer-motion';
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useOpenContactUs } from "@/hook/contact-open";

const Header = () =>{
    const [active, setActive] = useState(false);
    const {onOpen, isOpen} = useOpenContactUs();

    const handleClick = () =>{
        setActive(!active)
    }

    return(
        <div className=" sticky top-0 w-full bg-white z-[99]">
            <div className=" z-[90] flex lg:hidden justify-between items-center py-4 px-4 bg-white ">
                {/* Mobile */}
                <div className="text-2xl font-[600] text-[#D9083C] flex">
                    {/* <Image src="/logo.png" height={240} width={240} alt="logo"/> */}
                    <p className="text-black">adbyte</p><p>hub</p>
                </div>

                {
                    !isOpen && 
                    <div className="flex  gap-x-4 z-[90]">

                    <motion.div className={`flex flex-col items-center justify-center gap-[6px] z-[100]`} onClick={handleClick}>
                        <motion.div 
                            className={`h-[3px] w-6 origin-left bg-[#D9083C]`} 
                            animate={{rotate: active ? 45 : 0}}>
                        </motion.div>

                        <motion.div 
                            className="h-[3px] w-6 bg-[#D9083C]"  
                            animate={{opacity: active ? 0 : 1}}>
                        </motion.div>
                        
                        <motion.div 
                            className={`h-[3px] w-6 origin-left bg-[#D9083C] `} 
                            animate={{rotate: active ? -45 : 0}}>
                        </motion.div>
                    </motion.div>
                </div>
                }
                

                {active && (
                    <motion.div 
                        initial={{y: -1000}} 
                        animate={{y: 0}} 
                        transition={{ ease: "easeInOut",}} 
                        className=" text-black flex w-screen h-[14rem] absolute z-[80] left-0 top-16 bg-[#ffc6c6] px-10 py-6 "
                        >
                        <nav className="font-[600] gap-y-6 flex flex-col">
                            <Link href="/">
                                Home
                            </Link>

                            <Link href="/performance-marketing" >
                                Performance Marketing
                            </Link>

                            <Link href="/about-us" >
                                About Us
                            </Link>
                            <div onClick={() => {onOpen(), setActive(false)}} className=" cursor-pointer" >
                                Contact Us
                            </div>
                        </nav>
                    </motion.div>
                )}
            </div>
             {/* large screen  */}
            <div className="lg:flex hidden py-4 justify-between items-center px-24 border border-b shadow-md z-[90] bg-white">
                <div className="text-2xl font-[600] text-[#D9083C] flex">
                    {/* <Image src="/logo.png" height={240} width={240} alt="logo"/> */}
                    <p className="text-black">adbyte</p><p>hub</p>
                </div>

                <div className="gap-x-16 flex">
                    <Link href="/" >
                        Home
                    </Link>

                    <Link href="/performance-marketing" className="">
                        Performance Marketing
                    </Link>

                    <Link href="/about-us" className="">
                        About Us
                    </Link>
                </div>
                
                   <Button 
                        onClick={() => onOpen()}
                        className="bg-[#D9083C] text-[16px] font-[400] z-[110]"
                   >
                        Contact Us
                   </Button>
            </div>
            
        </div>
    )
}
export default Header