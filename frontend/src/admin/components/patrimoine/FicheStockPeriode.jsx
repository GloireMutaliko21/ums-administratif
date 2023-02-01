import React, { useEffect, useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

// import FicheStock from '../docs/FicheStock';
import { useStateContext } from '../../../context/ContextProvider';
import { handleGet } from '../../../api/get';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import Entete from '../docs/Entete';
import { handleChange } from '../../../utils/onChange';
import Input from '../../../components/Input';

const FicheStockPeriode = () => {

    const ficheRef = useRef();
    const { localUserData } = useStateContext();

    const [choosedArtEntrie, setChoosedArtEntrie] = useState();
    const [debut, setDebut] = useState(new Date().toISOString().slice(0, 10));
    const [fin, setFin] = useState(new Date().toISOString().slice(0, 10));
    const [ficheProd, setFicheProd] = useState();
    const [articlesList, setArticlesList] = useState();

    useEffect(() => {
        setFicheProd({})
        handleGet(
            localUserData?.token,
            `${INVENTAIRE_BASE_URL}/operation/prodperiode/${choosedArtEntrie}?debut=${debut}&fin=${fin}`,
            setFicheProd,
            null
        );
    }, [choosedArtEntrie, debut, fin]);
    useEffect(() => {
        handleGet(localUserData?.token, `${INVENTAIRE_BASE_URL}/article/all`, setArticlesList, null);
    }, []);


    const dataEntree = ficheProd?.data?.find(fiche => fiche.typeOp === 'entree');

    const dataSortie = ficheProd?.data?.find(fiche => fiche.typeOp === 'sortie');

    return (
        <div className='mt-10'>
            <div className='mb-5 text-lg font-semibold text-slate-600'>
                Choisissez un produit et un intervall de date
            </div>
            <div className='flex gap-10 items-start text-slate-400'>
                <div>
                    <label for="" className='font-bold text-sm'>Article</label>
                    <select
                        value={choosedArtEntrie}
                        onChange={(e) => handleChange(e, setChoosedArtEntrie)}
                        className="text-gray-700 bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded py-3 px-4 block mt-2"
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
                </div>
                <Input
                    label='Début'
                    type='date'
                />
                <Input
                    label='Fin'
                    type='date'
                />
            </div>
            {choosedArtEntrie && <div ref={ficheRef}>
                <Entete />
                <h1 className='mb-5 text-center font-semibold text-slate-700'> Fiches des stocks</h1>
                <div>

                    <div className='flex'>
                        <table className="text-sm text-gray-700 overflow-scroll border border-slate-400 w-full">
                            <thead className="bg-slate-100 text-gray-800 text-xs uppercase font-medium">
                                <tr>
                                    <th colSpan={5} className='font-bold text-center border-b py-2'>Entrees</th>
                                </tr>
                                <tr>
                                    <th>N°</th>
                                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                        Désignation
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center tracking-wider">
                                        libelle
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                        qté
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100">
                                {dataEntree?.data && JSON.parse(dataEntree?.data).map((data, index) => {
                                    const formattedData = data;
                                    return <tr className="bg-slate-500 even:bg-slate-50 bg-opacity-20" key={formattedData.designation}>
                                        <td className="pl-1">
                                            {index + 1}
                                        </td>
                                        <td className="pl-4">
                                            {formattedData.date}
                                        </td>
                                        <td className="flex px-6 py-4 whitespace-nowrap capitalize">
                                            {formattedData.designation}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {formattedData.libelle}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {formattedData.quantite}
                                        </td>
                                    </tr>
                                }
                                )}
                            </tbody>
                        </table>
                        <table className="text-sm text-gray-700 overflow-scroll border border-slate-400 w-full">
                            <thead className="bg-slate-100 text-gray-800 text-xs uppercase font-medium">
                                <tr>
                                    <th colSpan={5} className='font-bold text-center border-b py-2'>Sorties</th>
                                </tr>
                                <tr>
                                    <th>N°</th>
                                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                        Date
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                        Désignation
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-center tracking-wider">
                                        libelle
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                        qté
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-gray-100">
                                {dataSortie?.data && JSON.parse(dataSortie?.data).map((data, index) => {
                                    const formattedData = data;
                                    return <tr className="bg-slate-500 even:bg-slate-50 bg-opacity-20" key={formattedData.designation}>
                                        <td className="pl-1">
                                            {index + 1}
                                        </td>
                                        <td className="pl-4">
                                            {formattedData.date}
                                        </td>
                                        <td className="flex px-6 py-4 whitespace-nowrap capitalize">
                                            {formattedData.designation}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-center">
                                            {formattedData.libelle}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {formattedData.quantite}
                                        </td>
                                    </tr>
                                }
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* <table className="min-w-full text-sm text-slate-800">
                        <thead className="bg-slate-100 text-gray-800 text-xs uppercase font-medium">
                            <tr>
                                <th colSpan={5} className='font-bold text-center border-b py-2'>Stocks</th>
                            </tr>
                            <tr>
                                <th></th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Désignation
                                </th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Qté
                                </th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Unité
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100">
                            {articlesList?.data?.map(({ designation, quantite, unite, id }, index) =>
                                <tr className="bg-slate-500 even:bg-slate-100 bg-opacity-20" key={index}>
                                    <td className="pl-4">
                                        {index + 1}
                                    </td>
                                    <td className="flex px-6 py-4 whitespace-nowrap capitalize">
                                        {designation}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {quantite}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {unite.libelle}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table> */}
                </div>

            </div>}
            <div className='mt-5 pb-10'>
                <ReactToPrint
                    trigger={() => <button className='p-1 border-[0.2px] border-sky-500 text-sm text-sky-500 hover:text-red-600'>Imprimer</button>}
                    content={() => ficheRef.current}
                    pageStyle="@page {size: landscape}"
                />
            </div>
        </div>
    );
}

export default FicheStockPeriode;