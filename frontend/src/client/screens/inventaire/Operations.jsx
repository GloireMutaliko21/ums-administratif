import React from 'react'
import Articles from './Articles';

const Operations = () => {
    return (
        <div className='mt-3 grid grid-cols-5 gap-5'>
            <div className='h-full shadow-lg col-span-3'>
                <Articles />
            </div>
            <div className='h-full shadow-lg col-span-2'>
                formulaires
            </div>
        </div>
    );
}

export default Operations;