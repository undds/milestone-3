'use client'
import Image from 'next/image';

export default function Page() {
    return (
        <div className="flex flex-col items-center p-4">
            <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
            <p className="text-lg max-w-prose">
                At Team Golf, we are more than just a coffee company – we are passionate advocates for a sustainable and ethical coffee industry. We understand the profound impact the coffee industry can have on the environment, and we are dedicated to minimizing our footprint. From environmentally friendly farming practices to responsible packaging, sustainability is integrated into every aspect of our operations.
            </p>
            <div className="flex flex-row justify-center align-items: center gap-6 p-6">
                <Image
                    src='/food2.jpg'
                    width={500}
                    height={500}
                    className='hidden md:block rounded-lg width-2/5'
                    alt='Food2'
                />
                <Image
                    src='/food3.jpg'
                    width={500}
                    height={500}
                    className='hidden md:block rounded-lg width-2/5'
                    alt='Food3'
                />
            </div>
        </div>
    );
}
