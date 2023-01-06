import { NavLink } from "react-router-dom"

import "../../public/styles/landing.css"

const LandingPage = () => {
    return (
        <section className="landing">
            <div className="content h-full w-full bg-black/70 flex flex-col justify-center items-center">
                <h3 className="font-semibold text-9xl text-white">UMS</h3>
                <div className="text-red-400">
                    <p className="font-extrabold text-lg tracking-wider">University Managment System</p>
                </div>
                <div className="mt-20">
                    <NavLink to='/login' className='bg-pink-700 rounded text-white text-lg p-5 hover:bg-transparent hover:border hover:border-pink-700 hover:font-bold shadow-sm shadow-pink-700'>
                        Commencer
                    </NavLink>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;