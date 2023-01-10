import { useEffect } from 'react';
import { BsSearch } from 'react-icons/bs';

import { handleGet } from '../../../api/get';
import { useStateContext } from "../../../context/ContextProvider";
import { AGENT_BASE_URL } from '../../../utils/constants';
import AgentListItem from "./AgentListItem";

const AgentList = ({ data }) => {
    const { localUserData, agentsList, setAgentsList, canFecth, setCanFecth } = useStateContext();

    useEffect(() => {
        if (canFecth) {
            handleGet(localUserData.token, `${AGENT_BASE_URL}/`, setAgentsList, null);
        }
        return () => {
            setCanFecth(false);
        }
    }, [agentsList]);

    return (
        <div className="border mt-2 w-72 fixed right-5">
            <div className='flex justify-between items-center border-b'>
                <h1 className="font-extrabold text-xl w-full px-4 py-2">Agents</h1>
                <div className='flex items-center border-b mr-4 justify-between'>
                    <input type="text" className='outline-none w-32 placeholder:text-xs text-xs text-slate-500' placeholder='Recherche' />
                    <BsSearch className='text-xs font-bold text-sky-500' />
                </div>
            </div>
            <div className='md:overflow-hidden overflow-auto md:hover:overflow-auto pb-52 h-screen'>
                {
                    agentsList?.data?.length > 0 ?
                        agentsList?.data?.map(({ id, matricule, nom, postnom, prenom, imageUrl }) =>
                            <AgentListItem
                                key={id}
                                id={id}
                                imageUrl={imageUrl}
                                matricule={matricule}
                                nom={`${nom} ${postnom} ${prenom}`}
                            />
                        ) :
                        <div>Empty data</div>
                }
            </div>
        </div>
    );
}

export default AgentList;