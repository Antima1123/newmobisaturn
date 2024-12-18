import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Industries We Serve | AdByteHub",
    description: "Explore AdByteHub's expertise across diverse domains including Education, Gaming, Finance, Social Media, Travel, Business, Food & Beverage, and E-commerce. Discover tailored strategies and impactful solutions driving growth and success in every industry.",
  };
  
const AboutUsPageLayout =({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default AboutUsPageLayout