"use client"
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react"

interface bannerProps {
    width: string,
    height: string,
    key_id: string,
    type: string,
    params?: object,
    formate: string,
    src: string,
}
const AdsBanner = ({width, height, formate, key_id, params,src, type }: bannerProps) => {
    const bannerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!bannerRef.current || bannerRef.current.firstChild) return;
    
        const atOptions = {
          key: key_id,
          format: formate,
          height: height,
          width: width,
          params: params || {},
        };
    
        const configScript = document.createElement("script");
        const invokeScript = document.createElement("script");
    
        configScript.innerHTML = `atOptions = ${JSON.stringify(atOptions)}`;
        invokeScript.src = src;
        invokeScript.type = type;
        invokeScript.async = true;
    
        bannerRef.current.appendChild(configScript);
        bannerRef.current.appendChild(invokeScript);
      }, []);

return (
    <div
      ref={bannerRef}
      className={cn(`w-[${width}px] h-[${height}px] mx-auto my-5 flex justify-center items-center`)}
    />
)
}

export default AdsBanner