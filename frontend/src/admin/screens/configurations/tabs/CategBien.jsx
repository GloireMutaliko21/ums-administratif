import React from 'react'
import AjoutCategbien from '../adds/AjoutCategbien';
import CategBiensList from '../lists/CategBiensList';

const CategBien = () => {
    return (
        <div className='mt-3 grid grid-cols-2 font-normal'>
            <CategBiensList />
            <AjoutCategbien />
        </div>
    );
}

export default CategBien;