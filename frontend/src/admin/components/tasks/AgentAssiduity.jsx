import React, { useEffect, useState } from 'react';
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective, AccumulationLegend, PieSeries,
    AccumulationDataLabel, AccumulationTooltip, Inject
} from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../../context/ContextProvider';
import { AGENT_BASE_URL } from '../../../utils/constants';
import AgentListItem from '../agents/AgentListItem';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import { BsSearch } from 'react-icons/bs';
import { handleGet } from '../../../api/get'

const AgentAssiduity = () => {
    const { localUserData, agentsList, setAgentsList, taskList, setTaskList, taskFetch, setTaskFetch, showPopup, setShowPopup } = useStateContext();

    useEffect(() => {
        handleGet(localUserData.token, `${AGENT_BASE_URL}/`, setAgentsList, null);
    }, []);

    //State to search on the agent list
    const [isFilter, setIsFilter] = useState('');
    const [showAgentList, setShowAgentList] = useState(false);
    const [selected, setSelected] = useState();
    const [agentToAsign, setAgentToAsign] = useState();

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

    const variouspiedata = [
        { x: 'Labour', y: 18, text: '18%' },
        { x: 'Legal', y: 8, text: '8%' },
        { x: 'Production', y: 15, text: '15%' },
    ];

    const pallettes = ['#f24010', '#4e9620', '#014280'];

    return (
        <div>
            <div className="flex justify-center items-center gap-5">
                <Input
                    placeholder='Rechercher un agent'
                    onChange={(e) => handleChangeIsFilter(e)}
                />
                <Button
                    label={'Search'}
                    style='border border-sky-400 px-4 py-[5.5px] shadow-md text-sky-600 rounded-sm'
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
                            <div>Aucun agent trouvé</div>
                    }
                </div>
            }
            <div>{
                agentToAsign && !showAgentList &&
                <div className="flex flex-col items-center">
                    <div className="text-slate-500 text-xs flex gap-7 items-center justify-between">
                        <div className='flex gap-1'>
                            <p>Assiduité de </p>
                            <p className="font-bold">{agentToAsign.nom} {agentToAsign.postnom} {agentToAsign.prenom}</p>
                        </div>
                        <div className='flex gap-2 text-xs'>
                            <Button
                                label={'Auj'}
                                style='border px-2 rounded-full border-sky-500 text-blue-900 focus:bg-sky-200'
                                onClick={() => { }}
                            />
                            <Button
                                label={'Sem'}
                                style='border px-2 rounded-full border-amber-500 text-amber-900 focus:bg-amber-200'
                                onClick={() => { }}
                            />
                            <Button
                                label={'Mois'}
                                style='border px-2 rounded-full border-green-500 text-green-900 focus:bg-green-200'
                                onClick={() => { }}
                            />
                        </div>
                    </div>
                    <div className='flex gap-5'>
                        <AccumulationChartComponent
                            id='other'
                            legendSettings={{
                                visible: true
                            }}
                            enableSmartLabels={true}
                            enableAnimation={true}
                            tooltip={{ enable: true }}
                            height='250px'
                            width='250px'
                            background=''
                        >
                            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
                            <AccumulationSeriesCollectionDirective>
                                <AccumulationSeriesDirective
                                    name='Tâches'
                                    dataSource={variouspiedata}
                                    palettes={pallettes}
                                    startAngle={0}
                                    endAngle={360}
                                    radius="70%"
                                    xName='x'
                                    yName='y'
                                    height='full'
                                    innerRadius='50%'
                                    explode
                                    explodeOffset="10%"
                                    explodeIndex={2}
                                    dataLabel={{
                                        visible: true,
                                        position: 'Inside',
                                        name: 'y'
                                    }}
                                >
                                </AccumulationSeriesDirective>
                            </AccumulationSeriesCollectionDirective>
                        </AccumulationChartComponent>
                    </div>
                    <div>
                        <p className='text-4xl text-[#014280] font-extrabold p-2 border'>75%</p>
                    </div>
                </div>
            }</div>
        </div>
    );
}

export default AgentAssiduity;