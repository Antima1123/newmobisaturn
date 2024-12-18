import { useGetBlogById } from "@/features/api/use-get-blogs-byId";
import { Metadata } from "next";
import { useParams } from "next/navigation";

export const metadata: Metadata = {
    title: `Blog | adbytehub`,
    description: "Boost your website's success with our powerful tools and strategies. Elevate your online presence, attract more visitors, and drive growth with expert marketing solutions.",
  };
const AboutUsPageLayout =({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default AboutUsPageLayout