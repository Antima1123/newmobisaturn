import { Metadata } from "next";

export const metadata: Metadata = {
    title: "AdByteHub for Publishers - Unlock Revenue Potential with Our Ad Solutions",
    description: "Partner with AdByteHub to maximize your ad revenue. Leverage cutting-edge tools and strategies to monetize your platform, grow your audience, and achieve sustainable success.",
  };

const PageLayout =({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default PageLayout