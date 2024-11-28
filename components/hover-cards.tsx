import React from "react";
import { IconType } from "react-icons";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaHandHoldingDollar, FaTruckFast } from "react-icons/fa6";
import { FiCreditCard, FiMail, FiUser, FiUsers } from "react-icons/fi";
import { GiRadioTower } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";
import { RiGovernmentFill } from "react-icons/ri";

const HoverDevCards = () => {
  return (
    <div className="p-4 max-w-screen-2xl mx-auto">
      <p className="text-xl font-semibold mb-2">Industries served</p>
      <div className="grid gap-4 grid-cols-1 lg:grid-cols-3">
        <Card
          title="Banking and Financial Services"
          subtitle="Manage profile"
          href="#"
          Icon={FaHandHoldingDollar}
        />
        <Card 
            title="Travel, Logistics and Hospitality" 
            subtitle="Manage email" 
            href="#"
            Icon={IoLocationOutline} 
        />
        <Card 
            title="Retail and E-commerce" 
            subtitle="Manage team" 
            href="#" 
            Icon={FaTruckFast} 
        />
        <Card
            title="HealthCare"
            subtitle="Manage cards"
            href="#"
            Icon={FaHandHoldingMedical}
        />
        <Card
            title="Telecommunication, Media and Technology"
            subtitle="Manage cards"
            href="#"
            Icon={GiRadioTower}
        />
        <Card
            title="Public Sector and Government"
            subtitle="Manage cards"
            href="#"
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
  href: string;
}

const Card = ({ title, subtitle, Icon, href }: CardType) => {
  return (
    <a
      href={href}
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