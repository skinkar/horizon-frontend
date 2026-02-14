import { Card } from '@/components/ui/card'
import Link from 'next/link';
import React from 'react'

interface StateCardProps {
    name: string;
    description: string;
    image: string;
    mobileImage?: string;
    slug: string;
}

const StateCard = ({ name, description, image, mobileImage, slug }: StateCardProps) => {
    return (
        <Card
            style={{
                '--bg-desktop': `url(${image})`,
                '--bg-mobile': `url(${mobileImage || image})`
            } as React.CSSProperties}
            className="w-full h-[400px] p-8 sm:h-[30vw] sm:pl-[34vw] xl:h-[420px] xl:flex xl:justify-center xl:items-center xl:pl-[10vw] rounded-3xl shadow-none bg-(image:--bg-mobile) sm:bg-(image:--bg-desktop) bg-cover bg-center bg-no-repeat"
        >
            <div className='flex flex-col sm:justify-center max-w-sm gap-2 lg:gap-4 h-full'>
                <h2 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-black font-gilroy-medium'>{name}</h2>
                <p className='text-black font-gilroy-medium text-sm lg:text-lg'>{description}</p>
                <Link href={`/destination_india/${slug}`}>
                    <button className='bg-primary-orange text-white p-4 text-sm lg:text-base lg:px-10 lg:py-5 rounded-lg font-gilroy-medium hover:bg-black hover:text-primary-orange transition-colors w-fit'>
                        Explore {name}
                    </button>
                </Link>
            </div>
        </Card>
    )
}

export default StateCard