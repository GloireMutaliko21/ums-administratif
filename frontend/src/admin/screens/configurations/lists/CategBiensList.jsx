import React, { useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Search, Toolbar, Inject } from "@syncfusion/ej2-react-grids";

import { handleGet } from '../../../../api/get';
import { useStateContext } from '../../../../context/ContextProvider';
import { PATRIMOINE_BASE_URL } from '../../../../utils/constants';

const CategBiensList = () => {
    const { categorieBien, setCategorieBien, fetchCategBien, setFetchCategBien, localUserData } = useStateContext();

    useEffect(() => {
        if (fetchCategBien) {
            handleGet(localUserData?.token, `${PATRIMOINE_BASE_URL}/categ/all`, setCategorieBien, 'categoriesBien');
        }
        return () => {
            setFetchCategBien(false)
        }
    }, [fetchCategBien]);

    const categBiensGrid = [
        {
            headerText: 'ID',
            width: '150',
            field: 'id',
            textAlign: 'Left'
        },
        {
            headerText: 'LIBELLE',
            width: '150',
            field: 'libelle',
            textAlign: 'Left'
        },
    ]

    return (
        <div className='mt-3'>
            <div>
                <h1 className='font-bold text-2xl text-slate-700 text-center p-1 border-b bg-gray-100'>Catégories biens</h1>
            </div>
            <div className='m-2 bg-white rounded-3xl'>
                <GridComponent
                    dataSource={categorieBien?.data}
                    allowPaging
                    allowSorting
                    toolbar={['Search']}
                    editSettings={{ allowDeleting: true, allowEditing: true }}
                    width='auto'
                    rowSelected={() => { console.log('ok') }}
                >
                    <ColumnsDirective>
                        {categBiensGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Sort, Page, Search, Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default CategBiensList;