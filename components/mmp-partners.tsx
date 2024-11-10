import Image from "next/image"

export const MMPPartners = () =>{
    return(
        <div className="flex flex-col justify-center items-center mt-8 bg-[#ffdce5] py-16  w-full">
            <h1 className=" mb-8 text-2xl font-[700]">Our MMP Partners</h1>
            <div className="grid md:grid-cols-5 md:gap-x-24 gap-y-8 items-center">
                <Image
                    src="/Group-0.png"
                    alt="Group-5"
                    width={200}
                    height={200}
                    className="w-[10rem] object-contain"
                />
                 
                 <Image
                    src="/Group-1.png"
                    alt="Group-6"
                    width={200}
                    height={200}
                    className="w-[10rem] object-contain"
                />
                 <Image
                    src="/Group-2.png"
                    alt="Group-7"
                    width={200}
                    height={200}
                    className="w-[10rem] object-contain"
                />
                 <Image
                    src="/Group-3.png"
                    alt="Group-8"
                    width={200}
                    height={200}
                    className="w-[10rem] object-contain"
                />
                
                <Image
                    src="/Group-4.png"
                    alt="Group-10"
                    width={200}
                    height={200}
                    className="w-[10rem] object-contain"
                />
            </div>
        </div>
    )
}