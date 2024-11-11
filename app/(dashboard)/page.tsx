"use client"
import ContactForm from "@/components/contact-form";
import DashFront from "@/components/dash-front";
import { MMPPartners } from "@/components/mmp-partners";
import { ServeClients } from "@/components/serve-clients";
import  WhatWeDo  from "@/components/what-we-do";
import { WhoWeAre } from "@/components/who-we-are";
import { WhyMobiSaturn } from "@/components/why-mobisaturn";
import { useOpenContactUs } from "@/hook/contact-open";

export default function Home() {

  const {isOpen} = useOpenContactUs()
  return (
    <div className=" relative">
      <DashFront/>
      <ServeClients/>
      <WhoWeAre/>
      <WhatWeDo/>
      <WhyMobiSaturn/>
      <MMPPartners/>
      {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
    </div>
  );
}
