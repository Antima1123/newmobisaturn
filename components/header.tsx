"use client"
import { motion } from 'framer-motion';
import { useState } from "react";
import Link from "next/link";
import { useOpenContactUs } from "@/hook/contact-open";
import { Button } from "@/components/ui/button"
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const navigationItems = [
    { label: 'Home', path: '/' },
    { label: 'Advertiser', path: '/advertiser' },
    { label: 'Publisher', path: '/publisher' },
    { label: 'Blog', path: '/blogs' },
    { label: 'About Us', path: '/about-us' },
];

const Header = () => {
    const [active, setActive] = useState(false);
    const { onOpen, isOpen } = useOpenContactUs();
    const [headeractive, setHeaderactive] = useState<string>("Home");

    const router = useRouter();
    const path = usePathname();

    const handleClick = () => {
        setActive(!active);
    }

    const handleRoute = (link: string) => {
        router.push(link);
        setActive(false);
    }

    return (
        <div className="md:p-8 pb-0 sticky top-0 w-full z-[99]">
            {/* Mobile Header */}
            <div className="z-[90] bg-white flex lg:hidden justify-between items-center px-4 py-2">
                <Link href="/" className="text-2xl font-[600] text-emerald-600 flex -mt-2">
                    <Image 
                        src="/logo2.png" 
                        height={240} 
                        width={240} 
                        alt="logo" 
                        className='w-[4rem] transform -translate-y-1' 
                    />
                </Link>

                {!isOpen && (
                    <motion.div 
                        className="flex flex-col items-center justify-center gap-[6px] z-[100]" 
                        onClick={handleClick}
                    >
                        {[45, 0, -45].map((rotation, index) => (
                            <motion.div
                                key={index}
                                className="h-[3px] w-6 bg-red-500 origin-left"
                                animate={{
                                    rotate: active ? rotation : 0,
                                    opacity: active && index === 1 ? 0 : 1
                                }}
                            />
                        ))}
                    </motion.div>
                )}

                {active && (
                    <motion.div
                        initial={{ y: -1000 }}
                        animate={{ y: 0 }}
                        transition={{ ease: "easeInOut" }}
                        className="text-black flex w-screen shadow-lg absolute z-[80] left-0 top-16 bg-[#fff] px-10 py-6"
                    >
                        <nav className="font-[600] gap-y-6 flex flex-col">
                            {navigationItems.map((item) => (
                                <button
                                    key={item.path}
                                    onClick={() => handleRoute(item.path)}
                                    className='text-start'
                                >
                                    {item.label}
                                </button>
                            ))}
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={() => onOpen()}
                                    className="bg-gradient-to-r from-red-500 to-red-800 rounded-3xl p-6 text-[16px] font-[400] z-[110]"
                                >
                                    Get In Touch
                                </Button>
                            </motion.div>
                        </nav>
                    </motion.div>
                )}
            </div>

            {/* Desktop Header */}
            <div className="bg-opacity-35 backdrop-blur-lg rounded-full bg-white lg:flex hidden py-0 justify-between items-center px-24 border border-b shadow-md z-[90]">
                <Link href="/" className="text-2xl font-[600] text-emerald-600 flex">
                    <Image src="/logo2.png" height={240} width={240} alt="logo" className='w-[5rem]' />
                </Link>

                <div className="gap-x-16 flex">
                    {navigationItems.map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setHeaderactive(item.label)}
                            className={`${
                                headeractive === item.label ? "text-red-600" : ""
                            } items-center hover:text-red-600 transition-colors`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button
                        onClick={() => onOpen()}
                        className="bg-gradient-to-r from-red-500 to-red-800 rounded-3xl p-6 text-[16px] font-[400] z-[110]"
                    >
                        Get In Touch
                    </Button>
                </motion.div>
            </div>
        </div>
    )
}

export default Header