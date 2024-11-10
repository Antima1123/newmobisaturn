import Image from "next/image"
import { BiSolidMedal } from "react-icons/bi";
import { FaEye, FaHandshake } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";


export const WhyMobiSaturn = () =>{
    const as = `'`;
    return(
        <div className="flex flex-col md:px-28  px-4 mt-8  w-full">
            <div className=" justify-center items-center flex flex-col max-w-screen-2xl mx-auto w-full ">
                <h1 className="text-2xl font-[700] mb-4">Why Mobisaturn?</h1>
                <p className="text-center md:w-[50rem] w-[20rem] text-gray-400 mb-8">Our verified demand sources assist advertisers to achieve an effective ROAS, we thereby work on the integration between the traffic/demand sources and the advertisers.</p>

                <div className="w-full grid md:grid-cols-2 gap-y-8">
                    <div className="flex flex-col gap-y-8 md:pt-16">

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center">
                            <div className="w-20 h-20 rounded-full bg-[#D9083C] items-center justify-center flex">
                                <BiSolidMedal color="white" size={45}/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-[600]">Quality Traffic</h1>
                                <p className="w-[13rem] md:w-[20rem] text-md">We hand select publishers and partnerships to ensure brand safety.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center">
                            <div className="w-20 h-20 rounded-full bg-[#D9083C] items-center justify-center flex">
                                <FaEye color="white" size={45}/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-[600]">Transparency</h1>
                                <p className="w-[13rem] md:w-[20rem] text-md">We have nothing to hide. You can see where the traffic is deriving.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center ">
                            <div className="w-20 h-20 rounded-full bg-[#D9083C] items-center justify-center flex">
                                <RiCustomerService2Fill color="white" size={45}/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-[600]">Full Service</h1>
                                <p className="w-[13rem] md:w-[20rem] text-md">Account maintenance, optimization, and reporting are all covered.</p>
                            </div>
                        </div>

                        <div className="flex gap-8 md:w-[30rem] w-[22rem] h-[7rem] items-center ">
                            <div className="w-20 h-20 rounded-full bg-[#D9083C] items-center justify-center flex">
                                <FaHandshake color="white" size={45}/>
                            </div>
                            <div>
                                <h1 className="text-2xl font-[600]">Our Promise</h1>
                                <p className="w-[13rem] md:w-[20rem] text-md">Your performance & satisfaction are our top priority.</p>
                            </div>
                        </div>

                    </div>


                    <div className=" mt-4 w-full lg:justify-end flex justify-center ">
                        <Image src='/why-mobistun.jpg' height={1000} width={1000} alt="mobisaturn" className="lg:w-[500px] w-[300px] object-contain"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

