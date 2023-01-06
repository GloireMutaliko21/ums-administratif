import { Outlet } from 'react-router-dom';

const IndexDir = () => {
    return (
        <section>
            <div>OK</div>
            <Outlet />
        </section>
    );
}

export default IndexDir;