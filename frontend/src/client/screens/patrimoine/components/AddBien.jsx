import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../../api/get';
import Input from '../../../../components/Input';
import { useStateContext } from '../../../../context/ContextProvider';
import { PATRIMOINE_BASE_URL } from '../../../../utils/constants';
import { handleChange } from '../../../../utils/onChange';
import Select from '../../../../components/Select';

const AddBien = () => {
    const { categorieBien, setCategorieBien, fetchCategBien, setFetchCategBien, localUserData } = useStateContext();

    const [inLoading, setInLoading] = useState(false);

    const [libelle, setLibelle] = useState();
    const [valDepart, setValDepart] = useState();
    const [duree, setDuree] = useState();
    const [categorie, setCategorie] = useState();

    useEffect(() => {
        if (fetchCategBien) {
            handleGet(localUserData.token, `${PATRIMOINE_BASE_URL}/categ/all`, setCategorieBien, 'categoriesBien');
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
                </div>
                <div>

                    <Input
                        placeholder='Duée en années'
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