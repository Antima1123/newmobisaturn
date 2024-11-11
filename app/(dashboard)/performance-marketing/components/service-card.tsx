import { ImLocation2 } from "react-icons/im";

export const ServiceCard = () =>{
    return(
        <div className="h-[20rem] w-[20rem] justify-center items-center flex flex-col border border-gray-400 rounded-2xl">
            <div className="w-[6rem] h-[6rem] justify-center items-center flex bg-[#D9083C] rounded-full">
                <ImLocation2 size={30} color="white"/>
            </div>
            <div className="w-[16rem]">
                <h1 className="text-xl font-[600] text-center">Select GEO and target audience</h1>
                <p className="text-center text-md">Choose target market for your applications.</p>
            </div>
        </div>
    )
}