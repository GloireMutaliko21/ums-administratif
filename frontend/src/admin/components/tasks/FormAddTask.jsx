import { useState } from "react";
import { IoAddOutline } from "react-icons/io5";
import { BsInfoCircleFill } from "react-icons/bs";

import Button from '../../../components/Button';
import useTransition from "../../../hook/useTransition";
import "../../../../public/styles/popupAnimate.css";
import "../../../../public/styles/radio.css";
const FormAddTask = () => {
    const [isChoice, setIsChoice] = useState(false);
    const hasTransitionedIn = useTransition(isChoice, 500);

    const [choixTarget, setChoixTarget] = useState({
        currentUser: false,
        otherUser: false
    });

    const handleChangeChoice = () => setIsChoice(state => !state);

    return (
        <div className="relative">
            <Button
                label='Ajouter'
                icon={<IoAddOutline className="text-lg text-white" />}
                style='flex gap-2 items-center bg-sky-500 text-white px-2 py-1 rounded-[4px] hover:bg-sky-400'
                onClick={handleChangeChoice}
            />
            {isChoice &&
                <div className={`absolute top-10 right-0 bg-white border z-10 shadow-2xl p-4 min-w-min w-96 popup ${hasTransitionedIn && 'isIn'} ${isChoice && 'isVisible'}`}>
                    <div className="flex items-center gap-2">
                        <BsInfoCircleFill className="text-amber-500 text-2xl" />
                        <p className="font-semibold text-slate-700">Pour qui la tâche sera assignée ?</p>
                    </div>
                    <div className="mt-4 px-8 py-3">
                        <div className="mb-2">
                            <input className="sr-only peer" type="radio" name="options" id="option_1" />
                            <label
                                className="flex items-center h-10 px-6 bg-gray-100 border rounded cursor-pointer hover:bg-opacity-60 peer-checked:bg-slate-300 peer-checked:border-indigo-700 ring-opacity-30 ring-indigo-600 peer-checked:ring-4 group"
                                htmlFor="option_1">
                                <div className="flex items-center justify-center w-6 h-6 border border-gray-600 rounded-full peer-checked:group:bg-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hidden w-4 h-4 text-indigo-200 fill-current peer-checked:group:visible" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex flex-col ml-6">
                                    <span className="font-medium">Pour moi</span>
                                </div>
                            </label>
                        </div>
                        <div className="mb-2">
                            <input className="sr-only peer" type="radio" name="options" id="option_2" />
                            <label
                                className="flex items-center h-10 px-6 bg-gray-100 border rounded cursor-pointer hover:bg-opacity-60 peer-checked:bg-slate-300 peer-checked:border-indigo-700 ring-opacity-30 ring-indigo-600 peer-checked:ring-4 group"
                                htmlFor="option_2">
                                <div className="flex items-center justify-center w-6 h-6 border border-gray-600 rounded-full peer-checked:group:bg-indigo-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="hidden w-4 h-4 text-indigo-200 fill-current peer-checked:group:visible" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="flex flex-col ml-6">
                                    <span className="font-medium">Pour un autre agent</span>
                                </div>
                            </label>
                        </div>
                        {/* <Button
                            label={'Suivant'}
                            style='mt-4 flex items-center h-12 px-6 ml-auto bg-sky-500 rounded text-sky-50 hover:bg-sky-400 focus:outline-none focus:ring ring-sky-300'
                        /> */}
                    </div>
                </div>
            }
        </div>
    );
}

export default FormAddTask;