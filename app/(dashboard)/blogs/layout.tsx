import { Metadata } from "next";

export const metadata: Metadata = {
    title: `AdByteHub Blog - Tips and Strategies to Boost Your Brand’s Online Presence`,
    description: "Stay updated with the latest digital marketing trends, strategies, and insights for 2024. Discover how AdByteHub helps brands thrive in the evolving digital landscape.",
  };
  
const AboutUsPageLayout =({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default AboutUsPageLayout