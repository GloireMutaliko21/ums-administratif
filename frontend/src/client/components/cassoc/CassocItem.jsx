import React, { useState } from 'react';
import Button from '../../../components/Button';
import { handleUpdate } from '../../../api/put';
import { CASSOC_BASE_URL } from '../../../utils/constants';
import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import Popup from '../../../components/Popup';
import { handleChange } from '../../../utils/onChange';
import ClickLoad from '../../../components/Loaders/ClickLoad';
import { handlePost } from '../../../api/post';

const CassocItem = ({ data, setShowCommands, showCommands, selected, setSelected, user }) => {
    const { localUserData, setCassocList, showPopup, setShowPopup, setCassocFetch } = useStateContext();

    const [inLoading, setInLoading] = useState(false);

    //Montant souscription
    const [montant, setMontant] = useState();

    //Headers souscription
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localUserData?.token}`
    };

    const [newDescription, setNewDescription] = useState();
    const [newDatefin, setNewDatefin] = useState();

    const paramsUpdate = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localUserData?.token}`
        },
        body: JSON.stringify({ description: newDescription, datefin: newDatefin })
    };

    const handlePublish = async (idCassoc) => {
        const params = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localUserData?.token}`
            },
        };
        await handleUpdate(`${CASSOC_BASE_URL}/publish/${idCassoc}`, params);
        handleGet(localUserData?.token, `${CASSOC_BASE_URL}/all`, setCassocFetch, null);
    };

    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Concerné
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Description
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Date (fin)
                                    </th>
                                    {user.privilege === 'direction' &&
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                    }
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.length > 0 && data?.map(({ description, datefin, status, updatedAt, agent, souscriptions, id }, idx) => {
                                    const souscrStatus = souscriptions.find(souscr => souscr.agentId === user.id);

                                    return <tr key={id} className='bg-white even:bg-slate-50 cursor-pointer hover:bg-slate-50'>
                                        <td className="px-5 py-3 border-b border-gray-200 text-sm">
                                            <div className="flex">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img
                                                        className="w-full h-full rounded-full"
                                                        src={agent.imageUrl}
                                                        alt={agent.nom}
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-nowrap">
                                                        {agent.nom} {agent.postnom} {agent.prenom}
                                                    </p>
                                                    <p className="text-gray-600 whitespace-nowrap">{agent.matricule}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-3 border-b border-gray-200 text-sm relative">
                                            <p className="text-gray-900">{description}</p>
                                            <p className={`${souscrStatus && 'text-xs text-green-400 border border-green-400/30 rounded-full font-[500] w-max px-4'}`}>{souscrStatus && 'Déjà souscrit'}</p>
                                        </td>
                                        <td className="px-5 py-3 border-b border-gray-200 text-sm">
                                            <p className="text-gray-900 whitespace-nowrap">{datefin}</p>
                                            <p className="text-gray-600 whitespace-nowrap">Mis à jour : {new Date(updatedAt).toISOString().slice(0, 10)}</p>
                                        </td>
                                        {user.privilege === 'direction' &&
                                            <td className="px-5 py-3 border-b border-gray-200 text-sm">
                                                <p className={`whitespace-nowrap ${status === 'nonPublished' ? 'text-red-700 bg-red-100 border-red-200' : 'text-green-700 bg-green-100 border-green-300'} rounded-full text-center py-px border-[0.1px] px-2`}>{status === 'nonPublished' ? 'Non publié' : 'Publié'}</p>
                                            </td>
                                        }
                                        <td
                                            className="px-5 py-3 border-b border-gray-200 text-sm text-right relative"
                                        >
                                            <button
                                                type="button"
                                                className="inline-block text-sky-500 hover:text-amber-500"
                                                onClick={() => {
                                                    setShowCommands(state => !state)
                                                    setSelected(idx)
                                                }}
                                            >
                                                <svg
                                                    className="inline-block h-6 w-6 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                                    />
                                                </svg>
                                            </button>
                                            {showCommands && selected === idx &&
                                                <div className='absolute right-10 top-3 shadow p-2 h-min flex items-center justify-center rounded-md border border-sky-300 bg-white'>
                                                    {/* {children} */}
                                                    <div className="text-xs flex flex-col items-center">
                                                        {agent.id === user.id ?
                                                            <Button
                                                                label='Modifier'
                                                                style='text-green-600 font-semibold hover:underline hover:text-green-500'
                                                                onClick={() => setShowPopup('updateCassoc')}
                                                            /> :
                                                            <Button
                                                                label='Souscrire'
                                                                style='text-teal-600 font-bold hover:underline hover:text-teal-500'
                                                                onClick={() => setShowPopup('souscrire')}
                                                            />
                                                        }
                                                        {
                                                            status === 'nonPublished' &&
                                                            <Button
                                                                label='Publier'
                                                                style='text-amber-600 font-bold hover:underline hover:text-amber-500'
                                                                onClick={() => handlePublish(id)}
                                                            />
                                                        }
                                                        {
                                                            showPopup === 'updateCassoc' &&
                                                            <Popup
                                                                titre='Modifier le cas social'
                                                                children={
                                                                    <div>
                                                                        <textarea
                                                                            defaultValue={description}
                                                                            cols="30" rows="5"
                                                                            placeholder='Brève description...'
                                                                            className='border p-5 resize-none rounded outline-none text-slate-600 w-full'
                                                                            onChange={(e) => handleChange(e, setNewDescription)}
                                                                        ></textarea>
                                                                        <div>
                                                                            <label className='font-bold text-sm'>Date événement</label>
                                                                            <div className='bg-gray-200 flex justify-between items-center relative my-2'>
                                                                                <input
                                                                                    className={`text-gray-700 text-sm focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block appearance-none w-full`}
                                                                                    type='date'
                                                                                    defaultValue={datefin}
                                                                                    onChange={(e) => handleChange(e, setNewDatefin)}
                                                                                    name='date'
                                                                                    min={new Date().toISOString().split('T')[0]}
                                                                                >
                                                                                </input>
                                                                            </div>
                                                                        </div>
                                                                        <Button
                                                                            label={inLoading ? <ClickLoad text='Enregistrement' /> : 'Enregistrer'}
                                                                            style='flex justify-center w-full bg-sky-500 hover:bg-sky-400 text-white p-3 mt-5'
                                                                            onClick={async () => {
                                                                                await handleUpdate(`${CASSOC_BASE_URL}/update/${id}`, paramsUpdate);
                                                                                setCassocFetch(true)
                                                                                handleGet(localUserData?.token, `${CASSOC_BASE_URL}/all`, setCassocList, null);
                                                                            }}
                                                                        />
                                                                    </div>
                                                                }
                                                            />
                                                        }
                                                        {
                                                            showPopup === 'souscrire' &&
                                                            <div className='text-center text-sm'>
                                                                <Popup
                                                                    titre='Souscription cas social'
                                                                    children={
                                                                        <div>
                                                                            <p className='text-sm'>Vous souscrivez au cas :</p>
                                                                            <div className='text-slate-700 mb-5'>
                                                                                <p>{description.slice(0, 50)}...</p>
                                                                                <p>de l'agent: <span className='text-sky-500 font-semibold'>{agent.nom} {agent.postnom} {agent.prenom}</span></p>
                                                                            </div>
                                                                            <div className='text-red-400 border border-red-400 rounded-full'>
                                                                                Cette opération est irréversible
                                                                            </div>
                                                                            <div className='mt-8 flex items-center flex-col'>
                                                                                <input
                                                                                    type="number"
                                                                                    name='nombre'
                                                                                    placeholder='Montant'
                                                                                    className='border placeholder:text-sm placeholder:text-sky-500  p-2 rounded-md outline-none mb-2 w-64'
                                                                                    onChange={(e) => handleChange(e, setMontant)}
                                                                                />
                                                                                <Button
                                                                                    label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                                                                                    style='mt-2 flex justify-center p-[9px] w-64 bg-sky-500 text-white hover:bg-sky-400'
                                                                                    onClick={async () => {
                                                                                        await handlePost(
                                                                                            localUserData?.token,
                                                                                            headers,
                                                                                            JSON.stringify({ montant, casSocId: id }),
                                                                                            `${CASSOC_BASE_URL}/souscription/new`,
                                                                                            () => { },
                                                                                            null,
                                                                                            setInLoading,
                                                                                            () => { },
                                                                                            `${CASSOC_BASE_URL}/all`,
                                                                                            () => { },
                                                                                            setCassocFetch
                                                                                        );
                                                                                        await handleGet(localUserData?.token, `${CASSOC_BASE_URL}/all`, setCassocFetch, null);
                                                                                    }}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    }
                                                                />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            }
                                        </td>
                                    </tr>
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CassocItem;