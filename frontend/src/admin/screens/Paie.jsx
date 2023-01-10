import React from 'react';
import { NavLink, Outlet } from "react-router-dom";

import { paiemLinks } from '../data/componentsData';

const Paie = () => {
    return (
        <div>
            <section className='flex justify-between fixed text-slate-500 bg-white p-2 border-b shadow-sm'>
                {
                    paiemLinks.map(({ path, titre }) =>
                        <NavLink
                            key={path}
                            to={`/index/paie/${path}`}
                            className={({ isActive }) => `${isActive && 'text-sky-500 border-b-2'} mx-3`}
                        >
                            {titre}
                        </NavLink>
                    )
                }
            </section>
            <Outlet />
        </div>
    );
}

export default Paie;