import React, { useEffect, useRef, useState } from 'react';
import { MdPhotoCamera } from 'react-icons/md';

import defaultPrfl from "../../../public/images/defaultPrfl.png";
import { useStateContext } from '../../context/ContextProvider';
import Button from '../../components/Button';
import Input from '../../components/Input';
import ClickLoad from '../../components/Loaders/ClickLoad';

const Compte = () => {
    const [inLoading, setInLoading] = useState(false);

    const imageRef = useRef();
    const [defaultUserImage, setDefaultUserImage] = useState(defaultPrfl);
    const [selectedFile, setSelectedFile] = useState();

    const handleChangeImage = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const showOpenFileDialog = () => {
        imageRef.current.click();
    };

    useEffect(() => {
        if (selectedFile) {
            const objectURL = URL.createObjectURL(selectedFile);
            setDefaultUserImage(objectURL);
            return () => URL.revokeObjectURL(objectURL);
        }
    }, [selectedFile]);

    const [editingMode, setEditingMode] = useState(false);
    const { localUserData, boolingState } = useStateContext();

    // const handleChange = useMemo(() =>
    //     (e) => setUserInfos({ ...userInfos, [e.target.name]: e.target.value }), [userInfos]
    // );

    return (
        <div className='flex items-end justify-center gap-16'>
            <div className='flex flex-col items-center justify-center'>
                <div className='h-56 w-56 relative flex justify-center items-center border rounded-full'>
                    <div className="relative flex justify-center items-center">
                        <input ref={imageRef} type="file" name="image" id="image" className="hidden" onChange={handleChangeImage}>
                        </input>
                        <div className="relative">
                            <img src={!selectedFile ? localUserData?.agent?.imageUrl : defaultUserImage} alt="image" className="w-52 h-52 rounded-full object-cover" />
                            <div onClick={showOpenFileDialog} className="absolute bottom-0 right-0 text-2xl text-teal-900"><MdPhotoCamera className='cursor-pointer text-sky-500 animate-bounce' /></div>
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
                        def
                        defaultValue={localUserData?.agent?.username}
                        // onChange={handleChange}
                        name='username'
                    />
                    <Input
                        label='Mot de passe actuel'
                        type='password'
                        // onChange={handleChange}
                        name='username'
                    />
                    <Input
                        label='Nouveau mot de passe'
                        type='password'
                        // onChange={handleChange}
                        name='username'
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
                        />
                    </div>
                </div>
            }
        </div>
    );
}

export default Compte;