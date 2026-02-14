import FAQ from "../common/FAQ"
import HeroSlider from "../common/HeroSlider"
import AllOffers from "./components/AllOffers"
import HowItWorks from "./components/HowItWorks"
import { LineReveal } from "../utils/animation"


const slides = [
    {
        title: "Summer Sale!",
        offer: "UP TO 40% OFF",
        cta: "Book Now",
        image: "/offers/carousel.png",
    },
    {
        title: "SUMMER",
        offer: "UP TO 40% OFF",
        cta: "Explore Now",
        image: "/home/variant/variant2.png",
    },
    {
        title: "WEEKEND",
        offer: "SPECIAL DEALS",
        cta: "View Deals",
        image: "/home/variant/variant3.png",
    },
]


const OffersPage = () => {
    return (
        <main>
            <section className='relative px-8 pt-20 font-gilroy-medium'>
                <div className='max-w-6xl mx-auto relative'>
                    <img
                        src={"/offers/offers-bg.png"}
                        alt="Logo"
                        className='w-full h-auto object-cover'
                    />
                    <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center text-white'>
                        <h1 className='text-[88px] leading-[100%] uppercase font-gilroy-bold'>
                            <LineReveal text="Offers" />
                        </h1>
                        <h2 className='text-2xl font-gilroy-semibold'>
                            <LineReveal text="Travel More, Spend Less" />
                        </h2>
                    </div>
                </div>
                <div className='max-w-6xl mx-auto pt-10'>
                    <p className='text-base font-gilroy-medium text-center'>
                        <LineReveal text="Refer your friends to join Phoenix Fly and both enjoy exclusive rewards. Discover new destinations, create unforgettable memories, and start referring today!" />
                    </p>
                </div>
            </section>
            <HowItWorks />
            <HeroSlider
                heading="Travel Deals Of The Season"
                subheading="Don’t miss out on the seasonal deals and festive offers curated just for your next getaway."
                slides={slides}
            />
            <AllOffers />
            <FAQ />
            <div
                className="pointer-events-none fixed bottom-0 left-0 z-50 h-32 w-full
  backdrop-blur-md
  [mask-image:linear-gradient(to_top,black,transparent)]"
            />
        </main>
    )
}

export default OffersPage