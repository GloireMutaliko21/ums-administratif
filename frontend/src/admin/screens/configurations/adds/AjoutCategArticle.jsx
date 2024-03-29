import React, { useState } from 'react';

import Input from '../../../../components/Input';
import { handleChange } from '../../../../utils/onChange';
import Button from '../../../../components/Button';
import ClickLoad from '../../../../components/Loaders/ClickLoad';
import { handlePost } from '../../../../api/post';
import { useStateContext } from '../../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../../utils/constants';

const AjoutCategArticle = ({ fetchCateg, setFetchCateg, categList, setCategList }) => {
    const { localUserData } = useStateContext();

    const [libelle, setLibelle] = useState();
    const [inLoading, setInLoading] = useState(false);

    return (
        <div className='p-2'>
            <div>
                <h1 className='font-bold text-xl text-slate-700 text-center p-1 border-b bg-gray-100'>Ajouter catégorie article</h1>
            </div>
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
                        `${INVENTAIRE_BASE_URL}/categ/new`,
                        setCategList,
                        '',
                        setInLoading,
                        () => { },
                        `${INVENTAIRE_BASE_URL}/categ/all`,
                        () => { },
                        setFetchCateg,
                    );
                }}
            />
        </div>
    );
}

export default AjoutCategArticle;