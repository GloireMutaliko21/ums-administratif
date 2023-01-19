import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { inventaireLinks } from '../../admin/data/componentsData';

const Inventaire = () => {
    return (
        <div className='relative'>
            <nav className='fixed z-20 -mt-5 py-5 left-60 right-5 text-slate-500 text-sm bg-white p-2 border-b shadow-sm'>
                <h1 className='font-extrabold text-3xl text-slate-900 mb-3'>Inventaire</h1>
                <div>
                    {
                        inventaireLinks.map(({ path, titre }) =>
                            <NavLink
                                key={path}
                                to={`/index/cinventaire/${path}`}
                                className={({ isActive }) => `${isActive && 'text-sky-500 rounded-xl border border-sky-500'} mx-3 hover:text-sky-500 hover:border hover:border-sky-500 hover:rounded-xl px-2 duration-300`}
                            >
                                {titre}
                            </NavLink>
                        )
                    }
                </div>
            </nav>
            <main className='absolute top-24 w-full'>
                <section>
                    <Outlet />
                </section>
            </main>
        </div>
    );
}

export default Inventaire;