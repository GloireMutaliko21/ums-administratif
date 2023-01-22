import IndexDir from './admin/Index';
import Index from './client/Index';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
const IndexPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <main className='w-full'>
            <NavBar />
            <SideBar />
            <div className="mt-16 ml-56 px-5">
                {
                    user?.agent?.privilege === 'direction' ?
                        <IndexDir />
                        :
                        <Index />
                }
            </div>
        </main>
    );
}

export default IndexPage;