"use client"
import { motion } from 'framer-motion';
import { useState } from "react";
import Link from "next/link";
import { useOpenContactUs } from "@/hook/contact-open";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useRouter } from 'next/navigation';

const Header = () =>{
    const [active, setActive] = useState(false);
    const {onOpen, isOpen} = useOpenContactUs();
    const [service,setService] = useState(false)

    const router = useRouter();

    const handleClick = () =>{
        setActive(!active)
    }

    const handleroute = (link: string) => {
        router.push(link)
        setActive(false)
        setService(false)
    }

    return(
        <div className=" sticky top-0 w-full bg-white z-[99]">
            <div className=" z-[90] flex lg:hidden justify-between items-center py-4 px-4 bg-white ">
                {/* Mobile */}
                <div className="text-2xl font-[600] text-emerald-600 flex">
                    {/* <Image src="/logo.png" height={240} width={240} alt="logo"/> */}
                    <p className="text-black">adbyte</p><p>hub</p>
                </div>

                {
                    !isOpen && 
                    <div className="flex  gap-x-4 z-[90]">

                    <motion.div className={`flex flex-col items-center justify-center gap-[6px] z-[100]`} onClick={handleClick}>
                        <motion.div 
                            className={`h-[3px] w-6 origin-left bg-[#472282]`} 
                            animate={{rotate: active ? 45 : 0}}>
                        </motion.div>

                        <motion.div 
                            className="h-[3px] w-6 bg-[#472282]"  
                            animate={{opacity: active ? 0 : 1}}>
                        </motion.div>
                        
                        <motion.div 
                            className={`h-[3px] w-6 origin-left bg-[#472282] `} 
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

                            <div onClick={() => setService(!service)} className='flex items-center'>
                                <p>Services</p>
                                <ChevronDown className={`${service? " rotate-180 ease-in-out transition-all":"ease-in-out transition-all"}`}/>
                            </div>

                            {service && (
                                <div className='flex flex-col gap-2'>
                                    <button onClick={()=>handleroute("/publisher")}>
                                        <button className='ml-2 text-md font-[500] text-start' >Publisher</button>
                                    </button>
                                    <button onClick={()=>handleroute("/advertiser")} className=''>
                                        <button className='ml-2 text-md font-[500] text-start'>Advertiser</button>
                                    </button>
                                </div>
                            )}
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
                                            className="bg-gradient-to-br from-emerald-600 to-purple-600 p-6 text-[16px] font-[400] z-[110] "
                                    >
                                            Contact Us
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </div>
             {/* large screen  */}
            <div className="lg:flex hidden py-4 justify-between items-center px-24 border border-b shadow-md z-[90] bg-white">
                <div className="text-2xl font-[600] text-emerald-600 flex">
                    {/* <Image src="/logo.png" height={240} width={240} alt="logo"/> */}
                    <p className="text-black">adbyte</p><p>hub</p>
                </div>

                <div className="gap-x-16 flex">
                    <Link href="/" className='items-center hover:text-emerald-600 transition-colors' >
                        Home
                    </Link>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center hover:text-emerald-600 transition-colors">
                            Services
                            <ChevronDown className="ml-1 h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='z-[110]'>
                            <DropdownMenuItem>
                            <Link href="/publisher" className="w-full hover:text-emerald-600">
                                Publisher
                            </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                            <Link href="/advertiser" className="w-full hover:text-emerald-600">
                                Advertiser
                            </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <Link href="/blogs" className="items-center hover:text-emerald-600 transition-colors">
                        Blog
                    </Link>

                    <Link href="/about-us" className="items-center hover:text-emerald-600 transition-colors">
                        About Us
                    </Link>
                </div>
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
            </div>
            
        </div>
    )
}
export default Header