import Image from "next/image"

const ContactUs =()=>{
    return (
        <div className="bg-white font-sans py-10">
            <div className=" h-[18rem] w-[60rem] grid grid-cols-2 bg-white px-12">
                
                <div className="flex flex-col gap-y-4 justify-center">
                    <div className="text-2xl font-[600] text-[#D9083C] flex">
                            {/* <Image src="/logo.png" height={240} width={240} alt="logo"/> */}
                            <p className="text-black">skill</p><p>io</p>
                        </div>
                        <h1 className="font-[700] text-2xl">We empower you to boost your business</h1>
                        <p className="font-[600] text-lg">Integrated with all major MMPs</p>
                        <div className="grid md:grid-cols-3 items-center w-[20rem]">
                            <Image
                                src="/Group-0.png"
                                alt="Group-1"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                            
                            <Image
                                src="/Group-1.png"
                                alt="Group-2"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                            <Image
                                src="/Group-2.png"
                                alt="Group-3"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                            <Image
                                src="/Group-3.png"
                                alt="Group-4"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                            
                            <Image
                                src="/Group-6.png"
                                alt="Group-0"
                                width={200}
                                height={200}
                                className="w-[4rem] object-contain"
                            />
                        </div>
                </div>

                <form className="gap-2 flex flex-col w-[26rem]">
                    <div className="flex justify-between">
                        <input
                            type="text"
                            placeholder="Name"
                            className=" outline-none p-2 border border-gray-400 rounded-md"
                        />
                         <input
                            type="email"
                            placeholder="Email"
                            className=" outline-none p-2 border border-gray-400 rounded-md"
                        />
                    </div>

                    <div className="flex justify-between">
                        <input
                            type="phone"
                            placeholder="Phone"
                            className=" outline-none p-2 border border-gray-400 rounded-md"
                        />
                         <input
                            type="text"
                            placeholder="Company"
                            className=" outline-none p-2 border border-gray-400  rounded-md"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="What's your current performance marketing spends? "
                        className=" outline-none p-2 border border-gray-400 rounded-md"
                    />

                    <input
                        type="text"
                        placeholder="Location"
                        className=" outline-none p-2 border border-gray-400 rounded-md"
                    />
                    <input
                        type="text"
                        placeholder="What are you intrested in? "
                        className=" outline-none p-2 border border-gray-400 rounded-md"
                    />
                   <button className="w-full bg-[#D9083C] text-white py-2 rounded-md text-lg">Book Demo</button>
                </form>
            </div>
        </div>
    )
}
export default ContactUs
