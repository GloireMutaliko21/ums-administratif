import React, { useEffect, useRef, useState } from 'react';

import defaultPrfl from "../../../public/images/defaultPrfl.png";
import { useStateContext } from '../../context/ContextProvider';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ClickLoad from '../../components/Loaders/ClickLoad';
import { toastFailure, toastSuccess } from '../../utils/Toastify';
import { AGENT_BASE_URL, BASE_API_URL } from '../../utils/constants';
import { handleChange } from '../../utils/onChange';

const Compte = () => {
    const { localUserData, setLocalUserData } = useStateContext();
    const [oldPassword, setOldPassword] = useState();
    const [password, setPassword] = useState();
    const [username, setUsername] = useState(localUserData?.agent?.username);

    const updateProfile = async () => {
        setInLoading(true);
        try {
            const params = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localUserData.token}`
                },
                body: JSON.stringify({ oldPassword, password, username })
            };
            const response = await fetch(`${BASE_API_URL}${AGENT_BASE_URL}/edit/profile`, params);
            if (response.status === 201) {
                setInLoading(false);
                toastSuccess('MAJ réussi');
                const responseData = await response.json();
                setLocalUserData(responseData);
                localStorage.setItem('user', JSON.stringify(responseData));
            } else {
                if (response.status === 401) {
                    localStorage.removeItem('user');
                    localStorage.removeItem('isLogged');
                    toastFailure('Session expirée');
                }
                toastFailure('Echec de MAJ');
            }
        } catch (err) {
            console.log(err)
            toastFailure('Echec de MAJ');
        }
    }

    const [inLoading, setInLoading] = useState(false);

    const [defaultUserImage, setDefaultUserImage] = useState(defaultPrfl);

    const [editingMode, setEditingMode] = useState(false);

    // const handleChange = useMemo(() =>
    //     (e) => setUserInfos({ ...userInfos, [e.target.name]: e.target.value }), [userInfos]
    // );

    return (
        <div className='flex items-end justify-center gap-16'>
            <div className='flex flex-col items-center justify-center'>
                <div className='h-56 w-56 relative flex justify-center items-center border rounded-full'>
                    <div className="relative flex justify-center items-center">
                        <div className="relative">
                            <img src={localUserData?.agent?.imageUrl || defaultUserImage} alt="image" className="w-52 h-52 rounded-full object-cover" />
                        </div>
                    </div>
                </div>
                <div className='border shadow p-4 m-2 text-center'>
                    <h1 className='text-xl font-bold mb-3'>Informations générales</h1>
                    <div>
                        <div className='flex items-center gap-4'>
                            <p>Noms :</p>
                            <span className='font-bold text-slate-600'>{localUserData?.agent?.nom} {localUserData?.agent?.postnom} {localUserData?.agent?.prenom}</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p>Nom d'uilisateur :</p>
                            <span className='font-bold text-slate-600'>{localUserData?.agent?.username}</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <p>Numéro matricule :</p>
                            <span className='font-bold text-slate-600'>{localUserData?.agent?.matricule}</span>
                        </div>
                    </div>
                </div>
                <div className=''>
                    {!editingMode &&
                        <Button
                            label={editingMode ? 'Annuler' : 'Modifier les paramètres de connexion'}
                            style='mt-3 text-sm text-white cursor-pointer bg-amber-500 rounded-sm px-4 py-[9px] hover:shadow-2xl'
                            onClick={() => setEditingMode(state => !state)}
                        />
                    }
                </div>
            </div>
            {
                editingMode &&
                <div>
                    <Input
                        label='Username'
                        type='text'
                        defaultValue={localUserData?.agent?.username}
                        onChange={(e) => handleChange(e, setUsername)}
                        name='username'
                    />
                    <Input
                        label='Mot de passe'
                        type='password'
                        value={oldPassword}
                        onChange={(e) => handleChange(e, setOldPassword)}
                        name='oldpwd'
                    />
                    <Input
                        label='Nouveau mot de passe'
                        type='password'
                        value={password}
                        onChange={(e) => handleChange(e, setPassword)}
                        name='newpwd'
                    />
                    <div className='flex justify-between'>
                        <Button
                            label={editingMode ? 'Annuler' : 'Modifier les paramètres de connexion'}
                            style='mt-3 text-sm text-white cursor-pointer bg-amber-500 rounded-sm px-4 py-[9px] hover:shadow-2xl'
                            onClick={() => setEditingMode(state => !state)}
                        />
                        <Button
                            label={inLoading ? <ClickLoad text='Traitement' /> : 'Modifier'}
                            style='mt-3 text-sm text-white cursor-pointer bg-sky-500 rounded-sm px-4 py-[9px] hover:shadow-2xl'
                            onClick={updateProfile}
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default Compte;