import React from 'react'

const PopularPlaces = () => {
    return (
        <section className="bg-[#F2F4F6] py-12 px-4 md:px-8 font-gilroy-medium">
            <div className="mx-auto max-w-7xl flex flex-col items-center">

                {/* Heading */}
                <h2 className="text-2xl md:text-3xl font-gilroy-semibold text-slate-900 mb-4 text-center">
                    Explore Popular Places Around Europe
                </h2>
                <img
                    src="/blog/map_detail.png"
                    alt=""
                    className='w-auto object-cover h-[400px] lg:h-[480px]'
                />
            </div>
        </section>
    )
}

export default PopularPlaces