
const HowItWorks = () => {
    return (
        <section className="w-full py-12 px-8">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-gilroy-semibold mb-3 title-heading">
                        How It Works
                    </h2>
                    <p className="text-sm md:text-base font-gilroy-medium sub-title">
                        Customize and book your travel in 3 simple steps
                    </p>
                </div>
                <img
                    src={"/home/works.svg"}
                    alt="How It Works"
                    className="w-full object-cover max-md:hidden"
                />
                <img
                    src={"/home/works_mob.svg"}
                    alt="How It Works"
                    className="w-full object-cover md:hidden"
                />
            </div>
        </section>
    )
}

export default HowItWorks