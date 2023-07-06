import React, { useEffect } from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../../context/ContextProvider';
import { handleGet } from '../../../api/get';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import Cards from '../../components/inventaire/cards';


const DashboardInvent = () => {
    const { syntheseMonth, setSyntheseMonth, localUserData, syntheseFetch, setSyntheseFetch } = useStateContext();

    useEffect(() => {
        if (syntheseFetch) {
            handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/operation/synthese`, setSyntheseMonth, null);
        }
        return () => {
            setSyntheseFetch(false);
        }
    }, [syntheseMonth]);

    let entries = [];
    let sorties = [];
    let stocks = [];

    syntheseMonth?.data?.map((data) => {
        entries.push({ x: data.designation, y: data.entree });
        sorties.push({ x: data.designation, y: data.sortie });
        stocks.push({ x: data.designation, y: data.quantite });
    });

    const barChartData = [
        entries,
        sorties,
        stocks
    ];

    const barCustomSeries = [
        {
            dataSource: barChartData[0],
            xName: 'x',
            yName: 'y',
            name: 'Entree',
            type: 'Column',
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            },
        },
        {
            dataSource: barChartData[1],
            xName: 'x',
            yName: 'y',
            name: 'Sortie',
            type: 'Column',
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            },
        },
        {
            dataSource: barChartData[2],
            xName: 'x',
            yName: 'y',
            name: 'Stock',
            type: 'Column',
            marker: {
                dataLabel: {
                    visible: true,
                    position: 'Top',
                    font: { fontWeight: '600', color: '#ffffff' },
                },
            },
        },
    ];

    const barPrimaryXAxis = {
        valueType: 'Category',
        interval: 1,
        majorGridLines: { width: 0 },
    };
    const barPrimaryYAxis = {
        majorGridLines: { width: 0 },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        labelStyle: { color: 'transparent' },
    };

    return (
        <div>
            <div>
                <Cards />
            </div>
            <div className='m-4 mt-6 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
                <ChartComponent
                    id='bar-chart'
                    height='280px'
                    width='100%'
                    primaryXAxis={barPrimaryXAxis}
                    primaryYAxis={barPrimaryYAxis}
                    chartArea={{ border: { width: 0 } }}
                    tooltip={{ enable: true }}
                >
                    <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
                    <SeriesCollectionDirective>
                        {barCustomSeries.map((item, index) =>
                            <SeriesDirective key={index} {...item} columnWidth={0.3} />
                        )}
                    </SeriesCollectionDirective>
                </ChartComponent>
            </div>
        </div>
    );
}

export default DashboardInvent;