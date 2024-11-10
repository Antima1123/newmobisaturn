import DashFront from "@/components/dash-front";
import { MMPPartners } from "@/components/mmp-partners";
import { ServeClients } from "@/components/serve-clients";
import  WhatWeDo  from "@/components/what-we-do";
import { WhoWeAre } from "@/components/who-we-are";
import { WhyMobiSaturn } from "@/components/why-mobisaturn";

export default function Home() {
  return (
    <div>
      <DashFront/>
      <ServeClients/>
      <WhoWeAre/>
      <WhatWeDo/>
      <WhyMobiSaturn/>
      <MMPPartners/>
    </div>
  );
}
