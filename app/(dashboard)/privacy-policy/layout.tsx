import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | AdByteHub",
    description: "Understand how AdByteHub collects, uses, and protects your personal information. Read our privacy policy to ensure transparency and safeguard your data.",
  };

const PageLayout =({children}: {children: React.ReactNode}) => {
    return(
        <div>
            {children}
        </div>
    )
};

export default PageLayout