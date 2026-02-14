import Hero from './compoents/Hero'
import StateCard from './compoents/StateCard'

const DESTINATIONS = [
    {
        slug: 'goa',
        name: 'Goa',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/goa.png',
        mobileImage: '/destination_india/mob/goa.png'
    },
    {
        slug: 'kerala',
        name: 'Kerala',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/kerala.png',
        mobileImage: '/destination_india/mob/kerala.png'
    },
    {
        slug: 'hp',
        name: 'Himachal Pradesh',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/himachal.png',
        mobileImage: '/destination_india/mob/himachal.png'
    },
    {
        slug: 'gujarat',
        name: 'Gujarat',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/gujurat.png',
        mobileImage: '/destination_india/mob/gujurat.png'
    },
    {
        slug: 'rajasthan',
        name: 'Rajasthan',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/rajasthan.png',
        mobileImage: '/destination_india/mob/rajasthan.png'
    },
    {
        slug: 'tamil-nadu',
        name: 'Tamil Nadu',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/tamil_nadu.png',
        mobileImage: '/destination_india/mob/tamil_nadu.png'
    },
    {
        slug: 'jammu-and-kashmir',
        name: 'Jammu and Kashmir',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/j&k.png',
        mobileImage: '/destination_india/mob/j&k.png'
    },
    {
        slug: 'karnataka',
        name: 'Karnataka',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/karnataka.png',
        mobileImage: '/destination_india/mob/karnataka.png'
    },
    {
        slug: 'meghalaya',
        name: 'Meghalaya',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/meghalaya.png',
        mobileImage: '/destination_india/mob/meghalaya.png'
    },
    {
        slug: 'madhya-pradesh',
        name: 'Madhya Pradesh',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/mp.png',
        mobileImage: '/destination_india/mob/mp.png'
    },
    {
        slug: 'uttarakhand',
        name: 'Uttarakhand',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/uttarakhand.png',
        mobileImage: '/destination_india/mob/uttarakhand.png'
    },
    {
        slug: 'uttar-pradesh',
        name: 'Uttar Pradesh',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/up.png',
        mobileImage: '/destination_india/mob/up.png'
    },
    {
        slug: 'assam',
        name: 'Assam',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/assam.png',
        mobileImage: '/destination_india/mob/assam.png'
    },
    {
        slug: 'andhra-pradesh',
        name: 'Andhra Pradesh',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/ap.png',
        mobileImage: '/destination_india/mob/ap.png'
    },
    {
        slug: 'andaman-and-nicobar-islands',
        name: 'Andaman and Nicobar Islands',
        description: 'Embark on a Journey to Explore India\'s Rich Heritage and Natural Beauty',
        image: '/destination_india/andaman.png',
        mobileImage: '/destination_india/mob/andaman.png'
    }
]

const DestinationIndia = () => {
    return (
        <main>
            <Hero />
            <section className="w-full py-16">
                <div className="max-w-7xl mx-auto px-4 md:px-8">
                    <h2 className="text-3xl md:text-4xl font-gilroy-semibold text-center mb-3">
                        Explore <span className="text-primary-orange">India</span>
                    </h2>
                    <p className="text-sm md:text-base text-gray-500 font-gilroy-medium text-center mb-8">
                        Embark on a Journey to Explore India's Rich Heritage and Natural Beauty
                    </p>
                    <div>
                        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
                            <div className="w-full md:max-w-md">
                                <input
                                    type="text"
                                    placeholder="Search destinations..."
                                    className="w-full px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange font-gilroy-medium bg-white"
                                />
                            </div>
                            <div className="flex items-center gap-4 w-full md:w-auto">
                                <label className="text-gray-600 font-gilroy-medium whitespace-nowrap">Sort by:</label>
                                <select className="flex-1 md:w-48 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-orange/20 focus:border-primary-orange font-gilroy-medium bg-white cursor-pointer">
                                    <option value="all">All Destinations</option>
                                    <option value="popular">Most Popular</option>
                                    <option value="rating">Top Rated</option>
                                    <option value="newest">Newest Added</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col justify-center items-center gap-6 mb-12'>
                        {DESTINATIONS.map((destination, index) => (
                            <StateCard
                                key={index}
                                name={destination.name}
                                description={destination.description}
                                image={destination.image}
                                mobileImage={destination.mobileImage}
                                slug={destination.slug}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}

export default DestinationIndia