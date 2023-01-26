import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';
import BonCommande from '../../../admin/components/docs/BonCommande';

import { handlePost } from '../../../api/post';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { useStateContext } from '../../../context/ContextProvider';
import { INVENTAIRE_BASE_URL } from '../../../utils/constants';
import { handleChange } from '../../../utils/onChange';

const ListeAlerte = ({ data }) => {
    const { localUserData } = useStateContext();

    const [ordered, setOrdered] = useState();
    const [quantity, setQuantity] = useState();
    const [newCommande, setNewCommande] = useState();

    const bonRef = useRef();

    const commande = JSON.parse(localStorage.getItem('newCommande'));


    console.log(newCommande)

    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-white py-10 overflow-y-scroll overflow-x-clip">

                <h1 className="text-lg text-slate-600 font-medium">Articles en rupture de stock</h1>
                <div className="flex flex-col mt-6">
                    <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                            <div className="shadow overflow-hidden sm:rounded-lg">
                                <table className="min-w-full text-sm text-gray-400">
                                    <thead className="bg-gray-800 text-xs uppercase font-medium">
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
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800">
                                        {data?.map(({ designation, quantite, unite, id }, index) =>
                                            <tr className="bg-slate-500 even:bg-slate-800 bg-opacity-20" key={designation}>
                                                <td className="pl-4">
                                                    {index + 1}
                                                </td>
                                                <td className="flex px-6 py-4 whitespace-nowrap capitalize">
                                                    {designation}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-center">
                                                    {quantite}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {unite.libelle}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    {index !== ordered && <p className='cursor-pointer text-red-300 hover:text-slate-200 border px-2 border-red-100/25 flex justify-center'
                                                        onClick={() => setOrdered(index)}
                                                    >Commander</p>}
                                                    {
                                                        index === ordered &&
                                                        <div className={`flex flex-col fixed top-0 bottom-0 right-0 left-0 bg-black/40 justify-center items-center z-20`}>
                                                            <div className='static pointer-events-none bg-transparent'>
                                                                <div className='pointer-events-auto mt-10 rounded-lg bg-white shadow-md shadow-slate-600 text-slate-400 p-5'>

                                                                    <Input
                                                                        style='py-1'
                                                                        placeholder='Quantité'
                                                                        onChange={(e) => handleChange(e, setQuantity)}
                                                                        type='number'
                                                                    />
                                                                    <div className='flex gap-3'>
                                                                        <Button
                                                                            onClick={() => setOrdered()}
                                                                            label='Annuler'
                                                                            style='text-red-500 border p-1 px-6 rounded-none flex justify-center hover:shadow-2xl hover:shadow-white'
                                                                        />
                                                                        <Button
                                                                            onClick={() => {
                                                                                handlePost(
                                                                                    localUserData?.token,
                                                                                    {
                                                                                        'Content-Type': 'application/json',
                                                                                        'Authorization': `Bearer ${localUserData?.token}`
                                                                                    },
                                                                                    JSON.stringify({ quantite: quantity, articleId: id }),
                                                                                    `${INVENTAIRE_BASE_URL}/commande/new`, setNewCommande, 'newCommande', () => { }, () => { }, '', () => { }, () => { }
                                                                                )
                                                                            }}
                                                                            label='Envoyer'
                                                                            style='border bg-sky-500 text-white p-1 px-6 rounded-none flex justify-center hover:shadow-2xl hover:shadow-white'
                                                                        />
                                                                        {
                                                                            <div>
                                                                                <div>
                                                                                    <ReactToPrint
                                                                                        trigger={() => <button className='p-1 border-[0.2px] border-sky-500 text-sm text-sky-500 hover:text-red-600'>Imprimer</button>}
                                                                                        content={() => bonRef.current}
                                                                                        pageStyle="@page {size: 2.5in 4in}"
                                                                                        onAfterPrint={() => {
                                                                                            localStorage.removeItem('newCommande');
                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                                <div className='hidden'>
                                                                                    <BonCommande
                                                                                        ref={bonRef}
                                                                                        article={designation}
                                                                                        quantite={commande?.data?.quantite}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>}
                                                </td>

                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    );
}

export default ListeAlerte;