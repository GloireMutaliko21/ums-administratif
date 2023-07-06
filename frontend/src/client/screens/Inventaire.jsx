import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import { inventaireLinks } from '../../admin/data/componentsData';

const Inventaire = () => {
    return (
        <div className='relative'>
            <nav className='fixed z-20 -mt-5 py-4 left-60 right-5 text-slate-500 text-sm bg-white p-2 border-b shadow-inherit flex items-center justify-between'>
                <h1 className='font-extrabold text-3xl text-slate-900'>Inventaire</h1>
                <div>
                    {
                        inventaireLinks.map(({ path, titre }) =>
                            <NavLink
                                key={path}
                                to={`/index/cinventaire/${path}`}
                                className={({ isActive }) => `${isActive && 'text-sky-500 border-b-2 pb-2 border-sky-500'} mx-3 hover:text-sky-500 hover:border-sky-500 px-2 duration-300`}
                            >
                                {titre}
                            </NavLink>
                        )
                    }
                </div>
            </nav>
            <main className='absolute top-16 w-full'>
                <section>
                    <Outlet />
                </section>
            </main>
        </div>
    );
}

export default Inventaire;