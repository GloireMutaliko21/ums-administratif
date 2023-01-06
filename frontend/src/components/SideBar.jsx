
import { NavLink } from 'react-router-dom';
import { FiUsers, FiTarget } from 'react-icons/fi';
import { MdAttachMoney, MdSocialDistance, MdOutlineAccountBalance } from 'react-icons/md';
import { SiProcesswire } from 'react-icons/si';
import { VscTasklist } from 'react-icons/vsc';
import { AiFillWechat } from 'react-icons/ai';
const SideBar = () => {
    return (
        <nav className="w-56 fixed top-10 bottom-0 py-5 px-3 bg-black text-pink-200 h-screen shadow-2xl shadow-pink-200">
            <NavLink
                to='/agents'
                className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
            >
                <FiUsers className='text-lg text-white' /> <span>Agents</span>
            </NavLink>
            <NavLink
                to='/pres-conges'
                className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
            >
                <FiTarget className='text-lg text-white' /> <span>Présences/congés</span>
            </NavLink>
            <NavLink
                to='/paie'
                className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
            >
                <MdAttachMoney className='text-lg text-white' /> <span>Paie</span>
            </NavLink>
            <NavLink
                to='/on-offboarding'
                className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
            >
                <SiProcesswire className='text-lg text-white' /> <span>On-offboarding</span>
            </NavLink>
            <NavLink
                to='/cassoc'
                className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
            >
                <MdSocialDistance className='text-lg text-white' /> <span>Cas sociaux</span>
            </NavLink>
            <NavLink
                to='/taskList'
                className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
            >
                <VscTasklist className='text-lg text-white' /> <span>Liste tâches</span>
            </NavLink>
            <NavLink
                to='/patrimoine'
                className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
            >
                <MdOutlineAccountBalance className='text-lg text-white' /> <span>Patrimoine</span>
            </NavLink>
            <NavLink
                to='/chat'
                className={({ isActive }) => `${isActive && 'text-pink-500 font-bold'} my-3 border-b-[1px] border-slate-500 flex justify-start gap-5 items-center pb-2 mb-6`}
            >
                <AiFillWechat className='text-lg text-white' /> <span>Chat</span>
            </NavLink>
        </nav>
    );
}

export default SideBar;