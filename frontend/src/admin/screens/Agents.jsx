import React, { useEffect } from 'react';
import { handleGet } from '../../api/get';
import { useStateContext } from '../../context/ContextProvider';
import { AGENT_BASE_URL } from '../../utils/constants';
import AgentTable from '../components/AgentTable';
import Popup from '../../components/Popup';
import FormAdd from '../components/agents/FormAdd';

const Agents = () => {
    const { localUserData, agentsList, setAgentsList, } = useStateContext();

    useEffect(() => {
        handleGet(localUserData.token, `${AGENT_BASE_URL}/`, setAgentsList, null);
    }, [agentsList]);

    console.log(agentsList);
    return (
        <section className='border'>
            <AgentTable
                data={agentsList?.data}
            />
            <Popup
                titre={'Ajouter un agent'}
                children={<FormAdd />}
            />
        </section>
    )
}

export default Agents