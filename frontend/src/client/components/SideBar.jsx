import { IoBarChartSharp } from "react-icons/io5";
import { MdOutlineAccountBalance } from "react-icons/md";
import { NavLink } from "react-router-dom";

import { useStateContext } from "../../context/ContextProvider";
import { sidebardData } from "../data/componentsData";

const SideBarClient = () => {
    const { localUserData } = useStateContext();
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
            {
                localUserData?.agent?.privilege === 'patrimoine' &&
                <NavLink
                    to={'/index/cpatrimoine'}
                    className={({ isActive }) => `${isActive ? 'bg-sky-400 text-white hover:bg-sky-500' : 'hover:bg-slate-200'} flex items-center gap-5 my-2 p-3 rounded-lg hover:ease-in hover:scale-x-110 duration-150`}
                >
                    <span className=''>{<MdOutlineAccountBalance />}</span>
                    <span>Patrimoine</span>
                </NavLink>
            }
            {
                localUserData?.agent?.privilege === 'inventaire' &&
                <NavLink
                    to={'/index/cinventaire'}
                    className={({ isActive }) => `${isActive ? 'bg-sky-400 text-white hover:bg-sky-500' : 'hover:bg-slate-200'} flex items-center gap-5 my-2 p-3 rounded-lg hover:ease-in hover:scale-x-110 duration-150`}
                >
                    <span className=''>{<IoBarChartSharp />}</span>
                    <span>Inventaire</span>
                </NavLink>
            }
        </div>
    );
}

export default SideBarClient;