import React from 'react';
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective, AccumulationLegend, PieSeries,
    AccumulationDataLabel, AccumulationTooltip, Inject
} from '@syncfusion/ej2-react-charts';
import AgentAssiduity from './AgentAssiduity';


const AssiduityChat = () => {
    const variouspiedata = [
        { x: 'Labour', y: 18, text: '18%' },
        { x: 'Legal', y: 8, text: '8%' },
        { x: 'Production', y: 15, text: '15%' },
    ];

    const pallettes = ['#38bdf8', '#000137', '#ffbe46'];

    return (
        <div className='flex justify-around w-full h-full'>
            <div className='flex flex-col items-center ml-20'>
                <h1 className='font-bold text-sm text-slate-600'>Mon assiduité</h1>
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
                </div>
                <p className='text-4xl text-[#ffbe46] font-extrabold p-2 border'>79%</p>
            </div>
            <div>
                <AgentAssiduity />

            </div>
        </div>
    );
}

export default AssiduityChat;