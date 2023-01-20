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

    useEffect(() => {
        if (isFetch) {
            handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/article/unavailable`, setUnStocked, null);
            handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/article/all`, setTotArticles, null);
        }
        return () => {
            setIsFetch(false);
        }
    }, [unStocked, totArticles]);


    return (
        <div className='flex flex-wrap justify-around w-full gap-4'>
            <CardDashBoard donne={unStocked?.data?.length > 0 ? unStocked?.data?.length : 0} libelle='Articles en alerte' link='Détails' />
            <CardDashBoard donne={unStocked?.data?.length} libelle='Articles en alerte' />
            <CardDashBoard donne={unStocked?.data?.length} libelle='Articles en alerte' />
            <CardDashBoard donne={totArticles?.data?.length > 0 ? totArticles?.data?.length : 0} libelle='Total articles' />
        </div>
    );
}

export default Cards;