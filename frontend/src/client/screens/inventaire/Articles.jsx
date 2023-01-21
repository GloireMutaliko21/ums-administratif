import React, { useEffect } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';

const Articles = () => {
    const { localUserData, articlesList, setArticlesList, fetchArticles, setFetchArticles } = useStateContext();

    useEffect(() => {
        if (fetchArticles) {
            handleGet(localUserData.token, `${INVENTAIRE_BASE_URL}/article/all`, setArticlesList, null);
        }
        return () => {
            setFetchArticles(false);
        }
    }, [articlesList]);

    console.log(articlesList);

    return (
        <div className='p-2'>
            <div>
                <h1 className='font-bold text-3xl text-slate-700 text-center p-1 border-b bg-gray-100'>Liste des articles</h1>
            </div>
        </div>
    );
}

export default Articles;