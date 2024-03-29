import React, { useEffect, useRef, useState } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import CardDashBoard from './cardDashBoard';
import ListeAlerte from '../../screens/inventaire/ListeAlerte';
import Popup from '../../../components/Popup';
import ListeProduitsGroup from '../../screens/inventaire/ListeProduitsGroup';
import FicheEntree from '../../screens/inventaire/FicheEntree';

const Cards = () => {
    const { localUserData, unStocked, setUnStocked, totArticles, setTotArticles,
        ficheToday, setFicheToday, showPopup
    } = useStateContext();
    const [isFetch, setIsFetch] = useState(true);

    const ficheRef = useRef();

    useEffect(() => {
        if (isFetch) {
            handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/article/unavailable`, setUnStocked, null);
            handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/article/all`, setTotArticles, null);
            handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/operation/fiche/today`, setFicheToday, null);
        }
        return () => {
            setIsFetch(false);
        }
    }, [unStocked, totArticles, ficheToday]);

    const ficheEntree = ficheToday?.data.find(fiche => fiche.typeOp === 'entree');
    const ficheSortie = ficheToday?.data.find(fiche => fiche.typeOp === 'sortie');

    const parsedData = ficheToday?.data[0] && JSON.parse(ficheToday?.data[0]?.data)?.map(data => JSON.parse(data));
    const parsedData1 = ficheToday?.data[1] && JSON.parse(ficheToday?.data[1]?.data)?.map(data => JSON.parse(data));

    console.log(parsedData);

    return (
        <div className='flex flex-wrap justify-around w-full gap-4'>
            <CardDashBoard data={unStocked?.data} path='alerte' donne={unStocked?.data?.length > 0 ? unStocked?.data?.length : 0} libelle='Articles en alerte' link='Détails' color='red-600' borderColor='border-red-300' />
            <CardDashBoard path='entree' donne={ficheToday?.data?.length > 0 ? ficheToday?.data?.length > 1 ? parsedData?.length : ficheToday?.data[0]?.typeOp === 'entree' ? parsedData?.length : 0 : 0} libelle='Entrées journalières' color='green-600' borderColor='border-green-300' link='Fiche' />
            <CardDashBoard path='sortie' donne={ficheToday?.data?.length > 0 ? ficheToday?.data?.length > 1 ? parsedData1?.length : ficheToday?.data[0]?.typeOp === 'sortie' ? parsedData1?.length : 0 : 0} libelle='Sorties journalières' color='blue-600' borderColor='border-blue-300' link='Fiche' />
            <CardDashBoard path='articles' donne={totArticles?.data?.length > 0 ? totArticles?.data?.length : 0} libelle='Total articles' link='Tout' color='teal-600' borderColor='border-teal-300' />
            {
                (showPopup === 'alerte' || showPopup === 'entree' || showPopup === 'sortie' || showPopup === 'articles') &&
                <div>
                    <Popup
                        children={
                            showPopup === 'alerte' ?
                                <ListeAlerte data={unStocked?.data} /> :
                                showPopup === 'articles' ?
                                    <ListeProduitsGroup /> :
                                    showPopup === 'entree' ?
                                        <FicheEntree data={ficheEntree} ref={ficheRef} /> :
                                        <FicheEntree data={ficheSortie} ref={ficheRef} />
                        }
                    />
                </div>
            }
        </div>
    );
}

export default Cards;