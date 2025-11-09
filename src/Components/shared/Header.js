import Image from 'next/image';
import React from 'react';
import headerImage from "@/assets/TheDragonNews.webp"
import { getCurrentDate } from '@/utilities/getCurrentDate';


const Header = () => {
    const currentDate = getCurrentDate()

    return (
        <div className='flex justify-center'>
        <div className='text-center py-7'>
            <Image className=' h-3/6 md:h-4/6' src={headerImage} alt ="news"/>
            <p>Journalist Without Fear or Favour</p>
            <p>{currentDate}</p>
        </div>
        </div>
    );
};

export default Header;