import React, { useEffect } from 'react';
import { handleGet } from '../../api/get';
import { useStateContext } from '../../context/ContextProvider';
import { AGENT_BASE_URL } from '../../utils/constants';
import AgentItem from '../components/AgentItem';

const Agents = () => {
    const { localUserData, agentsList, setAgentsList, } = useStateContext();

    useEffect(() => {
        handleGet(localUserData.token, `${AGENT_BASE_URL}/`, setAgentsList, null);
    }, [])

    console.log(agentsList);
    return (
        <section className='border'>
            <div className='flex justify-around border-b'>
                <p className='w-full border-r text-center border-slate-300 p-3 text-slate-500 font-semibold text-lg'>Matricule</p>
                <p className='w-full border-r text-center border-slate-300 p-3 text-slate-500 font-semibold text-lg'>Noms</p>
                <p className='w-full border-r text-center border-slate-300 p-3 text-slate-500 font-semibold text-lg'>Statut</p>
                <p className='w-full border-r text-center border-slate-300 p-3 text-slate-500 font-semibold text-lg'>Titre</p>
                <p className='w-full border-r text-center border-slate-300 p-3 text-slate-500 font-semibold text-lg'>Actions</p>
            </div>
            <div>
                {
                    agentsList?.data?.length > 0 ?
                        agentsList?.data?.map(({ matricule, nom, postnom, prenom, statut, grade }) =>
                            <AgentItem
                                key={matricule}
                                matricule={matricule}
                                nom={nom}
                                postnom={postnom}
                                prenom={prenom}
                                statut={statut}
                                titre={grade.titre}
                            />
                        ) :
                        <div className='text-center text-slate-400 p-4'>
                            Aucun agent trouvé
                        </div>
                }
            </div>
        </section>
    )
}

export default Agents