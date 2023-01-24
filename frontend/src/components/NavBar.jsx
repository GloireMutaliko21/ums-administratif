import { FaUniversity } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";

import { useStateContext } from "../context/ContextProvider";
import Button from './Button';


const NavBar = () => {
    const { localUserData, loginStatus, setLoginStatus } = useStateContext();

    const navigate = useNavigate();

    const handleLogout = () => {
        setLoginStatus();
        localStorage.removeItem('isLogged');
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <nav className='bg-white flex justify-between items-center fixed top-0 right-0 shadow-sm 2xl:shadow p-2 w-full left-0 z-50'>
            <div className="flex items-center gap-2">
                <FaUniversity className="text-3xl ml-4 text-amber-500" />
                <p className="font-bold text-amber-600 text-sm">University Managment System </p>
            </div>
            <div className="flex items-center gap-7 mr-4">
                <div className="flex items-center gap-1 text-sm text-slate-600 border border-sky-200 rounded px-5 py-px cursor-pointer">
                    <img src={localUserData?.agent?.imageUrl} alt="" className='w-8 h-8 rounded-full border' />
                    <div className="flex gap-2 items-center">
                        <p>{localUserData?.agent?.prenom} {localUserData?.agent?.nom}</p>
                        <RiArrowDropDownLine className="text-xl text-sky-500" />
                    </div>
                </div>
                <div>
                    <Button
                        label='Déconnexion'
                        style='bg-amber-500 text-white text-xs rounded-sm px-4 py-[9px] hover:shadow-2xl'
                        onClick={handleLogout}
                    />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;