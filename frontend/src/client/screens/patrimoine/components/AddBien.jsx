import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../../api/get';
import Input from '../../../../components/Input';
import { useStateContext } from '../../../../context/ContextProvider';
import { PATRIMOINE_BASE_URL } from '../../../../utils/constants';
import { handleChange } from '../../../../utils/onChange';
import Select from '../../../../components/Select';
import Button from '../../../../components/Button';
import ClickLoad from '../../../../components/Loaders/ClickLoad';
import { handlePost } from '../../../../api/post';

const AddBien = () => {
    const { categorieBien, setCategorieBien, fetchCategBien, setFetchCategBien, localUserData, fetchBiens, setFetchBiens, biensList, setBiensList, } = useStateContext();

    const [inLoading, setInLoading] = useState(false);

    const [libelle, setLibelle] = useState();
    const [valDepart, setValDepart] = useState();
    const [duree, setDuree] = useState();
    const [categorie, setCategorie] = useState();
    const [service, setService] = useState();

    useEffect(() => {
        if (fetchCategBien) {
            handleGet(localUserData?.token, `${PATRIMOINE_BASE_URL}/categ/all`, setCategorieBien, 'categoriesBien');
        }
        return () => {
            setFetchCategBien(false)
        }
    }, [fetchCategBien]);

    return (
        <div className='p-2 shadow-sm border-t'>
            <div>
                <h1 className='font-bold text-2xl text-slate-700 text-center p-1 border-b bg-gray-100'>Enregistrer un bien</h1>
            </div>
            <div className='grid grid-cols-2 gap-5 mt-2 p-3'>
                <div>
                    <Input
                        placeholder='Désignation'
                        type='text'
                        onChange={(e) => handleChange(e, setLibelle)}
                    />
                    <Input
                        placeholder='Valeur'
                        type='number'
                        onChange={(e) => handleChange(e, setValDepart)}
                    />
                    <Input
                        placeholder="Service d'affectation"
                        type='text'
                        onChange={(e) => handleChange(e, setService)}
                    />
                    <Button
                        label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                        style='flex justify-center rounded-none bg-sky-500 hover:shadow-xl text-white p-2 my-2'
                        onClick={() => {
                            handlePost(
                                localUserData?.token,
                                { Authorization: `Bearer ${localUserData?.token}`, 'Content-Type': 'application/json' },
                                JSON.stringify({ libelle, valDepart, duree, service, categBienId: categorie }),
                                `${PATRIMOINE_BASE_URL}/bien/new`,
                                setBiensList,
                                'biens',
                                setInLoading,
                                () => { },
                                `${PATRIMOINE_BASE_URL}/bien/all`,
                                () => { },
                                setBiensList
                            );
                        }}
                    />
                </div>
                <div>
                    <Input
                        placeholder='Durée en années'
                        type='number'
                        onChange={(e) => handleChange(e, setDuree)}
                    />
                    <Select
                        data={categorieBien?.data?.length > 0 ? categorieBien?.data : []}
                        label='Catégorie bien'
                        onChange={(e) => handleChange(e, setCategorie)}
                        value={categorie}
                    />
                </div>
            </div>
        </div>
    );
}

export default AddBien;