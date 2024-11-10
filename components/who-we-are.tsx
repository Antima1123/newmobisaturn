import Image from "next/image"

export const WhoWeAre = () =>{
    const as = `'`;
    return(
        <div className=" px-4 mt-24 md:px-28 w-full  ">
            <div className=" w-full flex flex-col justify-center  items-center  max-w-screen-2xl mx-auto">
                <h1 className="text-2xl font-[700] mb-4">Who we are?</h1>
                <p className="text-gray-400">We are a premier performance marketing company specializing in in-app marketing.</p>
                <div className=" mt-8 flex lg:flex-row flex-col w-full justify-center lg:justify-between items-center pt-30 gap-24 max-w-screen-2xl mx-auto">
                    <div className="md:w-[44rem] w-full text-lg  flex flex-col gap-4 text-gray-600">
                            <div>Our team is primarily working on user acquisition, providing installs and post-install services to the brands</div>
                            <p>We are proud to be associated with 250+ Brands and all the major agencies. Moreover, the 5,000+ direct app partners assist us to get high-intent users for our partners.</p>
                            <p>Our verified demand sources assist advertisers to achieve an effective ROAS, we thereby work on the integration between the traffic/demand sources and the advertisers.</p>
                            <p>With our specialized team in mobile marketing, we run a campaign with balanced quality and quantity, thus maintaining performance with minimized fraud rate.</p>
                    </div>

                    <div className="md:w-1/3 w-full lg:justify-start flex justify-center ">
                        <Image src='/Search-amico-1.png' height={400} width={400} alt="pageimg" className="lg:w-[500px] w-[300px] object-contain"/>
                    </div>
                </div>
               
            </div>
        </div>
    )
}