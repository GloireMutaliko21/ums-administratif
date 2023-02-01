import React, { useEffect, useState } from 'react';

import FicheStock from '../docs/FicheStock';
import { useStateContext } from '../../../context/ContextProvider';
import { handleGet } from '../../../api/get';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';

const FicheStockPeriode = () => {
    const { localUserData } = useStateContext();

    const [ficheProd, setFicheProd] = useState();
    const [articlesList, setArticlesList] = useState();

    useEffect(() => {
        handleGet(
            localUserData?.token,
            `${INVENTAIRE_BASE_URL}/operation/prodperiode/f0429ce0-c17a-4e8a-8f29-2b2712ec2927?debut=2023-01-01&fin=2023-01-31`,
            setFicheProd,
            null
        );
        handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/article/all`, setArticlesList, null);
    }, []);

    const dataEntree = ficheProd?.data?.find(fiche => fiche.typeOp === 'entree');

    const dataSortie = ficheProd?.data?.find(fiche => fiche.typeOp === 'sortie');

    return (
        <div>
            <FicheStock
                periode={''}
                dataEntree={dataEntree}
                dataSortie={dataSortie}
                dataStock={articlesList?.data}
            />
        </div>
    );
}

export default FicheStockPeriode;