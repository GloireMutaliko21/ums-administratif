import React, { useEffect } from 'react';
import { handleGet } from '../../api/get';
import { useStateContext } from '../../context/ContextProvider';
import { AGENT_BASE_URL } from '../../utils/constants';
import AgentTable from '../components/AgentTable';
import Popup from '../../components/Popup';

const Agents = () => {
    const { localUserData, agentsList, setAgentsList, } = useStateContext();

    useEffect(() => {
        handleGet(localUserData.token, `${AGENT_BASE_URL}/`, setAgentsList, null);
    }, [])

    console.log(agentsList);
    return (
        <section className='border'>
            <AgentTable
                data={agentsList?.data}
            />
            <Popup />
        </section>
    )
}

export default Agents