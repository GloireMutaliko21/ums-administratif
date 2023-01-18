import React from 'react';
import Button from '../../../components/Button';

const CassocItem = ({ data, setShowCommands, showCommands, selected, setSelected, user }) => {
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
                                    {user.privilege === 'direction' &&
                                        <th
                                            className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                        >
                                            Status
                                        </th>
                                    }
                                    <th
                                        className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"
                                    ></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map(({ description, datefin, status, updatedAt, agent, id }, idx) =>
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
                                        {user.privilege === 'direction' &&
                                            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                                <p className={`whitespace-nowrap ${status === 'nonPublished' ? 'text-red-700 bg-red-100 border-red-200' : 'text-green-700 bg-green-100 border-green-300'} rounded-full text-center py-px border-[0.1px]`}>{status === 'nonPublished' ? 'Non publié' : 'Publié'}</p>
                                            </td>
                                        }
                                        <td
                                            className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right relative"
                                        >
                                            <button
                                                type="button"
                                                className="inline-block text-sky-500 hover:text-amber-500"
                                                onClick={() => {
                                                    setShowCommands(state => !state)
                                                    setSelected(idx)
                                                }}
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
                                            {showCommands && selected === idx &&
                                                <div className='absolute right-10 top-3 shadow p-2 h-min flex items-center justify-center rounded-md border border-sky-300 bg-white'>
                                                    {/* {children} */}
                                                    <div className="text-xs flex flex-col items-center">
                                                        {agent.id === user.id ?
                                                            <Button
                                                                label='Modifier'
                                                                style='text-green-600 font-semibold hover:underline hover:text-green-500'
                                                            /> :
                                                            <Button
                                                                label='Souscrire'
                                                                style='text-teal-600 font-bold hover:underline hover:text-teal-500'
                                                            />
                                                        }
                                                        {
                                                            status === 'nonPublished' &&
                                                            <Button
                                                                label='Publier'
                                                                style='text-amber-600 font-bold hover:underline hover:text-amber-500'
                                                            />
                                                        }
                                                    </div>
                                                </div>
                                            }
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