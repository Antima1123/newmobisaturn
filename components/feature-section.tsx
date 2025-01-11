import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

export function FeaturesSection() {
  const features = [
    {
      title: "Strategic Solutions for Every Business",
      description:
        "We craft customized marketing strategies tailored to your business goals, ensuring measurable growth and success.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Effortless Collaboration",
      description:
        "Our services are designed for simplicity and ease of use, making your experience seamless and efficient.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Transparent & Competitive Pricing",
      description:
        "Get the best value for your investment with no hidden fees, no surprises, and results-driven campaigns.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Reliability You Can Trust",
      description: "Enjoy uninterrupted services with our 100% uptime guarantee, ensuring your campaigns run smoothly 24/7.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Multi-Platform Integration",
      description: "Our multi-platform approach ensures your business can scale effortlessly across all channels.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Always Here to Help",
      description:
        "Our 24/7 support team is ready to assist you at any time, ensuring your needs are met without delay.",
      icon: <IconHelp />,
    },
    {
      title: "Satisfaction Guaranteed",
      description:
        "We are committed to delivering results, offering a money-back guarantee for complete peace of mind.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Beyond Expectations",
      description: "Our dedication to excellence ensures we deliver more than just services—we deliver success.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4   relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};