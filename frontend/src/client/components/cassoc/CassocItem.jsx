import React from 'react';

const CassocItem = ({ data }) => {
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Concerné
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Description
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                    >
                                        Date (fin)
                                    </th>
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map(({ description, datefin, updatedAt, status, agent, id }) =>
                                    <tr key={id}>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <div className="flex">
                                                <div className="flex-shrink-0 w-10 h-10">
                                                    <img
                                                        className="w-full h-full rounded-full"
                                                        src={agent.imageUrl}
                                                        alt={agent.nom}
                                                    />
                                                </div>
                                                <div className="ml-3">
                                                    <p className="text-gray-900 whitespace-nowrap">
                                                        {agent.nom} {agent.postnom} {agent.prenom}
                                                    </p>
                                                    <p className="text-gray-600 whitespace-nowrap">{agent.matricule}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-nowrap">{description}</p>
                                        </td>
                                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                            <p className="text-gray-900 whitespace-nowrap">{datefin}</p>
                                            <p className="text-gray-600 whitespace-nowrap">Mis à jour : {new Date(updatedAt).toISOString().slice(0, 10)}</p>
                                        </td>
                                        <td
                                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
                                        >
                                            <button
                                                type="button"
                                                className="inline-block text-gray-500 hover:text-gray-700"
                                            >
                                                <svg
                                                    className="inline-block h-6 w-6 fill-current"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z"
                                                    />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CassocItem;