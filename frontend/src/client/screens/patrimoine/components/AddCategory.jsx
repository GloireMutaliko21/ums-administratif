import React, { useState } from 'react';
import Button from '../../../../components/Button';

import Input from '../../../../components/Input';
import { handleChange } from '../../../../utils/onChange';
import ClickLoad from '../../../../components/Loaders/ClickLoad';
import { handlePost } from '../../../../api/post';
import { useStateContext } from '../../../../context/ContextProvider';
import { PATRIMOINE_BASE_URL } from '../../../../utils/constants';

const AddCategory = () => {
    const { localUserData, setCategorieBien, setFetchCategBien } = useStateContext();

    const [libelle, setLibelle] = useState();
    const [inLoading, setInLoading] = useState(false);

    return (
        <div className='p-2 shadow-sm border-t'>
            <div>
                <h1 className='font-bold text-2xl text-slate-700 text-center p-1 border-b bg-gray-100'>Ajout catégorie</h1>
            </div>
            <div className='mt-7'>
                <Input
                    placeholder='Libellé'
                    onChange={(e) => handleChange(e, setLibelle)}
                />
                <Button
                    label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                    style='flex justify-center rounded-none bg-sky-500 hover:shadow-xl text-white p-2 my-2'
                    onClick={() => {
                        handlePost(
                            localUserData?.token,
                            { Authorization: `Bearer ${localUserData?.token}`, 'Content-Type': 'application/json' },
                            JSON.stringify({ libelle }),
                            `${PATRIMOINE_BASE_URL}/categ/new`,
                            setCategorieBien,
                            'categoriesBien',
                            setInLoading,
                            () => { },
                            `${PATRIMOINE_BASE_URL}/categ/all`,
                            () => { },
                            setFetchCategBien
                        );
                    }}
                />
            </div>
        </div>
    );
}

export default AddCategory;