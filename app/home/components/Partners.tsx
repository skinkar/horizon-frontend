import Marquee from "react-fast-marquee"

const Partners = () => {
    return (
        <section className="w-full bg-[#F2F4F6] px-4 md:px-8 py-12">
            <div className="mx-auto max-w-7xl">
                <div className=" text-center">
                    <h2 className="mb-4 text-3xl font-gilroy-semibold text-[#16242A] md:text-4xl">
                        Our Partners
                    </h2>
                    <p className="mx-auto max-w-4xl text-sm font-gilroy-medium leading-relaxed text-slate-600 md:text-base">
                        Connecting and Growing with Our Trusted Network of Partners
                    </p>
                </div>


                <div className="">
                    <Marquee>
                        <img src="/about/logos/summit.svg" alt="Summit Hotels" className="mr-8" />
                        <img src="/about/logos/taj.svg" alt="Taj" className="mr-8" />
                        <img src="/about/logos/startup-india.svg" alt="Startup India" className="mr-8" />
                        <img src="/about/logos/marriott.svg" alt="Marriott Bonvoy" className="mr-8" />
                    </Marquee>
                </div>
            </div>
        </section>
    )
}

export default Partners