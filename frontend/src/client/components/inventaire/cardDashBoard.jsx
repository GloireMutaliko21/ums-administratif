import React from 'react'
import { NavLink } from 'react-router-dom';

const CardDashBoard = ({ libelle, donne, path, link }) => {
    return (
        <div className='p-5 shadow border-t border-sky-500'>
            <div className='flex flex-col justify-between items-center gap-5'>
                <h1 className='font-bold text-lg text-slate-500'>{libelle}</h1>
                <div className='flex items-end justify-between w-full'>
                    <p className='rounded-xl font-black text-2xl border shadow-md border-slate-300 text-teal-700 h-14 w-14 flex items-center justify-center'>{donne}</p>
                    <NavLink to={path} className='text-sm text-sky-500 hover:underline pb-2'>
                        {link}
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default CardDashBoard;