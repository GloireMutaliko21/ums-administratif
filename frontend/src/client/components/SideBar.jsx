import { NavLink } from "react-router-dom";

import { sidebardData } from "../data/componentsData";

const SideBarClient = () => {
    return (
        <div>
            {
                sidebardData.map(({ to, icon, label }) =>
                    <NavLink
                        key={to}
                        to={to}
                        className={({ isActive }) => `${isActive ? 'bg-sky-400 text-white hover:bg-sky-500' : 'hover:bg-slate-200'} flex items-center gap-5 my-2 p-3 rounded-lg hover:ease-in hover:scale-x-110 duration-150`}
                    >
                        <span className=''>{icon}</span>
                        <span>{label}</span>
                    </NavLink>
                )
            }
        </div>
    );
}

export default SideBarClient;