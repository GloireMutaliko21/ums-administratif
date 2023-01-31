import React, { useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Search, Toolbar, Inject } from "@syncfusion/ej2-react-grids";

import { handleGet } from '../../../../api/get';
import { useStateContext } from '../../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../../utils/constants';

const CategArticlList = ({ fetchCateg, setFetchCateg, categList, setCategList }) => {
    const { localUserData } = useStateContext();

    useEffect(() => {
        if (fetchCateg) {
            handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/categ/all`, setCategList, 'categArticl');
        }
        return () => {
            setFetchCateg(false)
        }
    }, [fetchCateg]);

    const categArticleGrid = [
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
                <h1 className='font-bold text-2xl text-slate-700 text-center p-1 border-b bg-gray-100'>Catégories articles</h1>
            </div>
            <div className='m-2 bg-white rounded-3xl'>
                <GridComponent
                    dataSource={categList?.data}
                    allowPaging
                    allowSorting
                    toolbar={['Search']}
                    editSettings={{ allowDeleting: true, allowEditing: true }}
                    width='auto'
                    rowSelected={() => { console.log('ok') }}
                >
                    <ColumnsDirective>
                        {categArticleGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Sort, Page, Search, Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default CategArticlList;