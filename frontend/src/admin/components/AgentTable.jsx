import { agentTableHeader } from "../data/componentsData";
import AgentsTableRow from "./agents/AgentsTableRow";

const AgentTable = ({ data }) => {
    return (
        <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
                <div>
                    <h2 className="text-2xl font-semibold leading-tight">Invoices</h2>
                </div>
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                        className="inline-block min-w-full shadow-md rounded-lg overflow-hidden"
                    >
                        <table className="min-w-full leading-normal">
                            <thead>
                                <tr>
                                    {
                                        agentTableHeader.map((label) =>
                                            <th
                                                key={label}
                                                className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                                            >
                                                {label}
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data?.length > 0 ?
                                        data?.map(({ matricule, nom, postnom, prenom, statut, grade, permanence, imageUrl }) =>
                                            <AgentsTableRow
                                                key={matricule}
                                                imageUrl={imageUrl}
                                                nom={`${nom} ${postnom} ${prenom}`}
                                                matricule={matricule}
                                                titre={grade.titre}
                                                statut={statut}
                                                permanence={permanence}
                                            />
                                        ) :
                                        <tr className='text-center text-slate-400 p-4'>
                                            <td>Aucun agent trouvé</td>
                                        </tr>

                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentTable