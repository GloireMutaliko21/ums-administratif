import React, { useEffect } from 'react';
import { ColumnDirective, GridComponent, Inject, Search, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective, PdfExport } from "@syncfusion/ej2-react-grids";

import { useStateContext } from '../../../../context/ContextProvider';
import { handleGet } from '../../../../api/get';
import { bienTableSituationAmHeader } from '../../../../admin/data/componentsData';
import { PATRIMOINE_BASE_URL } from '../../../../utils/constants';

const Amortissements = () => {
    const { localUserData, biensList, setBiensList, fetchBiens, setFetchBiens } = useStateContext();

    useEffect(() => {
        if (fetchBiens) {
            handleGet(localUserData.token, `${PATRIMOINE_BASE_URL}/bien/all`, setBiensList, null);
        }
        return () => {
            setFetchBiens(false);
        }
    }, [fetchBiens]);

    let grid;
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            const exportProperties = {
                dataSource: biensList?.data
            };
            grid.pdfExport(exportProperties);
        }
    };

    return (
        <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className='mb-3'>
                    <h2 className="text-xl font-[800px] tracking-tight to-slate-900 text-center">Situation amortissements</h2>
                </div>
                <div
                    className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <GridComponent
                        id='grid'
                        dataSource={biensList?.data}
                        allowPaging
                        allowSorting
                        toolbar={['Search', 'Delete', 'PdfExport']}
                        toolbarClick={toolbarClick}
                        editSettings={{ allowDeleting: true, allowEditing: true }}
                        allowPdfExport={true}
                        ref={g => grid = g}
                    >
                        <ColumnsDirective>
                            {bienTableSituationAmHeader.map((item, index) => (
                                <ColumnDirective key={item.headerText} {...item} />
                            ))}
                        </ColumnsDirective>
                        <Inject services={[Search, Sort, Page, Selection, Edit, Filter, Toolbar, PdfExport]} />
                    </GridComponent>
                </div>
            </div>
        </div>
    );
}

export default Amortissements;