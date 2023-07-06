import React, { useEffect } from 'react';
import { ColumnDirective, GridComponent, Inject, Search, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective, PdfExport } from "@syncfusion/ej2-react-grids";

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { PRESENCE_BASE_URL } from '../../../utils/constants';

const GridPresToDay = () => {
    const { localUserData, fetchPres, setFetchPres, presDay, setPresDay } = useStateContext();

    useEffect(() => {
        if (fetchPres) {
            handleGet(localUserData?.token, `${PRESENCE_BASE_URL}/pres`, setPresDay, 'presDay');
        }
        return () => {
            setFetchPres(false);
        }
    }, [fetchPres, presDay]);

    let grid;
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            const exportProperties = {
                dataSource: presDay?.data
            };
            grid.pdfExport(exportProperties);
        }
    };

    const presenceTableHeader = [
        {
            headerText: 'NOM',
            field: 'agent.nom',
            textAlign: 'Left'
        },
        {
            headerText: 'POSTNOM',
            field: 'agent.postnom',
            textAlign: 'Left'
        },
        {
            headerText: 'PRENOM',
            field: 'agent.prenom',
            textAlign: 'Center'
        },
        {
            headerText: 'HEURE ARRIVEE',
            field: 'createdAt',
            textAlign: 'Center'
        },
        {
            headerText: 'STATUT',
            field: 'status',
            textAlign: 'Center'
        },
    ];

    return (
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className='mb-3'>
                <h2 className="text-xl font-bold text-slate-600 text-center">Présences d'aujourd'hui</h2>
            </div>
            <div
                className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
            >
                <GridComponent
                    id='gridPres'
                    dataSource={presDay?.data}
                    allowPaging
                    allowSorting
                    toolbar={['Search', 'Delete', 'PdfExport']}
                    toolbarClick={toolbarClick}
                    editSettings={{ allowDeleting: true, allowEditing: true }}
                    allowPdfExport={true}
                    ref={g => grid = g}
                >
                    <ColumnsDirective>
                        {presenceTableHeader.map((item, index) => (
                            <ColumnDirective key={item.headerText} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Search, Sort, Page, Selection, Edit, Filter, Toolbar, PdfExport]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default GridPresToDay;