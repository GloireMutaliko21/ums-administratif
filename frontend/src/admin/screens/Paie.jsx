import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import AgentList from '../components/agents/AgentList';

import { paiemLinks } from '../data/componentsData';

const Paie = () => {
    return (
        <div className='relative'>
            <section className='fixed z-20 -mt-5 py-5 left-60 right-5 flex justify-between text-slate-500 text-sm bg-white p-2 border-b shadow-sm'>
                {
                    paiemLinks.map(({ path, titre }) =>
                        <NavLink
                            key={path}
                            to={`/index/paie/${path}`}
                            className={({ isActive }) => `${isActive && 'text-sky-500 border-b-2 pb-1 border-sky-500'} mx-3 hover:text-sky-500 hover:border-sky-500 px-2 duration-300`}                        >
                            {titre}
                        </NavLink>
                    )
                }
            </section>
            <main className='absolute top-14 w-full'>
                <aside>
                    <AgentList />
                </aside>
                <section>
                    <Outlet />
                </section>
            </main>
        </div>
    );
}

export default Paie;