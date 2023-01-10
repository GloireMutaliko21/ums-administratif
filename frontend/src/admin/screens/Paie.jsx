import React from 'react';
import { NavLink, Outlet } from "react-router-dom";
import AgentList from '../components/agents/AgentList';

import { paiemLinks } from '../data/componentsData';

const Paie = () => {
    return (
        <div className='relative'>
            <section className='flex justify-between text-slate-500 text-sm bg-white p-2 border-b shadow-sm w-full'>
                {
                    paiemLinks.map(({ path, titre }) =>
                        <NavLink
                            key={path}
                            to={`/index/paie/${path}`}
                            className={({ isActive }) => `${isActive && 'text-sky-500 rounded-xl border border-sky-500'} mx-3 hover:text-sky-500 hover:border hover:border-sky-500 hover:rounded-xl px-2 duration-300`}
                        >
                            {titre}
                        </NavLink>
                    )
                }
            </section>
            <aside>
                <AgentList />
            </aside>
            <section>
                <Outlet />
            </section>
        </div>
    );
}

export default Paie;