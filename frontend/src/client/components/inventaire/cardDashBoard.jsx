import React from 'react';

import { useStateContext } from '../../../context/ContextProvider';

const CardDashBoard = ({ libelle, donne, path, link, color, borderColor, data }) => {
    const { showPopup, setShowPopup } = useStateContext();

    return (
        <div className='p-5 shadow border-t border-sky-500'>
            <div className='flex flex-col justify-between items-center gap-5'>
                <h1 className='font-bold text-lg text-slate-500'>{libelle}</h1>
                <div className='flex items-end justify-between w-full'>
                    <p className={`rounded-xl font-black text-2xl border shadow-md ${borderColor} text-${color} h-14 w-14 flex items-center justify-center`}>{donne}</p>
                    <p
                        className='text-sm text-sky-500 hover:underline pb-2 cursor-pointer'
                        onClick={() => setShowPopup(path)}
                    >
                        {link}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default CardDashBoard;