import { BiDotsVerticalRounded } from "react-icons/bi";
import AgentsInfosTable from './AgentsInfosTable';

const AgentsTableRow = ({ imageUrl, nom, matricule, titre, permanence, statut }) => {
    return (
        <tr>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <AgentsInfosTable
                    imageUrl={imageUrl}
                    nom={nom}
                    matricule={matricule}
                />
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{titre}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <p className="text-gray-900 whitespace-no-wrap">{permanence}</p>
            </td>
            <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                <span
                    className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                >
                    <span
                        aria-hidden
                        className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                    ></span>
                    <span className="relative">{statut}</span>
                </span>
            </td>
            <td
                className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
            >
                <button
                    type="button"
                    className="inline-block text-gray-500 hover:text-gray-700"
                >
                    <BiDotsVerticalRounded className="text-2xl" />
                </button>
            </td>
        </tr>
    );
}

export default AgentsTableRow;