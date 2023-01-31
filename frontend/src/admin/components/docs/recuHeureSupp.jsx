import React from 'react';
import Entete from './Entete';

const RecuHeureSupp = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='text-sm'>
            <Entete />
            <div className='text-center font-sans font-bold w-full text-amber-500'>
                <p>Coupon {props.title}</p>
            </div>
            <div className='flex gap-3 text-sm mt-3'>
                <div className="text-slate-700">
                    <p>Nom et postnom</p>
                    <p>Total payé</p>
                    <p>Total mois</p>
                </div>
                <div className="text-sky-600 font-medium">
                    <p>: {props.nom} {props.postnom}</p>
                    <p>: {props.totalPaie}</p>
                    <p>: {props.totalMois}</p>
                </div>
            </div>
        </div>
    );
});

export default RecuHeureSupp;