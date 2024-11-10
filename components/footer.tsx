import Image from "next/image"

export const Footer = () =>{
    return(
        <div className="w-full mt-8 items-center justify-center flex flex-col gap-4">
            <Image src="/logo.png" height={240} width={240} alt="logo"/>
            <p className="text-sm">© 2023 Mobisaturn. All rights reserved.</p>
            <h1 className="text-lg">Privacy Policy</h1>
        </div>
    )
}