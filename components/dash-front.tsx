import { useOpenContactUs } from "@/hook/contact-open"
import Image from "next/image"

const DashFront = () =>{
    const {onOpen} = useOpenContactUs();

    return(
        <div className="flex flex-col px-4 mt-4 lg:px-28 w-full ">
            <section id="home">
                <div className="grid md:grid-cols-2 w-full items-center max-w-screen-2xl mx-auto ">
                    
                    <div className="lg:w-[32rem] w-full lg:text-start  lg:items-start gap-8 flex flex-col font-[600]">
                        <h1 className="text-xl text-[#472282] ">A Trusted Performance Marketing Agency</h1>
                        <h1 className="text-4xl font-[600]">We&apos;re A premier performance marketing company</h1>
                        <p className="text-[#b9b5c9] text-md w-full lg:w-[90%]">Our mobile marketing team runs a high-quality campaign with optimal performance and minimal fraud.</p>
                        <button onClick={() => onOpen()} className="w-[9rem]  mt-2 rounded-sm py-2 bg-[#472282] text-white ">Contact us</button>
                    </div>
 
                    <div className="mt-4 w-full">
                        <Image src='/bg.png' height={1000} width={1000} alt="pageimg" className="lg:w-[600px] w-[0px] object-contain"/>
                    </div>
                </div>
            </section>
        </div>
    )}

export default DashFront