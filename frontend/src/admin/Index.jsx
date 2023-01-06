import { Outlet } from 'react-router-dom';

const IndexDir = () => {
    return (
        <section>
            <h1 className='font-bold text-2xl text-slate-700'>LISTE DES AGENTS</h1>
            <Outlet />
        </section>
    );
}

export default IndexDir;