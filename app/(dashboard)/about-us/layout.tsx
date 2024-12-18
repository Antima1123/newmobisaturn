import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About us | AdByteHub",
    description: "Find out more about AdByteHub, your reliable source for cutting-edge marketing solutions. Discover our goals, vision, and experience in optimizing corporate potential and promoting digital growth.",
  };
const AboutUsPageLayout =({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default AboutUsPageLayout