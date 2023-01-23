import React, { useEffect } from 'react';
import { ColumnDirective, GridComponent, Inject, Search, Sort, Page, Selection, Edit, Filter, Toolbar, ColumnsDirective, PdfExport } from "@syncfusion/ej2-react-grids";

import { bienTableHeader } from '../../../../admin/data/componentsData';
import { handleGet } from '../../../../api/get';
import { PATRIMOINE_BASE_URL } from '../../../../utils/constants';
import { useStateContext } from '../../../../context/ContextProvider';

const AllBiens = () => {
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
                            {bienTableHeader.map((item, index) => (
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

export default AllBiens;