import React, { useEffect } from 'react';
import { handleGet } from '../../api/get';
import { useStateContext } from '../../context/ContextProvider';
import { AGENT_BASE_URL } from '../../utils/constants';
import AgentTable from '../components/AgentTable';
import Popup from '../../components/Popup';
import FormAdd from '../components/agents/FormAdd';
import CarteService from '../components/agents/CarteService';

const Agents = () => {
    const { localUserData, agentsList, newAgent, setNewAgent, showPdf, setShowPdf, setAgentsList, canFecth, setCanFecth } = useStateContext();

    useEffect(() => {
        if (canFecth) {
            handleGet(localUserData.token, `${AGENT_BASE_URL}/`, setAgentsList, null);
        }
        return () => {
            setCanFecth(false);
        }
    }, [agentsList]);

    const dataCarteService = JSON.parse(localStorage.getItem('newUser'));

    console.log(dataCarteService);

    return (
        <section className='border'>
            <AgentTable
                data={agentsList?.data}
            />
            <Popup
                titre={'Ajouter un agent'}
                children={<FormAdd />}
            />
            {
                showPdf &&
                <CarteService
                    nom={dataCarteService.data.nom}
                    postnom={dataCarteService.data.postnom}
                    prenom={dataCarteService.data.prenom}
                    imageUrl={dataCarteService.data.imageUrl}
                    grade={dataCarteService.data.grade.titre}
                    matricule={dataCarteService.data.matricule}
                    permanence={dataCarteService.data.permanence}
                    statut={dataCarteService.data.statut}
                    telephone=''
                />
            }
        </section>
    )
}

export default Agents