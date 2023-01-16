import React from 'react';
import {
    AccumulationChartComponent, AccumulationSeriesCollectionDirective,
    AccumulationSeriesDirective, AccumulationLegend, PieSeries,
    AccumulationDataLabel, AccumulationTooltip, Inject
} from '@syncfusion/ej2-react-charts';


const AssiduityChat = () => {
    const variouspiedata = [
        { x: 'Labour', y: 18, text: '18%' },
        { x: 'Legal', y: 8, text: '8%' },
        { x: 'Production', y: 15, text: '15%' },
        { x: 'License', y: 11, text: '11%' },
        { x: 'Facilities', y: 18, text: '18%' },
        { x: 'Taxes', y: 14, text: '14%' },
        { x: 'Insurance', y: 16, text: '16%' },
    ];

    let pie;
    return (
        <AccumulationChartComponent
            id='pie-chart'
            legendSettings={{
                visible: true
            }}
            enableSmartLabels={true}
            enableAnimation={true}
            tooltip={{ enable: true }}
            // background='#38bdf8'
            height='70%'
            width='40%'
        >
            <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                    name='Tâches'
                    dataSource={variouspiedata}
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
    );
}

export default AssiduityChat;