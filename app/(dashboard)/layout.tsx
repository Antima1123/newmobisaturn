import React from "react";
import Header from "@/components/header";
import  Footer  from "@/components/footer";
import { ToastProvider } from "@/components/ui/use-toast";
import { Analytics } from "@vercel/analytics/react"
type props = {
    children: React.ReactNode
}
const DashboardLayout = ({children}: props) =>{
    return(
        <div className=" relative w-full h-full">
            <Analytics/>
            <ToastProvider>
                <Header/>
                {children}
                <Footer/>
            </ToastProvider>
        </div>
    )
}
export default DashboardLayout;