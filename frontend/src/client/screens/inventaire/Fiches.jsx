import React, { useEffect, useState } from 'react';
import FicheStock from '../../../admin/components/docs/FicheStock';

import { handleGet } from '../../../api/get';
import Button from '../../../components/Button';
import { useStateContext } from '../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import DashboardInvent from './Dashboard';

const Fiches = () => {
    const { localUserData, showPopup, setShowPopup } = useStateContext();

    const [ficheSemaine, setFicheSemaine] = useState();
    const [ficheMois, setFicheMois] = useState();
    const [ficheToday, setFicheToday] = useState();
    const [articlesList, setArticlesList] = useState();

    useEffect(() => {
        handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/operation/fiche/today`, setFicheToday, null);
        handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/operation/fiche/week`, setFicheSemaine, null);
        handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/operation/fiche/month`, setFicheMois, null);
        handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/article/all`, setArticlesList, null);
    }, []);

    const date = new Date().toISOString()
    const periode = showPopup === 'ficheDay' ?
        date.slice(0, 10) :
        showPopup === 'ficheSemaine' ?
            `semaine` : date.slice(0, 7);

    const dataEntree = showPopup === 'ficheDay' ?
        ficheToday?.data.find(fiche => fiche.typeOp === 'entree') :
        showPopup === 'ficheSemaine' ?
            ficheSemaine?.data.find(fiche => fiche.typeOp === 'entree') : ficheMois?.data.find(fiche => fiche.typeOp === 'entree');

    const dataSortie = showPopup === 'ficheDay' ?
        ficheToday?.data.find(fiche => fiche.typeOp === 'sortie') :
        showPopup === 'ficheSemaine' ?
            ficheSemaine?.data.find(fiche => fiche.typeOp === 'sortie') : ficheMois?.data.find(fiche => fiche.typeOp === 'sortie');

    return (
        <div className='p-2'>
            <div>
                <h1 className='font-bold text-xl text-slate-700 text-center p-1 border-b bg-gray-100'>Fiches des stocks</h1>
            </div>
            <div>
                <div className='mt-5 relative'>
                    <div className='flex flex-wrap mb-5 gap-3'>
                        <Button label='Fiche stock aujourdui'
                            style='border border-sky-200 rounded-none text-sky-600 hover:shadow-xl p-2'
                            onClick={() => setShowPopup('ficheDay')}
                        />
                        <Button label='Fiche stock semaine'
                            style='border border-sky-200 rounded-none text-sky-600 hover:shadow-xl p-2'
                            onClick={() => setShowPopup('ficheSemaine')}
                        />
                        <Button label='Fiche stock mois'
                            style='border border-sky-200 rounded-none text-sky-600 hover:shadow-xl p-2'
                            onClick={() => setShowPopup('ficheMois')}
                        />
                        <Button label='Stocks articles'
                            style='border border-sky-200 rounded-none text-sky-600 hover:shadow-xl p-2'
                            onClick={() => setShowPopup('stocks')}
                        />
                    </div>
                    {
                        (showPopup === 'ficheDay' || showPopup === 'ficheSemaine' || showPopup === 'ficheMois' || showPopup === 'stocks') &&
                        <div onClick={() => setShowPopup(false)} className='fixed top-0 bottom-0 right-0 left-0 bg-black/40 flex justify-center items-center z-20 overflow-scroll'>
                            <div className='pointer-events-none bg-transparent' onClick={(e) => e.stopPropagation()}>
                                <div className={`pointer-events-auto bg-white shadow-md shadow-slate-600 p-5`}>

                                    <FicheStock
                                        periode={periode}
                                        dataEntree={dataEntree}
                                        dataSortie={dataSortie}
                                        dataStock={articlesList?.data}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Fiches;