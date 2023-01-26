import { useEffect, useState } from "react";
import { IoAddOutline, IoCloseOutline, IoDocumentTextOutline } from "react-icons/io5";
import { BsInfoCircleFill, BsSearch } from "react-icons/bs";

import Button from '../../../components/Button';
import useTransition from "../../../hook/useTransition";
import "../../../../public/styles/popupAnimate.css";
import "../../../../public/styles/radio.css";
import { handleChange } from "../../../utils/onChange";
import { prioriteTask, statusTask } from "../../data/SelectData";
import Input from "../../../components/Input";
import ClickLoad from "../../../components/Loaders/ClickLoad";
import { useStateContext } from "../../../context/ContextProvider";
import { AGENT_BASE_URL, TASK_BASE_URL } from "../../../utils/constants";
import { handlePost } from "../../../api/post";
import { handleGet } from "../../../api/get";
import AgentListItem from "../agents/AgentListItem";
const FormAddTask = () => {
    const { localUserData, agentsList, setAgentsList, taskList, setTaskList, taskFetch, setTaskFetch, showPopup, setShowPopup } = useStateContext();
    const [isChoice, setIsChoice] = useState(false);
    const [inLoading, setInLoading] = useState(false);
    const hasTransitionedIn = useTransition(isChoice, 500);

    const [agentToAsign, setAgentToAsign] = useState();

    const [titre, setTitre] = useState();
    const [status, setStatus] = useState();
    const [description, setDescription] = useState();
    const [priorite, setPriorite] = useState();

    useEffect(() => {
        handleGet(localUserData?.token, `${AGENT_BASE_URL}/`, setAgentsList, null);
    }, []);

    //State to search on the agent list
    const [isFilter, setIsFilter] = useState('');
    const [showAgentList, setShowAgentList] = useState(false);
    const [selected, setSelected] = useState();

    //Input search handle change
    const handleChangeIsFilter = (e) => {
        setIsFilter(e.target.value)
    };

    //Array of data to display
    const agentsData = [];

    //Search Agent function
    const recherche = (condition, datas) => {
        if (condition) {
            return;
        } else {
            agentsData.splice()
            agentsData.push(datas)
        }
    };

    //Update liste agent dans la recherche
    agentsList?.data?.forEach(element => {
        const searchData = element.nom.toLowerCase().indexOf(isFilter.toLowerCase()) === -1 &&
            element.postnom.toLowerCase().indexOf(isFilter.toLowerCase()) === -1 &&
            element.prenom.toLowerCase().indexOf(isFilter.toLowerCase()) === -1
        recherche(searchData, element);
    });

    const [choixTarget, setChoixTarget] = useState();

    const handleChangeChoice = () => setIsChoice(state => !state);
    const handleChangeAssiduite = () => setShowPopup('assiduite');

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
                            localUserData?.token,
                            {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${localUserData?.token}`
                            },
                            JSON.stringify({
                                titre,
                                status,
                                description,
                                priorite,
                                // agentId: localUserData.agent.id
                                agentId: idAgent
                            }),
                            `${TASK_BASE_URL}/new`, setTaskList, '', setInLoading, () => { }, `${TASK_BASE_URL}/${localUserData?.agent?.id}`, () => { }, setTaskFetch);
                    }}
                />
            </div>
        );
    }

    return (
        <div className="relative">
            <div className="flex justify-center p-3 gap-3">
                <Button
                    label={`${!isChoice ? 'Ajouter' : 'Fermer'}`}
                    // icon={!isChoice ? <IoAddOutline className="text-lg text-white" /> : <IoCloseOutline className="text-lg text-red-500" />}
                    style={`flex gap-2 items-center ${!isChoice ? 'bg-white text-sky-600 border border-sky-500 hover:bg-sky-500 hover:text-white' : 'bg-white text-red-500 hover:shadow border border-red-500'} px-8 py-px rounded-sm shadow-md shadow-sky-100`}
                    onClick={handleChangeChoice}
                />
                <Button
                    label={`Assiduité`}
                    // icon={!isChoice ? <IoAddOutline className="text-lg text-white" /> : <IoCloseOutline className="text-lg text-red-500" />}
                    style={`flex gap-2 items-center ${'bg-white text-sky-600 border border-sky-500 hover:bg-sky-500 hover:text-white'} px-8 py-px rounded-sm shadow-md shadow-sky-100`}
                    onClick={() => setShowPopup('assiduite')}
                />
            </div>
            {isChoice &&
                <div className={`absolute top-16 right-0 bg-white border z-10 shadow-2xl p-4 min-w-min w-96 popup ${hasTransitionedIn && 'isIn'} ${isChoice && 'isVisible'}`}>
                    <div className="flex items-center gap-2">
                        <BsInfoCircleFill className="text-amber-500 text-2xl" />
                        <p className="font-semibold text-slate-700">Pour qui la tâche sera assignée ?</p>
                    </div>
                    <div className="my-4 px-8 py-3 border-y">
                        <div className="mb-2">
                            <input className="sr-only peer" type="radio" name="options" id="option_1" value='Me'
                                onChange={(e) => setChoixTarget(e.target.value)} />
                            <label
                                className="flex items-center h-10 px-6 bg-gray-100 border rounded cursor-pointer hover:bg-opacity-60  ring-opacity-30 ring-indigo-600 peer-checked:ring-2 group"
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
                            <input className="sr-only peer" type="radio" name="options" id="option_2" value='other'
                                onChange={(e) => setChoixTarget(e.target.value)}
                            />
                            <label
                                className="flex items-center h-10 px-6 bg-gray-100 border rounded cursor-pointer hover:bg-opacity-60  ring-opacity-30 ring-indigo-600 peer-checked:ring-2 group"
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
                    <div className="px-8">
                        {choixTarget === 'Me' &&
                            <div>
                                {Form(localUserData?.agent?.id)}
                            </div>
                        }
                    </div>
                    <div className="px-8">
                        {choixTarget === 'other' &&
                            <div>
                                <div>
                                    <div className="flex justify-between items-center gap-5">
                                        <Input
                                            placeholder='Rechercher un agent'
                                            onChange={(e) => handleChangeIsFilter(e)}
                                        />
                                        <Button
                                            icon={<BsSearch />}
                                            style='border border-sky-400 px-4 py-[10px] text-sky-600'
                                            onClick={() => setShowAgentList(true)}
                                        />
                                    </div>
                                    {
                                        showAgentList &&
                                        <div className="h-52 overflow-y-scroll overflow-x-hidden">
                                            {
                                                agentsData.length > 0 ?
                                                    agentsData.map((agent, idx) =>
                                                        <div
                                                            key={agent.id}
                                                            onClick={() => {
                                                                setAgentToAsign(agent);
                                                                setSelected(idx);
                                                                setShowAgentList(false)
                                                            }}
                                                            className={`${idx === selected && 'border-l-[6px] border-sky-500 bg-slate-200'}`}
                                                        >
                                                            <AgentListItem
                                                                id={agent.id}
                                                                imageUrl={agent.imageUrl}
                                                                matricule={agent.matricule}
                                                                nom={`${agent.nom} ${agent.postnom} ${agent.prenom}`}
                                                            />
                                                        </div>
                                                    ) :
                                                    <div>Empty data</div>
                                            }
                                        </div>
                                    }
                                    <div>{
                                        agentToAsign &&
                                        <div className="mt-3">
                                            <div className="text-slate-500 text-xs flex gap-1">
                                                <p>Agent sélectionné : </p>
                                                <p className="font-bold">{agentToAsign.nom} {agentToAsign.postnom} {agentToAsign.prenom}</p>
                                            </div>
                                            {Form(agentToAsign.id)}
                                        </div>
                                    }</div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default FormAddTask;