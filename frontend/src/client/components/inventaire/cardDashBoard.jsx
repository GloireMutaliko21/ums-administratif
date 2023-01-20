import React from 'react'

const CardDashBoard = ({ libelle, donne }) => {
    return (
        <div className='p-5 flex justify-between items-center gap-5 shadow border-t border-sky-500'>
            <h1 className='font-bold text-lg text-slate-500'>{libelle}</h1>
            <div className='rounded-xl font-black text-2xl border-4 border-sky-200 text-sky-500 h-14 w-14 flex items-center justify-center'>
                <p>{donne}</p>
            </div>
        </div>
    );
}

export default CardDashBoard;