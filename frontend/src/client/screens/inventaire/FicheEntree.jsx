import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print';

const FicheEntree = React.forwardRef((props, ref) => {

    const ficheRef = useRef();
    return (
        <div ref={ref}>
            <div ref={ficheRef}>
                <h1 className='mb-5 text-center font-semibold text-slate-700'> Fiches des <span className='capitalize'>{props.data?.typeOp} </span>/{new Date().toISOString().slice(0, 10)}</h1>
                {
                    <table className="min-w-full text-sm text-gray-400">
                        <thead className="bg-gray-800 text-xs uppercase font-medium">
                            <tr>
                                <th></th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    Désignation
                                </th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    libelle
                                </th>
                                <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                    qté
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-800">
                            {JSON.parse(props.data?.data).map((data, index) => {
                                const formattedData = JSON.parse(data);
                                return <tr className="bg-slate-500 even:bg-slate-800 bg-opacity-20" key={index}>
                                    <td className="pl-4">
                                        {index + 1}
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
                }
            </div>
            <div className='mt-5'>
                <ReactToPrint
                    trigger={() => <button className='p-1 border-[0.2px] border-sky-500 text-sm text-sky-500 hover:text-red-600'>Imprimer</button>}
                    content={() => ficheRef.current}
                    pageStyle="@page {size: a4}"
                />
            </div>
        </div>
    );
})

export default FicheEntree;