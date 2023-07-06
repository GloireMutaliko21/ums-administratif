import React, { useMemo, useState } from 'react';

import { handlePost } from '../../../../api/post';
import Button from '../../../../components/Button';
import Input from '../../../../components/Input';
import ClickLoad from '../../../../components/Loaders/ClickLoad';
import { useStateContext } from '../../../../context/ContextProvider';
import { GRADE_BASE_URL } from '../../../../utils/constants';
import { handleChange } from '../../../../utils/onChange';

const AjoutGrade = () => {
    const { localUserData, setGrades, setFetchGrades } = useStateContext();

    const [inLoading, setInLoading] = useState(false);

    const [titre, setTitre] = useState();
    const [taux, setTaux] = useState({
        base: 0,
        alloc: 0,
        conge: 0,
        ferie: 0,
        maladAcc: 0,
        heureSupp: 0,
    });

    const handleChangeTaux = useMemo(() =>
        (e) =>
            setTaux({ ...taux, [e.target.name]: e.target.value }),
        [taux]
    );

    return (
        <div className='p-2 shadow border-t'>
            <div>
                <h1 className='font-bold text-2xl text-slate-700 text-center p-1 border-b bg-gray-100'>Ajouter un grade</h1>
            </div>
            <div className='text-center my-4 text-slate-600'>
                <Input
                    label='Titre du grade'
                    placeholder='Ex. P.E, P.O, ASS1...'
                    onChange={(e) => handleChange(e, setTitre)}
                />
            </div>
            <div>
                <h1 className='font-bold text-base text-slate-700 text-center p-1 border-b'>Taux</h1>
                <div className='flex gap-3'>
                    <Input
                        placeholder='Taux salaire de base'
                        type='number'
                        name='base'
                        onChange={handleChangeTaux}
                    />
                    <Input
                        placeholder='Taux alloc. fam.'
                        type='number'
                        name='alloc'
                        onChange={handleChangeTaux}
                    />
                </div>
                <div className='flex gap-3'>
                    <Input
                        placeholder='Taux congés'
                        type='number'
                        name='conge'
                        onChange={handleChangeTaux}
                    />
                    <Input
                        placeholder='Taux J. fériés'
                        type='number'
                        name='ferie'
                        onChange={handleChangeTaux}
                    />
                </div>
                <div className='flex gap-3'>
                    <Input
                        placeholder='Taux J. maladie'
                        type='number'
                        name='maladAcc'
                        onChange={handleChangeTaux}
                    />
                    <Input
                        placeholder='Taux H/Supp'
                        type='number'
                        name='heureSupp'
                        onChange={handleChangeTaux}
                    />
                </div>
                <div className='mt-1'>
                    <Button
                        label={inLoading ? <ClickLoad text='Enregistrement' /> : 'Enregistrer'}
                        style='flex justify-center rounded-none bg-sky-500 hover:shadow-xl text-white p-2 my-2 w-full'
                        onClick={async () => {
                            await handlePost(
                                localUserData?.token,
                                { Authorization: `Bearer ${localUserData?.token}`, 'Content-Type': 'application/json' },
                                JSON.stringify({ titre, taux }),
                                `${GRADE_BASE_URL}/new`,
                                setGrades,
                                '',
                                setInLoading,
                                () => { },
                                `${GRADE_BASE_URL}`,
                                () => { },
                                setFetchGrades
                            );
                            setTaux({ base: 0, alloc: 0, conge: 0, ferie: 0, maladAcc: 0, heureSupp: 0, });
                            setTitre();
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AjoutGrade;