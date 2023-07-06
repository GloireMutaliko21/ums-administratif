import React from 'react';

import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective, AccumulationLegend, PieSeries,
    AccumulationDataLabel, AccumulationTooltip, Inject
} from '@syncfusion/ej2-react-charts';

const Boarding = () => {
    const variouspiedata = [
        { x: 'Labour', y: 18, text: '18%' },
        { x: 'Legal', y: 8, text: '8%' },
        { x: 'Production', y: 15, text: '15%' },
    ];

    const pallettes = ['#38bdf8', '#000137', '#ffbe46'];

    return (
        <div className='flex justify-between h-full w-full'>
            <div className='h-1/2 w-1/2'>

                <AccumulationChartComponent
                    id='pie-chart'
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
            <div className='h-1/2 w-1/2'>
                <AccumulationChartComponent
                    id='pie-charts'
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
        </div>
    );
}

export default Boarding;