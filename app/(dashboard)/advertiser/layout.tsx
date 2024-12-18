import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AdByteHub for Advertisers - Maximize Your Ad Spend and Reach Your Target Audience",
    description: "Use the advertiser options offered by AdByteHub to increase your reach. Utilize our state-of-the-art advertising tools and tactics to engage your target audience, increase engagement, and provide quantifiable outcomes.",
  };
const AboutUsPageLayout =({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default AboutUsPageLayout