import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../api/get';
import Input from '../../../components/Input';
import { useStateContext } from '../../../context/ContextProvider';
import { handleChange } from '../../../utils/onChange';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import Select from '../../../components/Select';
import Button from '../../../components/Button';
import ClickLoad from '../../../components/Loaders/ClickLoad';
import { handlePost } from '../../../api/post';

const AddArticle = () => {
    const { localUserData, setFetchArticles } = useStateContext();

    const [designation, setDesignation] = useState();
    const [stockAlerte, setStockAlerte] = useState();
    const [choosedCateg, setChoosedCateg] = useState('');
    const [choosedUnite, setChoosedUnite] = useState('');

    const [inLoading, setInLoading] = useState(false);

    const [categories, setCategories] = useState();
    const [unites, setUnites] = useState();

    useEffect(() => {
        handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/categ/all`, setCategories, 'categories');
        handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/unite/all`, setUnites, 'categories');
    }, []);

    return (
        <div className='p-2'>
            <div>
                <h1 className='font-bold text-2xl text-slate-700 text-center p-1 border-b bg-gray-100'>Ajouter article</h1>
            </div>
            <div className='flex flex-col'>
                <div className='grid grid-cols-2 gap-3'>
                    <Input
                        placeholder='Désignation'
                        onChange={(e) => handleChange(e, setDesignation)}
                        style='w-full'
                    />
                    <Input
                        placeholder='Stock Alerte'
                        onChange={(e) => handleChange(e, setStockAlerte)}
                        type='number'
                    />
                </div>
                <div className='flex gap-3'>
                    <Select
                        data={categories?.data}
                        label='Catgorie'
                        onChange={(e) => handleChange(e, setChoosedCateg)}
                        value={choosedCateg}
                    />
                    <Select
                        data={unites?.data}
                        label='Unité de gestion'
                        onChange={(e) => handleChange(e, setChoosedUnite)}
                        value={choosedUnite}
                    />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <Button
                        label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                        style='flex justify-center rounded-none bg-sky-500 hover:shadow-xl text-white p-2 my-2'
                        onClick={() => {
                            handlePost(
                                localUserData.token,
                                { Authorization: `Bearer ${localUserData.token}`, 'Content-Type': 'application/json' },
                                JSON.stringify({ designation: designation, stockAlerte, uniteId: choosedUnite, categArtcleId: choosedCateg }),
                                `${INVENTAIRE_BASE_URL}/article/new`,
                                () => { },
                                '',
                                setInLoading,
                                () => { },
                                `${INVENTAIRE_BASE_URL}/article/all`,
                                () => { },
                                setFetchArticles
                            );
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddArticle;