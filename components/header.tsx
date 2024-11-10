"use client"
import Image from "next/image"
import { motion } from 'framer-motion';
import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () =>{
    const [active, setActive] = useState(false);
    const handleClick = () =>{
        setActive(!active)
    }
    return(
        <>
            <div className="flex lg:hidden justify-between items-center py-4 px-4">
                {/* Mobile */}
                <div>
                    <Image src="/logo.png" height={200} width={200} alt="logo"/>
                </div>

                <div className="flex  gap-x-4">

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
                

                {active && (
                    <motion.div 
                        initial={{y: -1000}} 
                        animate={{y: 0}} 
                        transition={{ ease: "easeInOut",}} 
                        className=" text-black flex w-screen h-[10rem] absolute z-[80] left-0 top-16 bg-[#ffc6c6] px-10 py-6 "
                        >
                        <nav className="font-[600] gap-y-6 flex flex-col">
                            <Link href="/" className="hover:underline underline-offset-8 decoration-[#009B8D]">
                                Home
                            </Link>

                            <Link href="/about" className="hover:underline underline-offset-8 decoration-[#009B8D]">
                                Performance Marketing
                            </Link>

                            <Link href="/contact-us" className="hover:underline underline-offset-8 decoration-[#009B8D]">
                                About Us
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>

             {/* large screen  */}
            <div className="lg:flex hidden py-4 justify-between items-center px-24 border border-b">
                <div>
                    <Image src="/logo.png" height={240} width={240} alt="logo"/>
                </div>

                <div className="gap-x-16 flex">
                    <Link href="/" className="hover:underline underline-offset-8 underline">
                        Home
                    </Link>

                    <Link href="/about" className="">
                        Performance Marketing
                    </Link>

                    <Link href="/contact-us" className="">
                        About Us
                    </Link>
                </div>
                
                   <Button className="bg-[#D9083C] text-[16px] font-[400]">
                        Contact Us
                   </Button>
            </div>
            
        </>
    )
}
export default Header