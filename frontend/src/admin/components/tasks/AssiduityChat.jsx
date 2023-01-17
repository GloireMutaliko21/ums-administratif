import React, { useEffect, useState } from 'react';
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective, AccumulationLegend, PieSeries,
    AccumulationDataLabel, AccumulationTooltip, Inject
} from '@syncfusion/ej2-react-charts';
import AgentAssiduity from './AgentAssiduity';
import { TASK_BASE_URL } from '../../../utils/constants';
import { useStateContext } from '../../../context/ContextProvider';
import { handleGet } from '../../../api/get';
import Button from '../../../components/Button';


const AssiduityChat = () => {
    const [canFetch, setCanFetch] = useState(true);
    const [assiduityDada, setAssiduityDada] = useState({});

    const { localUserData } = useStateContext();


    useEffect(() => {
        if (canFetch) {
            handleGet(localUserData.token, `${TASK_BASE_URL}/day/${localUserData.agent.id}`, setAssiduityDada, null);
        }
        return () => {
            setCanFetch(false);
        }
    }, [assiduityDada]);

    const tasksLevel = assiduityDada?.data;
    const checkOpen = tasksLevel?.findIndex(todo => todo.status === 'Open');
    const checkInProgress = tasksLevel?.findIndex(todo => todo.status === 'InProgress');
    const checkClose = tasksLevel?.findIndex(todo => todo.status === 'Close');
    const variouspiedata = [
        { x: 'A faire', y: checkOpen !== undefined ? tasksLevel[checkOpen]?.total : 0, text: checkOpen ? tasksLevel[checkOpen]?.total : 0 },
        { x: 'En cours', y: checkInProgress !== undefined ? tasksLevel[checkInProgress]?.total : 0, text: checkInProgress ? tasksLevel[checkInProgress]?.total : 0 },
        { x: 'Terminés', y: checkClose !== undefined ? tasksLevel[checkClose]?.total : 0, text: checkClose ? tasksLevel[checkClose]?.total : 0 },
    ];

    //Calcul pourcentage
    const todos = checkOpen !== undefined ? tasksLevel[checkOpen]?.total : 0;
    const progress = checkInProgress !== undefined ? tasksLevel[checkInProgress]?.total : 0;
    const done = checkClose !== undefined ? tasksLevel[checkClose]?.total : 0;

    const total = todos + progress + done;
    const pourc = ((done / total) * 100).toFixed(2);

    const pallettes = ['#38bdf8', '#000137', '#ffbe46'];

    return (
        <div className='flex justify-around w-full h-full'>
            <div className='flex flex-col items-center ml-20'>
                <div className='flex flex-col items-center'>
                    <h1 className='font-bold text-sm text-slate-600'>Mon assiduité</h1>
                    <div className='flex gap-2 text-xs'>
                        <Button
                            label={'Auj'}
                            style='border px-2 rounded-full border-sky-500 text-blue-900 focus:bg-sky-200'
                            onClick={() => handleGet(localUserData.token, `${TASK_BASE_URL}/day/${localUserData.agent.id}`, setAssiduityDada, null)}
                        />
                        <Button
                            label={'Sem'}
                            style='border px-2 rounded-full border-amber-500 text-amber-900 focus:bg-amber-200'
                            onClick={() => handleGet(localUserData.token, `${TASK_BASE_URL}/week/${localUserData.agent.id}`, setAssiduityDada, null)}
                        />
                        <Button
                            label={'Mois'}
                            style='border px-2 rounded-full border-green-500 text-green-900 focus:bg-green-200'
                            onClick={() => handleGet(localUserData.token, `${TASK_BASE_URL}/month/${localUserData.agent.id}`, setAssiduityDada, null)}
                        />
                    </div>
                </div>
                {
                    assiduityDada?.data?.length > 0 ?
                        <div>
                            <AccumulationChartComponent
                                id='me'
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
                            <p className='text-2xl text-amber-600 text-center font-extrabold p-2 border'>{pourc}%</p>
                        </div> : <div className='text-sm text-red-500'>Vous n'avez aucune tâche aujourd'hui</div>
                }
            </div>
            <div>
                <AgentAssiduity />
            </div>
        </div>
    );
}

export default AssiduityChat;