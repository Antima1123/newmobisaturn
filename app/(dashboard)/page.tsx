"use client"
import Carousel from "@/components/Carousel";
import { CategoryCard } from "@/components/cat-card";
import ContactForm from "@/components/contact-form";
import DashFront from "@/components/dash-front";
import { MMPPartners } from "@/components/mmp-partners";
import { ServeClients } from "@/components/serve-clients";
import  WhatWeDo  from "@/components/what-we-do";
import { WhoWeAre } from "@/components/who-we-are";
import { WhyMobiSaturn } from "@/components/why-mobisaturn";
import { useOpenContactUs } from "@/hook/contact-open";

export default function Home() {

  const CetoCard = [
    {
      title: "abc",
      url: "/bg-1.jpg"
    },
    {
      title: "abc",
      url: "/bg-2.jpg"
    },
    {
      title: "abc",
      url: "/bg-3.jpg"
    }
  ]

  const {isOpen} = useOpenContactUs()
  return (
    <div className=" relative">
      <Carousel/>
      <DashFront/>
      <div className="grid md:grid-cols-3 mx-auto w-full max-w-screen-2xl py-10">
        {CetoCard.map((item,index) => (
          <CategoryCard key={index} title={item.title} url={item.url}/>
        ))}
      </div>
      {/* <ServeClients/> */}
      <WhoWeAre/>
      <WhatWeDo/>
      <WhyMobiSaturn/>
      {/* <MMPPartners/> */}
      {isOpen && 
        (
          <div className="w-screen h-screen inset-0 fixed top-0 right-0 bg-black bg-opacity-75 items-center justify-center flex z-[100]"><ContactForm/></div>
        )
      }
    </div>
  );
}
 