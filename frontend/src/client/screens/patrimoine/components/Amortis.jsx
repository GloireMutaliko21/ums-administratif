import React, { useEffect } from 'react';
import { ColumnDirective, GridComponent, Inject, Search, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective, PdfExport } from "@syncfusion/ej2-react-grids";


import { handleGet } from '../../../../api/get';
import { useStateContext } from '../../../../context/ContextProvider';
import { PATRIMOINE_BASE_URL } from '../../../../utils/constants';
import { bienTableAmortisHeader } from '../../../../admin/data/componentsData';

const Amortis = () => {
    const { localUserData, amortisList, setAmortisList, fetchAmortis, setFetchAmortis } = useStateContext();

    useEffect(() => {
        if (fetchAmortis) {
            handleGet(localUserData?.token, `${PATRIMOINE_BASE_URL}/bien/amortis`, setAmortisList, null);
        }
        return () => {
            setFetchAmortis(false);
        }
    }, [fetchAmortis]);

    let grid;
    const toolbarClick = (args) => {
        if (grid && args.item.id === 'grid_pdfexport') {
            const exportProperties = {
                dataSource: amortisList?.data
            };
            grid.pdfExport(exportProperties);
        }
    };

    return (
        <div>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className='mb-3'>
                    <h2 className="text-xl font-[800px] tracking-tight to-slate-900 text-center">Biens amortis</h2>
                </div>
                <div
                    className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                >
                    <GridComponent
                        id='grid'
                        dataSource={amortisList?.data}
                        allowPaging
                        allowSorting
                        toolbar={['Search', 'Delete', 'PdfExport']}
                        toolbarClick={toolbarClick}
                        editSettings={{ allowDeleting: true, allowEditing: true }}
                        allowPdfExport={true}
                        ref={g => grid = g}
                    >
                        <ColumnsDirective>
                            {bienTableAmortisHeader.map((item, index) => (
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

export default Amortis;