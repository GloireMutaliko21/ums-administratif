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
        <div className="border mt-5 w-72 fixed overflow-scroll h-screen right-5">
            <h1 className="font-extrabold text-2xl border-b w-full px-4 py-2">Agents</h1>
            <div>
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