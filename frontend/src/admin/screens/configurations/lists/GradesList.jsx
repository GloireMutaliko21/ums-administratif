import { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Page, Search, Toolbar, Inject } from "@syncfusion/ej2-react-grids";

import { handleGet } from '../../../../api/get';
import { useStateContext } from '../../../../context/ContextProvider';
import { GRADE_BASE_URL } from '../../../../utils/constants';

const GradesList = () => {
    const { localUserData, grades, setGrades, fetchGrades, setFetchGrades } = useStateContext();

    useEffect(() => {
        if (fetchGrades) {
            handleGet(localUserData?.token, `${GRADE_BASE_URL}`, setGrades, null);
        }

        return () => {
            setFetchGrades(false);
        }
    }, [fetchGrades]);

    const gradesGrid = [
        {
            headerText: 'TITRE',
            width: '150',
            field: 'titre',
            textAlign: 'Left'
        },
        {
            headerText: 'BASE SAL',
            width: '150',
            field: 'taux.base',
            textAlign: 'Left'
        },
        {
            headerText: '% ALLOC',
            width: '150',
            field: 'taux.alloc',
            textAlign: 'Left'
        },
        {
            headerText: '% CONGE',
            width: '150',
            field: 'taux.conge',
            textAlign: 'Left'
        },
        {
            headerText: '% FERIES',
            width: '150',
            field: 'taux.ferie',
            textAlign: 'Left'
        },
        {
            headerText: '% MALAD',
            width: '150',
            field: 'taux.maladAcc',
            textAlign: 'Left'
        },
        {
            headerText: '% H.SUPP',
            width: '150',
            field: 'taux.heureSupp',
            textAlign: 'Left'
        }
    ];

    // const data = grades?.data?.map((grade) => {
    //     return { ...grade, taux: JSON.parse(grade?.taux) }
    // });

    return (
        <div className='p-2 col-span-2'>
            <div>
                <h1 className='font-bold text-2xl text-slate-700 text-center p-1 border-b bg-gray-100'>Grades enregistrés</h1>
            </div>
            <div className='m-2 bg-white rounded-3xl'>
                <GridComponent
                    dataSource={grades?.data}
                    allowPaging
                    allowSorting
                    toolbar={['Search']}
                    editSettings={{ allowDeleting: true, allowEditing: true }}
                    width='auto'
                    rowSelected={() => { console.log('ok') }}
                >
                    <ColumnsDirective>
                        {gradesGrid.map((item, index) => (
                            <ColumnDirective key={index} {...item} />
                        ))}
                    </ColumnsDirective>
                    <Inject services={[Sort, Page, Search, Toolbar]} />
                </GridComponent>
            </div>
        </div>
    );
}

export default GradesList;