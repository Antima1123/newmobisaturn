import { GiNotebook } from "react-icons/gi";

type props ={
    icon: any;
    heading: string
}
export const PromoteApp = ({icon,heading}: props) =>{
    return(
        <div className="md:h-[13rem] h-[10rem] w-[10rem] md:w-[13rem] justify-center bg-[#feebf0] items-center flex flex-col border border-gray-400 rounded-2xl gap-y-4">
        <div className=" text-[#472282]">
            {icon}
        </div>
        <div className="w-[4rem] flex flex-col gap-y-4">
            <h1 className="text-md text-center">{heading}</h1>
        </div>
    </div>
    )
}