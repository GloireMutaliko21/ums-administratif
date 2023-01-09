
import SideBarAdmin from '../admin/components/SideBar';
import SideBarClient from '../client/components/SideBar';
const SideBar = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <nav className="w-56 fixed top-10 bottom-0 py-5 px-3 pl-5 text-slate-600 font-light h-screen shadow-2xl shadow-teal-100">
            {
                user.agent.privilege === 'direction' ?
                    <SideBarAdmin /> :
                    <SideBarClient />
            }
        </nav>
    );
}

export default SideBar;