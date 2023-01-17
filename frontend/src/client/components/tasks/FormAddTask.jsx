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
    const { localUserData, setTaskList, setTaskFetch, showPopup, setShowPopup } = useStateContext();

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
                <div className="mt-5 flex justify-between items-center gap-14">
                    <Button
                        label='Fermer'
                        style='bg-slate-50 p-3 text-red-600 border'
                        onClick={handleChangeChoice}
                    />
                    <Button
                        label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                        style='flex justify-center w-full bg-sky-500 hover:bg-sky-400 text-white p-3'
                        onClick={() => {
                            handlePost(
                                localUserData.token,
                                {
                                    'Content-Type': 'application/json',
                                    'Authorization': `Bearer ${localUserData.token}`
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
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="flex justify-center p-3 gap-3">
                <Button
                    label={'Ajouter'}
                    style={`flex gap-2 items-center bg-white text-sky-600 border border-sky-500 hover:bg-sky-500 hover:text-white px-8 py-1 rounded-sm shadow-md shadow-sky-100`}
                    onClick={handleChangeChoice}
                />
                <Button
                    label={`Assiduité`}
                    // icon={!isChoice ? <IoAddOutline className="text-lg text-white" /> : <IoCloseOutline className="text-lg text-red-500" />}
                    style={`flex gap-2 items-center ${'bg-white text-sky-600 border border-sky-500 hover:bg-sky-500 hover:text-white'} px-8 py-px rounded-sm shadow-md shadow-sky-100`}
                    onClick={() => setShowPopup('assiduiteClient')}
                />
            </div>
            {isChoice &&
                <div className={`absolute top-16 right-0 bg-white border z-10 shadow-2xl p-4 min-w-min w-96 popup ${hasTransitionedIn && 'isIn'} ${isChoice && 'isVisible'}`}>
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