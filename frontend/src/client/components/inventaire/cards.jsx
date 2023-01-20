import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import CardDashBoard from './cardDashBoard';

const Cards = () => {
    const { localUserData } = useStateContext();
    const [isFetch, setIsFetch] = useState(true);
    const [unStocked, setUnStocked] = useState();

    useEffect(() => {
        if (isFetch) {
            handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/article/unavailable`, setUnStocked, null);
        }
        return () => {
            setIsFetch(false);
        }
    }, [unStocked]);


    return (
        <div className='flex justify-around w-full gap-4'>
            <CardDashBoard donne={unStocked?.data?.length} libelle='Articles en alerte' link='Détails' />
            <CardDashBoard donne={unStocked?.data?.length} libelle='Articles en alerte' />
            <CardDashBoard donne={unStocked?.data?.length} libelle='Articles en alerte' />
            <CardDashBoard donne={unStocked?.data?.length} libelle='Articles en alerte' />
        </div>
    );
}

export default Cards;