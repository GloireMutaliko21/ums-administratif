import { useState } from "react";
import { FaUniversity } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { TfiFolder } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { RiArrowDropDownLine, RiCloseCircleLine, } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

import { useStateContext } from "../context/ContextProvider";
import Button from './Button';
import useTransition from '../hook/useTransition';


const NavBar = () => {
    const { localUserData, setLoginStatus } = useStateContext();

    const [showMenu, setShowMenu] = useState(false);
    const hasTransitionedIn = useTransition(showMenu, 500);


    const handleChangeShowProfileMenu = () => setShowMenu(state => !state);

    const navigate = useNavigate();

    const handleLogout = () => {
        setLoginStatus();
        localStorage.removeItem('isLogged');
        localStorage.removeItem('user');
        navigate('/');
    }

    function ProfileMenu() {
        return (
            <div>
                <div className="flex items-center justify-between border-b pb-2 mb-3">
                    <h1 className="font-bold text-2xl text-slate-700 text-left">Profile</h1>
                    <div
                        className="text-2xl text-amber-600 cursor-pointer shadow-md rounded-full border-t hover:shadow-xl hover:bg-slate-50 p-2"
                        onClick={() => setShowMenu(false)}
                    >
                        <RiCloseCircleLine />
                    </div>
                </div>
                <div className="text-left text-slate-600 text-base">
                    <div className="mb-4 cursor-pointer hover:border-b-2 border-b-amber-500 hover:text-amber-500 duration-100 pb-1">
                        <Link to='/index/personnal' className="flex items-center gap-5" onClick={() => setShowMenu(false)}>
                            <SiDatabricks className="text-amber-500" />
                            <p>Données personnelles</p>
                        </Link>
                    </div>
                    <div className="mb-4 cursor-pointer hover:border-b-2 border-b-amber-500 hover:text-amber-500 duration-100 pb-1">
                        <Link to='/index/dossier' className="flex items-center gap-5" onClick={() => setShowMenu(false)}>
                            <TfiFolder className="text-amber-500" />
                            <p>Dossier</p>
                        </Link>
                    </div>
                    <div className="mb-4 cursor-pointer hover:border-b-2 border-b-amber-500 hover:text-amber-500 duration-100 pb-1">
                        <Link to='/index/compte' className="flex items-center gap-5" onClick={() => setShowMenu(false)}>
                            <VscAccount className="text-amber-500" />
                            <p>Compte</p>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <nav className='bg-white flex justify-between items-center fixed top-0 right-0 shadow-sm 2xl:shadow p-2 w-full left-0 z-50'>
            <div className="flex items-center gap-2">
                <FaUniversity className="text-3xl ml-4 text-amber-500" />
                <p className="font-bold text-amber-600 text-sm">University Managment System </p>
            </div>
            <div className="flex items-center gap-7 mr-4">
                <div className="flex items-center gap-1 text-sm text-slate-600 border border-sky-200 hover:shadow-xl hover:bg-slate-50 rounded px-5 py-px cursor-pointer"
                    onClick={handleChangeShowProfileMenu}
                >
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
            {
                showMenu &&
                <div className={`absolute top-12 right-0 bg-white border z-10 shadow-xl p-4 min-w-min w-80 popup ${hasTransitionedIn && 'isIn'} ${showMenu && 'isVisible'}`}>
                    <div className="px-8">
                        <div>
                            {ProfileMenu()}
                        </div>
                    </div>
                </div>
            }
        </nav>
    );
}

export default NavBar;