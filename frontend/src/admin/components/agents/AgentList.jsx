import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useLocation } from 'react-router-dom';

import { handleGet } from '../../../api/get';
import { useStateContext } from "../../../context/ContextProvider";
import { AGENT_BASE_URL } from '../../../utils/constants';
import AgentListItem from "./AgentListItem";

const AgentList = () => {
    //current url
    const currentUtl = useLocation().pathname;
    const { localUserData, agentsList, setAgentsList, canFecth, setCanFecth, setAgentToPay, setIsFetchPaie, mounthParams, } = useStateContext();

    const urlFetch = currentUtl === '/index/paie/salaire' || currentUtl === '/index/paie' ?
        `${AGENT_BASE_URL}/${mounthParams.year}-${mounthParams.mounth}` :
        `${AGENT_BASE_URL}/`

    console.log(urlFetch);

    const [selected, setSelected] = useState();

    useEffect(() => {
        handleGet(localUserData.token, `${urlFetch}`, setAgentsList, null);
    }, [currentUtl, mounthParams]);

    //State to search on the list
    const [isFilter, setIsFilter] = useState('');

    //Input search handle change
    const handleChangeIsFilter = (e) => {
        setIsFilter(e.target.value)
    };

    //Array of data to display
    const agentsData = [];

    //Search function
    const recherche = (condition, datas) => {
        if (condition) {
            return;
        } else {
            agentsData.splice()
            agentsData.push(datas)
        }
    };

    //Filter agents list
    agentsList?.data?.forEach(element => {
        const searchData = element.nom.toLowerCase().indexOf(isFilter.toLowerCase()) === -1 &&
            element.postnom.toLowerCase().indexOf(isFilter.toLowerCase()) === -1 &&
            element.prenom.toLowerCase().indexOf(isFilter.toLowerCase()) === -1
        recherche(searchData, element);
    });

    return (
        <div className="border w-72 fixed right-5">
            <div className='flex justify-between items-center border-b'>
                <h1 className="font-extrabold text-xl w-full px-4 py-2">Agents</h1>
                <div className='flex items-center border-b mr-4 justify-between'>
                    <input
                        type="text"
                        className='outline-none w-32 placeholder:text-xs text-xs text-slate-500'
                        placeholder='Recherche'
                        onChange={(e) => handleChangeIsFilter(e)}
                    />
                    <BsSearch className='text-xs font-bold text-sky-500' />
                </div>
            </div>
            <div className='md:overflow-hidden overflow-auto md:hover:overflow-auto pb-52 h-screen'>
                {
                    agentsData.length > 0 ?
                        agentsData.map((agent, idx) =>
                            <div
                                key={agent.id}
                                onClick={() => {
                                    setAgentToPay(agent);
                                    setSelected(idx);
                                    setIsFetchPaie({
                                        heuresupp: true,
                                        ferie: true,
                                        primes: true,
                                        conges: true,
                                        malad: true,
                                        deduction: true,
                                        alloc: true
                                    })
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
        </div>
    );
}

export default AgentList;