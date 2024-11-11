import { LuMonitorPlay } from "react-icons/lu";
import { RiArrowLeftRightFill } from "react-icons/ri";
import { VscDebugContinue } from "react-icons/vsc";

export const TrafficSource = () =>{
    return(
        <div className="flex flex-col items-center justify-center max-w-screen-2xl mx-auto mt-20" >

            <div className="mb-8 flex flex-col justify-center items-center gap-2 md:w-[40rem] w-[20rem]">
                <h2 className="text-2xl font-[600] text-center ">Traffic Sources</h2>
                <p className="text-sm text-gray-400  text-center">Single unified access to channels across directly integrated publishers, programmatic platforms, and app recommendations.</p>
            </div>

            <div className="grid md:grid-cols-3 md:gap-16 gap-32">

                <div className="flex flex-col items-center justify-center">
                    <VscDebugContinue className="md:size-10 size-20" color="#D9083C"/>
                    <h1 className="text-md">Direct App Partners</h1>
                </div>
                
                <div className="flex flex-col items-center justify-center ">
                    <LuMonitorPlay  color="#D9083C" className="md:size-10 size-20"/>
                    <h1 className="text-md">Major DSPs</h1>
                </div>

                <div className="flex flex-col items-center justify-center">
                    <RiArrowLeftRightFill className="md:size-10 size-20" color="#D9083C"/>
                    <h1 className="text-md">Other Networks</h1>
                </div>
            </div>
        </div>
    )
}