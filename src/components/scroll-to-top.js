import React from 'react';
import Image from 'next/image';
import arrow from '@/assets/Svg/arrow.svg' 

export default function ScrolltoTop(){
    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button className="bg-blue-600 px-4 py-4 text-white rounded-full hover:bg-blue-700 hover:opacity-90" onClick={() => window.scrollTo(0, 0)}>
            <Image src={arrow} className=' animate-bounce' alt="Scroll to top" width={30} height={30} />
            </button>
        </div>
    );
}