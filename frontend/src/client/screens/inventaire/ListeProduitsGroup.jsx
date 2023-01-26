import React, { useEffect, useState } from 'react';

import { handleGet } from '../../../api/get';
import { useStateContext } from '../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';

const ListeProduitsGroup = () => {
    const { localUserData } = useStateContext();

    const [isFetch, setIsFetch] = useState(true);
    const [articles, setArticles] = useState();

    useEffect(() => {
        if (isFetch) {
            handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/article/all/categ`, setArticles, null);
        }
        return () => {
            setIsFetch(false);
        }
    }, [articles]);

    return (
        <div className='w-96'>
            <h1 className='text-center mb-2 font-bold text-slate-700'>Liste de produits</h1>
            <table className="table-auto w-full">
                <thead>
                    <tr className="text-left font-medium bg-slate-700">
                        <th className="border border-slate-400 px-4 py-2">Categorie</th>
                        <th className="border border-slate-400 px-4 py-2">Articles</th>
                    </tr>
                </thead>
                <tbody className='text-slate-500'>
                    {articles?.data.map((data) => (
                        <tr key={data.categorie} className="text-left capitalize">
                            <td className="border px-4 py-2">{data.categorie}</td>
                            <td className="border px-4 py-2">
                                <ul>
                                    {data.articles.map((article) => (
                                        <li key={article}>{article}</li>
                                    ))}
                                </ul>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ListeProduitsGroup;