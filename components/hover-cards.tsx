import React from "react";
import { IconType } from "react-icons";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaHandHoldingDollar, FaTruckFast } from "react-icons/fa6";
import { motion } from "framer-motion"
import { GiRadioTower } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { RiGovernmentFill } from "react-icons/ri";

const HoverDevCards = () => {
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl font-bold text-navy-900 text-center mb-8"
          >
            <h2>Industries served</h2>
          </motion.h2>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card
          title="Banking and Financial Services"
          subtitle="Manage profile"
          Icon={FaHandHoldingDollar}
        />
        <Card 
            title="Travel, Logistics and Hospitality" 
            subtitle="Manage email" 
            Icon={IoLocationOutline} 
        />
        <Card 
            title="Retail and E-commerce" 
            subtitle="Manage team" 
            Icon={FaTruckFast} 
        />
        <Card
            title="HealthCare"
            subtitle="Manage cards"
            Icon={FaHandHoldingMedical}
        />
        <Card
            title="Telecommunication, Media and Technology"
            subtitle="Manage cards"
            Icon={GiRadioTower}
        />
        <Card
            title="Public Sector and Government"
            subtitle="Manage cards"
            Icon={RiGovernmentFill}
        />
      </div>
    </div>
  );
};

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
}

const Card = ({ title, subtitle, Icon }: CardType) => {
  return (
    <a
      className="w-full p-4 rounded border-[1px] border-slate-300 relative overflow-hidden group bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-purple-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />

      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-100 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-slate-950 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </a>
  );
};

export default HoverDevCards;