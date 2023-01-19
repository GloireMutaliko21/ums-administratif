import React from 'react'
import { Outlet } from 'react-router-dom';

const Inventaire = () => {
    return (
        <div>
            <section>
                <Outlet />
            </section>
        </div>
    );
}

export default Inventaire;