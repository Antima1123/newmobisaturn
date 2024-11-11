import { ImLocation2 } from "react-icons/im";

type props = {
    icon: any;
    heading: string;
    para: string;
    index: number
}
export const ServiceCard = ({icon,heading,para,index}:props) =>{
    return(
        <div className={`h-[20rem] w-[20rem] justify-center items-center flex flex-col border ${index%2 == 0? "bg-white":"bg-[#472282] text-white"} border-gray-400 rounded-2xl gap-y-4`}>
            <div className={`w-[6rem] h-[6rem] justify-center items-center flex ${index%2 == 0 ? "bg-[#472282] text-white " : "bg-white text-[#472282]"} rounded-full`}>
                {icon}
            </div>
            <div className="w-[16rem] flex flex-col gap-y-4">
                <h1 className="text-xl font-[600] text-center">{heading}</h1>
                <p className="text-center text-md">{para}</p>
            </div>
        </div>
    )
}