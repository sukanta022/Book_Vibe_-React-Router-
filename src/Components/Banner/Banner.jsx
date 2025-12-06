import React from 'react';
import bookImage from '../../../public/pngwing 1.png'
const Banner = () => {
    return (
        <div className='bg-[#131313]/5 flex flex-col-reverse lg:flex-row justify-between items-center py-10 lg:px-50 lg:py-10 text-center lg:text-left gap-10 lg:mt-10'>
            <div className='space-y-8'>
                <h1 className='text-4xl lg:text-6xl font-bold'>Books to freshen up your bookshelf</h1>
                <button className='text-white bg-[#23BE0A] btn text-xl p-6'>View The List</button>
            </div>
            <img src={bookImage} alt="" className='w-70 h-80 lg:w-[358px] lg:h-[394px]'/>
        </div>
    );
};

export default Banner;