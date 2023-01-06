import { NavLink } from 'react-router-dom';

import { sidebardData } from '../data/componentsData';

const SideBarAdmin = () => {
    return (
        <div>
            {
                sidebardData.map(({ to, icon, label }) =>
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
                    >
                        <span className='text-lg text-white'>{icon}</span>
                        <span>{label}</span>
                    </NavLink>
                )
            }
        </div>
    );
}

export default SideBarAdmin;