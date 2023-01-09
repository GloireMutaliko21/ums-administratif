import React from "react";
import { NavLink } from "react-router-dom"

import "../../public/styles/landing.css"

const LandingPage = () => {
    return (
        <section className="landing">
            <div className="content h-full w-full bg-black/70 flex flex-col justify-center items-center">
                <h3 className="font-bold text-9xl text-white">UMS</h3>
                <div className="text-sky-400">
                    <p className="font-extrabold text-lg tracking-wider">University Managment System</p>
                </div>
                <div className="mt-20">
                    <NavLink to='/login' className='bg-sky-500 rounded text-white text-lg p-5 hover:bg-transparent hover:border hover:border-sky-500 hover:font-bold'>
                        Commencer
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;