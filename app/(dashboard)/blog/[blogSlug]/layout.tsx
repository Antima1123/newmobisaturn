import { Metadata } from "next";

export const metadata: Metadata = {
    title: `AdByteHub Blog - Digital Marketing Trends and Insights for 2024`,
    description: "Grow your website's success with our powerful tools and strategies. Elevate your online presence, attract more visitors, and drive growth with expert marketing solutions.",
  };
  
const AboutUsPageLayout =({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default AboutUsPageLayout