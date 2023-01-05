import "../../public/styles/landing.css"
import bg from "../assets/images/university.jpg";

const LandingPage = () => {
    return (
        <section>
            <div className="content h-full w-full bg-black/70 flex flex-col justify-center items-center">
                <h3 className="font-black text-9xl text-white">UMS</h3>
                <div className="text-slate-300">
                    <p>University Managment System</p>
                </div>
            </div>
        </section>
    );
}

export default LandingPage;