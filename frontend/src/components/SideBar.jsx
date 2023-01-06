
import { NavLink } from 'react-router-dom';
import { FiUsers, FiTarget } from 'react-icons/fi';
import { MdAttachMoney, MdSocialDistance, MdOutlineAccountBalance } from 'react-icons/md';
import { SiProcesswire } from 'react-icons/si';
import { VscTasklist } from 'react-icons/vsc';
import { AiFillWechat } from 'react-icons/ai';
import SideBarAdmin from '../admin/components/SideBar';
const SideBar = () => {
    return (
        <nav className="w-56 fixed top-10 bottom-0 py-5 px-3 bg-black text-pink-200 h-screen shadow-2xl shadow-pink-200">
            <SideBarAdmin />
        </nav>
    );
}

export default SideBar;