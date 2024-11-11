"use client"
import Image from "next/image"
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { IoIosClose } from "react-icons/io";
import ContactUs from "./contact-us";

const Header = () =>{
    const [active, setActive] = useState(false);
    const handleClick = () =>{
        setActive(!active)
    }


    const [showCard, setShowCard] = useState(false)

     // Disable body scroll when popup is shown
  useEffect(() => {
    if (showCard) { 
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on component unmount
    };
  }, [showCard]);

  const handleCard = () => {
    setShowCard(true);
  };

  const closeCard = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents the click from triggering handleCard
    setShowCard(false);
  };
    return(
        <>
            <div className="flex lg:hidden justify-between items-center py-4 px-4">
                {/* Mobile */}
                <div className="text-2xl font-[600] text-[#D9083C] flex">
                    {/* <Image src="/logo.png" height={240} width={240} alt="logo"/> */}
                    <p className="text-black">skill</p><p>io</p>
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
                            <Link href="/">
                                Home
                            </Link>

                            <Link href="/performance-marketing" >
                                Performance Marketing
                            </Link>

                            <Link href="/contact-us" >
                                About Us
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </div>

             {/* large screen  */}
            <div className="lg:flex hidden py-4 justify-between items-center px-24 border border-b shadow-md">
                <div className="text-2xl font-[600] text-[#D9083C] flex">
                    {/* <Image src="/logo.png" height={240} width={240} alt="logo"/> */}
                    <p className="text-black">skill</p><p>io</p>
                </div>

                <div className="gap-x-16 flex">
                    <Link href="/" className="hover:underline underline-offset-8 underline">
                        Home
                    </Link>

                    <Link href="/performance-marketing" className="">
                        Performance Marketing
                    </Link>

                    <Link href="/contact-us" className="">
                        About Us
                    </Link>
                </div>
                
                   <Button 
                        onClick={handleCard}
                        className="bg-[#D9083C] text-[16px] font-[400]"
                   >
                        Contact Us
                   </Button>
                   {showCard && (
                        <div
                            className="fixed inset-0 z-[200] flex items-center justify-center bg-black bg-opacity-80 h-full" >
                        <div
                            className="relative w-screen h-[calc(100vh-200px)] flex justify-center items-center"
                            onClick={(e) => e.stopPropagation()}>

                           <ContactUs/>
                            <div className=" h-full flex items-start justify-center">
                                <button
                                className=" z-[200] absolute top-20 transition-all ease-in-out duration-500 flex items-center justify-center w-10 h-10 rounded-xl hover:rounded-3xl border-2 border-white text-2xl font-bold text-white cursor-pointer"
                                onClick={closeCard}
                                >
                                <IoIosClose size={28}/>
                                </button>
                            </div>
                        </div>
                        </div>
                    )}
            </div>
            
        </>
    )
}
export default Header