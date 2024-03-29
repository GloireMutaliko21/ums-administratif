import React from 'react';

import unigomLogo from "../../../../public/images/istm2.jpg"

const Entete = () => {
    return (
        <div className='flex flex-col items-center mb-3'>
            <p className='font-extrabold font-sans'>ISTM-GOMA</p>
            <p>Secrétariat Général Administratif</p>
            <p>Direction du personnel</p>
            <img src={unigomLogo} alt="" className='object-cover h-12 w-12' />
        </div>
    );
}

export default Entete;