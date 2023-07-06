import React from 'react';
import error from '../../public/images/404.png';

const NotFound = () => {
    return (
        <div className='w-full h-[89vh] flex justify-center items-center overflow-y-hidden'>
            <img src={error} alt="Page Not Found" className='w-1/2 object-cover' />
        </div>
    )
}

export default NotFound