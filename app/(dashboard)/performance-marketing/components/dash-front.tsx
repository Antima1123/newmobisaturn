import { useOpenContactUs } from "@/hook/contact-open";
import Image from "next/image"

const DashPerformance = () =>{
    const as = `'`;
    const {onOpen} = useOpenContactUs()
    return(
        <div className="flex flex-col px-4 mt-4 lg:px-28 w-full z-[50]">
            <section id="home">
            <div className="grid md:grid-cols-2 w-full items-center max-w-screen-2xl mx-auto ">
                
                <div className="lg:w-[32rem] w-full lg:text-start  lg:items-start gap-8 flex flex-col font-[600]">
                    <h1 className="text-6xl font-[600]">Data-driven targeting and user acquisition</h1>
                    <p className="text-[#b9b5c9] text-md w-full lg:w-[90%]">Enhance your mobile app&apos;s user acquisition, retention, and brand performance using predictive algorithms and machine learning techniques</p>
                    <button onClick={() => onOpen()} className="w-[9rem]  mt-2 rounded-sm py-2 bg-[#D9083C] text-white ">Contact us</button>
                </div>

                <div className="mt-4 w-full">
                    <Image src='/wifi.png' height={1000} width={1000} alt="dash" className="lg:w-[1000px] w-[300px] object-contain"/>
                </div>
            </div>
            </section>
        </div>
    )
}

export default DashPerformance