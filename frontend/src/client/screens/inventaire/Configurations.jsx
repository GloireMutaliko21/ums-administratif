import React from 'react'
import AddCategorie from './AddCategorie';
import AddUnite from './AddUnite';
import Fiches from './Fiches';

const Configurations = () => {
    return (
        <div className='grid grid-cols-3'>
            <Fiches />
            <AddCategorie />
            <AddUnite />
        </div>
    );
}

export default Configurations;