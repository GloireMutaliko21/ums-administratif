import React, { useEffect } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Search, Toolbar, Inject } from "@syncfusion/ej2-react-grids";

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';

const Articles = () => {
    const { localUserData, articlesList, setArticlesList, fetchArticles, setFetchArticles } = useStateContext();

    useEffect(() => {
        if (fetchArticles) {
            handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/article/all`, setArticlesList, null);
        }
        return () => {
            setFetchArticles(false);
        }
    }, [articlesList, fetchArticles]);

    const articlesGrid = [
        {
            headerText: 'Designation',
            // width: '150',
            field: 'designation',
            textAlign: 'Center'
        },
        {
            headerText: 'Stock',
            field: 'quantite',
            // width: '90',
            textAlign: 'Center',
        },
        {
            headerText: 'Unité',
            // width: '120',
            textAlign: 'Center',
            field: 'unite.libelle'
        },

        {
            headerText: 'Catégorie',
            field: 'categArtcle.libelle',
            // width: '135',
            textAlign: 'Center'
        },
    ];

    return (
        <div className='p-2'>
            <div>
                <h1 className='font-bold text-2xl text-slate-700 text-center p-1 border-b bg-gray-100'>Liste des articles</h1>
            </div>
            <div className='m-2 bg-white rounded-3xl'>
                <GridComponent
                    dataSource={articlesList?.data}
                    allowPaging
                    allowSorting
                    toolbar={['Search']}
                    width='auto'
                    rowSelected={() => { console.log('ok') }}
                >
                    <ColumnsDirective>
                        {articlesGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Sort, Page, Search, Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default Articles;