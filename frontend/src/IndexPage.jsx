import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import IndexDir from './admin/Index';
import Index from './client/Index';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { mainRoutesDirection } from './admin/routes/mainRoutes.routes';
import PageLoader from './components/Loaders/PageLoader';
const IndexPage = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <main className='w-full'>
            <NavBar />
            <SideBar />
            <div className="mt-16 ml-56 px-5">
                {
                    user.agent.privilege === 'direction' ?
                        <IndexDir />
                        :
                        <Index />
                }
            </div>
        </main>
    );
}

export default IndexPage;