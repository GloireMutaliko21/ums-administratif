import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import AddArticle from './AddArticle';
import Articles from './Articles';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import { handleChange } from '../../../utils/onChange';
import Input from '../../../components/Input';
import ClickLoad from '../../../components/Loaders/ClickLoad';
import Button from '../../../components/Button';
import { handlePost } from '../../../api/post';

const Operations = () => {
    const { localUserData, articlesList, setArticlesList, fetchArticles, setFetchArticles } = useStateContext();

    useEffect(() => {
        if (fetchArticles) {
            handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/article/all`, setArticlesList, null);
        }
        return () => {
            setFetchArticles(false);
        }
    }, [articlesList, fetchArticles]);

    const [choosedArtEntrie, setChoosedArtEntrie] = useState();
    const [choosedArtSortie, setChoosedArtSortie] = useState();

    const [qteEntree, setQteEntree] = useState();
    const [qteSortie, setQteSortie] = useState();

    const [libelleEntr, setLibelleEntr] = useState();
    const [libelleSortie, setLibelleSortie] = useState();

    const [inLoading, setInLoading] = useState(false);

    return (
        <div className='mt-3 grid grid-cols-5 gap-5'>
            <div className='h-full shadow-lg col-span-3'>
                <Articles />
            </div>
            <div className='h-full shadow-lg col-span-2 p-2'>
                <div className='shadow mb-2'>
                    <AddArticle />
                </div>
                <div className='grid grid-cols-2 gap-3'>
                    <div className='shadow p-2'>
                        <div>
                            <h1 className='font-bold text-xl text-slate-700 text-center p-1 border-b bg-gray-100'>Entrée</h1>
                        </div>
                        <select
                            value={choosedArtEntrie}
                            onChange={(e) => handleChange(e, setChoosedArtEntrie)}
                            className="w-full text-gray-700 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 mt-[5px] px-4 block"
                        >
                            <option value="" disabled hidden selected>Choisir article</option>
                            {articlesList?.data?.map((option) =>
                                <option
                                    key={option.id}
                                    value={`${option.id}`}
                                    className='capitalize'
                                >
                                    {option.designation}
                                </option>
                            )}
                        </select>
                        <Input
                            placeholder='Quantité'
                            onChange={(e) => handleChange(e, setQteEntree)}
                            type='number'
                        />
                        <Input
                            placeholder='Libellé'
                            onChange={(e) => handleChange(e, setLibelleEntr)}
                        />
                        <Button
                            label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                            style='flex justify-center rounded-none bg-sky-500 hover:shadow-xl text-white p-2 my-2 w-full'
                            onClick={() => {
                                handlePost(
                                    localUserData.token,
                                    { Authorization: `Bearer ${localUserData.token}`, 'Content-Type': 'application/json' },
                                    JSON.stringify({ typeOp: 'entree', libelle: libelleEntr, quantite: qteEntree, dateOp: new Date().toISOString().slice(0, 10), articleId: choosedArtEntrie }),
                                    `${INVENTAIRE_BASE_URL}/operation/new`,
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


                    <div className='shadow p-2'>
                        <div>
                            <h1 className='font-bold text-xl text-slate-700 text-center p-1 border-b bg-gray-100'>Sortie</h1>
                        </div>
                        <select
                            value={choosedArtSortie}
                            onChange={(e) => handleChange(e, setChoosedArtSortie)}
                            className="w-full text-gray-700 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 mt-[5px] px-4 block"
                        >
                            <option value="" disabled hidden selected>Choisir article</option>
                            {articlesList?.data?.map((option) =>
                                <option
                                    key={option.id}
                                    value={`${option.id}`}
                                    className='capitalize'
                                >
                                    {option.designation}
                                </option>
                            )}
                        </select>
                        <Input
                            placeholder='Quantité'
                            onChange={(e) => handleChange(e, setQteSortie)}
                            type='number'
                        />
                        <Input
                            placeholder='Motif'
                            onChange={(e) => handleChange(e, setLibelleSortie)}
                        />
                        <Button
                            label={inLoading ? <ClickLoad text='Traitement' /> : 'Enregistrer'}
                            style='flex justify-center rounded-none bg-sky-500 hover:shadow-xl text-white p-2 my-2 w-full'
                            onClick={() => {
                                handlePost(
                                    localUserData.token,
                                    { Authorization: `Bearer ${localUserData.token}`, 'Content-Type': 'application/json' },
                                    JSON.stringify({ typeOp: 'sortie', libelle: libelleSortie, quantite: qteSortie, dateOp: new Date().toISOString().slice(0, 10), articleId: choosedArtSortie }),
                                    `${INVENTAIRE_BASE_URL}/operation/new`,
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
        </div>
    );
}

export default Operations;