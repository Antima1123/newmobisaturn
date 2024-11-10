import Image from "next/image"

const DashFront = () =>{
    const as = `'`;
    return(
        <div className="flex flex-col px-4 mt-4 lg:px-28 w-full justify-center items-center">
            <section id="about">
            <div className="lg:flex lg:flex-row flex-col w-full justify-center lg:justify-between items-center pt-30 gap-24 max-w-screen-2xl mx-auto ">
                <div className="lg:w-[32rem] w-full lg:text-start  lg:items-start flex flex-col gap-8">
                   <div className="flex flex-col gap-8 w-full lg:w-[85%] font-[600] ">
                        <div className="text-xl text-[#D9083C] ">A Trusted Performance Marketing Agency</div>
                        <div className="text-5xl font-[600]">We&apos;re A premier performance marketing company</div>
                   </div>
                    <div className="text-[#b9b5c9] text-md w-full lg:w-[90%]">Our mobile marketing team runs a high-quality campaign with optimal performance and minimal fraud.</div>
                    <button className="w-[9rem]  mt-2 rounded-sm py-2 bg-[#D9083C] text-white ">Get Started</button>
                </div>

                <div className="lg:w-1/2 mt-4 w-full lg:justify-start flex justify-center ">
                    <Image src='/Marketing-consulting.png' height={1000} width={1000} alt="pageimg" className="lg:w-[1000px] w-[300px] object-contain"/>
                </div>
            </div>
            </section>
        </div>
    )
}

export default DashFront