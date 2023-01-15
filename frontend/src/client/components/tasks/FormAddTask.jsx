import { useState } from "react";
import { IoAddOutline, IoCloseOutline, IoDocumentTextOutline } from "react-icons/io5";

import Button from '../../../components/Button';
import useTransition from "../../../hook/useTransition";
import "../../../../public/styles/popupAnimate.css";
import "../../../../public/styles/radio.css";
import { handleChange } from "../../../utils/onChange";
import Input from "../../../components/Input";
import ClickLoad from "../../../components/Loaders/ClickLoad";
import { useStateContext } from "../../../context/ContextProvider";
import { TASK_BASE_URL } from "../../../utils/constants";
import { handlePost } from "../../../api/post";
import { prioriteTask, statusTask } from "../../../admin/data/SelectData";
const FormAddTask = () => {
    const { localUserData, setTaskList, setTaskFetch } = useStateContext();

    const [isChoice, setIsChoice] = useState(false);
    const [inLoading, setInLoading] = useState(false);
    const hasTransitionedIn = useTransition(isChoice, 500);

    const [titre, setTitre] = useState();
    const [status, setStatus] = useState();
    const [description, setDescription] = useState();
    const [priorite, setPriorite] = useState();

    const handleChangeChoice = () => setIsChoice(state => !state);

    function Form(idAgent) {
        return (
            <div>
                <Input
                    placeholder={'Titre'}
                    style=''
                    value={titre}
                    icon={<IoDocumentTextOutline />}
                    onChange={(e) => {
                        handleChange(e, setTitre)
                    }}
                />
                <select
                    value={status}
                    onChange={(e) => handleChange(e, setStatus)}
                    className="w-full text-gray-700 focus:outline-none bg-white focus:shadow-outline border border-gray-300 rounded py-2 mt-[5px] px-1 block"
                >
                    <option value="" disabled hidden selected>Statut</option>
                    {statusTask.map((option) =>
                        <option
                            key={option.id}
                            value={`${option.id}`}
                            className='capitalize'
                        >
                            {option.label}
                        </option>
                    )}
                </select>
                <select
                    value={priorite}
                    onChange={(e) => handleChange(e, setPriorite)}
                    className="w-full text-gray-700 focus:outline-none bg-white focus:shadow-outline border border-gray-300 rounded py-2 mt-[5px] px-1 block"
                >
                    <option value="" disabled hidden selected>Priorité</option>
                    {prioriteTask.map((option) =>
                        <option
                            key={option.id}
                            value={`${option.id}`}
                            className='capitalize'
                        >
                            {option.label}
                        </option>
                    )}
                </select>
                <textarea
                    cols="30" rows="2"
                    placeholder="Description"
                    className="resize-none p-2 text-slate-700 text-sm w-full outline-none border mt-2 rounded"
                    onChange={(e) => handleChange(e, setDescription)}
                >

                </textarea>
                <Button
                    label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                    style='flex justify-center w-full bg-sky-500 hover:bg-sky-400 text-white p-3'
                    onClick={() => {
                        handlePost(
                            '',
                            {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer 'token'`
                            },
                            JSON.stringify({
                                titre,
                                status,
                                description,
                                priorite,
                                agentId: idAgent
                            }),
                            `${TASK_BASE_URL}/new`, setTaskList, '', setInLoading, () => { }, `${TASK_BASE_URL}/${localUserData.agent.id}`, () => { }, setTaskFetch);
                    }}
                />
            </div>
        );
    }

    return (
        <div className="relative">
            <Button
                label={`${!isChoice ? 'Ajouter' : 'Fermer'}`}
                icon={!isChoice ? <IoAddOutline className="text-lg text-white" /> : <IoCloseOutline className="text-lg text-red-500" />}
                style={`flex gap-2 items-center ${!isChoice ? 'bg-sky-500 text-white hover:bg-sky-400 animate-bounce hover:animate-none' : 'bg-white text-red-500 hover:shadow border border-red-500'} px-2 py-1 rounded-[4px]`}
                onClick={handleChangeChoice}
            />
            {isChoice &&
                <div className={`absolute top-10 right-0 bg-white border z-10 shadow-2xl p-4 min-w-min w-96 popup ${hasTransitionedIn && 'isIn'} ${isChoice && 'isVisible'}`}>
                    <div className="px-8">
                        <div>
                            {Form(localUserData.agent.id)}
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default FormAddTask;