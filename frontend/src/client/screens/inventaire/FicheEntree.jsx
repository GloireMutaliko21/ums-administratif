import React from 'react'

const FicheEntree = ({ data }) => {
    return (
        <div>
            <h1> fiches des {data.typeOp}</h1>
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
                        {data?.data.map(({ designation, quantite, libelle }, index) =>
                            <tr className="bg-slate-500 even:bg-slate-800 bg-opacity-20" key={designation}>
                                <td className="pl-4">
                                    {index + 1}
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
            }</div>
    );
}

export default FicheEntree;