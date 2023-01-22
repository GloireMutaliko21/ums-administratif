import React, { forwardRef, useRef } from 'react'
import ReactToPrint from 'react-to-print';

const FicheStock = forwardRef((props, ref) => {
    const ficheRef = useRef();

    return (
        <div>

            <div ref={ficheRef}>
                <h1 className='mb-5 text-center font-semibold text-slate-700'> Fiches des stocks/{props.periode}</h1>
                <div className='flex'>
                    <table className="text-sm text-gray-700 overflow-scroll border border-black">
                        <thead className="bg-gray-800 text-white text-xs uppercase font-medium">
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
                            {props.dataEntree?.data.map(({ date, designation, quantite, libelle }, index) =>
                                <tr className="bg-slate-500 even:bg-slate-50 bg-opacity-20" key={designation}>
                                    <td className="pl-1">
                                        {index + 1}
                                    </td>
                                    <td className="pl-4">
                                        {date}
                                    </td>
                                    <td className="flex px-6 py-4 whitespace-nowrap capitalize">
                                        {designation}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {libelle}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {quantite}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                    <table className="text-sm text-gray-700 overflow-scroll border border-black">
                        <thead className="bg-gray-800 text-white text-xs uppercase font-medium">
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
                            {props.dataSortie?.data.map(({ date, designation, quantite, libelle }, index) =>
                                <tr className="bg-slate-500 even:bg-slate-50 bg-opacity-20" key={designation}>
                                    <td className="pl-1">
                                        {index + 1}
                                    </td>
                                    <td className="pl-4">
                                        {date}
                                    </td>
                                    <td className="flex px-6 py-4 whitespace-nowrap capitalize">
                                        {designation}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-center">
                                        {libelle}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        {quantite}
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            </div>
            <div className='mt-5'>
                <ReactToPrint
                    trigger={() => <button className='p-1 border-[0.2px] border-sky-500 text-sm text-sky-500 hover:text-red-600'>Imprimer</button>}
                    content={() => ficheRef.current}
                    pageStyle="@page {size: landscape}"
                />
            </div>
        </div>
    );
});

export default FicheStock;