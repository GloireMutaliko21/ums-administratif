import React, { useEffect, useState } from 'react';
import { QrReader } from 'react-qr-reader';
import { ColumnDirective, GridComponent, Inject, Search, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective, PdfExport } from "@syncfusion/ej2-react-grids";

import { handlePost } from '../../../api/post';
import { useStateContext } from '../../../context/ContextProvider';
import { handleGet } from '../../../api/get';
import { PRESENCE_BASE_URL } from '../../../utils/constants';

const ScanPres = () => {
    const { localUserData } = useStateContext();

    const [presDay, setPresDay] = useState();
    const [fetchPres, setFetchPres] = useState(true)

    useEffect(() => {
        if (fetchPres) {
            handleGet(localUserData?.token, `${PRESENCE_BASE_URL}/pres`, setPresDay, 'presDay');
        }
        return () => {
            setFetchPres(false);
        }
    }, [fetchPres]);
    let grid;
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            const exportProperties = {
                dataSource: presDay?.data
            };
            grid.pdfExport(exportProperties);
        }
    };

    const [presState, setPresState] = useState();

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
        <div className='grid grid-cols-3 gap-10 mt-5'>
            <div className='w-[400]'>
                <h1 className='text-center text-lg font-bold text-slate-600'>Rapprochez le QRCode de votre carte de service</h1>
                <QrReader
                    onResult={async (result, error) => {
                        if (!!result) {
                            // setData(result?.text);
                            await handlePost(
                                localUserData?.token,
                                { Authorization: `Bearer ${localUserData?.token}`, 'Content-Type': 'application/json' },
                                JSON.stringify({ agentId: result?.text, dateNow: new Date() }),
                                `${PRESENCE_BASE_URL}/pres/new`,
                                setPresState,
                                '',
                                () => { },
                                () => { },
                                `${PRESENCE_BASE_URL}/pres`,
                                () => { },
                                setFetchPres,
                            );
                        }

                        if (!!error) {
                            console.log(error);
                        }
                    }}

                    style={{ width: '50%' }}
                    scanDelay={1000}
                />
            </div>
            <div className='col-span-2'>
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
            </div>
        </div>
    );
}

export default ScanPres;