import Image from "next/image"

export const ServeClients = () =>{
    return(
        <div className="flex flex-col justify-center items-center mt-8">
            <h2 className=" mb-8 text-2xl font-[700]">Served more than 250 clients</h2>
            <div className="grid md:grid-cols-6 md:gap-x-24 gap-y-8 ">
                <Image
                    src="/Group-5.png"
                    alt="adbytehub"
                    width={200}
                    height={200}
                    className="w-[8rem] object-contain"
                />
                 
                 <Image
                    src="/Group-6.png"
                    alt="adbytehub"
                    width={200}
                    height={200}
                    className="w-[8rem] object-contain"
                />
                 <Image
                    src="/Group-7.png"
                    alt="adbytehub"
                    width={200}
                    height={200}
                    className="w-[8rem] object-contain"
                />
                 <Image
                    src="/Group-8.png"
                    alt="adbytehub"
                    width={200}
                    height={200}
                    className="w-[8rem] object-contain"
                />
                
                <Image
                    src="/Group-10.png"
                    alt="adbytehub"
                    width={200}
                    height={200}
                    className="w-[8rem] object-contain"
                />
                <Image
                    src="/Group-11.png"
                    alt="adbytehub"
                    width={200}
                    height={200}
                    className="w-[8rem] object-contain"
                />
                
            </div>
        </div>
    )
}