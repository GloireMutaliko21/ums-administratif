import React from 'react'
import AddCategorie from './AddCategorie';
import AddUnite from './AddUnite';

const Configurations = () => {
    return (
        <div className='grid grid-cols-3'>
            <AddCategorie />
            <AddUnite />
        </div>
    );
}

export default Configurations;