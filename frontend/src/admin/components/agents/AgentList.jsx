import { useEffect } from 'react';

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
            <div className='flex justify-between'>
                <h1 className="font-extrabold text-xl border-b w-full px-4 py-2">Agents</h1>
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