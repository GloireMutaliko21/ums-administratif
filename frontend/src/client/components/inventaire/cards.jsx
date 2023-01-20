import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import CardDashBoard from './cardDashBoard';

const Cards = () => {
    const { localUserData } = useStateContext();
    const [isFetch, setIsFetch] = useState(true);
    const [unStocked, setUnStocked] = useState();
    const [totArticles, setTotArticles] = useState();
    const [ficheToday, setFicheToday] = useState();

    useEffect(() => {
        if (isFetch) {
            handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/article/unavailable`, setUnStocked, null);
            handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/article/all`, setTotArticles, null);
            handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/operation/fiche/today`, setFicheToday, null);
        }
        return () => {
            setIsFetch(false);
        }
    }, [unStocked, totArticles, ficheToday]);


    return (
        <div className='flex flex-wrap justify-around w-full gap-4'>
            <CardDashBoard donne={unStocked?.data?.length > 0 ? unStocked?.data?.length : 0} libelle='Articles en alerte' link='Détails' color='red-600' borderColor='border-red-300' />
            <CardDashBoard donne={ficheToday?.data?.length > 0 ? ficheToday?.data?.length > 1 ? ficheToday?.data[0]?.data?.length : ficheToday?.data[0]?.typeOp === 'entree' ? ficheToday?.data[0]?.data?.length : 0 : 0} libelle='Entrées journalières' color='green-600' borderColor='border-green-300' link='Fiche' />
            <CardDashBoard donne={ficheToday?.data?.length > 0 ? ficheToday?.data?.length > 1 ? ficheToday?.data[1]?.data?.length : ficheToday?.data[0]?.typeOp === 'sortie' ? ficheToday?.data[1]?.data?.length : 0 : 0} libelle='Sorties journalières' color='blue-600' borderColor='border-blue-300' link='Fiche' />
            <CardDashBoard donne={totArticles?.data?.length > 0 ? totArticles?.data?.length : 0} libelle='Total articles' link='Tout' color='teal-600' borderColor='border-teal-300' />
        </div>
    );
}

export default Cards;