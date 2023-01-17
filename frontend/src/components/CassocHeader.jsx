import React from 'react'
import Button from './Button';

const CassocHeader = () => {
    return (
        <div className='fixed z-20 -mt-6 pt-5 bg-white left-60 right-5 flex justify-between items-center'>
            <h1 className='text-4xl font-extrabold'>Cas sociaux</h1>
            <Button
                label='Ajouter'
                style={`flex gap-2 items-center bg-white text-sky-600 border border-sky-500 hover:bg-sky-500 hover:text-white px-8 py-px rounded-sm shadow-md shadow-sky-100`}
            />
        </div>
    )
}

export default CassocHeader;