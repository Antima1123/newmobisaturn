"use client"
import { motion } from 'framer-motion';
import { useState } from "react";
import Link from "next/link";
import { useOpenContactUs } from "@/hook/contact-open";
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const Header = () =>{
    const [active, setActive] = useState(false);
    const {onOpen, isOpen} = useOpenContactUs();
    const [service,setService] = useState(false)

    const router = useRouter();
    const path = usePathname();

    const handleClick = () =>{
        setActive(!active)
    }

    const handleroute = (link: string) => {
        router.push(link)
        setActive(false)
        setService(false)
    }

    return(
        <div className="md:p-8 pb-0 sticky top-0 w-full  z-[99] ">
            <div className=" z-[90] bg-white flex lg:hidden justify-between items-center px-4  ">
                {/* Mobile */}
                <Link href="/" className="text-2xl font-[600] text-emerald-600 flex">
                <Image src="/logo2.png" height={240} width={240} alt="logo" className='w-[4rem]'/>
                </Link>

                {
                    !isOpen && 
                    <div className="flex  gap-x-4 z-[90]">

                    <motion.div className={`flex flex-col items-center justify-center gap-[6px] z-[100]`} onClick={handleClick}>
                        <motion.div 
                            className={`h-[3px] w-6 origin-left bg-red-500`} 
                            animate={{rotate: active ? 45 : 0}}>
                        </motion.div>

                        <motion.div 
                            className="h-[3px] w-6 bg-red-500"  
                            animate={{opacity: active ? 0 : 1}}>
                        </motion.div>
                        
                        <motion.div 
                            className={`h-[3px] w-6 origin-left bg-red-500 `} 
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
                        className=" text-black flex w-screen shadow-lg absolute z-[80] left-0 top-16 bg-[#fff] px-10 py-6 "
                        >
                        <nav className="font-[600] gap-y-6 flex flex-col">
                            <button onClick={()=>handleroute("/")} className='text-start'>
                                Home
                            </button>
                            <button onClick={()=>handleroute("/advertiser")} className='text-start'>
                            Advertiser
                            </button>
                            <button onClick={()=>handleroute("/publisher")} className='text-start'>
                            Publisher
                            </button>
                            <button onClick={()=>handleroute("/blogs")} className='text-start'>
                               Blogs
                            </button>

                            <button onClick={()=>handleroute("/about-us")} className='text-start' >
                                About Us
                            </button>
                            <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Button 
                                            onClick={() => onOpen()}
                                            className="bg-gradient-to-r from-red-500  to-red-800 rounded-3xl p-6 text-[16px] font-[400] z-[110] "
                                    >
                                    Get In Touch
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </div>
             {/* large screen  */}
            <div className="bg-opacity-35 backdrop-blur-lg rounded-full bg-white lg:flex hidden py-0 justify-between items-center px-24 border border-b shadow-md z-[90] ">
                <Link href="/" className="text-2xl font-[600] text-emeredald-600 flex">
                    <Image src="/logo2.png" height={240} width={240} alt="logo" className='w-[5rem]'/>
                </Link>

                <div className="gap-x-16 flex">
                    <Link href="/" className='items-center hover:text-red-600 transition-colors' >
                        Home
                    </Link>
                    <Link href="/advertiser" className="items-center hover:text-red-600 transition-colors">
                        Advertiser
                    </Link>
                    <Link href="/publisher" className="items-center hover:text-red-600 transition-colors">
                        Publisher
                    </Link>

                    <Link href="/blogs" className="items-center hover:text-red-600 transition-colors">
                        Blog
                    </Link>

                    <Link href="/about-us" className="items-center hover:text-red-600 transition-colors">
                        About Us
                    </Link>
                </div>
                   <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button 
                            onClick={() => onOpen()}
                            className="bg-gradient-to-r from-red-500  to-red-800 rounded-3xl p-6 text-[16px] font-[400] z-[110] "
                    >
                            Get In Touch
                   </Button>
              </motion.div>
            </div>
            
        </div>
    )
}
export default Header