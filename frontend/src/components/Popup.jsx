
import "../../public/styles/popupAnimate.css"
import { useStateContext } from "../context/ContextProvider";
import useTransition from '../hook/useTransition';
import Button from './Button';

const RoomPopup = ({ titre, children }) => {
    const { showPopup, setShowPopup } = useStateContext();
    const hasTransitionedIn = useTransition(showPopup, 1000);

    return (
        <>
            {(hasTransitionedIn || showPopup) && (
                <div onClick={() => setShowPopup(false)} className={`fixed top-0 bottom-0 right-0 left-0 bg-black/20 flex justify-center items-center z-20 popup ${hasTransitionedIn && 'isIn'} ${showPopup && 'isVisible'}`}>
                    <div className='static pointer-events-none bg-transparent' onClick={(e) => e.stopPropagation()}>
                        <div className={`pointer-events-auto h-[500px] w-[980px] mt-10 rounded-lg bg-white shadow-md shadow-slate-600 text-slate-400 p-5 popup ${hasTransitionedIn && 'isIn'} ${showPopup && 'isVisible'}`}>
                            <div className='text-center w-full border-b-2 pb-1 mb-5 font-bold text-2xl'>
                                <h1>{titre}</h1>
                            </div>
                            {children}
                            <div className='fixed bottom-5 right-5 flex justify-end w-full'>
                                <Button
                                    label='FERMER'
                                    onClick={() => setShowPopup(false)}
                                    style='bg-slate-100 hover:bg-white shadow text-red-500 p-3 rounded-lg font-semibold border'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default RoomPopup;