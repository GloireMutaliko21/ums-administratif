import React from 'react';

const RecuHeureSupp = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className='text-sm'>
            <div className='text-center font-sans font-bold w-full border-b-2 text-sky-500 border-slate-700'>
                <p>Reçu {props.title}</p>
            </div>
            <div className='flex gap-3 text-sm border-t'>
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