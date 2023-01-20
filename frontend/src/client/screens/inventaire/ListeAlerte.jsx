import React from 'react';

const ListeAlerte = ({ data }) => {
    console.log(data)
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
                                                Designation
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                                Disponible
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-left tracking-wider">
                                                Unites
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-800">
                                        {data?.map(({ designation, quantite, unite }, index) =>
                                            <tr className="bg-black bg-opacity-20" key={designation}>
                                                <td className="pl-4">
                                                    {index + 1}
                                                </td>
                                                <td className="flex px-6 py-4 whitespace-nowrap">
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
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div></div>
    );
}

export default ListeAlerte;